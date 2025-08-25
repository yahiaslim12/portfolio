import React from 'react'

type SubFooterPropsType = {
    title : string;
    content : string
}
export default function SubFooter({
    title,
    content
} : SubFooterPropsType) {
  return (
    <div className='flex flex-col gap-1 sm:gap-3'>
        <h4 className='text-base text-[#696969] font-medium capitalize'>{title}</h4>
        <p className='text-base sm:text-lg md:text-xl text-white font-medium'>{content}</p>
    </div>
  )
}
