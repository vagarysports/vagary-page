import { ServicesSection } from '@/components/ServicesSection'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div>
        <div className='relative w-full bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:'url(/images/services-card.jpg)' }}>
          <div className='rotate-0 bg-black py-20 md:py-56 bg-opacity-70 top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row justify-center items-center  gap-5'>
            <div className='w-[150px] md:w-[200px] relative min-h-[300px] opacity-0 animate-[fadeIn_.5s_ease_forwards_.5s]'>
              <Image alt="" src="/logos/logo-vert.png" fill style={{ objectFit:'contain' }}/>
            </div>
            <div className='w-[1px] h-[300px] bg-white hidden md:block animate-[scaleY_.5s_ease_forwards] origin-center'></div>
            <div className='animate-[scaleY_.5s_ease_forwards_.5s] opacity-0 origin-top'>
              <h2 className='text-6xl sm:text-8xl font-bold text-white'>Services</h2>
            </div>
          </div>
        </div>
        <h2 id='services'></h2>
        <div className='flex justify-center items-center min-h-[500px] w-full'>
          <ServicesSection />
        </div>
    </div>
  )
}

export default Services