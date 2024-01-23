import Image from "next/image";
import React from "react";
import { products } from "@/app/assets/DummyDatas";

const Product = () => {
  const product = products[0];
  return (
    <main>
      <div className="flex w-full h-[90vh] p-12 gap-x-6 ">
        <div className="relative flex-[1] rounded-lg overflow-hidden ">
          <Image
            fill
            src={product.img}
            className="object-cover "
            alt={product.productname}
          ></Image>
        </div>
        <div className=" flex-[1] flex flex-col justify-between py-4">
          <div className="flex flex-col justify-between flex-[1.5]">
            <h1 className="text-3xl ">{product.productname}</h1>
            <h3 className="text-gray-600 text-xl">{product.desc}</h3>
          </div>
          <div className=" flex flex-col  justify-end">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-lg mb-2">Colors:</h2>
                <div className="flex gap-x-2">
                  <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-black cursor-pointer transition hover:scale-105"></div>
                  <div className="h-6 w-6 rounded-full bg-green-500 border-2 border-black cursor-pointer transition hover:scale-105"></div>
                  <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-black cursor-pointer transition hover:scale-105"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg  mb-2">Sizes:</h2>
                <div className="flex gap-x-2">
                  <div className="h-5 w-5 border-2 flex items-center justify-center p-3 border-black cursor-pointer hover:scale-105 transition">
                    S
                  </div>
                  <div className="h-5 w-5 border-2 flex items-center justify-center p-3 border-black cursor-pointer hover:scale-105 transition">
                    M
                  </div>
                  <div className="h-5 w-5 border-2 flex items-center justify-center p-3 border-black cursor-pointer hover:scale-105 transition">
                    L
                  </div>
                  <div className="h-5 w-5 border-2 flex items-center justify-center p-3 border-black cursor-pointer hover:scale-105 transition">
                    XL
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl">60$</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
