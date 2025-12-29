import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./wevygoSection.css";
import bannerImg from './images/product7.jpg';

// Reusable component for a horizontal product section
const ProductSection = ({ title, products, navigate }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!products || products.length === 0) {
    return null; // Don't render if there are no products
  }

  return (
    <section className="section-wrapper">
      <div className="section-header">
        <h2>{title}</h2>
        <a href="#" className="see-all">View all</a>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft} aria-label="Previous">‹</button>
        <div className="products-container" ref={scrollRef}>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image.startsWith('http') ? product.image : process.env.PUBLIC_URL + product.image}
                alt={product.name}
                onClick={() => navigate(`/produit?id=${product.id}`)}
                style={{ cursor: "pointer" }}
              />
              <p className="brand">{product.brand}</p>
              <div className="price-box">
                {product.discount && <span className="discount">{product.discount}</span>}
                {product.oldPrice && <span className="old-price">{product.oldPrice}€</span>}
                <span className="price">{product.price}$</span>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight} aria-label="Next">›</button>
      </div>
    </section>
  );
};

const WevygoSection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
      .catch(error => console.error("Failed to load products from API:", error));
  }, []);

  const getProductsByCategory = (category) => {
    return allProducts.filter(p => p.category.toUpperCase() === category.toUpperCase());
  };

  return (
    <div className="wevygo-page">
      <div className="mobile-banner mobile-only">
        <div className="mobile-banner-card">
          <img src={bannerImg} alt="Woman" />
          <div className="mobile-banner-text">
            <h3>Weight Loss</h3>
            <p>Solutions &amp; Treatments</p>
          </div>
        </div>
      </div>

      <ProductSection title="Weight Loss with Wegovy" products={getProductsByCategory('Wegovy')} navigate={navigate} />
      <ProductSection title="Weight Loss with Mounjaro" products={getProductsByCategory('Mounjaro')} navigate={navigate} />
      <ProductSection title="Weight Loss with Ozempic" products={getProductsByCategory('Ozempic')} navigate={navigate} />
    </div>
  );
};

export default WevygoSection;
