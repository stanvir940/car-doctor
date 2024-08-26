import { useContext } from "react";
import Banner from "../layout/Banner";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;

    const booking = {
      customerName: name,
      email,
      price,
      img,
      service: title,
      service_id: _id,
    };

    console.log(booking);

    fetch("http://localhost:5001/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h1>Book Service</h1>

      <div>
        <div>
          <h1>title: {title} </h1>
        </div>
        <div className="w-full h-96 my-10 space-y-6 border py-10 bg-lime-400">
          <h1 className="my-4 text-3xl font-bold text-center w-full text-black">
            Bookings Page
          </h1>
          <form onSubmit={handleBooking}>
            <div className="flex w-full flex-col justify-center items-center space-y-4">
              <div className="flex w-full justify-center items-center space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered input-primary w-1/2 bg-white  max-w-xs"
                />
                <input
                  type="date"
                  name="date"
                  className="input input-bordered input-primary w-1/2 bg-white  max-w-xs "
                />
              </div>
              <div className="flex w-full justify-center items-center space-x-4">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered input-primary w-1/2 bg-white  max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={price}
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
    </div>
  );
};

export default BookService;
