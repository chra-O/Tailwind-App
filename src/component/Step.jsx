import React from "react";

const features = [
  {
    name: "Don't forget to boot",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: "https://cdn-icons-png.flaticon.com/512/6556/6556135.png",
  },
  {
    name: "Check suitcase",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: "https://cdn-icons-png.flaticon.com/512/6556/6556234.png",
  },
  {
    name: "Don't forget money",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: "https://cdn-icons-png.flaticon.com/512/6556/6556187.png",
  },
  {
    name: "Select location",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: "https://cdn-icons-png.flaticon.com/512/6556/6556411.png",
  },
];

export default function Step() {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-700 font-sans tracking-wide uppercase pb-16">
            <hr></hr>
          </h2>
          <p className="mt-2 text-3xl leading-8 font-sans tracking-tight text-gray-900 sm:text-4xl">
            A better way to injoy life
          </p>
          <p className="mt-4 max-w-2xl text-xl text-red-300 lg:mx-auto">
            set you Vacation plan
          </p>
        </div>

        <div className="mt-14">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-20  rounded-md text-white">
                    <img src={feature.icon} alt="" />
                  </div>
                  <p className="ml-28 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-28 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
