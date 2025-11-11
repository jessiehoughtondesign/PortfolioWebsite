import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-name">Jessie Houghton Design</h2>
          
          <div className="footer-contact">
            <p className="contact-item">
              <a href="mailto:jhoughton164@gmail.com">jhoughton164@gmail.com</a>
              <span className="separator">|</span>
              <span>Seattle, WA</span>
              <span className="separator">|</span>
              <a href="https://linkedin.com/in/jessie-houghton-336403169" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jessie-houghton-336403169
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
