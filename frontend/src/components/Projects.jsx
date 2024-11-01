import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center min-w-max  ">
      <p className="text-6xl mb-9 pb-10 text-white font-bold">Projects</p>
      <div className="row-1 flex h-96 w-1/2 ml-40 mb-10">
        <div className="project-card w-72 mr-10 text-sm flex flex-col top-0 justify-center bg-gradient-to-r from-black to-gray-700 text-white font-semibold font-damn rounded-3xl border-2">
          <span className="text-3xl p-10 pb-0">Weather App</span>
          <p className="p-10">
            A simple, real-time weather app that displays current conditions and
            a five-day forecast for cities worldwide. Built with React, it
            fetches data from the OpenWeatherMap API and features responsive
            design for a seamless experience across devices.
          </p>
        </div>
        <div className="project-card rounded-3xl w-72 flex flex-col top-0 justify-center bg-gradient-to-r from-black to-gray-700">
          <span className="text-2xl font-semibold p-10 pb-0 font-damn">To-Do List App </span>
          <p className="p-10 font-damn font-semibold">
            An intuitive To-Do List application that allows users to create,
            edit, and delete tasks. Built with React, it features local storage
            for persistent task management, ensuring users can easily track
            their daily activities and boost productivity.
          </p>
        </div>
      </div>
      <div className="row-2 flex  h-96  w-1/2 ml-40">
        <div className="project-card rounded-3xl w-72 mr-10 bg-gradient-to-r from-black to-gray-700">
          3
        </div>
        <div className="project-card rounded-3xl w-72 bg-gradient-to-r from-black to-gray-700">
          4
        </div>
      </div>
    </div>
  );
};

export default Projects;
