import "../css/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>LEX</h2>

          <p>
            Premium carwash, detailing and
            professional cleaning services
            designed for spotless results.
          </p>

          <div className="footer-socials">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Our Services</h3>

          <a href="#">Premium Car Wash</a>
          <a href="#">Carpet Cleaning</a>
          <a href="#">Sofa Cleaning</a>
          <a href="#">Car Detailing</a>
          <a href="#">Steam Cleaning</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Info</h3>

          <div className="footer-info">
            <FaPhoneAlt />
            <span>+254 712 345 678</span>
          </div>

          <div className="footer-info">
            <FaMapMarkerAlt />
            <span>Nairobi, Kenya</span>
          </div>

          <div className="footer-info">
            <FaWhatsapp />
            <span>WhatsApp Support</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 LEX Carwash & Cleaners.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;