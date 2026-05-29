import "../css/Home.css";
import whyImage from "../assets/images/why-lex.jpg";

import {
  FaCarSide,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaGem,
  FaThumbsUp
} from "react-icons/fa";

import {
  FaCouch,
  FaPumpSoap,
  FaBroom,
  FaSprayCanSparkles,
  FaShower
} from "react-icons/fa6";

function Home() {

  const services = [
    {
      icon: <FaCarSide />,
      title: "Premium Car Wash",
      text:
        "Luxury exterior and interior carwash with premium detailing."
    },
    {
      icon: <FaCouch />,
      title: "Sofa Cleaning",
      text:
        "Deep cleaning that restores freshness and removes stains."
    },
    {
      icon: <FaPumpSoap />,
      title: "Carpet Cleaning",
      text:
        "Professional carpet washing for homes and offices."
    },
    {
      icon: <FaSprayCanSparkles />,
      title: "Detailing & Polishing",
      text:
        "Bring back shine with premium polishing and finishing."
    },
    {
      icon: <FaBroom />,
      title: "Interior Cleaning",
      text:
        "Detailed cleaning for homes, offices and interiors."
    },
    {
      icon: <FaShower />,
      title: "Steam Cleaning",
      text:
        "Modern deep-clean technology for spotless results."
    }
  ];

  const reviews = [
    {
      name: "Brian M.",
      role: "SUV Owner",
      text:
        "LEX transformed my car completely. The detailing was spotless and the service felt premium."
    },
    {
      name: "Sarah W.",
      role: "Homeowner",
      text:
        "Their sofa and carpet cleaning exceeded expectations. Everything looked brand new."
    },
    {
      name: "Kevin O.",
      role: "Business Owner",
      text:
        "Fast, professional and reliable. Definitely my go-to cleaning and carwash service."
    }
  ];

  return (
    <>

      {/* HERO */}
      <section className="hero" id="hero">

        <div className="hero-overlay"></div>

        <div className="hero-container">

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

      {/* SERVICES */}
      <section className="services" id="services">

        <div
          className="section-header"
          data-aos="fade-up"
        >
          <span>OUR SERVICES</span>

          <h2>
            Premium Cleaning
            Solutions
          </h2>

          <p>
            From luxury carwash to carpet and
            sofa cleaning, we deliver premium
            care with spotless results.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">

        <div className="why-container">

          <div
            className="why-image"
            data-aos="fade-right"
          >
            <img
              src={whyImage}
              alt="Luxury Car Wash"
            />

            <div className="experience-card">
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>
          </div>

          <div
            className="why-content"
            data-aos="fade-left"
          >
            <span>WHY CHOOSE LEX</span>

            <h2>
              Premium Care,
              Exceptional Results
            </h2>

            <p>
              At LEX Carwash & Cleaners,
              we combine luxury detailing,
              premium cleaning products
              and professional care to
              leave your vehicle and
              interiors spotless.
            </p>

            <div className="why-features">

              <div className="feature-box">
                <FaGem />
                <div>
                  <h4>Premium Service</h4>
                  <p>Luxury finish every time.</p>
                </div>
              </div>

              <div className="feature-box">
                <FaShieldAlt />
                <div>
                  <h4>Trusted Team</h4>
                  <p>Professional cleaning experts.</p>
                </div>
              </div>

              <div className="feature-box">
                <FaClock />
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>Quick but quality service.</p>
                </div>
              </div>

              <div className="feature-box">
                <FaThumbsUp />
                <div>
                  <h4>Client Satisfaction</h4>
                  <p>We prioritize spotless results.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">

        <div
          className="cta-content"
          data-aos="zoom-in"
        >
          <span>
            LUXURY CLEANING EXPERIENCE
          </span>

          <h2>
            Ready For A
            Spotless Finish?
          </h2>

          <p>
            Experience premium carwash,
            detailing and professional
            cleaning services with LEX.
          </p>

          <button>
            Book Your Service
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">

        <div
          className="section-header"
          data-aos="fade-up"
        >
          <span>TESTIMONIALS</span>

          <h2>
            What Our Clients
            Say About LEX
          </h2>

          <p>
            Trusted by hundreds of happy
            clients for premium carwash
            and cleaning services.
          </p>
        </div>

        <div className="testimonial-grid">

          {reviews.map((review, index) => (
            <div
              className="testimonial-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review-text">
                "{review.text}"
              </p>

              <div className="client-info">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL BOOKING CTA */}
<section className="booking-section">

  <div
    className="booking-content"
    data-aos="fade-up"
  >
    <span>PREMIUM CLEANING EXPERIENCE</span>

    <h2>
      Ready To Experience
      Premium Cleaning?
    </h2>

    <p>
      From luxury carwash and detailing
      to carpet and sofa cleaning,
      LEX delivers spotless results
      every single time.
    </p>

    <div className="booking-buttons">

      <button className="primary-btn">
        Book Appointment
      </button>

      <button className="secondary-btn">
        Call Us
      </button>

    </div>
  </div>

</section>

    </>
  );
}

export default Home;