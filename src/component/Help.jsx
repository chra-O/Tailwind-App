import React from "react";

export default function Help() {
  const features = [
    { name: "Name", description: "Designed by Good Goods, Inc." },
    {
      name: "Experince",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscati, vitae rerum
              quisquam ipsum tenetur quas deserunt nemo doloremque
              exercitationem?
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="w-96 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://cdn-icons-png.flaticon.com/512/6556/6556550.png"  alt="t"/>
          </div>
        </div>
      </div>
    </>
  );
}
