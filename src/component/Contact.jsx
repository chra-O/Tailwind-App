import React from "react";

const features = [
  {
    name: "Facebook",
    dicrptiob: "chra othman",
    icon: "https://cdn-icons.flaticon.com/png/512/3488/premium/3488287.png?token=exp=1641839228~hmac=ac2db2ec08ac6bd511e72b0a473cee64",
  },
  {
    name: "Email",
    dicrptiob: "chra.osman@mail.com",
    icon: "https://cdn-icons.flaticon.com/png/512/2875/premium/2875394.png?token=exp=1641839363~hmac=b86eb85e41a9a1a42cc8d94126377bb0",
  },
  {
    name: "What's Up",
    dicrptiob: "+964 0770 000000",
    icon: "https://cdn-icons.flaticon.com/png/512/3488/premium/3488347.png?token=exp=1641839248~hmac=4d3aea395429476a4ca6c1475f4bd427",
  },
  {
    name: "location",
    dicrptiob: "Iraq/Kurdstan ",
    icon: "https://cdn-icons.flaticon.com/png/512/2102/premium/2102616.png?token=exp=1641839403~hmac=892abc95ea5ec03575b1d950b8bdc12f",
  },
];
export default function Contact() {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-sans tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-red-300 lg:mx-auto">
            --------------------------------------
          </p>
        </div>

        <div className="mt-14 ml-52">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="  absolute flex items-center justify-center h-7 w-14  rounded-md text-white">
                    <img src={feature.icon} alt="" />
                  </div>
                  <p className=" ml-28 text-lg  font-medium text-gray-900">
                    {feature.name}
                  </p>
                  <p className=" ml-28 text-l leading-6 font-medium  text-gray-900">
                    {feature.dicrptiob}
                  </p>
                </dt>
                <dd className="mt-2 ml-28 text-base text-gray-500"></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
