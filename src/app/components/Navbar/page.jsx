"use client"
import {  } from "../Services/page";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { TfiAlignJustify } from "react-icons/tfi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuopen, setisMenuopen] = useState(false)
    const [isSticky, setisSticky] = useState(false)

    const togglemenu = () => {
        setisMenuopen(!isMenuopen)

    }
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setisSticky(true);
                console.log("hello");
                
            } else {
                setisSticky(false);
            }
            console.log(isSticky)
        };
       
    
        // Add the event listener
        window.addEventListener("scroll", handleScroll);
    
        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Pass an empty dependency array to run the effect only once on mount
    
    const navitems = [
        { path: "#Home", link: "Home" },
        { path: "#About", link: "About" },
        { path: "#Projects", link: "Portfolio" },
        { path: "#blog", link: "Blog" },
        { path: "#service", link: "Services" },




    ]
    return (
        <>
            <header className='w-full bg-transparent relative top-0 left-0 right-0 transition-all ease-in duration-300'>
                <div className="top-0 bg-black fixed">
                <nav className="py-4 lg:px-24 px-4 flex justify-between align-middle transition-all duration-300 ease-in gap-52">
                    <div className='flex justify-between items-center text-base gap-8'>
                        <a href='/' className='text-white text-3xl'><span className='text-orange-300 text-3xl font-bold'>H</span>ASSAN</a>
                    </div>
                    <ul className='md:flex align-middle items-center space-x-12 hidden navitems'>
                        {

                            // console.log(navitems)
                            navitems.map(({ link, path }) => (

                                <Link href={path} key={path} activeClass="active" spy={true} scroll={true} offset={-100} className="block  scroll-smooth text-base text-white uppercase hover:text-orange-300 transition-all ease-in duration-300"> {link} </Link>
                            ))
                        }



                    </ul>
                    <div className='lg:flex space-x-12 hidden navitems' >
                        <button className='text-white bg-transparent p-2 border rounded-full'>
                            <TfiAlignJustify className="w-4 h-4 !important hover:text-orange-500" />
                        </button>
                    </div>
                    <div className='md:hidden flex'>
                        <button className='text-white focus:outline-none' onClick={togglemenu}>
                            {
                                isMenuopen ? <FaXmark className="h-6 w-6" /> : <TfiAlignJustify className="h-6 w-6" />
                            }

                        </button>


                    </div>
                    <div className={`space-y-4 px-4 mt-14 py-7  bg-black ${
                        isMenuopen ? "block fixed top-0 right-0 left-0" : "hidden"
                    }`}>
                        {

                            // console.log(navitems)
                            navitems.map(({ link, path }) => (

                                <Link href={path} key={path} activeClass="active" spy={true} smooth={true} offset={-100} className="block 
                                text-base text-white uppercase !important hover:text-orange-500"> {link} </Link>   
                            ))
                        }



                    </div>


                </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar
