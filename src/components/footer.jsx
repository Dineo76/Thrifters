import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

      
        <div className="footer-section">
          <h2 className="footer-logo">THRIFTERS</h2>
          <p className="footer-tagline">Sustainable fashion for everyone.</p>
        </div>

        
        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li><a href="mailto:info@thrifters.com">info@thrifters.com</a></li>
            <li><a href="tel:011-905-3061">011-905-3061</a></li>
            <li><a href="https://www.thrifters.com/" target="_blank" rel="noreferrer">www.thrifters.com</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>LOCATION</h3>
          <ul>
            <li>123 Market Street</li>
            <li>Johannesburg, GP</li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <ul>
            <li><a href="https://instagram.com/thrifters" target="_blank" rel="noreferrer">@thrifters</a></li>
          </ul>
        </div>
      </div>

      <div
    className="footer-bottom-container d-flex justify-content-center align-items-center"
    style={{ textAlign: "center" }}
  >
    <p className="mb-0">
      Thrifters © {new Date().getFullYear()} - All rights reserved.
    </p>
  </div>
 
    </footer>

  );
}
