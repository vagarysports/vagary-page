import React, { useState } from 'react'

export const HomeCard = ({title, backgroundImage}:{title:string, backgroundImage:string}) => {
    const [MouseOver, setMouseOver] = useState(false)

  return (
    <div  onMouseOver={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)} className='hover:scale-[.99] ease-linear duration-300 relative bg-center bg-cover bg-no-repeat bg-black flex justify-center py-10 items-center w-[80vw] h-[60vh] max-w-[1500px]' >
        <img src={backgroundImage} alt="" className={`ease-linear duration-300 w-full h-full object-cover absolute ${!MouseOver ? "grayscale" :"grayscale-0"}`} />
        <div className={`ease-linear duration-300 w-full h-full absolute object-cover bg-black ${!MouseOver ?" bg-opacity-70" :"bg-opacity-20"}`}></div>
        <h2 className='text-white text-center font-bold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{ title }</h2>
    </div>
  )
}
