import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-box">
          <h2>Mehedi Design</h2>

          <p>
            Beautiful bridal and festive mehendi designs for weddings,
            engagements, anniversaries, and special occasions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>

            <li>
              <a href="#About">About</a>
            </li>

            <li>
              <a href="#service">Services</a>
            </li>

            <li>
              <a href="#offers">Offers</a>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-box">
          <h3>Contact Info</h3>

          <p>📍 Bhubaneswar, Odisha</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ mehendi@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebook />
            </a>

            <a href="/">
              <FaWhatsapp />
            </a>

            <a href="/">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 Mehedi Design by Bikash Kumar Das | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
