import "./Services.css";

function Services() {
  const data = [
    {
      title: "Bridal Mehendi",
      desc: "Elegant bridal mehendi with royal traditional designs.",
    },
    {
      title: "Arabic Design",
      desc: "Stylish Arabic patterns with modern touch.",
    },
    {
      title: "Ring Ceremony",
      desc: "Special mehendi designs for engagement functions.",
    },
    {
      title: "Festival Design",
      desc: "Creative festive mehendi for every celebration.",
    },
    {
      title: "Anniversary Design",
      desc: "Beautiful anniversary mehendi artwork.",
    },
    {
      title: "Custom Design",
      desc: "Personalized mehendi designs as per your choice.",
    },

    // New 4 Cards

    {
      title: "Front Hand Mehendi",
      desc: "Beautiful front hand mehendi with detailed patterns.",
    },
    {
      title: "Back Hand Mehendi",
      desc: "Stylish back hand designs for every occasion.",
    },
  ];

  return (
    <section className="services" id="service">
      <h2>Our Services</h2>

      <p className="service-text">
        We provide elegant and professional mehendi designs for all occasions
        with creative patterns and modern styles.
      </p>

      <div className="service-box">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon">✨</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
