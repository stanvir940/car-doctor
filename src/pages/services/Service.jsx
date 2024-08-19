import { useEffect, useState } from "react";
import Comp_ from "./Comp_";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-full text-center">
      <div>
        <h1 className="text-[#FF3811] font-bold">Service</h1>
        <h3 className="text-5xl font-bold text-black">Our Service Area</h3>
        <p className="py-6 text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {services.map((service, idex) => (
            <Comp_ key={idex} services={service}></Comp_>
          ))}
        </div>
        <button className="btn btn-outline btn-success my-12">Success</button>
      </div>
    </div>
  );
};

export default Service;
