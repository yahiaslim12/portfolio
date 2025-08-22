'use client'
import React, {useState} from 'react'
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
])


  return (
    <div className=''>
        <div className='flex gap-3 items-center'>
            <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
            <span className='uppercase font-medium mb-0 text-sm sm:text-base'>About Me</span>
        </div>
        <div className='mt-10'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Passionate about AI, Data Science & Software Engineering</h1>
            <p className='text-[#696969] font-medium mt-10 text-lg'>
                &quot;I’m <span className='text-black'>Yahia Slimani</span>, an AI-focused full-stack developer with a Master’s in Data Science & Artificial Intelligence. I turn complex ideas into scalable web and mobile products, integrating LLMs, NLP, and data-driven models end-to-end for real users. My freelance work blends deep analysis with high-performance model integration and includes award-winning projects recognized at my university&quot;
            </p>
            <button className='font-medium mt-10 border border-gray-200 hover:bg-black hover:text-white rounded-full px-8 py-2'>Download Resume</button>
        </div>
        <div className='flex gap-3 items-center mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Experience</span>
        </div>
        <div className='w-full mt-10'>
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
        <div className='flex gap-3 items-center mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>Education</span>
        </div>
        <div className="w-full mt-10">
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
