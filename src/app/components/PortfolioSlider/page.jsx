"use client"
import React from 'react'
import { useState } from 'react';
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from 'next/image';
import Link from 'next/link';
import service from "../../assets/service_2.jpeg"
import service1 from "../../assets/service_3.jpeg"
import service2 from "../../assets/service_4.jpeg"




const PortfolioSlider = (props) => {

    const data =[
        {title:"colorful art work", src:service},
        {title:"colorful art work", src:service1},
        {title:"colorful art work", src:service2},
        {title:"colorful art work", src:"/../../assets/service_2.jpeg"},
    ]
    const [breakPoints, setBreakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]);
    const Item = ({ node }) => {
        return <div>{node}</div>;
      };
    return (
        <Carousel className='mt-10' breakPoints={breakPoints}>
           {
            data.map((item,index)=><Link key={index} href={"/"} className='relative'>
                <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl'></div>
                <div><Image src={item.src} alt='portfolio' className='w-full h-full rounded-2xl'  width={0} height={0}></Image></div>
                <div className='absolute top-0 left-0 hover:bg-black/50 w-full h-full cursor-pointer flex items-center justify-center rounded-2xl'>
                    <div className="text-center ">
                        <h2 className="text-2xl font-semibold mb-1 text-white">{item.title}</h2>
                        <p>subtitle here</p>
                    </div>
                </div>
            </Link>)
           }
        </Carousel>
    ) 
}

export default PortfolioSlider
