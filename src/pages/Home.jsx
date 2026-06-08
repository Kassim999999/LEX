import "../css/Home.css";
import whyImage from "../assets/images/why-lex.jpg";
import { useNavigate } from "react-router-dom";

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

import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaSoap,
  FaCheckCircle
} from "react-icons/fa";

function Home() {

      const navigate = useNavigate();

  const handleBooking = () => {
    if (window.innerWidth <= 768) {
      window.open(
        "https://wa.me/254748444111",
        "_blank"
      );
    } else {
      navigate("/contact");
    }
  };

  const serve = [
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
    // {
    //   icon: <FaBroom />,
    //   title: "Interior Cleaning",
    //   text:
    //     "Detailed cleaning for homes, offices and interiors."
    // },
    // {
    //   icon: <FaShower />,
    //   title: "Steam Cleaning",
    //   text:
    //     "Modern deep-clean technology for spotless results."
    // }
  ];

  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Book A Service",
      text: "Call, WhatsApp or visit us to schedule your cleaning service."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Inspection",
      text: "We assess to ensure the perfect clean."
    },
    {
      icon: <FaSoap />,
      title: "Professional Cleaning",
      text: "Our team uses premium products and equipment for spotless results."
    },
    {
      icon: <FaCheckCircle />,
      title: "Ready To Enjoy",
      text: "Enjoy a deep, professional clean for your car, sofa, or carpets."
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
              Where Clean 
              Meets Class
            </h1>

            <p>
Premium carwash, carpet cleaning, sofa cleaning and detailing services with spotless results.
            </p>

    <div className="hero-buttons">
      <button
        className="primary-btn"
        onClick={handleBooking}
      >
        Book Service
      </button>
    

<button
  className="secondary-btn"
  onClick={() => navigate("/pricing")}
>
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
                <h3>500+</h3>
                <p>Cars Cleaned</p>
              </div>
            </div>

<div className="floating-card">
  <FaGem />
  <div>
    <h3>Detail Focus</h3>
    <p>Premium Finish</p>
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
      <section className="serve" id="serve">

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

        <div className="serve-grid">

          {serve.map((serve, index) => (
            <div
              className="serve-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="serve-icon">
                {serve.icon}
              </div>

              <h3>{serve.title}</h3>
              <p>{serve.text}</p>
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
      {/* <section className="cta-section">

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
      </section> */}

      {/* Process */}
       <section className="process">

      <div
        className="section-header"
        data-aos="fade-up"
      >
        <span>OUR PROCESS</span>

        <h2>
          How LEX Works
        </h2>

        <p>
          Simple, professional and designed
          to give you the best cleaning
          experience every time.
        </p>
      </div>

      <div className="process-grid">

        {steps.map((step, index) => (
          <div
            className="process-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="process-number">
              0{index + 1}
            </div>

            <div className="process-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
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

      <button
        className="primary-btn"
        onClick={handleBooking}
      >
        Book Service
      </button>

<a href="tel:+254748444111" className="secondary-btn">
  Call Us
</a>

    </div>
  </div>

</section>

    </>
  );
}

export default Home;