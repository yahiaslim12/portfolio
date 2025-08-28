
import React from 'react'
import CountUp from './ui/Countup';
type NumberProps = {
    number : number,
    title : string;
    symbole : string
}
export default function Number({
    number,
    title,
    symbole,
} : NumberProps) {
  return (
    <div className={'flex flex-col items-center sm:items-start gap-3 w-full sm:w-fit'}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>
              <CountUp
                from={0}
                to={number}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              {symbole}
            </h1>
            <h6 className='text-[#696969] font-medium'>{title}</h6>
    </div>
  )
}
