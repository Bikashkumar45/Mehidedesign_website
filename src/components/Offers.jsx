import "./Offers.css";

function Offers() {
  const offersData = [
    {
      title: "50% OFF Bridal Booking",
      desc: "Book today and get amazing bridal mehendi discounts.",
      icon: "💍",
    },
    {
      title: "Festival Special",
      desc: "Get beautiful festive mehendi designs at low prices.",
      icon: "🎉",
    },
    {
      title: "Couple Mehendi Offer",
      desc: "Special offers available for wedding couples.",
      icon: "❤️",
    },
    {
      title: "Free Glitter Design",
      desc: "Free glitter touch with selected premium packages.",
      icon: "✨",
    },
  ];

  return (
    <section className="offers" id="offers">
      <h2>Special Offers</h2>

      <div className="offers-container">
        {offersData.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-icon">{offer.icon}</div>

            <h3>{offer.title}</h3>

            <p>{offer.desc}</p>

            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;
