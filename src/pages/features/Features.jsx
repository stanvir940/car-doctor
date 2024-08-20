import React from "react";
import g1 from "../../../src/assets/icons/person.svg";
import g2 from "../../../src/assets/icons/deliveryt.svg";
import g3 from "../../../src/assets/icons/check.svg";
import g4 from "../../../src/assets/icons/group.svg";
import g5 from "../../../src/assets/icons/quote.svg";
import g6 from "../../../src/assets/icons/Wrench.svg";

const Features = () => {
  return (
    <div className=" text-center flex justify-center items-center flex-col my-32 space-y-12">
      <div className=" space-y-5">
        <h2 className="font-bold text-orange-600">Core Features</h2>
        <h4 className="text-black text-5xl font-bold">Why Choose Us</h4>
        <p className="text-gray-800">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        <div className="w-full text-center border p-4 flex flex-col justify-center items-center rounded-md hover:scale-105 hover:bg-orange-200">
          <img src={g1} alt="" className="w-1/2 " />
          <p className="font-bold text-gray-700">Expert Team</p>
        </div>
        <div className="w-full text-center border p-4 flex flex-col justify-center items-center rounded-md hover:scale-105 hover:bg-orange-200">
          <img src={g2} alt="" className="w-1/2 " />
          <p className="font-bold text-gray-700">Expert Team</p>
        </div>
        <div className="w-full text-center border p-4 flex flex-col justify-center items-center rounded-md hover:scale-105 hover:bg-orange-200">
          <img src={g3} alt="" className="w-1/2 " />
          <p className="font-bold text-gray-700">Expert Team</p>
        </div>
        <div className="w-full text-center border p-4 flex flex-col justify-center items-center rounded-md hover:scale-105 hover:bg-orange-200">
          <img src={g4} alt="" className="w-1/2 " />
          <p className="font-bold text-gray-700">Expert Team</p>
        </div>
        <div className="w-full text-center border p-4 flex flex-col justify-center items-center rounded-md hover:scale-105 hover:bg-orange-200">
          <img src={g5} alt="" className="w-1/2 " />
          <p className="font-bold text-gray-700">Expert Team</p>
        </div>
        <div className="w-full text-center border p-4 flex flex-col justify-center items-center rounded-md hover:scale-105 hover:bg-orange-200">
          <img src={g6} alt="" className="w-1/2 " />
          <p className="font-bold text-gray-700">Expert Team</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
