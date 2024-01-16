import React from "react";
import Offer from "./Offer";
import Banner from "./Banner";
import Categories from "./Categories";
import InitialProducts from "./InitialProducts";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <Offer />
      <Categories />
      <InitialProducts />
    </div>
  );
};

export default Hero;
