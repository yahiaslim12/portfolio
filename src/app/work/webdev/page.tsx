import Couv from '@/components/web/Couv'
import Head from 'next/head'
import React from 'react'

export default function Web() {
  return (
    <>
      <Head>
        <title>Web based - page</title>
      </Head>
      <main className='pt-40 px-3'>
        <Couv/>
      </main>
    </>
  )
}
