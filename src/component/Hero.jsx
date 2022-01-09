import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" lg:py-38  bg-stone-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-60 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-sans tracking-tight text-slate-700 sm:text-4xl mx-0">
            <span className="block">Ready to Vacation ?</span>
            <span className="block text-red-500 text-3xl">
              Start your Vacation today. WITH US
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 ">
            <img
              className=" h-8 w-auto sm:h-44"
              src="https://cdn-icons-png.flaticon.com/512/6556/6556550.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
