import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className=" text-center flex justify-center items-center flex-col my-32 space-y-12">
      <div className=" space-y-5">
        <h2 className="font-bold text-orange-600">Testimonial</h2>
        <h4 className="text-black text-5xl font-bold">What Customer Says</h4>
        <p className="text-gray-800">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Testimonials;
