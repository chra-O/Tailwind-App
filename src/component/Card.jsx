import React from "react";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div>
      <div class="  p-10 ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            class="w-full"
            src="
              https://www.basnews.com/media/k2/items/cache/d2cc48351b42dabb2f37d0b91d6f847a_L.jpg?1526247763"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">name</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 mb-5">
            <Link
              to="/show"
              class=" bg-slate-200 rounded-full px-3 py-3   text-sm font-semibold text-gray-700 mr-2 "
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
