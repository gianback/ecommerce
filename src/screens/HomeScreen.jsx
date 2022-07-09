import React from "react";
import hero from "../assets/hero.svg";
import { NavLink } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div className="h-full flex-1 flex justify-center items-center bg-primary text-secundary px-2 md:px-4">
      <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center ">
        <div className="my-8">
          <h1 className="text-center md:text-start text-4xl lg:text-5xl xl:text-6xl lg:max-w-lg">
            Encuentra tu estilo que
            <span className="uppercase text-white"> siempre</span> buscaste!
          </h1>
          <ul className="mt-8 text-2xl lg:text-3xl">
            <li className="my-2">
              <i className="fa-solid fa-circle-check text-white mr-2"></i>
              Material de alta calidad
            </li>
            <li className="my-2">
              <i className="fa-solid fa-circle-check text-white mr-2"></i>
              Garantia de servicio de por vida
            </li>
            <li className="my-2">
              <i className="fa-solid fa-circle-check text-white mr-2"></i>
              Diseñado por diseñadores de clase mundial
            </li>
          </ul>

          <div className="flex justify-center lg:justify-start">
            <NavLink to="/products">
              <button className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in">
                Ver productos
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          <img src={hero} alt="hero" className="home__img-hero" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
