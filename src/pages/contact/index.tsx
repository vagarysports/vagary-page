import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { Footer } from '@/commons/Footer'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Vagary Sports Contact</title>
      </Head>

      <div className='fixed top-0 left-0 right-0 bottom-0 bg-center bg-cover bg-no-repeat sm:bg-fixed' style={{ backgroundImage:'url(/images/contact-bg.png)' }}></div>
      
      <div className='absolute w-full min-h-screen pt-24 bg-black bg-opacity-40'>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='px-5 flex justify-center w-full md:block md:w-auto'>
            <Image src={'/logos/logo-nobg-black.png'} alt="" width={150} height={150} />
          </div>
          <div className='bg-white min-h-screen h-full w-2 hidden md:block'></div>
          <div className='w-full'>
            <h2 className={`mb-4 mt-10 md:mt-0 text-6xl md:text-8xl font-bold w-full text-center md:w-auto md:text-left text-white px-10`} >Contact Us</h2>
            <p className={`mb-14 mt-10 md:mt-0 text-2xl font-normal w-full text-center md:w-auto md:text-left text-white px-10`} >For any inquiries or additional questions, feel free to contact us</p>
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact