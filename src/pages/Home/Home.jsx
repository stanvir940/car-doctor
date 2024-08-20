import React from "react";
import Carosel from "./carosel/Carosel";
import Hero from "./hero/Hero";
import Service from "../services/Service";
import Query from "./query/Query";
import Products from "../products/Products";
import Teams from "../team/Teams";
import Features from "../features/Features";
import Testimonials from "../testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Carosel></Carosel>
      <Hero></Hero>
      <Service></Service>
      <Query></Query>
      <Products></Products>
      <Teams></Teams>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
