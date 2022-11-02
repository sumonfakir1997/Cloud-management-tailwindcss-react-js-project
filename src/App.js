import React from "react";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import About from "./Components/About";
import Support from "./Components/Support";
import AllinOne from "./Components/AllinOne";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Support/>
    <AllinOne/>
    <Pricing/>
    <Footer/>
    </div>
  );
}

export default App;

