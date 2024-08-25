import React from "react";
import Banner from "../layout/Banner";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  console.log(title);
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1>title: {title} </h1>
      </div>
      <div className="w-full h-96 my-10 space-y-6 border py-10 bg-slate-200">
        <h1 className="my-4 text-3xl font-bold text-center w-full text-black">
          Checkout Page
        </h1>
        <form>
          <div className="flex w-full flex-col justify-center items-center space-y-4">
            <div className="flex w-full justify-center items-center space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary w-1/2 bg-white  max-w-xs"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-primary w-1/2 bg-white  max-w-xs "
              />
            </div>
            <div className="flex w-full justify-center items-center space-x-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-1/2 bg-white  max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-1/2 bg-white  max-w-xs "
              />
            </div>
          </div>
          <div className="w-ful py-4 text-center">
            <button
              type="submit"
              className="btn btn-primary text-white bg-orange-600 w-1/2"
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
