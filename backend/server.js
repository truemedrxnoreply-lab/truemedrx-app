const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// --- User Model ---
const UserSchema = new mongoose.Schema({
  googleId: { type: String, sparse: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profilePicture: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
});

const User = mongoose.model('User', UserSchema);

// --- Express App Setup ---
const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = 'your_super_secret_jwt_key';

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// --- Database Connection ---
const MONGODB_URI = "mongodb+srv://topomba237_db_user:1PkiWWuwEJoIPva3@cluster1.u5z2cph.mongodb.net/?appName=Cluster1"; 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Passport & Nodemailer Setup ---
passport.use(new GoogleStrategy({
    clientID: "1056162628794-h8g6gect45enldc1jhaufgahli972d75.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = await User.create({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value, profilePicture: profile.photos[0].value });
      }
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'truemedrx.noreply@gmail.com',
        pass: 'gzng ubjy iyls ezoa'
    }
});

const sendWelcomeEmail = async (user) => {
    const mailOptions = {
        from: 'truemedrx.noreply@gmail.com',
        to: user.email,
        subject: 'Welcome to TrueMedRx!',
        text: `Hello ${user.name},\n\nWelcome to TrueMedRx! We are excited to have you on board.\n\nThank you,\nThe TrueMedRx Team`
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${user.email}`);
    } catch (error) {
        console.error(`Error sending welcome email to ${user.email}:`, error);
    }
};

// --- API Routes ---

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
  const payload = { id: req.user._id, name: req.user.name, email: req.user.email, profilePicture: req.user.profilePicture };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  await sendWelcomeEmail(req.user); // Send welcome email
  res.redirect(`http://localhost:3000/auth/callback?token=${token}`);
});

app.get('/api/products', (req, res) => {
  const productsPath = path.join(__dirname, '..', 'public', 'products.json');
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) { return res.status(500).json({ message: 'Error loading products.' }); }
    res.json(JSON.parse(data));
  });
});

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, profilePicture: '' });
    await newUser.save();
    await sendWelcomeEmail(newUser); // Send welcome email
    res.status(201).json({ message: 'User registered successfully!', user: { id: newUser._id, name: newUser.name, email: newUser.email }});
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration.' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const payload = { id: user._id, name: user.name, email: user.email, profilePicture: user.profilePicture };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful!', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login.' });
  }
});

app.post('/api/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: true });
        }
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetURL = `http://localhost:3000/reset-password/${token}`;
        const mailOptions = {
            from: 'truemedrx.noreply@gmail.com',
            to: user.email,
            subject: 'Password Reset Request',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account...`
        };
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({ message: 'Server error.' });
    }
});

app.post('/api/reset-password', async (req, res) => {
    try {
        const user = await User.findOne({
            resetPasswordToken: req.body.token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        res.json({ success: true, message: 'Password has been reset.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error.' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
