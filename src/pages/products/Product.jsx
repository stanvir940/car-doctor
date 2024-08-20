import React from "react";

const Product = ({ products }) => {
  const { title, price, image_url } = products;
  return (
    <div className="w-[364px] bg-[#f5f5f5] text-center px-5 py-7 hover:scale-105 hover:bg-slate-300">
      <div className=" w-80 h-52 text-center flex justify-center items-center">
        <img src={image_url} alt="" className="w-80 h-52 bg-cover " />
      </div>
      <div className="w-full pt-5">
        <div className="rating">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-600"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-600"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-600"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-600"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-600"
          />
        </div>
        <h3 className="font-bold text-xl text-black">{title} </h3>
        <p className="font-bold text-orange-500">${price} </p>
      </div>
    </div>
  );
};

export default Product;
