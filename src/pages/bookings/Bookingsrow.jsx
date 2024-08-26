import React from "react";
import Swal from "sweetalert2";
const Bookingsrow = ({ data, handleDelete }) => {
  const { _id, customerName, email, date, service, price, img } = data;

  return (
    <tr className="text-black border rounded-lg w-full my-12">
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold"> {service} </div>
            <div className="text-sm opacity-50">Dhaka</div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{service} </td>
      <td>{price} </td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default Bookingsrow;
