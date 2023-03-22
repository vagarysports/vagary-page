import React, { SyntheticEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BeatLoader } from 'react-spinners'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState<any>('')
  
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleIsSending = () => {
      setIsSending(true)
      setIsSuccess(false)
      setIsError(false)
  }

  const handleIsSuccess = () => {
      setIsSuccess(true)
      setIsSending(false)
      setIsError(false)
  }

  const handleIsError = () => {
      setIsError(true)
      setIsSuccess(false)
      setIsSending(false)
  }

  const handleSubmit = (e:SyntheticEvent) => {
      e.preventDefault()
      handleIsSending()
      const data = {
          name,
          email,
          phone,
          isFromFooter:true
      }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(data=>data.json())
        .then(data=>{
          handleIsSuccess()
        })
        .catch(e => {
          handleIsError()
        })
  }



  return (
    <div className='flex w-full flex-col lg:flex-row'>

        <div className='flex justify-center items-center min-h-screen w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-1.png)' }}>
          <div className='w-[80%] px-2'>
            <h2 className='text-4xl text-white font-bold mb-6 pt-5 text-center lg:text-left'>Contact Us</h2>
            <p className='text-white text-lg font-normal lg:max-w-[500px] mb-14 text-center lg:text-left'>For any inquiries or additional questions, feel free to contact us</p>
            <form onSubmit={handleSubmit} action="" className=''>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Phone Number</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex w-full justify-center'>
                      { (!isError && !isSending && !isSuccess) && (
                          <button 
                              type='submit'
                              className='py-3 px-20  rounded-md bg-clip-padding   border border-gray-100 text-white font-bold text-2xl'>
                                  Send
                          </button>
                      )}
                      {!isError && isSending && (
                          <div>
                              <BeatLoader color="#fff" />
                          </div>
                      )}
                      {(!isError && !isSending && isSuccess) && (
                          <div>
                              <p className='text-xl text-white font-bold'>Sended Successfully! We will contact you soon.</p>
                          </div>
                      )}
                      {(isError) && (
                          <div>
                              <p className='text-xl text-white font-bold'>Ups! an error happens. reload the page and try again.</p>
                          </div>
                      )}
                  </div>
            </form>



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
