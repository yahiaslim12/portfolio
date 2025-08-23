import React from 'react'

export default function Card({text} : {text :string}) {
  return (
    <div className='w-[150px] h-auto md:h-[120px] py-6 md:py-10 rounded-3xl flex items-center justify-center text-[#696969]'>
        <p className='font-bold text-base sm:text-lg md:text-xl'>{text}</p>
    </div>
  )
}