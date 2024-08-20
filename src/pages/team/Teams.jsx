import React, { useEffect, useState } from "react";

const Teams = () => {
  const [teams, setTeam] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div className="my-32">
      <div className="text-center w-full space-y-5">
        <h4 className="text-orange-600 font-bold">Team</h4>
        <h1 className="text-3xl font-bold text-black">Meet Our Team</h1>
        <p className="text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="mt-12 w-full ">
        <div className="carousel carousel-end rounded-box">
          {teams.map((data, idex) => (
            <div className="carousel-item p-6 flex-col space-y-2 my-3 hover:scale-105 hover:bg-slate-50">
              <div>
                <img
                  src={data.image_url}
                  alt="Drink"
                  className="w-full rounded-md h-72"
                />
              </div>
              <div className="w-full text-center space-y-1">
                <h4 className="text-black font-bold text-xl">{data.name} </h4>
                <h4>{data.position} </h4>
                <div className="text-3xl space-x-2">
                  <i class="bx bxl-facebook text-blue-700 cursor-pointer border rounded-md"></i>
                  <i class="bx bxl-twitter text-blue-600 cursor-pointer border rounded-md"></i>
                  <i class="bx bxl-linkedin-square text-blue-700 cursor-pointer border rounded-md"></i>
                  <i class="bx bxl-instagram text-red-700 cursor-pointer border rounded-md"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-center my-4">
        <button className="btn btn-outline btn-warning">View More</button>
      </div>
    </div>
  );
};

export default Teams;
