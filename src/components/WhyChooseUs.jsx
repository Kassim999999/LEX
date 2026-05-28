import "../css/WhyChooseUs.css";
import whyImage from "../assets/images/why-lex.jpg";

import {
  FaShieldAlt,
  FaClock,
  FaGem,
  FaThumbsUp
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-us">

      <div className="why-container">

        {/* IMAGE SIDE */}
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

        {/* TEXT SIDE */}
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
            premium cleaning products and
            professional care to leave your
            vehicle and interiors spotless.
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
  );
}

export default WhyChooseUs;