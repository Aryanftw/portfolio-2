import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="h-96 min-w-full bg-black flex flex-col font-custom font-bold "
      >
        <form action="" className="flex justify-center mt-10">
          <div className="flex flex-col justify-evenly mr-20">
            <label htmlFor="name" className="text-white">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Who goes there?"
              className="outline-none border-b-4 border-indigo-500 bg-inherit text-white"
            />
            <label htmlFor="mail" className="text-white">
              Your Mail
            </label>
            <input
              type="text"
              placeholder="example@hotmail.com"
              className="outline-none border-b-4 border-indigo-500 bg-inherit text-white"
            />
          </div>
          <div className="ml-20">
            <label htmlFor="mess" className="text-white">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-inherit text-white outline-none border-2 border-indigo-700 font-damn mr-28"
              placeholder="What's Up?"
            ></textarea>
            <button className="bg-blue-950 text-white h-14 w-28">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
