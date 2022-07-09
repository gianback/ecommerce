import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductToCart } from "../reducers/cart/CartSlice";

import Swal from "sweetalert2";
const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, title, image, price, category } = product;
  const productToCart = {
    id,
    title,
    image,
    price,
    count: 1,
  };

  const setItemtoCart = () => {
    dispatch(setProductToCart(productToCart));
    Swal.fire({
      title: "Producto agregado!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#0bc8a5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ir al carrito",
      cancelButtonText: "Seguir comprando",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };
  return (
    <div className="bg-white rounded-md p-4 flex flex-col justify-between items-center text-center gap-3 ">
      <div>
        <img src={image} alt={category} className="product__img" />
      </div>
      <h1>{title}</h1>
      <p className="text-xl font-bold">{price.toFixed(2)} $</p>
      <button
        onClick={setItemtoCart}
        className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductItem;
