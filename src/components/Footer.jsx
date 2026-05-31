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

          <span className="brand-tag">
  CARWASH & CLEANERS
</span>

          <p>
            Premium carwash, detailing and
            cleaning services designed to
            leave every space spotless.
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

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Services</h3>

          <a href="#">Carwash</a>
          <a href="#">Sofa Cleaning</a>
          <a href="#">Carpet Cleaning</a>
          <a href="#">Detailing</a>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h3>Company</h3>

          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <div>
            <FaPhoneAlt />
            <span>+254 748 444 111</span>
          </div>

          <div>
            <FaWhatsapp />
            <span>WhatsApp Support</span>
          </div>

          <div>
            <FaMapMarkerAlt />
            <span>Lower Kabete</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
         © 2026 LEX World Car Wash.
Premium Cleaning. Exceptional Results.
        </p>
      </div>

    </footer>
  );
}

export default Footer;