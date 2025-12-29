import React, { useState, useEffect } from "react";
import "./PromoCarousel.css";

const slides = [
  {
    image: "/images/promo2.png",
    title: "Shape & Energy",
    discount: "-40%",
  },
  {
    image: "/images/promo3.png",
    title: "The Natural",
    discount: "-40%",
  },
  {
    image: "/images/promo1.jpg",
    title: "Nature & Dietetics",
    discount: "-58%",
  },
  {
    image: "https://www.shutterstock.com/image-illustration/group-testosterone-steroid-vials-syringe-600nw-2473142781.jpg",
    title: "Nature & Dietetics",
    discount: "-58%",
  },
  {
    image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/10/syringe-growth-hormone-injection-1296x728-header-1024x575.jpg?w=1155&h=1528",
    title: "Nature & Dietetics",
    discount: "-58%",
  },

  // You can add as many slides as you want
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-box">
            <h2>{slide.title}</h2>
            <span className="discount">Up to <strong>{slide.discount}</strong></span>
            <button>Discover</button>
          </div>
        </div>
      ))}

      <button className="carousel-arrow left" onClick={prevSlide}>‹</button>
      <button className="carousel-arrow right" onClick={nextSlide}>›</button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}