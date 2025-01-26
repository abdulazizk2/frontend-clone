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
  return (
    <>
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
