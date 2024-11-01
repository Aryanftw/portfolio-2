import React from "react";
import { useEffect,useRef } from "react";
import "./About.css"; 

const About = () => {
  const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("slide-up");
            } else {
              entry.target.classList.remove("slide-up");
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  return (
    <div id="about" ref={elementRef} className="animate-on-scroll about-container font-damn">
      <div className=" about-content  font-semibold">
        <p>
          I'm a driven and aspiring software developer with a passion for
          building impactful solutions. Currently a Sophomore
           in Electronics and Communication Engineering at NIT Surat, I
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
