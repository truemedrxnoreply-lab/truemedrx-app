import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./mounjaroSection.css";
import produit1 from './images/produit1.png';
import produit2 from './images/produit2.png';
import produit3 from './images/produit3.png';



const products = [
  {
    id: 2,
    brand: "WEGOVY",
    name: "WEGOVY 0,25 mg FlexTouch solution injectable, stylo prérempli",
    price: "310",
    image: produit1,
  },
  {
    id: 3,
    brand: "MOUNJARO 5 mg",
    name: "MOUNJARO 5 mg/dose kwikPen Inj.-Lsg. Fertigpen",
    price: 410,
    image: produit3,
  },
  {
    id: 1,
    brand: "OZEMPIC 1 mg",
    name: "OZEMPIC 1 mg solution injectable en stylo prérempli pendant 8 semaines",
    price: 271.1,
    oldPrice: 290,
    discount: "-42%",
    image: produit2, 
  },

];

const AntiAgeSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="antiage-container">
      {/* Version desktop du banner */}
      <div className="antiage-banner desktop-only">
        <div className="banner-text">
          <h2>perte de poids</h2>

          <a href="#">Voir tout</a>
        </div>
        <img src="/images/product7.png" alt="Femme" />
      </div>

      {/* Version mobile du banner (intégré comme une carte scrollable) */}
      <div
        className="product-card banner-card mobile-only"
        onClick={() => navigate('/produit')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/images/product7.png" alt="Femme" />
        <p className="brand">perte de poids</p>
  
        <a href="#" className="view-all">Voir tout</a>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          &larr;
        </button>

        <div className="products-container" ref={scrollRef}>
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img
                src={product.image}
                alt={product.name}
                style={{ cursor: "pointer" }}
                onClick={() => navigate('/produit', { state: { product } })}
              />
              <p className="brand">{product.brand}</p>
              <p className="name">{product.name}</p>
              <div className="price-box">
                {product.discount && <span className="discount">{product.discount}</span>}
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span className="price">{product.price}€ </span>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default AntiAgeSection;
