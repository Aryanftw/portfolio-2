import React from "react";
import './Skills.css'
import { useEffect,useRef } from "react";

<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;

const Skills = () => {
  
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
        { threshold: 0.1 } 
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
    <div
      id="skills"
      className="flex animate-on-scroll flex-col items-center gap-9 top-0 mt-0 pt-40 mb-40" ref={elementRef}
    >
      <p className="text-6xl font-bold font-damn text-white">Skills</p>
      <div className="icons flex flex-wrap gap-4 w-2/4">
        <div className="img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            className="w-24"
          />
        </div>
        <div className="img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-white border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            className="w-24"
          />
        </div>
        <div className=" img w-32 h-32 icon1 flex p-8 border-2 bg-black border-black rounded-full object-cover">
          <img
            src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
  }
  
export default Skills;