import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container fixed top-0 z-50 w-full bg-opacity-95'>
      <div className='nav flex justify-evenly text-center font-custom items-center p-4'>
        <p className='nav name text-3xl font-bold'><a href="#hero">ARYAN</a></p>
        <p className='nav text-2xl font-semibold'><a href="#projects">Projects</a></p>
        <p className='nav text-2xl font-semibold'><a href="#skills">Skills</a></p>
        <p className='nav text-2xl font-semibold'><a href="#about">About</a></p>
      </div>
    </div>
  )
}

export default Navbar