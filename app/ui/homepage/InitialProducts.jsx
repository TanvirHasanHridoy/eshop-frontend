import Image from "next/image";
import React from "react";
import { products } from "@/app/assets/DummyDatas";
import Product from "./Product";

const InitialProducts = () => {
  return (
    <section className="p-8 ">
      <h1 className="text-4xl font-bold ml-3 border-b-4 border-red-700 inline-block mb-8">
        {" "}
        Latest:
      </h1>
      <div className=" w-full grid grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default InitialProducts;
