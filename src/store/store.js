import { configureStore } from "@reduxjs/toolkit";
//reducers
import cartReducer from "../reducers/cart/CartSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
