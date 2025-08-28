"use client"
import { InstagramIcon, GithubIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'
import LinkIn from './icons/LinkIn'
import Link from 'next/link'
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitText from "./ui/SpliteText";

gsap.registerPlugin(ScrollTrigger,useGSAP)
export default function Profile() {
    const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".me", {
      scrollTrigger: { trigger: root.current, start: "top 85%", once: true , toggleActions : 'play none none none' },
      opacity: 0,
      scale: 0.6,
      duration: 1,
      ease: "power2.out",
    })
    const tl1 = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
      scrollTrigger: { trigger: root.current, start: "top 0%", once: true , toggleActions : 'play none none none',immediateRender: false, },
    })
    const tl2 = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
      scrollTrigger: { trigger: root.current, start: "top 0%", once: true , toggleActions : 'play none none none',immediateRender: false, },
    })
    const tl3 = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
      scrollTrigger: { trigger: root.current, start: "bottom 90%", once: true , toggleActions : 'play none none none',immediateRender: false, },
    })
    tl1.from(".l1",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    })
    .from(".l2",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    .from(".l3",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")

    tl2.from(".title1",{
        opacity : 0, 
        x : -50,
        duration : 0.8
    })
    .from(".list1",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    .from(".list2",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    .from(".list3",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    .from(".list4",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    
    tl3.from(".title2",{
        opacity : 0, 
        x : -50,
        duration : 0.8
    })
    .from(".li1",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    .from(".li2",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")
    .from(".li3",{
        opacity : 0, 
        y : 50,
        duration : 0.8
    },"-=0.4")

  }, { scope: root })
  return (
    <div ref={root}>
        <div className='flex md:items-end flex-col'>
            <div className='w-full sm:w-[300px] border-b border-gray-200 pb-12 md:pb-16 lg:pb-24'>
                <div className='me w-full relative'>
                    <img src="/7.jpg" alt="" className='w-full h-[300px] object-cover rounded-xl'/>
                    <div className="absolute w-1/6 rounded-tl-xl bottom-0 right-0 bg-white h-[40px]">
                        <div className='absolute w-[25px] h-[25px] rounded-full bg-transparent -left-[25px] bottom-0 shadow-[10px_12px_0px_white]'></div>
                        <div className='absolute w-[25px] h-[25px] rounded-full bg-transparent -top-[25px] right-0 shadow-[10px_12px_0px_white]'></div>
                    </div>
                </div>
                <div className='w-full'>
                    <h3 className='l1 font-semibold text-lg sm:text-xl text-start mt-8'>Yahia Slimani</h3>
                    <p className='l2 text-sm sm:text-base text-[#696969] capitalize '>Data scientist & AI software engineer</p>
                    <div className='mt-5 l3'>
                        <img src="/signature.webp" alt="" className='w-[20%] sm:w-1/4'/>
                    </div>
                </div>
            </div>
            
        </div>
        {/* Contact bloc */}
        <div className='title1 flex gap-3 items-center mt-12 md:mt-16 lg:mt-24 mb-10'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Contact</span>
        </div>
        <div className='w-full'>
            <div className='list1 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
                <h6 className='text-[#696969] font-medium mb-0 text-sm sm:text-base'>Phone Number</h6>
                <span className='text-base sm:text-lg font-medium'>+213 557 00 73 22</span>
            </div>
            <div className='list2 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
                <h6 className='text-[#696969] font-medium mb-0 text-sm sm:text-base'>Email Address</h6>
                <span className='text-base sm:text-lg font-medium'>slimaniyahia53@gmail.com</span>
            </div>
            <div className='list3 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
                <h6 className='text-[#696969] font-medium mb-0 text-sm sm:text-base'>Website</h6>
                <span className='text-base sm:text-lg font-medium'>YahiaSlimani.io</span>
            </div>
            <div className='list4 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
                <h6 className='text-[#696969] font-medium mb-0 text-sm sm:text-base'>Current Address</h6>
                <span className='text-base sm:text-lg font-medium '>Chelghoum Laid, Mila, Algeria</span>
            </div>
        </div>
        {/* Social Media bloc */}
        <div className='title2 flex gap-3 items-center mt-12 md:mt-16 lg:mt-24 mb-10'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Social Media</span>
        </div>
        <div className='w-full'>
           <div className='li1 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
                <div className='flex items-center gap-5'>
                    <h6 className='text-[#696969] font-medium mb-0'><LinkedinIcon/></h6>
                    <span className='text-base font-medium'>LinkedIn</span>
                </div>
                <Link href={"https://www.linkedin.com/in/yahia-slimani-666202250/"} className='border border-gray-200 rounded-full px-6 py-1 font-medium hover:bg-black hover:text-white'>Go</Link>
            </div>

            <div className='li2 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
            <div className='flex items-center gap-5'>
                <h6 className='text-[#696969] font-medium mb-0'><InstagramIcon/></h6>
                <span className='text-base font-medium'>Instagram</span>
            </div>
            <Link href={"https://www.instagram.com/__yahiaaa__/"} className='border border-gray-200 rounded-full px-6 py-1 font-medium hover:bg-black hover:text-white'>Go</Link>
            </div>

            <div className='li3 flex border-t border-gray-200 w-full items-center justify-between py-2.5'>
            <div className='flex items-center gap-5'>
                <h6 className='text-[#696969] font-medium mb-0'><GithubIcon/></h6>
                <span className='text-base font-medium'>GitHub</span>
            </div>
            <Link href={"https://github.com/yahiaslim12"} className='border border-gray-200 rounded-full px-6 py-1 font-medium hover:bg-black hover:text-white'>Go</Link>
            </div>

        </div>
    </div>
  )
}
