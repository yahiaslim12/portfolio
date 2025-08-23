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
    <div className='grid grid-cols-3 gap-5 mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
        {
            work.map((item,index)=>(
                <SubWork key={"subwork - "+index} src ={item.src} title={item.title} sub1 = {item.sub1} sub2 = {item.sub2} link = {item.link}/>
            ))
        }
    </div>
  )
}
