import React from "react";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mess, setMess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleMess = (e) => {
    setMess(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Backend URL:", import.meta.env.VITE_APP_BACKEND_URL);
    const BACKEND_URL = 'http://localhost:3000/api/mail';
    try {
      const response = await axios.post(
        BACKEND_URL,
        { name, mail, mess }
      );
      console.log("Response:", response);
      if (response.status == 200) {
        setMail("");
        setMess("");
        setName("");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div
        id="contact"
        className="h-96 min-w-full bg-black flex flex-col font-custom font-bold "
      >
        <form
          action=""
          className="flex form justify-center mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex inside flex-col justify-evenly mr-20">
            <label htmlFor="name" className="text-white">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Who goes there?"
              className="outline-none border-b-4 border-indigo-500 bg-inherit text-white"
              onChange={handleName}
              value={name}
            />
            <label htmlFor="mail" className="text-white">
              Your Mail
            </label>
            <input
              type="text"
              placeholder="example@hotmail.com"
              className="outline-none border-b-4 border-indigo-500 bg-inherit text-white"
              onChange={handleMail}
              value={mail}
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
              onChange={handleMess}
              value={mess}
            ></textarea>
            <button className="bg-blue-950 text-white h-14 w-28" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
