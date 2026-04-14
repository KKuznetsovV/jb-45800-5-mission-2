import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src="/logo.png" alt="MakeILWeatherGreatAgain logo" className="footer-logo" />
      <p className="footer-copy">
        © {new Date().getFullYear()} MakeILWeatherGreatAgain — All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
