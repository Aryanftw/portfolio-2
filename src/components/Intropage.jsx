import React from 'react'
import './Intropage.css'
const Intropage = () => {
  return (
    <div  className="main flex flex-col justify-center items-center min-h-screen font-custom">
      <h1 id='typing-text' className='text-7xl font-bold text-white'>Welcome to my Portfolio Site</h1>
      <button class="border-2 border-blue-900  w-25 mt-5 text-white py-2 px-4 bg-gray-800 hover:text-gray-300 hover:bg-blue-950 text-white">
    Know More 
</button>

    </div>
  )
}

export default Intropage