import styles from "./callToActionNumber.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function NumberCall() {
  const phoneNumber = "55479";
  const message = "Olá! Gostaria de mais informações, por favor.";

  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return (
    <div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.NumberCall}
      >
        <AiOutlineWhatsApp size={40} className={styles.WhatsappIcon} />{" "}
        <span>Conversar Via WhatsApp</span>
      </a>
    </div>
  );
}
