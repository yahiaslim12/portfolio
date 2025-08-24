import { sub } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'
type propsType = Record<string,string>
export default function SubWork({
    src,
    title,
    sub1,
    sub2,
    link
}: propsType) {
  return (
    <div>
        <div className='w-full'>
            <img src={src} alt="" className='w-full h-[350px] sm:h-[500px] object-cover'/>
        </div>
        <div className='flex sm:items-center sm:justify-between mt-4 gap-3 sm:gap-0 sm:mt-8 flex-col sm:flex-row'>
            <Link href={link} className='text-lg font-bold capitalize'>{title}</Link>
            <div className='flex items-center gap-3'>
                <span className='px-6 py-1 border border-gray-200 text-[#696969] font-medium rounded-full capitalize text-xs sm:text-sm'>{sub1}</span>
                <span className='px-6 py-1 border border-gray-200 text-[#696969] font-medium rounded-full capitalize text-xs sm:text-sm'>{sub2}</span>
            </div>
        </div>
    </div>
  )
}
