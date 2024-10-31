import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='main min-h-screen'><Navbar/>
    <Hero/>
    </div>
  )
}

export default Home