import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-link-container">
          <Link to="/aproposdenous" className="footer-link">
            A propos de nous
          </Link>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/contacteznous" className="footer-link">
            Contactez-nous
          </Link>
        </div>
        <p className="footer-copyright">&copy; 2025 Jottiana</p>
      </div>
    </footer>
  );
}

export default Footer;
