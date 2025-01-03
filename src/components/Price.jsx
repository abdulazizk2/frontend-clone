import { CircleCheck } from "lucide-react";

const Price = () => {
  return (
    <div className="container bg-black text-center pt-7 rounded-md text-white pb-10 p-2">
      <div>
        <h1 className="text-3xl text-center mt-16 mb-5">
          Tailored Plans for Your
          <br />Manufacturing Scale
        </h1>
        <p className="text-sm text-slate-400">Flexible pricing for any business size.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-10">
        <div className="w-full bg-[#1f1f21;] text-left rounded-xl p-8 sm:w-[30%]">
          <h1 className="text-xl mb-3">Starter</h1>
          <p className="text-sm text-slate-400 mb-5">
            This package offers the basic features you need to
            get started.</p>
          <p className="text-xl">$39<span className="text-sm text-slate-400"> /month</span></p>
          <button className="mt-2 border border-green-600 w-full rounded-2xl py-1 text-center">Get Started</button>
          <h1 className="text-sm text-slate-400 text-center my-3">Features</h1>
          {/* <hr></hr> */}
          <ul className="text-sm">
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> Production up to 10,000 units per month</li>
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> 24/7 technical support</li>
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> Access the production dashboard</li>
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> Initial setup guide</li>
          </ul>
        </div>
        <div className="w-full bg-[#1f1f21;] text-left rounded-xl p-8 sm:w-[30%] ">
          <h1 className="text-xl mb-3">Enterprise</h1>
          <p className="text-sm text-slate-400 mb-5">
            This package offers the basic features you need to
            get started.</p>
          <p className="text-xl">$99<span className="text-sm text-slate-400"> /month</span></p>
          <button className="mt-2 border border-green-600 w-full rounded-2xl py-1 text-center">Get Started</button>
          <h1 className="text-sm text-slate-400 text-center my-3">Features</h1>
          {/* <hr></hr> */}
          <ul className="text-sm">
            <li className="flex gap-2 pb-3"><span><CircleCheck /></span> Production up to 10,000 units per month</li>
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> 24/7 technical support</li>
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> Access the production dashboard</li>
            <li className="flex gap-2 items-center pb-3"><span><CircleCheck /></span> Initial setup guide</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-10">
        <div className="w-full bg-[#083F3F] flex items-center flex-col text-left rounded-xl p-8 sm:w-[64%] ">
          <h1 className="text-xl mb-3 text-center">Professional</h1>
          <p className="text-sm text-center text-slate-400 mb-5">
            This package offers the basic features you need to
            get started.</p>
          <button className="mt-2 border p-4 bg-green-200 text-black rounded-2xl py-1 px-5 text-center">Get Started</button>
        </div>
      </div>
    </div>


  );
};

export default Price;
