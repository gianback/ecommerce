import React, { memo } from "react";
import { useDispatch } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
  deleteProductToCart,
} from "../reducers/cart/CartSlice";

const CartItem = memo(({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = (id) => dispatch(deleteProductToCart(id));

  return (
    <div
      key={item.id}
      className=" text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 rounded-md  mb-10 "
    >
      <div className="flex flex-column items-center justify-center">
        <img src={item.image} alt={item.title} className="cartItem__img" />
      </div>
      <div className="flex flex-col gap-5">
        <h1>{item.title}</h1>
        <p>Unidad: {item.price}$</p>
        <div>
          <button
            onClick={() => dispatch(decrementProduct(item.id))}
            className="mx-2 bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl"
          >
            -
          </button>
          {item.count}
          <button
            onClick={() => dispatch(incrementProduct(item.id))}
            className="mx-2 bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl "
          >
            +
          </button>
        </div>
        <p className="mx-2 font-bold text-xl">
          {(item.count * item.price).toFixed(2)} $
        </p>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-center items-center text-center ">
        <button
          onClick={() => handleRemoveProduct(item.id)}
          className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in w-full sm:w-3/4 lg:w-auto"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
});

export default CartItem;
