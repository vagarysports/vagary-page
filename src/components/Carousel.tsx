import React, { useRef,useState, useEffect } from 'react'
import Image from 'next/image';

const LOGOS = [
  { path: '/images/logos/alcobendas.png' },
  { path: '/images/logos/alcorcon.png' },
  { path: '/images/logos/aravanca.png' },
  { path: '/images/logos/atleti.png' },
  { path: '/images/logos/getafe.png' },
  { path: '/images/logos/leganes.png' },
  { path: '/images/logos/rayo.png' },
  { path: '/images/logos/Real_Madrid_CF.png' },
  { path: '/images/logos/tayo-majada.png' },
  { path: '/images/logos/Union_Adarve.png' },
  { path: '/images/logos/young_boys.png' },
]

export const Carousel = () => {

  return (
    <div className="relative w-full max-w-[1500px] rounded-lg mx-2 bg-gradient-to-b from-[#1B1C1D] via-[#0A0A0B] to-[#1B1C1D] overflow-x-hidden shadow-[#37393b] shadow-lg"> 
        <div className='absolute top-0 left-0 bottom-0 w-[60px] z-10 bg-gradient-to-r from-primary to-transparent' ></div>
        <div className='absolute top-0 right-0 bottom-0 w-[60px] z-10 bg-gradient-to-l from-primary to-transparent' ></div>
        <div className='relative flex gap-10 w-full py-10 items-center justify-start animate-[carouselAutoSlide_20s_linear_infinite] md:animate-[carouselAutoSlide_40s_linear_infinite] lg:animate-carouselAutoSlide'>
          {LOGOS.map(logo=>(
            <div key={logo.path + 'logos-carousel'} className="shrink-0">
              <Image src={logo.path} alt="logo" width={100} height={100} />
            </div>
          ))}
          {LOGOS.map(logo=>(
            <div key={logo.path + 'logos-carousel'} className="shrink-0">
              <Image src={logo.path} alt="logo" width={100} height={100} />
            </div>
          ))}
          {LOGOS.map(logo=>(
            <div key={logo.path + 'logos-carousel'} className="shrink-0">
              <Image src={logo.path} alt="logo" width={100} height={100} />
            </div>
          ))}
        </div>
    </div>
  )
}
