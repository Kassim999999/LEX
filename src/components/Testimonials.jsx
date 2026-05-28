import "../css/Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {

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
          Trusted by hundreds of happy clients
          for premium carwash and cleaning services.
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
  );
}

export default Testimonials;