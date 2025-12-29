import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import LoadingSpinner from '../components/LoadingSpinner'; // Import the spinner
import "./ProductPage.css";
import Footer from "../components/Footer";

const ProductPage = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const productId = urlParams.get('id');

    if (productId) {
      setLoading(true);
      fetch('http://localhost:3001/api/products')
        .then((response) => response.json())
        .then((data) => {
          const foundProduct = data.find(p => p.id === parseInt(productId));
          setProduct(foundProduct);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching product from API:", error);
          setLoading(false);
        });
    }
  }, [location.search]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return <div className="product-page" style={{paddingTop: '150px'}}>Product not found.</div>;
  }

  return (
    <div>
      <div className="product-page">
        <img src={product.image.startsWith('http') ? product.image : process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>

          <div className="product-rating">
            <span className="star">★★★★★</span>
            <span>4.5</span>
          </div>

          <p className="product-price">{product.price}$</p>
          <p className="product-stock">Only 15 units at this price</p>

          <button
            className="product-button"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>

      <br /><br />
      <p className="product-price2">{product.description}</p>
      <br /><br /><br /> 
      <br /><br /><br /> 
      <Footer/>
    </div>
  );
};

export default ProductPage;
