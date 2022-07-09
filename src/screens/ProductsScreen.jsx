import React, { useState } from "react";
import ProductsList from "../components/ProductsList";

const ProductsScreen = () => {
  const [typeUrl, setTypeUrl] = useState("https://fakestoreapi.com/products");
  const [showAside, setShowAside] = useState(false);
  const handleShowType = (url) => {
    setTypeUrl(url);
    setShowAside(!showAside);
  };
  return (
    <div className="flex-1 bg-primary">
      <div className="flex flex-col">
        {/* Lista de filtros para desktop */}
        <ul className="hidden md:flex justify-center  gap-10  text-white font-bold my-8">
          <li>
            <button
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
              onClick={() => setTypeUrl("https://fakestoreapi.com/products")}
            >
              Todo
            </button>
          </li>
          <li>
            <button
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
              onClick={() =>
                setTypeUrl(
                  "https://fakestoreapi.com/products/category/electronics"
                )
              }
            >
              Electrodomesticos
            </button>
          </li>
          <li>
            <button
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
              onClick={() =>
                setTypeUrl(
                  "https://fakestoreapi.com/products/category/jewelery"
                )
              }
            >
              Joyeria
            </button>
          </li>
          <li>
            <button
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in "
              onClick={() =>
                setTypeUrl(
                  "https://fakestoreapi.com/products/category/men's clothing"
                )
              }
            >
              Hombre
            </button>
          </li>
          <li>
            <button
              className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in"
              onClick={() =>
                setTypeUrl(
                  "https://fakestoreapi.com/products/category/women's clothing"
                )
              }
            >
              Mujer
            </button>
          </li>
        </ul>
        {/* Lista de filtros para mobiles */}
        <button
          onClick={() => setShowAside(!showAside)}
          className="bg-btn_bg text-black px-4 py-2 rounded-md font-bold my-4 text-1xl hover:bg-black hover:text-btn_bg transition-all 0.8s ease-in mx-auto block md:hidden"
        >
          Mostrar Filtros
        </button>
        <div
          className={`${
            showAside && "active"
          } aside  p-1 block md:hidden h-full`}
        >
          <ul className="text-white my-5 flex flex-col gap-10 font-bold text-2xl w-64 relative">
            <span
              onClick={() => setShowAside(!showAside)}
              className="product__filters-btn"
            >
              X
            </span>
            <li>
              <button
                className=" px-3 py-2 rounded-md w-full text-start tracking-widest"
                onClick={() =>
                  handleShowType("https://fakestoreapi.com/products")
                }
              >
                Todo
              </button>
            </li>
            <li>
              <button
                className="px-3 py-2 rounded-md w-full text-start tracking-widest"
                onClick={() =>
                  handleShowType(
                    "https://fakestoreapi.com/products/category/electronics"
                  )
                }
              >
                Electrodomesticos
              </button>
            </li>
            <li>
              <button
                className="px-3 py-2 rounded-md w-full text-start tracking-widest"
                onClick={() =>
                  handleShowType(
                    "https://fakestoreapi.com/products/category/jewelery"
                  )
                }
              >
                Joyeria
              </button>
            </li>
            <li>
              <button
                className="px-3 py-2 rounded-md w-full text-start tracking-widest"
                onClick={() =>
                  handleShowType(
                    "https://fakestoreapi.com/products/category/men's clothing"
                  )
                }
              >
                Hombre
              </button>
            </li>
            <li>
              <button
                className="px-3 py-2 rounded-md w-full text-start tracking-widest"
                onClick={() =>
                  handleShowType(
                    "https://fakestoreapi.com/products/category/women's clothing"
                  )
                }
              >
                Mujer
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  text-primary p-5">
        <ProductsList url={typeUrl} />
      </div>
    </div>
  );
};

export default ProductsScreen;
