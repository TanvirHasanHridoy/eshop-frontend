import React from "react";
import banner from "../../assets/banner-new.jpg";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="  w-full mt-4 p-4  flex items-center justify-center overflow-x-hidden">
      <div className="relative w-full h-[400px] ">
        <Image
          src={banner}
          className="w-full h-full object-cover"
          fill
          quality={100}
          placeholder="blur"
          alt="Banner image"
        ></Image>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-2 rounded-md bg-red-50 bg-opacity-75 text-black/50">
        <h1 className="text-4xl">
          Big offer for summer! Get 50% off during the holiday season!
        </h1>
      </div>
    </div>
  );
};

export default Offer;
