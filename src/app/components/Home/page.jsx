import React from 'react'
import "./home.css"
import { BsArrowBarRight } from "react-icons/bs"

const Home = () => {
  return (
    <>
      <div className='banner cs-style-1' id='Home'>
        <div className="csshape1 z-0"></div>
        <div className="csshape1"></div>
        <div className="csshape1"></div>
        
        
        <div className='px-4 lg:px-24'>
          <h1 className='md:w-2/3 z-10 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug  '>Creativity in our bloodline</h1>

          <div className='text-white text-lg flex md:flex-row flex-col-reverse md:items-center item-start justify-between gap-8 '>
            <div >
              <a href='/' className='inline-flex items-center gap-2 font-semibold hover:text-orange-300 transition-all duration-300 ease-in '><span>Get a Quote</span><BsArrowBarRight /></a>
            </div>
            <div className='md:w-1/2'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, enim explicabo? Provident eius at eum, harum expedita praesentium eaque deleniti!</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Home
