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

// --- App Setup ---
const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = 'un_super_secret_pour_truemedrx_123';
const MONGODB_URI = "mongodb+srv://topomba237_db_user:1PkiWWuwEJoIPva3@cluster1.u5z2cph.mongodb.net/?appName=Cluster1";
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'; 

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// --- DB Connection ---
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Services Setup (Passport & Nodemailer) ---
passport.use(new GoogleStrategy({
    clientID: "1056162628794-h8g6gect45enldc1jhaufgahli972d75.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback",
    proxy: true // Trust the proxy from Railway/Vercel
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = await User.create({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value, profilePicture: profile.photos[0].value });
        await sendWelcomeEmail(user);
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
    // Welcome email logic here
};

// --- API Routes ---

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const payload = { id: req.user._id, name: req.user.name, email: req.user.email, profilePicture: req.user.profilePicture };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  res.redirect(`${FRONTEND_URL}/auth/callback?token=${token}`);
});

app.get('/api/products', (req, res) => {
  const productsPath = path.resolve(__dirname, '..', 'public', 'products.json');
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) { return res.status(500).json({ message: 'Error loading products.' }); }
    res.json(JSON.parse(data));
  });
});

app.post('/api/register', async (req, res) => {
  // ... (Your existing registration logic)
});

app.post('/api/login', async (req, res) => {
  // ... (Your existing login logic)
});

app.post('/api/forgot-password', async (req, res) => {
    // ... (Your existing forgot password logic)
});

app.post('/api/reset-password', async (req, res) => {
    // ... (Your existing reset password logic)
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
