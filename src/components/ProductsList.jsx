import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";
import ProductItem from "./ProductItem";
import Skeleton from "./Skeleton";

const ProductsList = ({ url }) => {
  const [products, setProducts] = useState(null);

  const getProducts = async (url) => {
    setProducts(null);
    const data = await fetchProducts(url);
    setProducts(data);
  };

  useEffect(() => {
    getProducts(url);
  }, [url]);

  return (
    <>
      {products ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <Skeleton></Skeleton>
      )}
    </>
  );
};

export default ProductsList;
