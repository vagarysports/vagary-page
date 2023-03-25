import React, { useEffect, useState } from 'react'

export const ScrollDownButton = ({  }) => {
    const [fixedPosition, setFixedPosition] = useState(false)
    const [scrollIt, setScrollIt] = useState(false) // this toggle to trigger the scroll


  return (
    <div
        onClick={() => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            })
        }}
        className={`text-yellow-500 z-50 transition-all flex justify-center items-center gap-0 flex-col`}
    >
        <svg className={'hover:animate-none animate-[scrollDownButton_2s_ease-in-out_infinite_0s]'} width="30" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15.2929 15.2929C15.6834 15.6834 16.3166 15.6834 16.7071 15.2929L31 1" stroke="#FFBC00" stroke-width="2"/></svg>
        <svg className={'hover:animate-none animate-[scrollDownButton_2s_ease-in-out_infinite_0.2s]'} width="35" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15.2929 15.2929C15.6834 15.6834 16.3166 15.6834 16.7071 15.2929L31 1" stroke="#FFBC00" stroke-width="2"/></svg>
        <svg className={'hover:animate-none animate-[scrollDownButton_2s_ease-in-out_infinite_0.4s]'} width="40" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15.2929 15.2929C15.6834 15.6834 16.3166 15.6834 16.7071 15.2929L31 1" stroke="#FFBC00" stroke-width="2"/></svg>
    </div>
  )
}
