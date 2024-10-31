import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className="main min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
