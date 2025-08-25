import React from 'react'
type AwardProps = Record<string,string> & {
    c ?: string
}
export default function Award({
    date,
    title,
    small_desc,
    c
}:AwardProps) {
  return (
    <div className={'border-t border-gray-200 w-full grid grid-cols-1 sm:grid-cols-[0.5fr_1fr_2fr] py-5 gap-3 '+c}>
        <span className='text-[#696969] font-medium'>{date}</span>
        <h1 className='text-base sm:text-lg font-medium'>{title}</h1>
        <span className='text-[#696969] font-medium text-sm'>{small_desc}</span>
    </div>
  )
}
