import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <p className="contact-item">
              <a href="mailto:j.houghton164@gmail.com">Email</a>
              <span className="separator">|</span>
              <a href="https://linkedin.com/in/jessie-houghton-336403169" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <br />
              <span>Made with ❤ in Seattle, WA</span>
              <br />
              <span>Copyright © 2025 Jessie Houghton. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
