import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import "./footer.css"

const Footer = () => {
    return (
        <div className='lg:px-24 px-4 text-white'>
            <div className='flex flex-wrap  justify-between'>
                <div className='space-y-4 lg:w-1/3 '>
                    <a href='/' className='text-white text-3xl font-bold'>
                        <span className='text-orange-500'>A</span>
                        rino
                    </a>

                    <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo id vel culpa, dolore dolorem ipsam facere. Animi nobis nisi commodi.</p>
                    <div className='flex gap-5 text-white'>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaLinkedinIn className="w-5 h-5"></FaLinkedinIn>
                        </a>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaFacebook className="w-5 h-5"></FaFacebook>
                        </a>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaInstagram className="w-5 h-5"></FaInstagram>
                        </a>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaTwitter className="w-5 h-5"></FaTwitter>
                        </a>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className='text-xl font-semibold'>Services</h3>
                    <div className='space-y-4  text-gray-300'>
                        <a href='/' className='block'>UI/UX DESIGN</a>
                        <a href='/' className='block'>WP Development</a>
                        <a href='/' className='block'>React development</a>
                        <a href='/' className='block'>Next js</a>


                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className='text-xl font-semibold'>Contact us</h3>
                    <div className='space-y-4 text-gray-300'>
                        <p>+44 234 567 789</p>
                        <p>infotect@gmail.com</p>
                        <p>50 Wall street suite, <br /> 44150 ohio, UnitedStates</p>
                    </div>

                </div>
                <div className="space-y-4">
                <h3 className='text-xl font-semibold'>Subscribe</h3>
                <div className='space-y-4 text-gray-300'>
                    <div className="relative w-full">
                        <input type="email" placeholder='example@email.com' className='input'
                         />
                         <button className='btn'>SEND</button>
                    </div>
                </div>
                </div>



            </div>
            <div className="h-12"></div>
            <hr className='border-gray-300'/>
            <div className="h-12"></div>
            <div className='flex flex-col sm:flex-row justify-between pb-7'>
                <p>copyright@2024 hussain</p>
                <p>TERMS OF USE | PRIVACY POLICY</p>

            </div>

        </div>
    )
}

export default Footer
