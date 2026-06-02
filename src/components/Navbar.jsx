import "../css/Navbar.css";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/lex-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
  className={`navbar ${
    scrolled || location.pathname !== "/"
      ? "scrolled"
      : ""
  }`}
>
      {/* LOGO */}
<NavLink to="/" className="logo" onClick={closeMenu}>
  <img src={logo} alt="LEX Car Carpet Logo" className="logo-img" />
</NavLink>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/pricing"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pricing
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* BUTTON */}
      <NavLink to="/contact" className="book-btn" onClick={closeMenu}>
        <FaPhoneAlt />
        Book Wash
      </NavLink>

      {/* MOBILE MENU */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;