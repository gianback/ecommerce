import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import "animate.css";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
