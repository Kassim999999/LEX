import "../css/Services.css";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery9.jpg";
import gallery3 from "../assets/images/gallery10.jpg";
import gallery4 from "../assets/images/gallery11.jpg";
import gallery5 from "../assets/images/gallery6.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

function Services() {
  const services = [
    {
      image: gallery1,
      category: "CARWASH",
      title: "Premium Car Wash",
      text: "Luxury exterior and interior carwash with premium cleaning products and spotless finishing."
    },
    {
      image: gallery2,
      category: "SOFA CLEANING",
      title: "Sofa Cleaning",
      text: "Deep cleaning that removes stains, dust and odors while restoring freshness."
    },
    {
      image: gallery3,
      category: "CARPET CLEANING",
      title: "Carpet Cleaning",
      text: "Professional carpet washing and stain removal for homes and businesses."
    },
    {
      image: gallery4,
      category: "DETAILING",
      title: "Detailing & Polishing",
      text: "Restore shine and protection with premium detailing and polishing services."
    },
    {
      image: gallery5,
      category: "INTERIOR CARE",
      title: "Interior Cleaning",
      text: "Complete cleaning solutions for vehicle interiors."
    },
    {
      image: gallery6,
      category: "STEAM CLEANING",
      title: "Steam Cleaning",
      text: "Advanced steam cleaning technology for deeper sanitization and spotless results."
    }
  ];

  return (
    <section className="services">

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
          From luxury carwash to carpet and sofa cleaning,
          we deliver premium care with spotless results.
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
            <div className="service-image-wrapper">

              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-overlay">
                <span>
                  {service.category}
                </span>
              </div>

            </div>

            <div className="service-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;