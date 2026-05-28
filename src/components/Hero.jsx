import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-overlay"></div>

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
          sofa cleaning and detailing services
          designed for spotless results.
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

    </section>
  );
}

export default Hero;