import React from 'react'
import { useRouter } from 'next/router'

export const CTA1 = () => {
  const router = useRouter()

  return (
    <>
    <div className="container my-24 px-6 mx-auto">

<section className="mb-32">

  <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-[500px]" style={{ backgroundImage:"url(/images/facilities/field3.jpeg)" }}></div>

  <div className="container mx-auto px-6 md:px-12 xl:px-32">
    <div className="text-center text-primary">
      <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 mt-[-170px] bg-[hsl(0,0%,100%,.7)]" style={{ backdropFilter:"blur(30px)" }}>
        <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8">Are you ready to start? <br /></h1>
        <p className="text-primary leading-0 text-lg sm:text-2xl mb-12">Contact with us to get more information</p>
        <p onClick={()=>router.push('/contact')} className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-primary text-white font-medium text-sm  uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out" >Get started</p>
      </div>
    </div>
  </div>
</section>

</div>
    </>
  )
}
