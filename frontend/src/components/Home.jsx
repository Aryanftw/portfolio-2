import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import SocialSidebar from "./SocialSidebar";
import Skills from "./Skills";
const Home = () => {
  return (
    <div className="main min-h-screen flex flex-col">
      
      <SocialSidebar></SocialSidebar>
      <Navbar />
      <Hero />
      <Skills/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;