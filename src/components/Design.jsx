import "./Design.css";
import bridalImg from "../assets/image(10).jpg";
import arabicImg from "../assets/image(11).jpg";
import royalImg from "../assets/image(12).jpg";

function Design() {
  return (
    <section className="design" id="designs">
      <h2>Our Mehendi Designs</h2>

      <div className="design-container">
        <div className="design-card">
          <img src={bridalImg} alt="Bridal Mehendi" />
          <h3>Bridal Mehendi</h3>
        </div>

        <div className="design-card">
          <img src={arabicImg} alt="Arabic Mehendi" />
          <h3>Arabic Mehendi</h3>
        </div>

        <div className="design-card">
          <img src={royalImg} alt="Royal Mehendi" />
          <h3>Royal Mehendi</h3>
        </div>
      </div>
    </section>
  );
}

export default Design;
