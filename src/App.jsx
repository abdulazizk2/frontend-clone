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
import SignUp from "./components/SignUp";
import { gsap } from "gsap/gsap-core";
function App() {
    gsap.from("Navbar",{
      y:-40,
      duration:3,
      opacity:0,
      delay:5,
    })
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
  );
}

export default App;
