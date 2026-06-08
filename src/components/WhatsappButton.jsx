import "../css/WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const phoneNumber = "254748444111";

  const message = encodeURIComponent(
    `Hello LEX Carwash & Cleaners,

I'm interested in your premium cleaning services and would like to request a booking.

Thank you.`
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
      <span>Chat With Us</span>
    </a>
  );
}

export default WhatsappButton;