import React from 'react'

export default function Title({
    title
}:{ title : string }) {
  return (
    <div className='flex gap-3 items-center'>
              <div className='h-1.5 w-1.5 bg-black rounded-full'></div>
              <span className='uppercase font-medium mb-0 text-sm sm:text-base'>{title}</span>
    </div>
  )
}
