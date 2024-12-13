import { ArrowUpRight, SunMedium } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="container bg-green-950 text-center pt-7 rounded-md text-white pb-10">
      <h1 className="pt-20 text-5xl mb-5">
        Efficient and Integrated
        <br /> Manufacturing Services
      </h1>
      <p>Simplify operations with our efficient and quality-focused service</p>
      <div className="flex">
        <div className="h-56 bg-gray-900 w-72 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 shadow-lg">
          <div className="flex justify-center items-center">
            <SunMedium />
            <ArrowUpRight />
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
