import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h2>Thrifters @ {new Date().getFullYear()}</h2>
          <p>Sustainable fashion for everyone.</p>
        </div>

        {/* Right side: Contact info */}
        <div className="footer-right">
          <p>
            <strong>Email:</strong> <a href="mailto:info@thrifters.com">info@thrifters.com📧</a>
          </p>
          <p>
            <strong>Instagram:</strong> <a href="https://instagram.com/thrifters" target="_blank" rel="noreferrer">@thrifters</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:011-905-3061">☎️ 011-905-3061</a>
          </p>
          <p>
            <strong>Address:</strong> 📍123 Market Street, Johannesburg, Gp
          </p>
          <p>
            <strong>Website:</strong> <a href="https://www.thrifters.com" target="_blank" rel="noreferrer">🌎www.thrifters.com</a>
          </p>
        </div>
      </div>
      
    </footer>
    
  );
}
