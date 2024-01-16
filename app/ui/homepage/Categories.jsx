import React from "react";
import { categories } from "../../assets/DummyDatas.js";
import CategoryItem from "./CategoryItem.jsx";

const Categories = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold ml-3 border-b-4 border-red-700 inline-block mb-8">
        {" "}
        Categories:
      </h1>
      <div className="flex w-full overflow-hidden justify-between items-center ">
        {categories.map((item) => (
          // <div key={item.id}>{item.title}</div>
          <CategoryItem className="flex-[1] " key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
