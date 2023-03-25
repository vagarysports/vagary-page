import { ServicesSection } from '@/components/ServicesSection'
import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'

const Services = () => {
  return (
    <div>
        <Header title='Services' bgImage='/images/services-card.jpg'  />
        <h2 id='services'></h2>
        <div className='flex justify-center items-center min-h-[500px] w-full'>
          <ServicesSection />
        </div>
    </div>
  )
}

export default Services