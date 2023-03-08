import React, { useRef, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export const Testimonies = () => {
  const [cellWidth, setCellWidth] = useState(0)
  
  useEffect(()=>{
    if(window.innerWidth<600){
      setCellWidth(90)
      return
    }
    if(window.innerWidth<1000){
      setCellWidth(50)
      return
    }
    setCellWidth(33)
  }, [])

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      if(window.innerWidth<600){
        setCellWidth(90)
        return
      }
      if(window.innerWidth<1000){
        setCellWidth(50)
        return
      }
      setCellWidth(33)
    })
  }, [])


  return (
    <div className='w-[90%]'>

            <Carousel
              selectedItem={0}
              centerMode
              centerSlidePercentage={cellWidth}
              
              autoPlay
              showIndicators={false}
              showStatus={false}
            >
              {[1,2,3,4,5,6,7].map(testimony=>(
                  <div key={testimony+'testimonies'} className='w-full flex justify-center'>
                  <div className='w-full max-w-[350px] flex items-center'>
                    <Image src={'/images/testimony.png'} alt="" width={150} height={150} />
                    <div>
                      <h2 className='text-[#B1890F] text-left font-bold text-xl italic mb-4'>Player Name</h2>
                      <p className='text-[#A4A4A4] text-left italic text-xs sm:text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation”</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>

    </div>
  )
}

      // <div ref={containerRef} className="relative min-h-[300px] w-[80%] max-w-[2000px] text-white"> 
      //   <div className='absolute left-full top-0 bottom-0 flex items-center'>
      //     <AiFillRightCircle size={30} />
      //   </div>
      //   <div className='absolute right-full top-0 bottom-0 flex items-center'>
      //     <AiFillLeftCircle size={30} />
      //   </div>

      //     {/* CAROUSEL  */}
      //   <div className='w-full min-h-[300px] overflow-hidden'>
      //     <div className='min-h-[300px] overflow-hidden flex'>
      //       <div className={`shrink-0 flex w-[33.3%] h-[300px] bg-orange-600`}></div>
      //       <div className={`shrink-0 flex w-[33.3%] h-[300px] bg-orange-200`}></div>
      //       <div className={`shrink-0 flex w-[33.3%] h-[300px] bg-orange-600`}></div>
      //       <div className={`shrink-0 flex w-[33.3%] h-[300px] bg-orange-600`}></div>
      //       <div className={`shrink-0 flex w-[33.3%] h-[300px] bg-orange-200`}></div>
      //       <div className={`shrink-0 flex w-[33.3%] h-[300px] bg-orange-600`}></div>
      //     </div>
      //   </div>
      // </div>