import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="sm:px-8 sm:py-2 md:px-16 md:py-4 w-screen h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App;