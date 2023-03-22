import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const CTA2 = () => {
    const router = useRouter()

  return (
    <>
<div className="container my-24 sm:px-6 mx-auto bg-gray-100 rounded-3xl shadow-lg shadow-gray-400">

<section className="mb-32 text-primary text-center lg:text-left">
  <div className="sm:px-6 py-12 md:px-12">
    <div className="grid lg:grid-cols-2 lg:gap-x-12 items-center">
      <div className="px-6 mb-12 lg:mb-0">
        <h2 className="my-10 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Are you ready <br />
          <span className="text-primary">to increase your Level?</span>
        </h2>
        <p className='mb-10 text-2xl tracking-tight leading-tight'>look what we can offer you</p>
        <p onClick={()=>router.push('/VGSM-TRAVEL')} className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
           role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Tour Options</p>
        <p onClick={()=>router.push('/services')} className="inline-block px-7 py-3 bg-transparent text-primary font-medium text-sm leading-snug uppercase rounded  focus:outline-none focus:ring-0  transition duration-150 ease-in-out mb-2"
            role="button">Services</p>
      </div>

      <div className="mb-12 lg:mb-0">
        <div className="relative w-full min-h-[500px] rounded-lg shadow-lg">
            <Image src="/images/services-card.jpg" alt='' fill style={{ objectFit:'cover' }} /> 
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </>
  )
}
