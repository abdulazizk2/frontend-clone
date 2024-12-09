import React from "react";

const HeroSection = () => {
  return (
    <div className="mx-38 mt-20 items-center justify-center">
      <h1 className="capitalize text-6xl font-semi-bold text-center w-11/12">
        The future of manufacturing <br />
        with latest technology
      </h1>
      <p className="text-center items-center justify-center mt-8">Expert tech to elevate your manufacturing. Let's take your business further.</p>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="bg-green-950 text-white rounded-3xl p-2 px-6 py-3">Get Started</button>
        <button className="bg-white text-black rounded-3xl p-2 px-6 py-3">Try Demo</button>
      </div>
      <div className="flex items-center justify-between">
      <div className="right-side-icons">icon</div>
      <div className="left-side-icons">icon</div>
      </div>
    </div>
  );
};

export default HeroSection;
