import React from "react";
import { useEffect,useRef } from "react";
import "./About.css"; // Import the custom CSS file

const About = () => {
  return (
    <div id="about" className="about-container font-damn">
      <div className="about-content fadeIn font-semibold">
        <p>
          I'm a driven and aspiring software developer with a passion for
          building impactful solutions. Currently pursuing my undergraduate
          studies in Electronics and Communication Engineering from NIT Surat, I
          have a strong foundation in data structures, algorithms, and
          full-stack development. I’ve worked extensively with tools and
          languages like Java, JavaScript, and React, and am progressing in
          backend development with Node.js and Next.js to create robust,
          scalable applications. I enjoy tackling complex challenges and
          collaborating to bring innovative ideas to life. I aim to build a
          career in tech, particularly in roles that allow me to make a tangible
          impact on people’s lives. With a long-term goal of gaining industry
          experience, I’m constantly evolving my skill set to stay at the
          cutting edge of technology.{" "}
          <p className="text-2xl font-custom pt-3">Let’s build the future, one line of code at a time!</p>
        </p>
      </div>
    </div>
  );
};

export default About;
