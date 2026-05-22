import { useState } from "react";
import "./WhatsAppChat.css";

function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="whatsapp-container">
      {/* Popup Box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>Mehendi Support</h3>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            <p>👋 Hello!</p>
            <p>How can we help you?</p>

            <a
              href="https://wa.me/9178597949?text=I want Bridal Mehendi Booking"
              target="_blank"
            >
              <button>Bridal Booking</button>
            </a>

            <a
              href="https://wa.me/9178597949?text=Send Mehendi Price Details"
              target="_blank"
            >
              <button>Price Details</button>
            </a>

            <a
              href="https://wa.me/9178597949?text=Show Latest Mehendi Designs"
              target="_blank"
            >
              <button>Latest Designs</button>
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="whatsapp-btn" onClick={() => setOpen(!open)}>
        💬
      </div>
    </div>
  );
}

export default WhatsAppChat;
