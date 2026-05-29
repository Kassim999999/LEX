import "../css/Services.css";
import {
  FaCarSide,
  FaCouch,
  FaPumpSoap,
  FaBroom,
  FaSprayCanSparkles,
  FaShower
} from "react-icons/fa6";

function Services() {
  const services = [
    {
      icon: <FaCarSide />,
      title: "Premium Car Wash",
      text: "Luxury exterior and interior carwash with premium detailing."
    },
    {
      icon: <FaCouch />,
      title: "Sofa Cleaning",
      text: "Deep cleaning that restores freshness and removes stains."
    },
    {
      icon: <FaPumpSoap />,
      title: "Carpet Cleaning",
      text: "Professional carpet washing for homes and offices."
    },
    {
      icon: <FaSprayCanSparkles />,
      title: "Detailing & Polishing",
      text: "Bring back shine with premium polishing and finishing."
    },
    {
      icon: <FaBroom />,
      title: "Interior Cleaning",
      text: "Detailed cleaning for homes, offices and interiors."
    },
    {
      icon: <FaShower />,
      title: "Steam Cleaning",
      text: "Modern deep-clean technology for spotless results."
    }
  ];

  return (
    <section className="services" id="services">

      <div className="section-header" data-aos="fade-up">
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
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;