import "../css/WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {

  const phoneNumber = "254748444111"; // replace with actual number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
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