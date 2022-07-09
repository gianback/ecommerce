import React from "react";

import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactScreen = () => {
  const contactData = [
    {
      type: "📱",
      info: ["+51 987654321", "+51 123456789"],
    },
    {
      type: "✉️",
      info: ["always@rhcontact.com", "always_2@rhcontact.com"],
    },
    {
      type: "🏢",
      info: ["600 Javier Prado", "Piso 5 Int. 105", "Lima, Perú"],
    },
  ];
  return (
    <section className="flex-1 flex justify-center items-center bg-primary p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden h-auto lg:h-3/5 w-auto lg:w-3/5">
        <div className="contact__data font-medium flex flex-col justify-center items-start p-3 lg:p-5">
          <div className="mb-3">
            <h1 className="text-lg lg:text-3xl text-center">
              Mantengámonos en contacto
            </h1>
            <p className="text-base lg:text-1xl text-center">
              Estamos abiertos a sugerencias en nuestro chat.
            </p>
          </div>
          <ContactInfo data={contactData} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactScreen;
