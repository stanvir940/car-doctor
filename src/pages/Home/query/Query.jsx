import React from "react";
import img from "../../../assets/icons/check.svg";

const Query = () => {
  return (
    <div className="w-full h-fit px-16 bg-[#1d1d1d] py-20 rounded-md flex">
      <div className="w-1/3 flex">
        <div>
          <i class="bx bxs-calendar-check w-10 h-10 text-3xl text-orange-600"></i>
        </div>
        <div>
          <p className="text-white">We are open monday-friday</p>
          <p className="text-xl text-white">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="w-1/3 flex">
        <div>
          <i class="bx bx-phone-call w-10 h-10 text-3xl text-orange-600"></i>
        </div>
        <div>
          <p className="text-white">Have a Question</p>
          <p className="text-xl text-white">+2546 251 2658</p>
        </div>
      </div>
      <div className="w-1/3 flex">
        <div>
          <i class="bx bxs-calendar-check w-10 h-10 text-3xl text-orange-600"></i>
        </div>
        <div>
          <p className="text-white">Need a repair? our address</p>
          <p className="text-xl text-white">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Query;
