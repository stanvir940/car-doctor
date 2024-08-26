import React from "react";
import img1 from "../../../src/assets/images/products/1.png";
const FunBanner = () => {
  return (
    <div id="slide1" className="relative w-full">
      <img src={img1} className="w-1/2 h-1/2 bg-cover" />

      <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
        <div className="text-white space-y-7 pl-12 w-1/3">
          <div>
            <h1 className="text-5xl font-bold">My Bookings</h1>
            <h4 className="text-xl font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h4>
          </div>
          <div className="flex ">
            <button className="btn btn-warning w-36 rounded-sm">Warning</button>
            <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
              Primary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunBanner;
