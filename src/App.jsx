import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="container pt-3 w-5/6 m-auto">
        <Navbar />
        <HeroSection />
        <div>
        <Card/>
        </div>
        
      </div>
    </>
  );
}

export default App;
