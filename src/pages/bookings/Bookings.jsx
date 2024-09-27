import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import FunBanner from "../layout/FunBanner";
import Bookingsrow from "./Bookingsrow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5001/bookings?email=${user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBooking(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBooking(data));
  }, [url]);

  const handleDelete = (id) => {
    const flag = confirm("Are you sure want to delete?");
    if (flag) {
      fetch(`http://localhost:5001/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            Swal.fire("Deleted");
            const remaining = booking.filter((book) => book._id !== id);
            setBooking(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="w-full">
        <FunBanner></FunBanner>
      </div>
      <div className="my-24">
        <div className="overflow-x-auto">
          <table className="table text-black">
            {/* head */}
            <thead className="text-black">
              <tr>
                <th>Action</th>
                <th>Service Details</th>
                <th>Name</th>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {booking.map((data) => (
                <Bookingsrow
                  key={data._id}
                  data={data}
                  handleDelete={handleDelete}
                ></Bookingsrow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
