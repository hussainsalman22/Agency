import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs'
import Image from 'next/image'
import "./services.css"
import service1 from "../../assets/service_1.jpeg"
import service2 from "../../assets/service_2.jpeg"
import service3 from "../../assets/service_3.jpeg"
import service4 from "../../assets/service_4.jpeg"




const Services = () => {
    return (
        <div className='text-white lg:px-24 px-4' id='service'>
            <div className="h-36"></div>

            <div className='lg:flex justify-between items-start'>
                <div className='lg:w-1/3 space-y-5 '>
                    <h4 className='text-gray-200 font-semibold text-2xl '> What we can do</h4>
                    <h2 className='text-5xl font-bold mb-5 leading-snug' >services we can help you with</h2>
                    <a href='' className='inline-flex items-center gap-2 font-semibold hover:text-orange-300 transition-all duration-300 ease-in'><span>
                        GET ALL SERVICES </span> <BsArrowBarRight /></a>
                </div>
                <div className='lg:w-2/3 my-8'>
                    <div className='flex flex-wrap '>
                        <div className='lg:w-1/4 hidden lg:block'>

                        </div>
                        <div className='servicecard  '>
                            <a href='' className='rounded-2xl block relative'>
                                <Image src={service1} alt='' className='rounded-2xl' />
                                <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                                <div className='absolute top-1/3 left-4 right-0 '>
                                    <span className='w-3 h-3 block rounded-full bg-red-500 mb-2'></span>
                                    <h2 className='text-2xl font-bold text-white'>UI-UX DESIGN</h2>
                                </div>
                            </a>
                        </div>
                        <div className='lg:w-1/4 hidden lg:block'>

                        </div>
                        <div className='servicecard '>
                            <a href='' className='rounded-2xl block relative'>
                                <Image src={service2} alt='' className='rounded-2xl' />
                                <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                                <div className='absolute top-1/3 left-4 right-0 '>
                                <span className='w-3 h-3 block rounded-full bg-red-500 mb-2'></span>
                                    <h2 className='text-2xl font-bold text-white'>UI-UX DESIGN</h2>
                                </div>
                            </a>
                        </div>
                        {/* <div className='lg:w-1/4 hidden lg:block'>

                        </div> */}
                        <div className='servicecard '>
                            <a href='' className='rounded-2xl block relative'>
                                <Image src={service3} alt='' className='rounded-2xl' />
                                <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                                <div className='absolute top-1/3 left-4 right-0 '>
                                <span className='w-3 h-3 block rounded-full bg-red-500 mb-2'></span>
                                    <h2 className='text-2xl font-bold text-white'>UI-UX DESIGN</h2>
                                </div>
                            </a>
                        </div>
                        <div className='lg:w-1/4 hidden lg:block'>

                        </div>
                        <div className='servicecard '>
                            <a href='' className='rounded-2xl block relative'>
                                <Image src={service4} alt='' className='rounded-2xl' />
                                <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                                <div className='absolute top-1/3 left-4 right-0 '>
                                <span className='w-3 h-3 block rounded-full bg-red-500 mb-2'></span>
                                    <h2 className='text-2xl font-bold text-white'>UI-UX DESIGN</h2>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Services
