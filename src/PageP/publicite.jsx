import React from 'react';
import './publicite.css';
import lemonaidImage from './images/image.png';

function publicite() {
  return (
    <div className="container">
      <div className="content">

        <div className="main-content">
          <div className="text-section">

            <h1 className="title">How Lemonaid Works</h1>
            <h2 className="subtitle">3 easy steps</h2>

            <div className="steps-container">

              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Complete an online evaluation</h3>
                  <p className="step-description">Tell us about your medical history.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Reviewed by the medical team</h3>
                  <p className="step-description">Our U.S-based medical team will review everything and ask follow-up questions.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">FREE medication delivery</h3>
                  <p className="step-description">Delivery in 2–3 business days, discreet packaging, and no signature required.</p>
                </div>
              </div>

            </div>

            <div className="divider"></div>

            <div className="windows-notice">
              <p className="windows-text">Activate Windows</p>
              <p className="windows-subtext">Go to settings to activate Windows.</p>
            </div>

          </div>

          <div className="image-section">
            <div className="image-placeholder">
              <div className="placeholder-text">
                Lemonaid Image<br />(step illustration)
              </div>
              <img src={lemonaidImage} alt="Lemonaid Illustration" className="lemonaid-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default publicite;
