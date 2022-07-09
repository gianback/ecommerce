import { Routes, Route } from "react-router-dom";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import AboutUsScreen from "../screens/AboutUsScreen";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/about-us" element={<AboutUsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </>
  );
};

export default AppRouter;
