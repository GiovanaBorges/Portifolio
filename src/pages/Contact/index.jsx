import React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    const { name, email, msg } = e.target;

    if (
      name.value.length <= 0 ||
      email.value.length <= 0 ||
      msg.value.length <= 0
    ) {
      alert("Os campos não podem ser nulos");
    } else {
      emailjs
        .sendForm(
          "service_4osk4gu",
          "template_islp4qg",
          e.target,
          "L2ovCTAi9n2GqgGAa"
        )
        .then(
          (result) => {
            console.log(result);
            alert("Email enviado com sucesso");
          },
          (error) => {
            console.log(error.text);
            alert("Erro ao enviar email");
          }
        );
    }
  }

  return (
    <div className="text-center">
      
      <div
        id="content"
        className="flex justify-center items-center"
      >
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
          className="
            w-full h-screen
            flex flex-col justify-center items-center
            bg-cover bg-center
            px-4
          "
          style={{
            backgroundImage:
              "url('/Portfolio/background-contact.jpeg')",
          }}
        >
          <h1 className="text-6xl mb-4 text-white">Contact</h1>

          <label className="p-2 text-2xl text-white">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 text-lg text-white bg-[#303030] rounded-md w-72"
          />

          <label className="p-2 text-2xl text-white">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 text-lg text-white bg-[#303030] rounded-md w-72"
          />

          <label className="p-2 text-2xl text-white">Message:</label>
          <textarea
            rows="4"
            name="msg"
            placeholder="Message"
            className="p-2 text-lg text-white bg-[#303030] rounded-md w-72"
          ></textarea>

          <button
            type="submit"
            className="
              mt-6
              h-12 w-1/3
              bg-[#4a268d]
              text-white
              text-xl
              rounded-lg
              font-normal
              opacity-50
              transition-all duration-500
              hover:opacity-100
              hover:cursor-pointer
            "
          >
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;