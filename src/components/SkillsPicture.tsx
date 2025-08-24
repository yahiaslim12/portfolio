import React from 'react'
import TextCouv from './TextCouv'

export default function SkillsPicture() {
  return (
    <div className='border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-1/2 pr-0 lg:pr-8 xl:pr-16 py-12 md:py-16 lg:py-24 xl:py-32'>
        <div className='flex relative'>
            <img src="/yahia.jpg" alt="" className='w-full h-full object-cover'/>

            <TextCouv/>
        </div>
    </div>
  )
}
