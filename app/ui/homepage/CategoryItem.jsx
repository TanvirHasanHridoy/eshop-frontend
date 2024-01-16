import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="w-full  p-10 relative hover:scale-105 transition group overflow-hidden">
      <div className="h-80 w-full rounded-lg overflow-hidden relative ">
        <Image
          src={item.img}
          fill
          alt={item.title}
          className="group-hover:scale-110 transition duration-[500ms] object-cover"
        ></Image>
      </div>
      <div className="  h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center gap-4  ">
        <h1 className="text-4xl font-bold text-white">{item.title}</h1>
        <button className="p-2 text-base rounded-sm font-semibold cursor-pointer bg-white hover:scale-110  hover:bg-red-700 hover:text-white transition ">
          Shop
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
