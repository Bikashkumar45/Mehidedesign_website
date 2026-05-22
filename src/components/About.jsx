import "./About.css";
import mehendiImg from "../assets/mehendi.jpg";
function About() {
  return (
    <section className="about" id="About">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img src={mehendiImg} alt="mehendi" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="tag">Professional Mehendi Artist</span>

          <h2>Creating Beautiful Mehendi Designs With Love ❤️</h2>

          <p>
            We specialize in bridal, Arabic, royal, and modern mehendi designs
            for weddings, festivals, engagements, and special events.
          </p>

          {/* Features */}
          <div className="features">
            <div className="feature-box">
              <h3>Bridal Mehendi</h3>
              <p>Elegant bridal patterns with modern style.</p>
            </div>

            <div className="feature-box">
              <h3>Arabic Design</h3>
              <p>Stylish Arabic mehendi with trendy looks.</p>
            </div>

            <div className="feature-box">
              <h3>Ring Ceremony</h3>
              <p>Modern mehendi patterns for engagement functions.</p>
            </div>
            <div className="feature-box">
              <h3>Reception Mehendi</h3>
              <p>Stylish and elegant mehendi for reception parties.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <a href="https://wa.me/9178597949">
              <button className="btn1">Book Now</button>
            </a>
            <a href="#designs">
              <button className="btn2">View Designs</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
