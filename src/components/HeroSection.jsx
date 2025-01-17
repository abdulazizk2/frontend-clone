import { ArrowUpRight, ChartNoAxesColumnIncreasing, NotebookText, Sparkles, Waves } from "lucide-react";
import { gsap } from "gsap";

const HeroSection = () => {
  gsap.from("h1",{
    y:20,
    opacity:0,
    scale:0.2,
    duration:1,
    delay:3,

  })
  return (
    <section className="px-2 mt-20 items-center justify-center text-center">
      <h1 className="capitalize text-3xl sm:text-6xl font-semi-bold w-11/12">
        The future of manufacturing <br className="hidden sm:inline-block"/>
        with latest technology
      </h1>
      <p className="text-center items-center justify-center mt-8">Expert tech to elevate your manufacturing. Let`s take your business further.</p>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="bg-green-950 hover:bg-black hover:text-white hover:-translate-y-2 transition ease-in-out delay-[.1s] text-white rounded-3xl p-2 px-6 py-3">Get Started</button>
        <button className="bg-white hover:text-white transition-all ease-in-out delay-[.1s] hover:-translate-y-2 hover:bg-black text-black rounded-3xl p-2 px-6 py-3">Try Demo</button>
      </div>
      <div className="hidden sm:flex container items-center justify-between -mt-32">
      <div className="flex-col">
      <div className="p-2 rounded-full bg-green-200 ml-20"><Sparkles /></div>
      <div ><ArrowUpRight size={40} className="border border-slate-800 p-2 rounded-full" /></div>
      <div className="p-2 rounded-full bg-green-200 ml-20"><NotebookText /></div>
      </div>
      <div>
      <div className="p-2 rounded-full bg-green-200 ml-16"><ChartNoAxesColumnIncreasing /></div>
      <div><Waves size={40} className="border border-slate-800 p-2 rounded-full"/></div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
