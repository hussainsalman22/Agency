import React from 'react'
import "./partner.css"
import Image from 'next/image'
import logo from "../../assets/partner_1.svg"

const partners = () => {
  return (
    <>
    <div className='relative overflow-hidden h-40'>
        <div className='absolute inset-0 animation-scrolling-text'>
            <span className='text-transparent lg:px-4 lg:text-6xl text-4xl font-semibold uppercase text-stroke3'>
                Our Reputed world wide Partners
            </span>
        </div>
      
    </div>
    {/* // company logo */}

    <div className='grid   lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-3 items-center px-24 pt-5'>
        <Image src={logo}></Image>
        <Image src={logo}></Image>
        <Image src={logo}></Image>
        <Image src={logo}></Image>
        <Image src={logo}></Image>
        <Image src={logo}></Image>
    </div>
    </>
  )
}

export default partners
