import "../css/Pricing.css";

function Pricing() {

  const pricingCategories = [
    {
      title: "Carwash Services",
      services: [
        {
          name: "Normal Wash",
          prices: [300, 350, 400, 500]
        },
        {
          name: "Vacuum Wash (Dry)",
          prices: [400, 400, 400, 500]
        },
        {
          name: "Vacuum Wash (Wet)",
          prices: [1500, 1700, 2000, 2300]
        },
        {
          name: "Underwash",
          prices: [400, 400, 400, 500]
        },
        {
          name: "Engine Wash (Normal)",
          prices: [600, 400, 400, 500]
        },
        {
          name: "Engine Wash (Steam)",
          prices: [1800, 1800, 1800, 1800]
        },
        {
          name: "Engine Wash (Compressor)",
          prices: [350, 350, 350, 350]
        },
        {
          name: "Wash Vacuum",
          prices: [700, 750, 800, 1000]
        }
      ]
    },

    {
      title: "Shampooing & Interior Cleaning",
      services: [
        {
          name: "Shampooing (Roof)",
          prices: [1000, 1000, 1000, 1000]
        },
        {
          name: "Shampooing (Floor & Mats)",
          prices: [600, 600, 600, 600]
        },
        {
          name: "Shampooing (Seatbelts & Seats)",
          prices: [2300, 2300, 2300, 2300]
        },
        {
          name: "Leather Care (Polish Only)",
          prices: [500, 500, 500, 800]
        },
        {
          name:
            "Leather Care (Cleaning & Conditioning)",
          prices: [1500, 1500, 1500, 2000]
        },
        {
          name:
            "Interior Plastics Restoration",
          prices: [1000, 1000, 1000, 1000]
        },
        {
          name: "Dashboard Polish",
          prices: [400, 400, 400, 400]
        },
        {
          name:
            "All Interior Plastics Polish",
          prices: [800, 800, 800, 800]
        },
        {
          name: "Compressor (Interior)",
          prices: [300, 300, 300, 300]
        },
        {
          name: "Compressor (Engine Bay)",
          prices: [300, 300, 300, 300]
        },
        {
          name: "Steamer (Engine Bay)",
          prices: [1800, 1800, 1800, 1800]
        },
        {
          name: "Steamer (AC Vents)",
          prices: [600, 600, 600, 600]
        },
        {
          name: "Aircone Refill",
          prices: [2000, 2000, 2000, 2000]
        },
        {
          name: "Baby Seat Cleaning",
          prices: [500, 500, 500, 500]
        }
      ]
    },

    {
      title: "Detailing & Restoration",
      services: [
        {
          name: "Waxing / Polishing (By Hand)",
          prices: [400, 450, 500, 700]
        },
        {
          name:
            "Waxing / Polishing (By Machine)",
          prices: [1500, 1700, 2000, 2500]
        },
        {
          name: "Buffing",
          prices: [4000, 4500, 5000, 5300]
        },
        {
          name: "Watermark Removal",
          prices: [1500, 1500, 1500, 1800]
        },
        {
          name:
            "Rim Detailing Restoration",
          prices: [1600, 1600, 1600, 1600]
        },
        {
          name:
            "Headlight Restoration",
          prices: [1700, 1700, 1700, 1700]
        }
      ]
    }
  ];

  const combos = [
    {
      title: "Executive Full Wash",
      desc:
        "Full body wash, vacuum, engine wash, wet shampoo of seatbelt, roof, floor, carpet, mats, interior & exterior polish, tyre shine.",
      prices: [5000, 6500, 7000, 7300]
    },
    {
      title: "Interior Full Wash",
      desc:
        "Seat, seatbelt, roof, floor, mats, wet shampoo, stain removal from interior plastics, interior polishing & perfuming.",
      prices: [4000, 4500, 5000, 5500]
    },
    {
      title: "Strip Cleaning",
      desc:
        "Interior full wash but seats removed from vehicle for deeper cleaning.",
      prices: [5000, 5500, 6000, 6500]
    }
  ];

  return (
    <div className="pricing-page">

      <section className="pricing-hero">
        <span>LEX PRICE LIST</span>

        <h1>
          Premium Carwash &
          Cleaning Pricing
        </h1>

        <p>
          Luxury cleaning services with
          transparent pricing.
        </p>
      </section>

      {pricingCategories.map(
        (category, index) => (
          <section
            className="pricing-section"
            key={index}
          >
            <h2>{category.title}</h2>

            <div className="pricing-table">

              <div className="pricing-head">
                <span>Service</span>
                <span>Saloon</span>
                <span>Mini SUV</span>
                <span>SUV</span>
                <span>Van</span>
              </div>

              {category.services.map(
                (service, i) => (
                  <div
                    className="pricing-row"
                    key={i}
                  >
                    <span>
                      {service.name}
                    </span>

                    {service.prices.map(
                      (price, idx) => (
                        <span key={idx}>
                          KES {price}
                        </span>
                      )
                    )}
                  </div>
                )
              )}

            </div>
          </section>
        )
      )}

      <section className="combo-section">
        <h2>Premium Combo Packages</h2>

        <div className="combo-grid">

          {combos.map((combo, index) => (
            <div
              className="combo-card"
              key={index}
            >
              <h3>{combo.title}</h3>

              <p>{combo.desc}</p>

              <div className="combo-prices">
                <span>
                  Saloon:
                  KES {combo.prices[0]}
                </span>

                <span>
                  Mini SUV:
                  KES {combo.prices[1]}
                </span>

                <span>
                  SUV:
                  KES {combo.prices[2]}
                </span>

                <span>
                  Van:
                  KES {combo.prices[3]}
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="extras">
        <h2>Special Services</h2>

        <div className="extras-grid">
          <div className="extra-card">
            <h3>Motorbike</h3>
            <p>KES 200</p>
          </div>

          <div className="extra-card">
            <h3>Carpets</h3>
            <p>Normal KES 30 PSF</p>
            <p>Fluffy KES 35 PSF</p>
          </div>
        </div>
      </section>

      <section className="disclaimer">
        <h3>Disclaimer</h3>

        <p>
          Engine wash is at owner's risk.
          Valuables should be declared to
          supervisors on arrival. LEX Carwash
          & Carpet Cleaners will not be held
          responsible for undeclared valuables.
        </p>
      </section>

    </div>
  );
}

export default Pricing;