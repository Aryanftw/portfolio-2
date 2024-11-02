import React from 'react'
import './IntroPage.css'
import { Outlet, Link } from "react-router-dom";
import Home from './Home';
const Intropage = () => {
  return (
    <div  className="main1 flex flex-col justify-center items-center  font-custom">
      <h1 id='typing-text' className='text-7xl font-bold text-white'>Welcome to my Portfolio Site</h1>
      <Link to='./home' className="main2 border-2 border-blue-900 w-25 mt-5 text-white py-2 px-4 bg-gray-800 hover:text-gray-300 hover:bg-blue-950 ">
        Know More
      </Link>

    </div>
  )
}

export default Intropage