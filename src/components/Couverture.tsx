"use client";
import React from "react";
import TextType from "./ui/TextType";

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitText from "./ui/SpliteText";

gsap.registerPlugin(ScrollTrigger,useGSAP)
export default function Couverture() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate whole section in (subtle)
    gsap.from(root.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: root.current, start: "top 85%", once: true , toggleActions : 'play none none none' },
    })

    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
      scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
    })

    // Chips
    tl.from(".chip1", { opacity: 0, x: -50, stagger: 0.12,duration : 0.8 })
    .from(".chip2",{ opacity: 0, x: -50, stagger: 0.12,duration : 0.8 },"-=0.4")

    // Title & arrow
    tl.from(".title", { opacity: 0, y: 24 }, "-=0.3")
      .from(".hero-arrow", { opacity: 0, x: 30, rotate: 10 }, "-=0.4")
    const tl2 = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
      scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
    })
    tl2.from(".list1", { opacity: 0, y: 50, duration: 0.8 })
      .from(".list2", { opacity: 0, y: 50, duration: 0.8 }, "-=0.3")
      .from(".list3", { opacity: 0, y: 50, duration: 0.8 }, "-=0.3");
    gsap.from(".img1", { 
      opacity: 0, 
      x: 30, 
      rotate: 10 ,
      duration : 0.8,
      scrollTrigger: { trigger: root.current, start: "top 85%", once: true , toggleActions : 'play none none none' },
    })
    gsap.from(".img2", { 
      opacity: 0, 
      x: 30, 
      scale: 0.6 ,
      duration : 0.8,
      scrollTrigger: { trigger: root.current, start: "top 85%", once: true , toggleActions : 'play none none none' },
    })


  }, { scope: root })
  return (
    <section ref={root} className="relative w-full h-auto pb-10 lg:pb-0 lg:h-[125vh] border-b border-gray-200">
      {/* grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-[calc(100%/6)] sm:w-[calc(100%/13)] ${i !== 12 ? "border-r border-gray-200" : ""} ${i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 ? "hidden sm:block" : ""}`}
          />
        ))}
      </div>

      {/* content ABOVE the grid */}
      <div className="relative z-10 pt-40">
        <div className="flex flex-wrap items-center gap-5 mb-10">
          <span className="chip1 uppercase border rounded-full border-gray-200 px-5 py-2 bg-white text-[#0F0F0F] text-xs sm:text-sm font-medium">
            Data Science & AI
          </span>
          <span className="chip2 uppercase border rounded-full border-gray-200 px-5 py-2 bg-white text-[#0F0F0F] text-xs sm:text-sm font-medium">
            Fullstack web & mobile developer
          </span>
        </div>
        <div>

        </div>
        <div style={{lineHeight : 1}} className="flex items-end justify-between w-full">
          <SplitText
                    text="Data Scientist & AI Software Engineer"
                    tag="h1"
                    splitType="words, chars"
                    delay={40}                 
                    duration={0.6}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40, rotateX: 15 }}
                    to={{ opacity: 1, y: 0, rotateX: 0 }}
                    threshold={0.15}
                    rootMargin="-80px"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold uppercase mb-0 w-full"
                    textAlign="left"
                    />
          <img src={"/hero-arrow.png"} className="hero-arrow w-[15vw] h-[10vw] lg:w-[2O0px] lg:h-[150px] mb-4 hidden md:block"/>
        </div>
      </div>
      <div className="mt-10 md:mt-20 lg:mt-16 xl:mt-12 2xl:mt-28 ps-8 border-l-2 border-black z-10 uppercase relative">
            <p className="list1">Hey I&apos;m Yahia Slimani</p>
            <p className="list2"><b>4+ Years</b> of experience</p>
            <p className="list3">In Web & mobile developement</p>
      </div>
      <div className="w-full flex justify-end relative z-10 mt-10 lg:mt-0 2xl:mt-10 ">
        <div className="w-[350px] h-[200px] img1">
            <img src={"/dev.jpg"} alt="dev pic" className="w-full h-full rounded-xl object-cover"/>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 z-[11] -translate-x-1/2 hidden lg:block img2">
        <img src="/warda.png" alt="" className="absolute bottom-0 left-0"/>
        <img src={"/me.png"} alt="me" className="w-[600px] h-[500px] object-contain z-10 relative" />
      </div>
    </section>
  );
}
