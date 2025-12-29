import React from "react";
import "./PopularSection.css";

const PopularSection = () => {

  const scrollToWegovy = () => {
    const wegovySection = document.getElementById('wegovy-section');
    if (wegovySection) {
      wegovySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="popular-section">
      <div className="popular-container">

        {/* Left column - Video */}
        <div className="video-column">
          <div className="video-wrapper">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
            >
              <source src="./images/20241009-glp1-720.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right column - Content */}
        <div className="content-column">
          <span className="badge">Popular</span>

          <h1 className="title">
            Why wait to try GLP-1 weight loss?
          </h1>

          <p className="description">
            Skip waiting rooms and insurance complications.  
            Request your online consultation today and find out  
            if GLP-1 agonists are right for you.
          </p>

          <button onClick={scrollToWegovy} className="cta-button">
            Explore your options
          </button>

          <div className="tagline">
            <div className="tagline-item">
              <strong>Less Weight</strong>
            </div>
            <div className="tagline-item">
              <strong>Less Wait</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
