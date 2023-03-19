import React, { useRef, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

type Image = { path:string }


export const FacilitiesSlider = ({ images }: { images:Image[] }) => {
  const [cellWidth, setCellWidth] = useState(0)
  const [selectedImage, setSelectedImage] = useState('')


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

  const handleClick = (item:Image) => {
    setSelectedImage(item.path)
  }


  return (
    <div className='w-[90%]'>

            <Carousel
              swipeable
              infiniteLoop
              selectedItem={0}
              centerMode
              centerSlidePercentage={cellWidth}
              showThumbs={false}
              // showIndicators={false}
              showStatus={false}
              autoPlay
            >
              {images.map(image=>(
                  <div onClick={()=>handleClick(image)} key={image.path+'image-carousel'} className='w-full h-[400px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:`url(${image.path})` }}></div>
              ))}
            </Carousel>


            <div onClick={()=>setSelectedImage('')} className={`${selectedImage ? 'block' : 'hidden'} flex justify-center items-center z-50 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80`}>
                <div className='bg-white shrink-0 p-1 md:p-4 w-[75vh] h-[90vw] sm:w-[70%] sm:h-[70vh] rotate-90 sm:rotate-0'>
                  <div className={`w-full h-full bg-center bg-no-repeat bg-cover `} style={{ backgroundImage: `url(${selectedImage})` }}>
                  </div>
                </div>
            </div>

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