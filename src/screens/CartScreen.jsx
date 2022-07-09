import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import Swal from "sweetalert2";
import { deleteAllProductsToCart } from "../reducers/cart/CartSlice";
const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [toPay, setToPay] = useState(0);

  const setTotalToPay = () => {
    let result = 0;
    cart.listCart.forEach((item) => {
      result += item.price * item.count;
    });
    setToPay(result.toFixed(2));
  };

  const handleDeleteAllProducts = () => {
    Swal.fire({
      title: `¿Estas seguro?`,
      text: `Se eliminará todos los artículos del carrito de compras`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0bc8a5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAllProductsToCart());
      }
    });
  };

  const payProducts = () => {
    Swal.fire("Pagado con éxito!", "Gracias por su preferencia", "success");
    dispatch(deleteAllProductsToCart());
    navigate("/products");
  };

  useEffect(() => {
    setTotalToPay();
  }, [cart.listCart]);

  return (
    <div className="flex-1 bg-primary p-3 md:p-0">
      <div className="container mx-auto hidden md:block cart__header">
        <h1 className="text-center uppercase my-5 text-white text-3xl font-bold">
          CARRITO DE COMPRAS
        </h1>
      </div>
      {cart.listCart.length < 1 ? (
        <div>
          <h2 className="text-center uppercase my-5 text-white text-xl font-bold">
            No hay productos en el carrito
          </h2>
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div className="col-span-1 order-1 md:order-0  lg:col-span-3">
            {cart.listCart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col col-span-1 order-0 md:order-1 md:col-span-1 lg:col-span-1 p-4 gap-5">
            <button
              onClick={handleDeleteAllProducts}
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold  text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
            >
              Vaciar carrito
            </button>
            <p className="flex items-center justify-center text-white">
              TOTAL A PAGAR: <span className=" mx-4 text-3xl"> {toPay}$</span>
            </p>
            <button
              onClick={payProducts}
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold  text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
            >
              Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
