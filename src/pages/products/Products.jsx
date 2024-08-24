import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className=" text-center flex justify-center items-center flex-col my-32 space-y-12">
      <div className=" space-y-5">
        <h2 className="font-bold text-orange-600">Popular Product</h2>
        <h4 className="text-black text-5xl font-bold">Browse Our Products</h4>
        <p className="text-gray-800">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((data, idx) => (
          <Product key={idx} products={data}></Product>
        ))}
      </div>
      <button className="btn btn-outline btn-error">More Products</button>
    </div>
  );
};

export default Products;
