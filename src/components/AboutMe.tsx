'use client'
import React, {useState,useRef} from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitText from "./ui/SpliteText";
gsap.registerPlugin(ScrollTrigger,useGSAP)

type ExperienceType = Record<string,string>
export default function AboutMe() {
  
  const [exp, setExp] = useState<ExperienceType[]>([
    {
      date: "Jun 2023 - Present",
      title: "Software Developer | Data Scientist | AI Model Creator",
      company: "Freelance",
    },
  {
    date: "Jun - Jul (2024)",
    title: "Web Developer",
    company: "Devlly, Constantine, Algeria",
  },
  {
    date: "Sep 2025 - Present",
    title: "IT Engineer",
    company: "Cosider Travaux Publics",
  },
])
  const [edu, setEdu] = useState<ExperienceType[]>([
  {
    title: "Baccalaureate in Experimental Sciences",
    where: "Khira Zarouki High School, Chelghoum Laïd, Algeria",
    fromToDate: "Oct 2020",
  },
  {
    title: "Bachelor’s Degree in Computer Science (Software Engineering)",
    where: "Constantine 2 University – Abdelhamid Mehri, Constantine, Algeria",
    fromToDate: "Nov 2020 - Jun 2023",
  },
  {
    title: "Master’s in Data Science and Artificial Intelligence",
    where: "Constantine 2 University – Abdelhamid Mehri, Constantine, Algeria",
    fromToDate: "Oct 2023 - Jul 2025",
  },
  {
    title: "PhD Student in Quantum Computing and AI",
    where: "Constantine 2 University – Abdelhamid Mehri, Constantine, Algeria",
    fromToDate: "Nov 2025 - Present",
  },
]);


  const handleDownload = () => {
    const a = document.createElement("a")
    a.href = "./CV.pdf"
    a.download = "./CV.pdf"
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from([".title1",".title2",".title3"], {
      scrollTrigger: { trigger: root.current, start: "top 85%", once: true , toggleActions : 'play none none none' },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    })
    gsap.from([".para",".btn"], {
      scrollTrigger: { trigger: root.current, start: "top 20%", once: true , toggleActions : 'play none none none' ,immediateRender : false},
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
    })
    gsap.from([".exps",".edus"], { 
      scrollTrigger: { trigger: root.current, start: "bottom 150%", once: true , toggleActions : 'play none none none' ,immediateRender : false}, 
      opacity: 0, 
      y: 100, 
      duration: 1, 
      ease: "power2.out",
    })


    

  }, { scope: root })
  return (
    <div ref={root} className=''>
        <div className='title1 flex gap-3 items-center'>
            <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
            <span className='uppercase font-medium mb-0 text-sm sm:text-base'>About Me</span>
        </div>
        <div className='mt-10'>
            <SplitText
                    text="Passionate about AI, Data Science & Software Engineering"
                    tag="h1"
                    splitType="words, chars"
                    delay={40}                 
                    duration={0.6}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40, rotateX: 15 }}
                    to={{ opacity: 1, y: 0, rotateX: 0 }}
                    threshold={0.15}
                    rootMargin="-80px"
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                    textAlign="left"
                    />
            <p className='para text-[#696969] font-medium mt-10 text-lg'>
                &quot;I’m <span className='text-black'>Yahia Slimani</span>, an AI-focused full-stack developer and PhD candidate in Computer Science, specializing in AI and Quantum Computing for medical applications. I turn complex ideas into scalable web and mobile products, integrating LLMs, NLP, and data-driven models end-to-end for real users. My research focuses on leveraging quantum algorithms to enhance AI solutions in healthcare. My freelance work blends deep analysis with high-performance model integration and includes award-winning projects recognized at my university&quot;
            </p>
            <button onClick={handleDownload} className='btn font-medium mt-10 border border-gray-200 hover:bg-black hover:text-white rounded-full px-8 py-2'>Download Resume</button>
        </div>
        <div className='title2 flex gap-3 items-center mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Experience</span>
        </div>
        <div className='w-full mt-10 exps'>
              {
                exp.map((e,i)=>(
                   <div key={i} className='grid grid-cols-2 mt-5 w-full gap-5 lg:gap-1 xl:gap-10 items-start'>
                       <div className='border border-gray-200 w-fit rounded-full px-4 py-2 text-sm text-[#696969] font-medium'>{e.date}</div>
                       <div>
                         <h5 className='text-base xl:text-lg font-medium'>{e.title}</h5>
                         <p className='text-sm text-[#696969] font-medium'>{e.company}</p>
                       </div>
                   </div>
                ))
              }
        </div>
        <div className='title3 flex gap-3 items-center mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Education</span>
        </div>
        <div className="w-full mt-10 edus">
        {edu
          .slice() // make a copy
          .reverse()
          .map((e, i) => (
            <div
              key={i + "-education"}
              className={`flex mt-5 w-full gap-3 border-t border-gray-200 py-3 ${i === edu.length - 1 && "border-b"}`}
            >
              <h5 className="text-base sm:text-lg font-medium mb-0">{e.title}</h5>
              <p className="text-sm sm:text-base text-[#696969]">
                {e.where} - {e.fromToDate}
              </p>
            </div>
          ))}
      </div>

    </div>
  )
}
