import { ServicesSection } from '@/components/ServicesSection'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'

const Services = () => {
  return (
    <div>
      <Head>
        <title>Vagary Sports Services</title>
      </Head>
        <Header scrollToId='services' title='Services' bgImage='/images/services-card.jpg'  />
        <h2 id='services'></h2>
        <div className='flex justify-center items-center min-h-[500px] w-full'>
          <ServicesSection />
        </div>
    </div>
  )
}

export default Services