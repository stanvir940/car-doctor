import React from "react";
import "boxicons/css/boxicons.min.css";

const Comp_ = ({ services }) => {
  const { img, title, price } = services;
  return (
    <div className="rounded-lg w-fit bg-[#fbfbfb] text-black flex justify-start flex-col items-start p-6 hover:scale-105 hover:bg-[#f1f1f1]">
      <img src={img} alt="" className="w-[314px] h-[208px] rounded" />
      <h2 className="text-xl">{title}</h2>
      <div className="flex justify-between items-center w-full">
        <h4 className="text-orange-500">{price} </h4>
        <i class="bx bx-right-arrow-alt text-orange-600 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Comp_;
