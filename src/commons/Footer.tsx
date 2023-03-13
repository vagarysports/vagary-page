import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ITEMS = [
  { path:'/', name:'Home' },
  { path:'/services', name:'Services' },
  { path:'/VGSM-TRAVEL', name:'VGSM Travel' },
  { path:'/facilities', name:'Facilities' },
  { path:'/partnersAndSponsors', name:'Partners' },
  { path:'/aboutUs', name:'About Us' },
  { path:'/contact', name:'Contact' },
]

export const Footer = () => {
  return (
    <div className='flex w-full flex-col lg:flex-row'>

        <div className='flex justify-center items-center min-h-screen w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-1.png)' }}>
          <div className='w-[80%] px-2'>
            <h2 className='text-4xl text-white font-bold mb-14 py-5 text-center lg:text-left'>Contact Us</h2>
            <p className='text-white text-xl font-medium lg:max-w-[500px] mb-14 text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <form action="" className=''>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Name</label>
                <input type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Email</label>
                <input type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Phone Number</label>
                <input type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              {/* <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold'>Message</label>
                <textarea className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} ></textarea>
              </div> */}
            </form>
            <div className='flex w-full justify-center lg:justify-end'>
              <button className='px-14 py-1 rounded-lg border-white border-2 outline-none text-white font-bold text-xl'>Send</button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-7 text-white font-bold text-lg min-h-screen w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-2.png)' }}>
          <Link href={'/'}>
            <Image src={'/logos/logo.png'} alt="" width={150} height={150} />
          </Link>
          {ITEMS.map(item=>(
            <Link key={item.path+'footer'} href={item.path}>
              <div >
                { item.name }
              </div>
            </Link>
          ))}
        </div>

    </div>
  )
}
