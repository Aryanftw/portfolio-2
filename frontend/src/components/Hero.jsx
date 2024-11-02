import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero" className="flex min-h-screen flex-col items-center max-w-7xl mx-auto text-center px-6">
      <p className="text-5xl md:text-4xl sm:text-3xl mt-56 font-bold font-custom animate-fadeInUp">
        Hello Everyone, <span className="text-white">Aryan</span> this side!
      </p>
      <p className="animate-fadeInUp text-3xl md:text-2xl sm:text-xl font-semibold font-custom mt-5">
        A Passionate Dev Crafting Digital Experiences
      </p>
      <p className="text-2xl md:text-xl sm:text-lg font-medium font-custom mt-5 animate-fadeInUp">
        With expertise in web development and design, I specialize in creating intuitive, user-friendly interfaces that bring ideas to life.
      </p>
      <button className="p-1 rounded-3xl animate-fadeInUp font-semibold mt-5 text-xl text-white bg-black w-40 h-14">
        <a href="#contact">Call to Action</a>
      </button>
    </div>
  );
};

export default Hero;
