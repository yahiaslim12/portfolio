"use client";
import React, { useState ,useRef} from "react";
import Service from "./Service";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitText from "./ui/SpliteText";

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const [services] = useState([
    {
      src: "/icon-1.png",
      title: "AI & LLM Solutions",
      description:
        "Design, fine-tune, and integrate LLMs/agentic AI; build NLP pipelines and ML models that plug into real apps.",
    },
    {
      src: "/icon-2.png",
      title: "Full-Stack Web Apps",
      description:
        "Next.js/React front-ends with Python (FastAPI/Flask) back-ends, secure APIs, auth, dashboards, and payments.",
    },
    {
      src: "/icon-3.png",
      title: "Cross-Platform Mobile Apps",
      description:
        "React Native apps that share code with the web, connect to your APIs/models, and ship to iOS & Android.",
    },
    {
      src: "/icon-4.png",
      title: "Data Science & Analytics",
      description:
        "Data cleaning, feature engineering, model training/evaluation, and decision-ready insights & reports.",
    },
  ]);
   const root = useRef<HTMLDivElement | null>(null)
  
  useGSAP(() => {
    if (!root.current) return;
    
    gsap.from("#t1", {
      scrollTrigger: { 
        trigger: ".services-container", 
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
    <div ref={root} className="services-container md:px-16 lg:px-20 xl:px-28 mt-12 md:mt-16 lg:mt-24 xl:mt-32">
      <div className="w-full flex items-start flex-col sm:flex-row gap-5 lg:gap-44 xl:gap-64">
        <div id="t1" className="flex gap-3 items-center">
          <div className="h-1.5 w-1.5 bg-black rounded-full" />
          <span className="uppercase font-medium text-sm sm:text-base">
            Services
          </span>
        </div>
        <SplitText
                    text="Human-Centered Design, Delivered Solutions"
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

      {/* grid layout + pass props to Service */}
      <div className="mt-10 border-y border-l border-gray-200 flex flex-wrap md:flex-nowrap">
        {services.map((item, index) => (
          <Service key={"service - "+index} {...item} />
        ))}
      </div>
    </div>
  );
}
