import React from 'react'
import { useRouter } from 'next/router'

export const CTA1 = () => {
    const router = useRouter()

  return (
    <>
        <div className="py-32">

        <div className='w-full flex justify-center'>
          <div className='flex flex-col md:flex-row-reverse justify-center items-center shadow-sm shadow-gray-400 my-20 overflow-hidden w-[97%] lg:w-[90%] mx-auto'>
              <div className='flex-1 w-full relative  overflow-hidden bg-center' >
                <div className='w-full bg-orange-50 relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities/field1.png)' }}></div>
                <div className=' bg-gradient-to-r hidden md:block from-white via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] absolute top-0 left-0 right-0 bottom-0 '></div>
                <div className=' bg-gradient-to-t md:hidden block from-white via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] absolute top-0 left-0 right-0 bottom-0 '></div>
              </div>
              <div className='flex-1 p-5 md:p-10 md:px-10 '>
                <h2 className='text-center md:text-justify text-2xl text-gray-900 font-bold mb-10'>Facilities</h2>
                <p className='text-lg md:text-xl italic text-justify'>Vagary Sports Management also has the exclusive privilege through its collaboration with Ebora Formacion Deportiva, of offering the use of the new sports facilities at Ebora Formacion in Talavera de la Reina. Located just 70 miles from Madrid, these facilities, which were built in 2021, include a residence, restaurant, and two full-size soccer fields. </p>
                <div className='w-full flex justify-center mt-20 px-3 md:px-10 '>
                  <button onClick={()=>{router.push('/facilities')}} className='border border-gray-700 w-full py-2 text-xl text-gray-700 '>Take a Look</button>
                </div>
              </div>        
          </div>
        </div>
        </div>
    </>
  )
}
