import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // 🔥 Pass searchTerm in URL
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
      />

      <FaSearch 
        className="search-icon" 
        onClick={handleSearch}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default SearchBar;