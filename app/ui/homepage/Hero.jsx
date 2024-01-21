import React from "react";
import Offer from "./Offer";
import Banner from "./Banner";
import Categories from "./Categories";
import InitialProducts from "./InitialProducts";
// import Footer from "../footer/Footer";
import Footer from "../footer/Footer";
import Newsletter from "../newsletter/Newsletter";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <Offer />
      <Categories />
      <InitialProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Hero;
