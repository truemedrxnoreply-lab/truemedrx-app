import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* Top part of the footer */}
      <div className="footer-top">
        <div className="footer-left">
          <p>
            TrueMedRx is a network of pharmacies whose mission is to be your health and wellness partner. 
            TrueMedRx is also one of the leading references in the United States, Canada, Australia, and many 
            other countries for online sales of cosmetics and over-the-counter medications. Medicines and 
            products can be ordered online with free home delivery within 1 to 3 business days (if in stock). 
            Delivery is free starting at $100 within the United States and $250 in the rest of the world. 
            You can also choose our Click & Collect service and pick up your order at your convenience in one 
            of the 105 pharmacies owned by TrueMedRx in the United States (depending on your state) and worldwide 
            (depending on your country).
          </p>

          <p>
            TrueMedRx strives to make its website accessible to everyone, including people with disabilities. 
            If you encounter any accessibility issues, please contact us via WhatsApp at +1 (575) 265-2226 
            or by email at yahhbig@gmail.com so we can provide you with the services you need through 
            alternative methods.
          </p>
        </div>

        <div className="footer-right">
          <h3>Find us on<br />social media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61577411093715" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/truemedrx1?igsh=MndyeTB5NnJhNGE2" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@bayfatclub?_r=1&_t=ZT-91iZw3w6gt4" target="_blank">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://wa.me/15752652226" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Certified section */}
      <div className="footer-certified">
        <h2>Certified Online Pharmacy</h2>

        <div className="certification-logos">
          <a href="http://www.fda.gov/" target="_blank" rel="noopener noreferrer">
            <img src="./images/cert1.jpg" alt="Certification 1" />
          </a>
          <a href="https://www.ema.europa.eu/en/homepage" target="_blank" rel="noopener noreferrer">
            <img src="./images/cert2.png" alt="Certification 2" />
          </a>
          <a href="https://www.tga.gov.au/" target="_blank" rel="noopener noreferrer">
            <img src="./images/tga-logo.png" alt="Certification 3" />
          </a>
          <a href="https://dhpp.hpfb-dgpsa.ca/" target="_blank" rel="noopener noreferrer">
            <img src="./images/cert4.png" alt="Certification 4" />
          </a>
          <a href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" target="_blank" rel="noopener noreferrer">
            <img src="./images/cert5.jpg" alt="Certification 5" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
