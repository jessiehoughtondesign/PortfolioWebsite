import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="container text-and-image">
        {/* Text */}
        <div>
          <h1>Hi, I'm Jessie</h1>
          <p>
            I'm a modern maker bringing ideas to life 
            with UX design, product sense, and software development
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">View My Work</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        {/* Image */}
        <div>
          <div className="image-frame">
            <img src="/hero-image.jpg" alt="Jessie Houghton" />
          </div>
        </div>
    </section>
  );
}

export default Hero;
