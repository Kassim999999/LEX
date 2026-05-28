import "../css/Navbar.css";
import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <h2>LEX</h2>
        <span>CARWASH & CLEANERS</span>
      </div>

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <a href="#hero">Home</a>
        </li>

        <li>
          <a href="#services">
            Services
          </a>
        </li>

        <li>
          <a href="#pricing">
            Pricing
          </a>
        </li>

        <li>
          <a href="#gallery">
            Gallery
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <button className="book-btn">
        <FaPhoneAlt />
        Book Wash
      </button>

      <div
        className="menu-toggle"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </div>
    </nav>
  );
}

export default Navbar;