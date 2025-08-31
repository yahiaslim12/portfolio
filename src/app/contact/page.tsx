import Couv from '@/components/contact/Couv'
import Second from '@/components/contact/Second'
import Head from 'next/head'
import React from 'react'

export default function AI() {
  return (
    <>
      <Head>
        <title>AI based - page</title>
      </Head>
      <main className='pt-40 px-3'>
        <Couv/>
        <Second/>
      </main>
    </>
  )
}
