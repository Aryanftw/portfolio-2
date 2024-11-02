import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import SocialSidebar from "./SocialSidebar";
import Skills from "./Skills";
import Projects from "./Projects";
const Home = () => {
  return (
    <div className="main relative w-full overflow-x-hidden flex flex-col">
      <div className="content">
      <SocialSidebar></SocialSidebar>
      <Navbar />
      <Hero />
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      </div>
      
    </div>
  );
};

export default Home;
