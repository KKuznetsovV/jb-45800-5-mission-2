import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="לוגו מזג אוויר" className="navbar-logo" />
        מזג האוויר
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            דף בית
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className={location.pathname === '/history' ? 'active' : ''}
          >
            היסטוריה
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            אודות
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
