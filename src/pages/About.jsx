import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="p-20">
      <div>
        <h1 className="text-5xl font-bold text-center my-16">Newsroom</h1>
      </div>

      <section className="grid grid-cols-[300px_minmax(100px,_1fr)_0px] relative">
      <div>
      <div className="flex px-10 pt-5 pb-16 flex-col gap-5 rounded-lg bg-white sticky top-28 bottom-0 w-56 shadow-md">
        <Link to={'/'}>Home</Link> 
        <Link to={'/About'}>About</Link> 
        <Link to={'/Product'}>Product</Link> 
      </div>
      </div>
      <div>
        <h2 className="text-4xl mb-10">Latest Stories</h2>
      <div className="flex gap-10 mb-8">
      <div className="bg-white w-full">
        <div className="bg-cover w-full bg-[url('/stats.jpeg')] min-h-56 rounded-t-lg">
        </div>
        <div>
            <p className="text-sm">Blog</p>
            <h1 className="font-bold text-4xl">TDD by example with GO</h1>
        </div>
        <div>October 6,2023<div>
            </div>
        <p>Ahsan Ahmed</p>    
        </div>
      </div>
      </div>
      <div className="flex gap-10 mb-8">
      <div className="bg-white w-full">
        <div className="bg-cover w-full bg-[url('/stats.jpeg')] min-h-56 rounded-t-lg">
        </div>
        <div>
            <p>Blog</p>
            <h1>TDD by example with GO</h1>
        </div>
        <div>October 6,2023<div>
            </div>
        <p>Ahsan Ahmed</p>    
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="bg-cover w-full bg-[url('/stats.jpeg')] min-h-56 rounded-t-lg">
        </div>
        <div>
            <p>Blog</p>
            <h1>TDD by example with GO</h1>
        </div>
        <div>October 6,2023<div>
            </div>
        <p>Ahsan Ahmed</p>    
        </div>
      </div>
      </div>
      <div className="flex gap-10">
      <div className="bg-white w-full rounded-b-lg shadow-md">
        <div className="bg-cover w-full bg-[url('/stats.jpeg')] min-h-56 rounded-t-lg">
        </div>
        <div>
            <p>Blog</p>
            <h1>TDD by example with GO</h1>
        </div>
        <div>October 6,2023<div>
            </div>
        <p>Ahsan Ahmed</p>    
        </div>
      </div>
      <div className="bg-white w-full rounded-b-lg shadow-md">
        <div className="bg-cover w-full bg-[url('/stats.jpeg')] min-h-56 rounded-t-lg">
        </div>
        <div>
            <p className="text-sm">Blog</p>
            <h1 className="font-bold text-4xl">TDD by example with GO</h1>
        </div>
        <div>October 6,2023<div>
            </div>
        <p>Ahsan Ahmed</p>    
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
       <Footer />
       </>
  );
};

export default About;
