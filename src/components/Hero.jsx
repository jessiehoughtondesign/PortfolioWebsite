import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Jessie</h1>
          <p className="hero-subtitle">Product Designer & UX Specialist</p>
          <p className="hero-description">
            I design thoughtful, user-centered experiences that solve real problems.
            Specializing in product design, interaction design, and design systems.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <img src="/hero-image.jpg" alt="Jessie Houghton" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
