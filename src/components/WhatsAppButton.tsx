"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "+917062844125"; // apna WhatsApp number yaha daalo
  const message = "Hello! I want to inquire about your services."; // default message

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
