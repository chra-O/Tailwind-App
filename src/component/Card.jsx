import React from "react";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div>
      <div className="  p-10 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full h-52" src={props.img} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.desc}</p>
          </div>
          <hr></hr>
          <div className="px-6 pt-4 pb-2 mb-5 ">
            <Link
              to="/show"
              className=" w-56 bg-slate-200 rounded-full px-3 py-3  text-sm font-semibold text-gray-700 mr-2 "
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
