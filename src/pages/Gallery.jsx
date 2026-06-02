import "../css/Gallery.css";
import { useState } from "react";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";

function Gallery() {
 const [selectedIndex, setSelectedIndex] = useState(null);

 const nextImage = () => {
  setSelectedIndex(
    (selectedIndex + 1) % galleryImages.length
  );
};

const prevImage = () => {
  setSelectedIndex(
    (selectedIndex - 1 + galleryImages.length) %
      galleryImages.length
  );
};

  const galleryImages = [
    {
      image: gallery1,
      category: "Carwash",
      title: "Luxury Exterior Wash"
    },
    {
      image: gallery2,
      category: "Detailing",
      title: "Premium Detailing"
    },
    {
      image: gallery3,
      category: "Cleaning",
      title: "Sofa Cleaning"
    },
    {
      image: gallery4,
      category: "Carwash",
      title: "Interior Vacuum"
    },
    {
      image: gallery5,
      category: "Cleaning",
      title: "Deep Carpet Cleaning"
    },
    {
      image: gallery6,
      category: "Detailing",
      title: "Luxury Finish"
    },
    {
      image: gallery7,
      category: "Carwash",
      title: "Premium Foam Wash"
    },
    {
      image: gallery8,
      category: "Cleaning",
      title: "Spotless Results"
    }
  ];

  return (
    <div className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">

        <div
          className="gallery-hero-content"
          data-aos="fade-up"
        >
          <span>OUR GALLERY</span>

          <h1>
            Premium Cleaning
            Results That Speak
          </h1>

          <p>
            Explore our premium carwash,
            detailing and cleaning work
            crafted for spotless results.
          </p>
        </div>

      </section>

      {/* FILTERS */}
      <section className="gallery-filter-section">

        <div className="gallery-filters">
          <button className="active">
            All
          </button>

          <button>
            Carwash
          </button>

          <button>
            Detailing
          </button>

          <button>
            Cleaning
          </button>
        </div>

      </section>

      {/* GALLERY GRID */}
      <section className="gallery-grid-section">

        <div className="masonry-grid">

          {galleryImages.map(
            (item, index) => (
              <div
                className="gallery-card"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={
                  index * 100
                }
              >
<img
  src={item.image}
  alt={item.title}
  onClick={() => setSelectedIndex(index)}
/>


                <div className="gallery-overlay">
                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          )}

        </div>

      </section>

      {/* CTA */}
      <section className="gallery-cta">

        <div
          className="gallery-cta-content"
          data-aos="fade-up"
        >
          <span>
            PREMIUM EXPERIENCE
          </span>

          <h2>
            Ready For A
            Spotless Finish?
          </h2>

          <p>
            Let LEX bring luxury
            cleaning and detailing
            to your doorstep.
          </p>

          <button>
            Book Appointment
          </button>
        </div>

      </section>


      {/* LIGHTBOX */}
{selectedIndex !== null && (
  <div
    className="lightbox"
    onClick={() => setSelectedIndex(null)}
  >
    <span
      className="close-lightbox"
      onClick={() => setSelectedIndex(null)}
    >
      ×
    </span>

    <button
      className="lightbox-arrow left"
      onClick={(e) => {
        e.stopPropagation();
        prevImage();
      }}
    >
      ❮
    </button>

    <img
      src={galleryImages[selectedIndex].image}
      alt="Preview"
      onClick={(e) => e.stopPropagation()}
    />

    <button
      className="lightbox-arrow right"
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
    >
      ❯
    </button>

    <div className="image-counter">
      {selectedIndex + 1} / {galleryImages.length}
    </div>
  </div>
)}

    </div>
  );
}

export default Gallery;