import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import styles from '@/styles/contact.module.css'

const Contact = () => {
  return (
    <div className='flex min-h-screen pt-24 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/contact-bg.png)' }}>
      <div className='px-5'>
        <Image src={'/logos/logo-nobg-black.png'} alt="" width={150} height={150} />
      </div>
      <div className='bg-white min-h-screen h-full w-2'></div>
      <div className='w-full'>
        <h2 className={`mb-20 text-8xl font-bold text-white px-10 ${styles.borderText}`} >Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact