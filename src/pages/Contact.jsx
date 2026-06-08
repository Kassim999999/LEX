import "../css/Contact.css";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  service: "",
  message: ""
});

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = (e) => {
  e.preventDefault();

  const text = `
Hello LEX Carwash

Name: ${formData.name}

Phone: ${formData.phone}

Service: ${formData.service}

Message:
${formData.message}
`;

  const whatsappUrl =
    `https://wa.me/254748444111?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
};

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

          <form
  className="contact-form"
  onSubmit={handleSubmit}
>

<input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

 <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
/>

<select
  className="service-select"
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
>
  <option value="">Select Service</option>
  <option value="Car Wash">Car Wash</option>
  <option value="Interior Cleaning">Interior Cleaning</option>
  <option value="Carpet Cleaning">Carpet Cleaning</option>
  <option value="Sofa Cleaning">Sofa Cleaning</option>
  <option value="Detailing">Detailing</option>
</select>

<textarea
  rows="6"
  name="message"
  placeholder="Tell us more about your request..."
  value={formData.message}
  onChange={handleChange}
></textarea>

            <button type="submit">
              Send To WhatsApp
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