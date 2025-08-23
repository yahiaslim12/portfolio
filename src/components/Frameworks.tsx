'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export default function Frameworks() {

   const paragraphRef = useRef(null)
   const toggle = useRef(null)
   const items = [
                "DEEP LEARNING",
                "LLMs",
                "NDD",
                "MACHINE LEARNING",
                "NLP",
                "NEXT JS",
                "REACT JS",
                "SPRING BOOT",
                "FLASK",
                "FASTAPI",
                "DJANGO",
                "FLUTTER",
                "NODE JS",
                "MERN STACK",
                "MY SQL",
                "POSTGRESQL",
                "MONGODB",
                "ELASTICSEARCH",
                "DOCKER",
                "KUBERNET",
            ]
   useGSAP(() => {
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(toggle.current, {
        scrollTrigger: {
          trigger: toggle.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out',
      });
   })
  return (      
      <motion.div
        ref={toggle}
        className="flex w-max mt-12 md:mt-16 lg:mt-24 xl:mt-32 border-b border-t border-gray-200 py-2 sm:py-4 lg:py-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 80,
          ease: 'linear'
        }}
      >
        {[...items, ...items].map((text, i) => (
          <Card key={i} text={text} />
        ))}
      </motion.div>

  )
}