import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { toggleTheme } from '../../redux/themeSlice';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="MakeILWeatherGreatAgain logo" className="navbar-logo" />
        <span className="navbar-brand-text">MakeILWeatherGreatAgain</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className={location.pathname === '/history' ? 'active' : ''}
          >
            History
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
      </ul>
      <button
        className="theme-toggle"
        onClick={() => dispatch(toggleTheme())}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
