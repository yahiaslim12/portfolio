import React from 'react'

export default function Profile() {
  return (
    <div>
        <div className='flex items-end flex-col'>
            <div className=' w-[300px]'>
                <img src="/7.jpg" alt="" className='w-full h-[300px] object-cover'/>
                <div className='w-full'>
                    <h3 className='font-semibold text-xl text-start mt-8'>Yahia Slimani</h3>
                    <p className='text-[#696969] capitalize '>Data scientist & AI software engineer</p>
                    <div className='mt-5'>
                        <img src="/signature.webp" alt="" className='w-1/4'/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
