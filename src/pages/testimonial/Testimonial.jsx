import React from "react";

const Testimonial = () => {
  return (
    <div className="flex space-x-4 ">
      <div className="border rounded p-4 md:w-1/2 w-full space-y-2 ">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className=" rounded-full w-10 bg-black h-10 overflow-hidden">
              <img
                src="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
                alt=""
                className="w-full bg-cover h-full"
              />
            </div>
            <div className="px-2 text-gray-800 flex flex-col justify-start items-start font-bold">
              <h1 className="text-blue-600 font-thin">Jane Johnson</h1>
              <h3>Engineer</h3>
            </div>
          </div>
          <div className="text-3xl">
            <i class="bx bx-message-rounded-dots"></i>
          </div>
        </div>
        <div className="w-1/2 text-gray-700 text-start">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="text-start">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
          </div>
        </div>
      </div>
      <div className="border rounded p-4 md:w-1/2 w-full space-y-2 ">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className=" rounded-full w-10 bg-black h-10 overflow-hidden">
              <img
                src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
                alt=""
                className="w-full bg-cover h-full"
              />
            </div>
            <div className="px-2 text-gray-800 flex flex-col justify-start items-start font-bold">
              <h1 className="text-blue-600 font-thin">Jane Johnson</h1>
              <h3>Engineer</h3>
            </div>
          </div>
          <div className="text-3xl">
            <i class="bx bx-message-rounded-dots"></i>
          </div>
        </div>
        <div className="w-1/2 text-gray-700 text-start">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="text-start">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
