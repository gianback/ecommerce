import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
const Navbar = () => {
  const { listCart } = useSelector((state) => state.cart);
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar bg-secundary text-primary font-bold flex items-center justify-between px-2 z-10">
      {/* nav desktop */}
      <div className="flex-1 flex justify-between mx-2 lg:mx-10">
        <img src={logo} alt="logo" className="h-10" />
        <ul className="flex-1 hidden justify-center items-center gap-20 lg:flex text-2xl">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/products">Productos</NavLink>
          <NavLink to="/about-us">Nosotros</NavLink>
          <NavLink to="/contact">Contáctanos</NavLink>
        </ul>
        <div className="flex items-center gap-3">
          <NavLink to="/cart">
            <button
              onClick={() => active === true && setActive(!active)}
              className={listCart.length > 0 ? "navbar__btn-cart" : ""}
            >
              <img src={cart} alt="icon" className=" w-10 h-10 " />
            </button>
          </NavLink>
          <button
            onClick={() => setActive(!active)}
            className={`hamburger hamburger--collapse flex lg:hidden ${
              active && "is-active"
            } pr-0 pl-2`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      {/* nav desktop */}
      {/* Nav mobile */}
      <div
        className={`${
          active
            ? "flex animate__animated animate__fadeInLeft"
            : "animate__animated animate__fadeOutLeft"
        } mavbar__modal flex items-center justify-center lg:hidden`}
      >
        <ul className="flex flex-col gap-10 text-2xl">
          <NavLink onClick={() => setActive(!active)} to="/">
            Inicio
          </NavLink>
          <NavLink onClick={() => setActive(!active)} to="/products">
            Productos
          </NavLink>
          <NavLink onClick={() => setActive(!active)} to="/about-us">
            Nosotros
          </NavLink>
          <NavLink onClick={() => setActive(!active)} to="/contact">
            Contáctanos
          </NavLink>
        </ul>
      </div>
      {/* Nav mobile */}
    </nav>
  );
};

export default Navbar;
