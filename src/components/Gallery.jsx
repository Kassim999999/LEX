import "../css/Gallery.css";

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";

function Gallery() {
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  return (
    <section className="gallery" id="gallery">

      <div
        className="section-header"
        data-aos="fade-up"
      >
        <span>OUR WORK</span>

        <h2>
          Luxury Finish,
          Spotless Results
        </h2>

        <p>
          See the premium care and attention
          we bring to every vehicle and
          cleaning service.
        </p>
      </div>

      <div className="gallery-grid">

        {galleryImages.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={image}
              alt="LEX Gallery"
            />

            <div className="gallery-overlay">
              <h3>LEX Premium Care</h3>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;