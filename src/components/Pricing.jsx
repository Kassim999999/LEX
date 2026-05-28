import "../css/Pricing.css";

function Pricing() {
  const pricingPlans = [
    {
      title: "Basic Wash",
      price: "Ksh 500",
      services: [
        "Exterior Wash",
        "Tyre Cleaning",
        "Interior Dusting",
        "Window Cleaning"
      ]
    },
    {
      title: "Premium Wash",
      price: "Ksh 1,200",
      popular: true,
      services: [
        "Full Car Wash",
        "Interior Vacuum",
        "Dashboard Polish",
        "Tyre Shine",
        "Window Cleaning"
      ]
    },
    {
      title: "Executive Detail",
      price: "Ksh 2,500",
      services: [
        "Deep Interior Cleaning",
        "Wax & Polish",
        "Engine Wash",
        "Premium Detailing",
        "Full Exterior Finish"
      ]
    }
  ];

  return (
    <section className="pricing" id="pricing">

      <div
        className="section-header"
        data-aos="fade-up"
      >
        <span>OUR PRICING</span>

        <h2>
          Premium Services
          At Fair Pricing
        </h2>

        <p>
          Luxury care without overpriced costs.
          Choose the perfect package for your vehicle.
        </p>
      </div>

      <div className="pricing-grid">

        {pricingPlans.map((plan, index) => (
          <div
            className={`pricing-card ${
              plan.popular ? "popular" : ""
            }`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >

            {plan.popular && (
              <div className="popular-tag">
                Most Popular
              </div>
            )}

            <h3>{plan.title}</h3>

            <h1>{plan.price}</h1>

            <ul>
              {plan.services.map((service, i) => (
                <li key={i}>
                  ✓ {service}
                </li>
              ))}
            </ul>

            <button>
              Book Service
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Pricing;