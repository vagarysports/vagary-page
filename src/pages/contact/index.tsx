import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import styles from '@/styles/contact.module.css'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen pt-24 bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:'url(/images/contact-bg.png)' }}>
      <div className='px-5 flex justify-center w-full md:block md:w-auto'>
        <Image src={'/logos/logo-nobg-black.png'} alt="" width={150} height={150} />
      </div>
      <div className='bg-white min-h-screen h-full w-2 hidden md:block'></div>
      <div className='w-full'>
        <h2 className={`mb-14 mt-10 md:mt-0 text-6xl md:text-8xl font-bold w-full text-center md:w-auto md:text-left text-white px-10 ${styles.borderText}`} >Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact