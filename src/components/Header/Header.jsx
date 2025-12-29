import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import AuthContext from '../../context/AuthContext';
import './Header.css';
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Restored searchTerm state
  const headerRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error("Failed to load categories:", error));

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
    setIsMenuOpen(false);
  };

  const handleAccountClick = () => {
    navigate(user ? '/profile' : '/login');
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-top">
        <div className="header-top-left">
          <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            &#9776;
          </button>
          <div className="header-logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <img src="/images/logo.png" alt="Website logo" />
          </div>
        </div>
        
        <div className="header-search-desktop">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        
        <div className="header-actions">
          <div className="account" onClick={handleAccountClick} style={{cursor: 'pointer'}}>
            {user && user.profilePicture ? (
              <img src={user.profilePicture} alt="Profile" className="profile-picture" />
            ) : (
              <span className="icon">&#128100;</span>
            )}
            <span className="text">My Account</span>
          </div>
          <div className="cart" onClick={() => navigate('/panier')} style={{ cursor: 'pointer' }}>
            <span className="icon">&#128722;</span>
            <span className="text">My Cart</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="header-search-mobile">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <nav className={`categories-navbar ${isMenuOpen ? 'open' : ''}`}>
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)} className="category-nav-link">
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;