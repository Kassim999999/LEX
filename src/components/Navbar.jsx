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

  const [activeSection, setActiveSection] =
    useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = [
        "hero",
        "services",
        "testimonials"
      ];

      sections.forEach((sectionId) => {
        const section =
          document.getElementById(sectionId);

        if (section) {
          const top =
            section.offsetTop - 120;

          const height =
            section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY <
            top + height
          ) {
            setActiveSection(
              sectionId
            );
          }
        }
      });
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

  const closeMenu = () =>
    setMenuOpen(false);

  return (
    <nav
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {/* LOGO */}
      <div className="logo">
        <h2>LEX</h2>
        <span>
          CARWASH & CLEANERS
        </span>
      </div>

      {/* LINKS */}
      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <a
            href="#hero"
            className={
              activeSection ===
              "hero"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#services"
            className={
              activeSection ===
              "services"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="/pricing"
            onClick={closeMenu}
          >
            Pricing
          </a>
        </li>

        <li>
          <a
            href="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </a>
        </li>

        <li>
          <a
            href="/contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* BUTTON */}
      <button className="book-btn">
        <FaPhoneAlt />
        Book Wash
      </button>

      {/* MOBILE MENU */}
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