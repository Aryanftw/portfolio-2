import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div id="hero" className="flex min-h-screen flex-col items-center max-w-7xl ">
      <p className="text-5xl pr-20 mt-56 ml-80 font-bold font-custom animate-fadeInUp">
        Hello Everyone, <span className="text-white">Aryan</span> this side !
      </p>
      <p className="animate-fadeInUp text-3xl pr-20  ml-80 font-semibold font-custom mt-5">A Passionate Dev Crafting Digital Experiences</p>
      <p className="text-2xl font-medium  ml-80  font-custom mt-5 animate-fadeInUp font-damn">With expertise in web development and design, I specialize in creating intuitive, user-friendly interfaces that bring ideas to life.</p>
      <button className="p-1 rounded-3xl animate-fadeInUp font-semibold mt-5 ml-60 text-xl border-2 text-white bg-black w-40 h-14 border-black"><a href="#contact">Call to Action</a></button>
    </div>
  );
};

export default Hero;
