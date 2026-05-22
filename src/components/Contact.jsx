import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // Success Message
    setSuccess("Message Sent Successfully ✅");

    // Clear Form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="Contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            Book your beautiful mehendi design today for wedding,
            engagement, anniversary, festivals, and special occasions.
          </p>

          <div className="info-box">
            <h4>📍 Location</h4>
            <p>Bhubaneswar, Odisha</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 9178597949</p>
          </div>

          <div className="info-box">
            <h4>✉️ Email</h4>
            <p>mehendi@gmail.com</p>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Enter Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>

          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;