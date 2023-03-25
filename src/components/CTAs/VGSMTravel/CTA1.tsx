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
                <p className='text-lg md:text-xl italic text-justify'>Vagary Sports Management has the exclusive privilege to partner with Ebora Formacion Deportiva. This brand new facility is located in Talavera de la Reina just 70 miles from Madrid and 45 miles from the historic town of Toledo. These facilities which were built in 2021 include a residence, restaurant, two full-sized soccer fields, pool area, and much more. </p>
                <div className='w-full flex justify-center mt-20 px-3 md:px-10 '>
                  <button onClick={()=>{router.push('/facilities')}} className='border bg-gradient-to-b from-[#000] to-[#222]  rounded-md w-full py-2 text-xl text-white font-bold '>Take a Look</button>
                </div>
              </div>        
          </div>
        </div>
        </div>
    </>
  )
}
