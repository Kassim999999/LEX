import "../css/Contact.css";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

function Contact() {

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">

        <span>CONTACT LEX</span>

        <h1>
          Let's Get Your Vehicle
          Looking Brand New
        </h1>

        <p>
          Reach out today for premium carwash,
          detailing and cleaning services in
          Lower Kabete.
        </p>

      </section>

      {/* INFO CARDS */}
      <section className="contact-info">

        <div className="info-card">
          <FaPhoneAlt />

          <h3>Call Us</h3>

          <p>0748 444 111</p>
        </div>

        <div className="info-card">
          <FaWhatsapp />

          <h3>WhatsApp</h3>

          <p>0748 444 111</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />

          <h3>Location</h3>

          <p>Lower Kabete</p>
        </div>

        <div className="info-card">
          <FaClock />

          <h3>Working Hours</h3>

          <p>5:00 AM - 10:00 PM</p>
        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">

        <div className="contact-form-container">

          <span>BOOK A SERVICE</span>

          <h2>
            Request A Booking
          </h2>

          <form className="contact-form">

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
                Car Wash
              </option>

              <option>
                Interior Cleaning
              </option>

              <option>
                Carpet Cleaning
              </option>

              <option>
                Sofa Cleaning
              </option>

              <option>
                Detailing
              </option>
            </select>

            <textarea
              rows="6"
              placeholder="Tell us more about your request..."
            ></textarea>

            <button type="submit">
              Send Request
            </button>

          </form>

        </div>

        <div className="contact-map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.88579479177!2d36.7274988!3d-1.2387963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18ee05bc844f%3A0x73aad45227484f0b!2sLex%20World%20Car%20Wash!5e0!3m2!1sen!2ske!4v1780167712768!5m2!1sen!2ske"
            allowFullScreen=""
            loading="lazy"
            title="LEX Location"
          ></iframe>

        </div>

      </section>

      {/* CTA */}
      <section className="contact-cta">

        <h2>
          Need A Fast Booking?
        </h2>

        <p>
          Chat with us directly on WhatsApp
          and get an instant response.
        </p>

      </section>

    </div>
  );
}

export default Contact;