import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Price from "./components/Price";
import WorkWithUs from "./components/WorkWithUs";
import Production from "./components/Production";
import Footer from "./components/Footer";
import React from "react";
import SignUp from "./components/SignUp";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
function App() {
  
  useGSAP(() => {
    gsap.to("#t1", {
      y: -800,
      x:0,
      delay: 0.8,
      duration: 2.5,
      ease: "elastic.out(1,0.75)",
    });
    gsap.to("#t2", {
      y: 800,
      x:0,
      delay: 0.8,
      duration: 2.5,
      ease: "elastic.out(1,0.75)",
    });
  });
  return (
    <>
     <div
      id="t1"
      className="hidden fixed md:block inset-0 bg-green-500 z-50 h-screen"
      style={{
        clipPath: "polygon(110% 0, 0 0, 0 100%)",
      }}
    ></div>
    <div
      id="t2"
      className="hidden fixed md:block inset-0 bg-green-500 z-50 h-screen"
      style={{
        clipPath: "polygon(110% 0, 0% 100%, 100% 100%)",
      }}
    ></div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/product" element={<Product />}/>
    </Routes>
    </>
  );
}

export default App;
