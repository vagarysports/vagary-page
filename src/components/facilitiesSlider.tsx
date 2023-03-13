import React, { useRef, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const images = [
  { path:'/images/facilities/field1.png' },
  { path:'/images/facilities/field2.png' },
  { path:'/images/facilities/field3.jpeg' },
  { path:'/images/facilities/field4.jpeg' },
  { path:'/images/facilities/fieldabove.png' },
  { path:'/images/facilities/fields.jpg' },
  { path:'/images/facilities/food1.jpeg' },
  { path:'/images/facilities/food2.jpeg' },
  { path:'/images/facilities/food3.jpeg' },
  { path:'/images/facilities/food4.jpeg' },
  { path:'/images/facilities/terasse.jpeg' },
  { path:'/images/facilities/terasse2.jpeg' },
  { path:'/images/facilities/terasse3.jpeg' },
  { path:'/images/facilities/room1.jpeg' },
  { path:'/images/facilities/room2.jpeg' },
  { path:'/images/facilities/room3.jpeg' },
  { path:'/images/facilities/room4.jpeg' },
  { path:'/images/facilities/room5.jpeg' },
  { path:'/images/facilities/room6.jpeg' },
  { path:'/images/facilities/room7.jpeg' },
]

export const FacilitiesSlider = () => {
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
              swipeable
              infiniteLoop
              selectedItem={0}
              centerMode
              centerSlidePercentage={cellWidth}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay
            >
              {images.map(image=>(
                  <div key={image.path+'image-carousel'} className='w-full h-[400px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:`url(${image.path})` }}></div>
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