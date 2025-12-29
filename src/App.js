import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import EventLandingPage from "./components/EventLandingPage";
import Panier from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthCallback from "./pages/AuthCallback";
import ProfilePage from "./pages/ProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage"; // Import ForgotPasswordPage
import ResetPasswordPage from "./pages/ResetPasswordPage"; // Import ResetPasswordPage
import Cart from './pages/Cart';
import Products from './components/Header/Products';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main style={{ paddingTop: "120px" }}>
        <Routes>
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/produit" element={<ProductPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Add ForgotPassword Route */}
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} /> {/* Add ResetPassword Route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;