import React from 'react'

export default function AboutMe() {
  return (
    <div className=''>
        <div className='flex gap-3 items-center'>
            <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
            <span className='uppercase font-medium mb-0'>About Me</span>
        </div>
        <div className='mt-10'>
            <h1 className="text-5xl font-semibold">Passionate about AI, Data Science & Software Engineering</h1>
            <p className='text-[#696969] font-medium mt-10 text-lg'>
                &quot;I’m <span className='text-black'>Yahia Slimani</span>, an AI-focused full-stack developer with a Master’s in Data Science & Artificial Intelligence. I turn complex ideas into scalable web and mobile products, integrating LLMs, NLP, and data-driven models end-to-end for real users. My freelance work blends deep analysis with high-performance model integration and includes award-winning projects recognized at my university&quot;
            </p>
            <button className='font-medium mt-10 border border-gray-200 rounded-full px-8 py-2'>Download Resume</button>
        </div>
    </div>
  )
}
