import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    listCart: cookies.get("cart") || [],
  },
  reducers: {
    setProductToCart: (state, action) => {
      //state es el arreglo que marcamos como initial State

      const productFound = state.listCart.find(
        (product) => product.id === action.payload.id
      );

      if (productFound) {
        productFound.count += 1;
        cookies.set("cart", state.listCart, { path: "/" });
      } else {
        state.listCart.push(action.payload);
        cookies.set("cart", state.listCart, { path: "/" });
      }
    },
    deleteProductToCart: (state, action) => {
      state.listCart = state.listCart.filter(
        (prod) => prod.id !== action.payload
      );
      cookies.set("cart", state.listCart, { path: "/" });
    },
    deleteAllProductsToCart: (state) => {
      state.listCart = [];
      cookies.set("cart", state.listCart, { path: "/" });
    },
    incrementProduct: (state, action) => {
      state.listCart.forEach((product) => {
        if (product.id === action.payload) {
          product.count += 1;
          cookies.set("cart", state.listCart, { path: "/" });
        }
      });
    },
    decrementProduct: (state, action) => {
      state.listCart.forEach((product) => {
        if (product.id === action.payload) {
          if (product.count > 1) {
            product.count -= 1;
            cookies.set("cart", state.listCart, { path: "/" });
          }
        }
      });
    },
  },
});

export const {
  setProductToCart,
  deleteProductToCart,
  deleteAllProductsToCart,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
