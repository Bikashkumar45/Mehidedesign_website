import axios from "axios";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert("Message Failed");
    }
  };

  return (
    <div className="contact-container"  id="Contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

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

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
