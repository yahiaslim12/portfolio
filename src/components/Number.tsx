import React from 'react'
type NumberProps = {
    number : string,
    title : string;
}
export default function Number({
    number,
    title,
} : NumberProps) {
  return (
    <div className={'flex flex-col gap-3 w-1/2 sm:w-fit'}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>{number}</h1>
            <h6 className='text-[#696969] font-medium'>{title}</h6>
    </div>
  )
}
