import './WegovyNotice.css';

function WegovyNotice() {
  return (
    <div className="notice-container">
      <div className="left-section">
        <h4>NOTICE ON <br /> <span>MEDICATIONS</span></h4>
        <a href="https://www.novo-pi.com/wegovy.pdf" className="image-link"> {/* to replace */}
          <img
            src="/images/image2.jpg" // replace with your actual path
            alt="Link image"
            className="notice-image"
          />
        </a>
      </div>

      <div className="right-section">
        <p className="subtitle">semaglutide</p>
        <h1 className="title">WEGOVY 0.25 mg, 0.5 mg,<br />
          1 mg, 1.7 mg, 2.4 mg,</h1>
        <p className="injectable">injectable solution</p>
        <p className="description">Second evaluation of a non-listed specialty</p>
        <p className="date">Adopted by the Transparency Commission on October 23, 2024</p>
        <hr className="separator" />
        <div className="tags">
          <p><span className="arrow">➤</span> Obesity</p>
          <p><span className="arrow">➤</span> Adult</p>
          <p><span className="arrow">➤</span> Sectors: City and Hospital</p>
        </div>
      </div>
    </div>
  );
}

export default WegovyNotice;