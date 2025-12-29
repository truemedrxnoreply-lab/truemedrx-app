import React from 'react';

// Existing Imports
import AntiAgeSection from "../pages/AntiAgeSection";
import PromoBanner from "../pages/PromoBanner";
import WegovyNotice from "../pages/WegovyNotice";
import PromoCarousel from "./PromoCarousel";
import WegovySection from "../PageP/wevygoSection";
import ProduitTaille from "../PageP/ProduitTaille";
import PopularSection from "../PageP/PopularSection";
import Footer from "./Footer";
import image from "../PageP/images/image.png";

import './EventLandingPage.css';

const EventLandingPage = () => {
  return (
    <div>
      <PromoCarousel />
      <WegovyNotice />
      <PopularSection />

      <PromoBanner/>
      <br />
      <br />
      <AntiAgeSection/>
      <br />
      <br />
      {/* Added an ID to this section */}
      <div id="wegovy-section">
        <WegovySection/>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="content">
          <div className="main-content">
            <div className="text-section">
              <h1 className="title">How TrueMedRx Works</h1>
              <h2 className="subtitle">3 Simple Steps</h2>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3 className="step-title">Complete an Online Evaluation</h3>
                    <p className="step-description">Tell us about your medical history.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3 className="step-title">Reviewed by Medical Support</h3>
                    <p className="step-description">Our U.S.-based medical support team will review everything and ask you 2–3 follow-up questions.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3 className="step-title">Worldwide Medication Delivery</h3>
                    <p className="step-description">Delivery in 2–3 business days (for customers in the USA, Australia, and Canada), and 1 to 4 weeks for customers outside these countries. Discreet packaging, no signature required.</p>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
            <div className="image-section">
              <div className="image-placeholder">
                <img src={image} alt="Illustration TrueMedRx" className="lemonaid-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <ProduitTaille/>
      <br /><br />
      <video autoPlay muted loop id="bg-video">
        <source src="./images/video1.mp4" type="video/mp4" />
      </video>
      <br />
      <Footer/>
    </div>
  );
};

export default EventLandingPage;