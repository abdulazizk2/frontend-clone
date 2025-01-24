import React from 'react'
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Price from '../components/Price';
import WorkWithUs from '../components/WorkWithUs';
import Production from '../components/Production';
import Footer from '../components/Footer';
const Home = () => {
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
      className="fixed inset-0 bg-green-500 z-50 h-screen"
      style={{
        clipPath: "polygon(110% 0, 0 0, 0 100%)",
      }}
    ></div>
    <div
      id="t2"
      className="fixed inset-0 bg-green-500 z-50 h-screen"
      style={{
        clipPath: "polygon(110% 0, 0% 100%, 100% 100%)",
      }}
    ></div>
    <main className="w-full sm:container sm:pt-3 sm:w-5/6 sm:m-auto">
      <Navbar />
      <HeroSection />
      <Card />
      <Services />
      <AboutUs />
      <Price />
      <WorkWithUs />
      <Production />
      <Footer />
    </main>
  </>
  )
}

export default Home
