import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AntiAgeSection.css";

const AntiAgeSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => {
        const antiAgingProducts = data.filter(p => p.category.toUpperCase() === 'ANTI-AGING');
        setProducts(antiAgingProducts);
      })
      .catch(error => console.error("Failed to load anti-aging products:", error));
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="antiage-container">
      <div className="antiage-banner desktop-only">
        <div className="banner-text">
          <h2>Anti-Aging Care</h2>
          <p>
            Retinol, niacinamide, vitamin C... <br />
            A shot of active ingredients to boost your skin’s vitality.
          </p>
          <a href="/category/Anti-Aging" className="see-all-link">See all</a>
        </div>
        <img src="/images/product5.png" alt="Woman" />
      </div>

      <div
        className="product-card banner-card mobile-only"
        onClick={() => navigate('/category/Anti-Aging')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/images/product5.png" alt="Woman" />
        <p className="brand">Anti-Aging Care</p>
        <p className="name">Retinol, niacinamide, vitamin C...</p>
        <p className="desc">
          A shot of active ingredients to boost your skin’s vitality.
        </p>
        <a href="/category/Anti-Aging" className="view-all">See all</a>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>&larr;</button>

        <div className="products-container" ref={scrollRef}>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image.startsWith('http') ? product.image : process.env.PUBLIC_URL + product.image}
                alt={product.name}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/produit?id=${product.id}`)}
              />
              <p className="brand">{product.brand}</p>
              <p className="name">{product.name}</p>
              <div className="price-box">
                {product.discount && <span className="discount">{product.discount}</span>}
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span className="price">{product.price}$ </span>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>&rarr;</button>
      </div>
    </div>
  );
};

export default AntiAgeSection;
