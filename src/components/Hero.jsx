import "../css/Hero.css";
import {
  FaCarSide,
  FaStar,
  FaShieldAlt
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div
          className="hero-content"
          data-aos="fade-up"
        >
          <span className="hero-tag">
            PREMIUM CARWASH & CLEANING
          </span>

          <h1>
            Luxury Care For
            Your Car &
            Interior Cleaning
          </h1>

          <p>
            Premium carwash, carpet cleaning,
            sofa cleaning and detailing
            services designed to leave
            everything spotless.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Book Appointment
            </button>

            <button className="secondary-btn">
              View Pricing
            </button>
          </div>
        </div>

        {/* FLOATING CARDS */}
        <div
          className="hero-floating"
          data-aos="fade-left"
        >

          <div className="floating-card">
            <FaCarSide />
            <div>
              <h3>5000+</h3>
              <p>Cars Cleaned</p>
            </div>
          </div>

          <div className="floating-card">
            <FaStar />
            <div>
              <h3>4.9/5</h3>
              <p>Customer Rating</p>
            </div>
          </div>

          <div className="floating-card">
            <FaShieldAlt />
            <div>
              <h3>100%</h3>
              <p>Premium Service</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;