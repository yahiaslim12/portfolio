"use client"
import { useState,useEffect } from 'react'
import { MenuIcon, ToggleRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
    const [inTop, setInTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setInTop(window.scrollY <= 1); 
    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); 

  return (
    <header className={`px-3 flex justify-between items-center fixed top-0 left-0 w-full z-50 ${inTop ? "bg-transparent" : "bg-white shadow-lg"}`}>
        <div className='flex gap-20 justify-between items-center'>
            <Link href={"/"}><img width={150} height={100} src="/logo.png" alt="my logo" className='object-cover'/></Link>
            <span className='font-semibold text-[#0F0F0F] text-lg hidden md:block'>slimaniyahia53@gmail.com</span>
        </div>
        <nav className='w-fit md:w-[40%] xl:w-1/3 flex items-center justify-end lg:justify-between'>
            <ul className='w-full items-center gap-10 font-medium hidden lg:flex'>
                <li>
                    <Link href={"/"} className='w-fit group relative hover:text-black transition-all duration-500'>
                        Home 
                        <div className='h-[2px] bg-black w-full transition-all duration-500 absolute left-0 -bottom-0.5'></div>
                    </Link>
                </li>
                <li className='text-[#696969]'>
                    <Link href={"/About"} className='w-fit group relative hover:text-black transition-all duration-500'>
                        About
                        <div className='h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-0.5'></div>

                    </Link>
                </li>
                <li className='text-[#696969]'>
                    <Link href={"#services"} className='w-fit group relative hover:text-black transition-all duration-500'>
                        Services
                        <div className='h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-0.5'></div>
                    </Link>
                </li>
                <li className='text-[#696969]'>
                    <Link href={"/contact"} className='w-fit group relative hover:text-black transition-all duration-500'>
                        Contact
                        <div className='h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-0.5'></div>
                    </Link>
                </li>
            </ul>
            <button className="flex flex-col justify-center items-center gap-2 relative group">
                            <span className="w-10 border-t-2 border-black"></span>
                            <span className="w-10 border-t-2 border-black"></span>
                            <span className='absolute bg-white left-0 bottom-0 w-0 h-0.5 group-hover:w-5 transition-all'></span>
            </button>
        </nav>
    </header>
  )
}
