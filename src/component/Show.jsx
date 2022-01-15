import React from "react";

export default function Show(props) {
  return (
    <div>
      <div class="p-10  ">
        <div class=" w-full lg:max-w-full   lg:flex ">
          <div class=" w-80  pr-5 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              src="https://media.millenniumhotels.com/Live/1/E/4/1E44B809-BE0C-418B-97A3-DB19AAF21DE3/Copthorne%20Hotel%20Baranan%20Exterior.jpg?r=180227121146"
              alt=""
            ></img>
          </div>
          <div class="border-r border-b border-l w-full border-gray-400 lg:border-l-0  hover:bg-stone-50 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8 w-96">
    
              <div class="text-gray-900 font-bold text-xl mb-2">
                {props.name}
              </div>
              <p class="text-gray-700 text-base w-full">{props.desc}</p>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-700 ">
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
