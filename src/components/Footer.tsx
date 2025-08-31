'use client'
import React, { useState } from 'react'
import SubFooter from './SubFooter';
import Link from 'next/link';
type SubFooterPropsType = {
    title : string;
    content : string
}
export default function Footer() {
  const [subfooter,setSubfooter] = useState<SubFooterPropsType[]>([
    {
        title : "email address",
        content : "slimaniyahia53@gmail.com"
    },
    {
        title : "current address",
        content : "Chelghoum Laid, Mila, Algeria"
    },
    {
        title : "need projects ?",
        content : "Call +213 557 00 73 22"
    },
  ])
  return (
    <footer className='bg-[#0F0F0F] w-full py-10 md:py-16 lg:py-20 xl:py-28 mt-12 md:mt-16 lg:mt-24 xl:mt-32 text-white relative'>
        <div className='flex flex-wrap gap-5 justify-between items-center px-3 sm:px-10 md:px-16 lg:px-20 pb-10 md:pb-16 lg:pb-20 xl:pb-28 border-b border-[#696969]'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Reach out to get started about <br />your design needs?
                </h1>

                <button className='bg-white rounded-full py-3 px-8 text-black font-medium'>Hire me Now</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-5 xl:gap-10  px-3 sm:px-10 md:px-16 lg:px-20 pt-10 md:pt-16 lg:pt-20 xl:pt-28'>
             {
                subfooter.map((item,index) => (
                    <SubFooter key={"subfooter - "+index} title={item.title} content={item.content}/>
                ))
             }
             <div className='flex flex-col gap-3'>
                <h4 className='text-base text-[#696969] font-medium capitalize'>Contact</h4>
                <div className='flex text-base sm:text-lg md:text-xl gap-1 sm:gap-3'>
                    
                        <Link href={"/linkedin"}>LinkedIn</Link>
                        <Link href={"/linkedin"}>Github</Link>
                        <Link href={"/linkedin"}>Facebook</Link>
                </div>

             </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:items-center px-3 sm:px-10 md:px-16 lg:px-20 pt-10 md:pt-16 lg:pt-20 xl:pt-28 z-10 relative'>
             <h1 className='text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold uppercase'>YAHIA slimani</h1>
             <div className='w-full md:w-2/12'>
                <p>© 2025.
                    All Rights Reserved.
                    Design by Yahia Slimani from scratch
                </p>
             </div>
        </div>
        <div className='absolute bottom-0 left-1/2'>
            <img src="/warda.png" alt="" className=''/>
        </div>
    </footer>
  )
}
