import mehendi1 from "../assets/mehendi1.jpg";
import mehendi2 from "../assets/mehendi2.jpg";
import mehendi3 from "../assets/mehendi3.jpg";
import mehendi4 from "../assets/mehendi4.jpg";
import mehendi5 from "../assets/mehendi5.jpg";
import mehendi6 from "../assets/mehendi6.jpg";
import "./Gallery.css";

function Gallery() {
  const images = [
    {
      id: 1,
      image: mehendi1,
    },
    {
      id: 2,
      image: mehendi2,
    },
    {
      id: 3,
      image: mehendi3,
    },
    {
      id: 4,
      image: mehendi4,
    },
    {
      id: 5,
      image: mehendi5,
    },
    {
      id: 6,
      image: mehendi6,
    },
  ];

  return (
   <section className="gallery" id="Gallery">
      <h2>Our Mehendi Gallery</h2>

      <div className="gallery-box">
        {images.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt="mehendi design" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
