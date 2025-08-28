"use client"
import React, { useRef } from 'react'
import SubWork from './SubWork'
import { useState } from 'react'
import SplitText from './ui/SpliteText'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type workType = {
    src : string;
    title : string;
    sub1 : string;
    sub2 : string;
    link : string
}

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const [work,setWork] = useState <workType[]>([
    {
        src : "/web.png",
        title : "web development",
        sub1 : "product developer",
        sub2 : "fullstack",
        link : "/work/webdev/"
    },
    {
        src : "/mobile.png",
        title : "mobile development",
        sub1 : "product developer",
        sub2 : "fullstack",
        link : '/work/mobiledev/'
    },
    {
        src : "/ai.jpg",
        title : "data science & AI",
        sub1 : "model developer",
        sub2 : "researching",
        link : "/work/aidev/"
    },
  ])
  
  const root = useRef<HTMLDivElement | null>(null)
  
  useGSAP(() => {
    // Method 1: Check for element existence
    if (!root.current) return;
    
    // Method 2: Use string selector instead of ref
    gsap.from(".t1", {
      scrollTrigger: { 
        trigger: ".work-container", // Use class instead of ref
        start: "top 85%", 
        once: true, 
        toggleActions: 'play none none none' 
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    })

  }, { scope: root })
  
  return (
    <div ref={root} className='work-container mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
        <div className='w-full flex items-start flex-col sm:flex-row gap-5 lg:gap-44 pl-0  lg:pl-32 xl:gap-64 xl:pl-44'>
            <div className='t1 flex gap-3 items-center'>
                <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
                <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Work</span>
            </div>
            <SplitText
                    text="A Showcase of Digital Design Excellence, My Work, Your Next Inspiration"
                    tag="h1"
                    splitType="words, chars"
                    delay={40}                 
                    duration={0.6}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40, rotateX: 15 }}
                    to={{ opacity: 1, y: 0, rotateX: 0 }}
                    threshold={0.15}
                    rootMargin="-80px"
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold w-full sm:w-2/3 xl:w-1/2"
                    textAlign="left"
                    />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16'>
            {
                work.map((item,index)=>(
                    <SubWork key={"subwork - "+index} src ={item.src} title={item.title} sub1 = {item.sub1} sub2 = {item.sub2} link = {item.link}/>
                ))
            }
        </div>
    </div>
  )
}