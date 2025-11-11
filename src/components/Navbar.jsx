import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Jessie Houghton</Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
