import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const { _id, title, price, img } = products;
  return (
    <div className="w-[364px] bg-[#f5f5f5] text-center px-5 py-7 hover:bg-slate-300">
      <div className=" w-80 h-52 text-center flex justify-center items-center">
        <img src={img} alt="" className="w-80 h-52 bg-cover " />
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
        <div>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary w-full text-white hover:scale-105">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
