import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const CTA1 = () => {
  const router = useRouter()

  return (
    <>
<div className="container my-24 px-6 mx-auto">

<section className="mb-32">

  <div className="flex flex-wrap">
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
      <div className="flex lg:py-12">
        <div className='relative w-full h-[300px] rounded-lg overflow-hidden z-10'>
            <Image src={'/images/facilities/terasse.jpeg'} alt="" fill style={{objectFit:'cover'}} />
        </div>
        {/* <img src="https://mdbootstrap.com/img/new/standard/people/035.jpg" className="w-full rounded-lg shadow-lg z-10"
          id="cta-img-nml-50"  alt="" /> */}
      </div>
    </div>

    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
      <div
        className="bg-gray-100 shadow-lg shadow-gray-300 h-full rounded-lg p-6 lg:pl-12 text-primary flex items-center text-center lg:text-left">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold mb-6">Facilities in Cazalegas</h2>
          <p className="mb-6 pb-2 lg:pb-0">
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque! */}
          </p>
          <button onClick={()=>router.push('/facilities')} type="button" className="inline-block px-7 py-3 border-2 border-primary text-primary font-bold text-sm leading-snug uppercase rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" >
            Take a look
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

    </>
  )
}
