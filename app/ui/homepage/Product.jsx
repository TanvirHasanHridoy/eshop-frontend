import Image from "next/image";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoImagesOutline, IoShareSocialOutline } from "react-icons/io5";

const Product = ({ product }) => {
  return (
    <div className="w-full bg-red-200 h-[200px] md:h-[250px] group lg:h-[350px] xl:h-[450px] md:p-6 lg:p-10 xl:p-11 rounded-2xl p-4 hover:scale-105 transition overflow-hidden  flex flex-col justify-center ">
      <div className="h-[75%] w-full relative overflow-hidden bg-green-700 rounded-lg group-hover:scale-110 transition group-hover:hover:rotate-2 ">
        <Image
          fill
          src={product.img}
          className="object-cover h-[70%] "
          alt={product.productname}
        />
        <div className="h-full w-full text-2xl gap-2 text-white absolute  z-10 hidden group-hover:flex justify-center items-center transition hover:scale-110 group-hover:bg-opacity-30 group-hover:bg-black">
          <IoImagesOutline className="cursor-pointer" />
          <RiSearch2Line className="cursor-pointer" />
          <IoShareSocialOutline className="cursor-pointer" />
        </div>
      </div>
      <div className="h-[25%] p-4">
        <h1 className="text-xl font-semibold text-black/50  ">
          {product.productname}
        </h1>
        <h2 className="text-gray-400">{product.color}</h2>
        <h2 className="pt-2 text-xl">${product.price}</h2>
      </div>
    </div>
  );
};

export default Product;
