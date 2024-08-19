import React from "react";
import Carosel from "./carosel/Carosel";
import Hero from "./hero/Hero";
import Service from "../services/Service";
import Query from "./query/Query";

const Home = () => {
  return (
    <div>
      <Carosel></Carosel>
      <Hero></Hero>
      <Service></Service>
      <Query></Query>
    </div>
  );
};

export default Home;
