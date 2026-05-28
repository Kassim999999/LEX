import "../css/Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>LEX</h2>
        <span>CARWASH & CLEANERS</span>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="book-btn">
        <FaPhoneAlt />
        Book Wash
      </button>
    </nav>
  );
}

export default Navbar;