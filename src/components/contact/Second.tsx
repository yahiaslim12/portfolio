import React from 'react'
import Title from '../Title'
import ContactForm from './ContactForm'

export default function Second() {
  return (
    <section className='pt-12 md:pt-16 lg:pt-24 xl:pt-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:px-16 lg:px-20 xl:px-28'>
        <div>
            <Title title='Contact me'/>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>
                Let’s make your
                website unique
                and modern
            </h1>
        </div>
        <ContactForm/>
    </section>
  )
}
