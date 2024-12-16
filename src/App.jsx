import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="w-full sm:container sm:pt-3 sm:w-5/6 sm:m-auto">
        <Navbar />
        <HeroSection />
        <Card />
        <Services />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
