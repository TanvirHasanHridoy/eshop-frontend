import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full h-60 flex items-center justify-center bg-slate-200 gap-y-4">
      <div className="text-center">
        <h1 className="text-xl mb-4">
          {" "}
          Enter your email to get newsletters! ✉️
        </h1>
        <div className="flex flex-col gap-y-5 items-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here."
            className="placeholder:text-gray-200 p-2 rounded-lg w-[550px] text-center text-xl  outline-black/20"
          />
          <button className="p-2 font-semibold rounded-lg bg-red-500 hover:bg-red-600  text-xl w-32 text-white focus:scale-105 hover:scale-105 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
