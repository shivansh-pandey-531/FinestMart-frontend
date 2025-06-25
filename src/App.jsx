import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="px-16 py-4 w-screen h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App;