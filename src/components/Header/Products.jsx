import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the backend API
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => setAllProducts(data))
      .catch(error => console.error("Failed to load products from API:", error));
  }, []);

  const urlParams = new URLSearchParams(location.search);
  const searchTerm = urlParams.get("search") || "";

  const filteredProducts =
    searchTerm.trim() !== ""
      ? allProducts.filter(
          (product) =>
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <div className="products-page" style={{paddingTop: '150px'}}>
      <h2>Search Results</h2>

      {searchTerm ? (
        <>
          <p>
            Results for "<strong>{searchTerm}</strong>"
          </p>

          {filteredProducts.length === 0 ? (
            <p>No products found for "{searchTerm}"</p>
          ) : (
            <div className="results-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => navigate(`/produit?id=${product.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={product.image.startsWith('http') ? product.image : process.env.PUBLIC_URL + product.image} alt={product.name} />
                  <h4>{product.brand}</h4>
                  <p>{product.price} €</p>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p>Please perform a search to display products.</p>
      )}
    </div>
  );
};

export default Products;
