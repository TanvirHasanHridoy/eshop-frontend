import React from "react";
import { BsCart3, BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="w-full h-[70px]  p-4 overflow-hidden mb-4">
      <div className="flex w-full m-auto    justify-between text-xl ">
        <div className="flex-[1]  font-bold text-4xl   text-center flex justify-center items-center relative">
          <input
            className="p-2 px-8 w-full drop-shadow-lg text-base rounded-full placeholder-black/40 outline-red-200 "
            type="text"
            name="search"
            id="search"
            placeholder="Search Items"
          />
          <BsSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-base" />
        </div>
        <div className=" flex-[1]  font-bold text-4xl  text-center flex justify-center items-center">
          LOGO
        </div>
        <div className="flex flex-[1]  justify-end items-center gap-x-2">
          <div>Register</div>
          <div>Sign In</div>
          <div className=" relative hover:scale-110 transition cursor-pointer">
            <BsCart3 className="text-3xl " />
            <div className="p-2 h-3 w-3 rounded-full text-xs text-white flex items-center justify-center bg-red-600 absolute right-0 top-0 -translate-y-1 ">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
