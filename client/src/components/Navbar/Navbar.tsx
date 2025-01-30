import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ handleClick }: { handleClick?: () => void }) {
  return (
    <nav className="nav-container" aria-label="Navigation principale">
      <div className="nav-left">
        <Link
          onClick={handleClick}
          to="/"
          className="back-to-home-link"
          aria-current={window.location.pathname === "/" ? "page" : undefined}
        >
          Girl Power Code
        </Link>
      </div>
      <div className="nav-right">
        <Link
          onClick={handleClick}
          to="/parents"
          className="parents-button"
          aria-current={
            window.location.pathname === "/parents" ? "page" : undefined
          }
        >
          Parents
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
