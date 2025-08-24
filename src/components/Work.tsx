"use client"
import React from 'react'
import SubWork from './SubWork'
import { useState } from 'react'
type workType = {
    src : string;
    title : string;
    sub1 : string;
    sub2 : string;
    link : string
}
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
  return (
    <div className='mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
        <div className='w-full flex items-start flex-col sm:flex-row gap-5 lg:gap-44 pl-0  lg:pl-32 xl:gap-64 xl:pl-44'>
            <div className='flex gap-3 items-center'>
                <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
                <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Work</span>
            </div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold w-full sm:w-2/3 xl:w-1/2'>A Showcase of Digital Design Excellence, My Work, Your Next Inspiration</h1>
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
