import "../css/Contact.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div
        className="section-header"
        data-aos="fade-up"
      >
        <span>CONTACT US</span>

        <h2>
          Book Your Premium
          Cleaning Service
        </h2>

        <p>
          Get in touch with us for luxury
          carwash, carpet cleaning and
          professional detailing services.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div
          className="contact-info"
          data-aos="fade-right"
        >

          <div className="contact-card">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <p>+254 712 345 678</p>
            </div>
          </div>

          <div className="contact-card">
            <FaWhatsapp />
            <div>
              <h4>WhatsApp</h4>
              <p>+254 712 345 678</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Visit Us</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="contact-card">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sun: 8AM - 8PM</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <form
          className="contact-form"
          data-aos="fade-left"
        >

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>
            <option>
              Select Service
            </option>
            <option>
              Premium Car Wash
            </option>
            <option>
              Sofa Cleaning
            </option>
            <option>
              Carpet Cleaning
            </option>
            <option>
              Detailing
            </option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us what you need..."
          ></textarea>

          <button type="submit">
            Book Service
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;