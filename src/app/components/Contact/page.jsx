import React from 'react'
import "./contact.css"
import { BsArrowBarRight } from 'react-icons/bs'
import Image from 'next/image'
// import bg from "../../assets/cta_bg.jpeg"

const Contact = () => {
    return (
        <div className='lg:px-24 px-4 mt-10'>
            <div className="relative bg-no-repeat bg-cover h-96 rounded-xl bg-black">
                {/* <Image src={bg}></Image> */}

                <div className="csshape1 z-0"></div>
                <div className="csshape1 "></div>
                <div className="csshape1"></div>

                <div className="h-full flex justify-center items-center ">
                    <div className='lg:w-1/2 mx-auto text-center px-4'>
                        <h2 className='lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6 '>
                            lets discuss make something<span className='italic'>cool</span> together
                        </h2>

                        <a href='/' className='inline-flex items-center gap-2 font-semibold hover:text-orange-300 transition-all duration-300 ease-in text-white'><span>CONTACT US</span><BsArrowBarRight /></a>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
