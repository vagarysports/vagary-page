import React from 'react'
import Image from 'next/image'
import { ScrollDownButton } from './ScrollDownButton'

type Props = {
    title: string
    description?: string
    bgImage: string,
    scrollToId: string
}

export const Header = ({ title, description, bgImage, scrollToId }:Props) => {
    console.log('--->',scrollToId)
  return (
    <>
        { !description && (
            <div className=' relative w-full bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:`url(${bgImage})` }}>
                <div className='rotate-0 bg-black py-20 md:py-56 bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <div className='flex flex-col md:flex-row justify-center items-center  gap-5'>
                        <div className='w-[150px] md:w-[200px] relative min-h-[250px] md:min-h-[300px] opacity-0 animate-[fadeIn_.5s_ease_forwards_.5s]'>
                            <Image alt="" src="/logos/logo-vert.png" fill style={{ objectFit:'contain' }}/>
                        </div>
                        <div className='w-[1px] h-[300px] bg-white hidden md:block animate-[scaleY_.5s_ease_forwards] origin-center'></div>
                        <div className='animate-[scaleY_.5s_ease_forwards_.5s] opacity-0 origin-top'>
                            <h2 className='text-6xl sm:text-8xl font-bold text-white text-center md:text-left'>{ title }</h2>
                        </div>
                    </div>
                    <ScrollDownButton scrollToId={scrollToId} />
                </div>
            </div>
        )}
        { description && (
            <div className='relative w-full bg-center bg-cover bg-no-repeat bg-fixed'style={{ backgroundImage:`url(${bgImage})` }}>
                <div className='rotate-0 bg-black py-20 md:py-56 bg-opacity-70 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  gap-5'>
                    <div className='flex flex-col md:flex-row justify-center items-center  gap-5'>
                        <div className='w-[150px] md:w-[200px] relative min-h-[300px] opacity-0 animate-[fadeIn_.5s_ease_forwards_.5s]'>
                            <Image alt="" src="/logos/logo-vert.png" fill style={{ objectFit:'contain' }}/>
                        </div>
                        <div className='w-[1px] h-[300px] bg-white hidden md:block animate-[scaleY_.5s_ease_forwards] origin-center'></div>
                        <div className='animate-[scaleY_.5s_ease_forwards_.5s] opacity-0 origin-top'>
                            <h2 className='text-white text-3xl font-bold text-center md:text-left mb-3'>{ title }</h2>
                            <p className='tracking-wider max-w-[500px] text-white text-justify px-3 md:text-lg '>{ description }</p>
                        </div>
                    </div>
                    <ScrollDownButton scrollToId={scrollToId} />
                </div>
            </div>
        )}
    </>
  )
}
