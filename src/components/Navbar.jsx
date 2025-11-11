import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/Logo/logo.png" alt="Jessie Houghton" className="navbar-logo" />
          <span className="navbar-brand-text">Jessie Houghton Design</span>
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/after-hours">After Hours</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
