import React from 'react'
import { useRouter } from 'next/router'

export const CTA1 = () => {
    const router = useRouter()

  return (
    <>
        <div className="py-32">

        <div className='w-full flex justify-center'>
          <div style={{boxShadow:'0px 0px 5px 1px #888'}} className='flex flex-col md:flex-row-reverse justify-center items-center  my-20 overflow-hidden w-[97%] lg:w-[90%] mx-auto bg-[#fff] bg-opacity-5 rounded-2xl '>
              <div className='flex-1 w-full relative  overflow-hidden bg-center' >
                <div className='w-full bg-orange-50 relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities/field1.png)' }}></div>
                {/* <div className=' bg-gradient-to-r from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] hidden md:block absolute top-0 left-0 right-0 bottom-0 '></div> */}
              </div>
              <div className='flex-1 p-5 md:p-10 md:px-20 '>
                <h2 className='text-center md:text-justify text-3xl text-white mb-4 font-bold'>Facilities</h2>
                <p className='text-lg md:text-lg text-justify text-gray-100'>Vagary Sports Management has the exclusive privilege to partner with Ebora Formacion Deportiva. This brand new facility is located in Talavera de la Reina just 70 miles from Madrid and 45 miles from the historic town of Toledo. These facilities which were built in 2021 include a residence, restaurant, two full-sized soccer fields, pool area, and much more. </p>
                <div className='w-full flex justify-center mt-20 px-3 md:px-10 '>
                  <button onClick={()=>{router.push('/facilities')}} className='border bg-gradient-to-b from-[#fff] to-[#ccc] hover:scale-95 hover:shadow-md hover:shadow-[#888] transition-all  rounded-md w-full py-2 text-xl text-black font-bold '>Take a Look</button>
                </div>
              </div>        
          </div>
        </div>
        </div>
    </>
  )
}
