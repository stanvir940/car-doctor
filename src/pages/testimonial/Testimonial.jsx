import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className=" rounded-full w-10">
              <img
                src="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
                alt=""
                className="w-full bg-cover overflow-hidden"
              />
            </div>
            <div>
              <h1>name</h1>
              <h3>title</h3>
            </div>
          </div>
          <div className="text-3xl">
            <i class="bx bx-message-rounded-dots"></i>
          </div>
        </div>
        <div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div>
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
              defaultChecked
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
