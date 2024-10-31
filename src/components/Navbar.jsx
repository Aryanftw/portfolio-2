import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-evenly text-center font-damn'>
        <p className='nav text-3xl font-bold mt-3 mr-10'><a href="">ARYAN</a></p>
        <p className='nav text-2xl font-semibold mt-3'><a href="">Projects</a></p>
        <p className='nav text-2xl font-semibold mt-3 pr-4 mr-3'><a href="">Skills</a></p>
        <p className='nav text-2xl font-semibold mt-3'><a href="">About</a></p>
      </div>
    </div>
  )
}

export default Navbar