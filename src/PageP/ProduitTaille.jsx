import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProduitTaille.css"

const products = [
  {
    id: 2,
    name: "Height Increase Tablets - Product Type: Herbal Medicine",
    price: 150.99,
    image: '/images/height-increase-tablet.png',
  },
  {
    id: 3,
    name: "HighSpot Height Growth Maximizer Dietary Supplement, Calcium and Vitamins",
    price: 263.49,
    image: '/images/b3e78a762ffb89d679056c9c7eb5da2c.png',
  },
  {
    id: 1,
    name: "KTD BIOLABS Height Growth Maximizer 120 Capsules (Pack of 2)",
    price: 423.29,
    oldPrice: 245.51,
    discount: "-42%",
    image: '/images/81z8y71rFPL._AC_SL1500_.jpg',
  },
  {
    id: 4,
    name: "for Bone Growth in Children and Adolescents, Strengthens Bones, Supports Density, Non-GMO, Gluten-Free, Made in USA, 60 Capsules",
    price: 104.9,
    image: '/images/81CjeGLt3LL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 5,
    name: "Truheight Children's Growth Multivitamins - 60 Gummies",
    price: 304.96,
    image: '/images/103168172_a1b252d5616deb583.png',
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
      {/* Desktop banner version */}
      <div className="antiage-banner desktop-only">
        <div className="banner-text">
          <h2>Growth</h2>
          <p>
            Height growth dietary supplement, based on calcium, vitamin D3 and zinc, for bone growth in children and adolescents, strengthens bones
          </p>
          <a href="#">View all</a>
        </div>
        <img src="/images/Taille.jpg" alt="Woman" />
      </div>

      {/* Mobile banner version (integrated as a scrollable card) */}
      <div
        className="product-card banner-card mobile-only"
        onClick={() => navigate('/produit')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/images/Taille.jpg" alt="Woman" />
        <p className="brand">Growth</p>
        <p className="name">Height growth dietary supplement, based on calcium, vitamin D3 and zinc</p>
        <p className="desc">
          for bone growth in children, adolescents and adults, strengthens bones
        </p>
        <a href="#" className="view-all">View all</a>
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
              <p className="name">{product.name}</p>
              <div className="price-box">
                {product.discount && <span className="discount">{product.discount}</span>}
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span className="price">{product.price}$ </span>
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