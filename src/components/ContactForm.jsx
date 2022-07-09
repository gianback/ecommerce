import React from "react";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
const ContactForm = () => {
  const emailInput = useRef();
  const affairInput = useRef();
  const descriptionInput = useRef();
  const [formData, setFormData] = useState({
    email: "",
    affair: "",
    description: "",
  });

  const { email, affair, description } = formData;
  const regEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputBlur = (e) => {
    const inputName = e.target.name;
    const inputClassList = e.target.classList;
    if (inputName === "email") {
      !regEx.test(e.target.value)
        ? inputClassList.add("outline-red-500")
        : inputClassList.remove("outline-red-500");
    } else {
      !e.target.value.trim() > 0
        ? inputClassList.add("outline-red-500")
        : inputClassList.remove("outline-red-500");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //evalua el valor del input email si es verdadero o no
    const emailTest = regEx.test(email.trim());

    if (
      emailTest &&
      affair.trim().length > 0 &&
      description.trim().length > 0
    ) {
      Swal.fire("Listo!", "Su mensaje ha sido enviado", "success");
      setFormData({
        email: "",
        affair: "",
        description: "",
      });
      return;
    } else {
      !emailTest && emailInput.current.classList.add("outline-red-500");
      !affair.trim().length > 0 &&
        affairInput.current.classList.add("outline-red-500");
      !description.trim().length > 0 &&
        descriptionInput.current.classList.add("outline-red-500");
    }
  };
  return (
    <form className="contact__form  bg-secundary relative flex flex-col justify-center items-stretch p-3 lg:p-5">
      <div className="contact__form-container flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <label className="text-white">Email:</label>
          <input
            type="email"
            className="outline-none p-1 rounded-md"
            placeholder="example@example-com"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            ref={emailInput}
            required
          />

          <label className="text-white">Asunto:</label>
          <input
            type="text"
            name="affair"
            value={affair}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            ref={affairInput}
            placeholder="Asunto"
            className=" outline-none p-1 rounded-md"
          />

          <label className="text-white">Descripción:</label>
          <textarea
            className="resize-none outline-none p-1 rounded-md h-36 "
            name="description"
            value={description}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Tu mensaje"
            ref={descriptionInput}
          ></textarea>
        </div>
        <div className="mt-10 flex flex-col lg:self-end">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
