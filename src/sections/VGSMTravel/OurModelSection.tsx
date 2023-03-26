import React, { useState, useEffect, useRef } from 'react'

const Cards = [
    { image:'/images/VGSMTravel/carousel2.jpeg', text:'You`re looking for an isolated training environment to maximize preparation for the upcoming season.' },
    { image:'/images/VGSMTravel/carousel1.jpeg', text:'You’re coming to Spain to play academy tournaments, we can provide entry into high-level Spanish summer tournaments.' },
    { image:'/images/VGSMTravel/carousel3.jpeg', text:"You want a full Spanish cultural experience in which soccer may not be the priority, we provide transportation and off-time activities for teams. Within close proximity of Madrid and Toledo there is plenty to do outside the facility." },
    { image:'/images/VGSMTravel/carousel4.jpeg', text:"We provide competitive Spanish opposition for games. We will match the level of teams based on your team’s ability." },
]

export const OurModelSection = () => {
    const [itemCarouselWidth, setItemCarouselWidth] = useState(0)
    const [carouselCounter, setCarouselCounter] = useState(0)
    const itemCarouselRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(itemCarouselRef.current){
            setItemCarouselWidth(itemCarouselRef.current.getBoundingClientRect().width)
        }

        window.addEventListener('resize', () => {
            if(itemCarouselRef.current){
                setItemCarouselWidth(itemCarouselRef.current.getBoundingClientRect().width)
            }
        }
        )
        
        return () => {
            window.removeEventListener('resize', () => {
                if(itemCarouselRef.current){
                    setItemCarouselWidth(itemCarouselRef.current.getBoundingClientRect().width)
                }
            })
        }
    }, [])

    const carouselNext = () => {
        if(carouselCounter<Cards.length-1){
        setCarouselCounter(carouselCounter + 1)
        }
    }

    const carouselPrev = () => {
        if(carouselCounter>0){
        setCarouselCounter(carouselCounter - 1)
        }
    }

    console.log('counterr->',carouselCounter)


  return (
    <section className="relative pt-28 pb-32 bg-gradient-to-r from-[#000] to-[#222] overflow-hidden" >
        {/* <img className="h-full absolute top-0 left-1/2 transform -translate-x-1/2" src="/icons/radial.svg" alt="" /> */}
        <div className="relative z-10 container mx-auto px-4">
            
            <div className="mb-16 max-w-xl">
            <h2 className="mb-6 font-heading font-semibold text-white text-6xl sm:text-7xl">OUR MODEL</h2>
            <p className="text-gray-200 text-lg">We provide a&nbsp;framework.&nbsp;Everything on top of that is your&nbsp;customization.&nbsp;We realize teams go on&nbsp;overseas trips&nbsp;for various different reasons. Our facility provides a hub for many scenarios.</p>
            </div>

            <div className={`flex flex-nowrap -m-3 mb-0 transition-all`} style={{ transform: `translateX(${-itemCarouselWidth*carouselCounter}px)` }}>
                { Cards.map((card, index) => (
                    <div ref={itemCarouselRef} key={'ourModelSectionCard'+index} className=" flex-shrink-0 p-3" >
                        <div className=" max-w-[80vw]  sm:max-w-md rounded-10 bg-center bg-cover bg-no-repeat" style={{ backgroundImage:`url(${card.image})` }}>
                            <div className='bg-gradient-to-b from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,1)] bg-opacity-70 pt-32 p-3 sm:p-10 sm:pt-32 shadow-sm shadow-[#ddd]'>
                                {/* <div className="mb-1 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">1</div> */}
                                <p className="text-white text-base sm:text-lg ">{ card.text }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap wrap justify-center md:justify-end -m-2">
                <div onClick={carouselPrev} className="w-auto p-2">
                    <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke={carouselCounter>0?'white':'#3F3F46'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </div>
                </div>
                <div onClick={carouselNext} className="w-auto p-2">
                    <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke={carouselCounter<Cards.length-1?'white':'#3F3F46'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
