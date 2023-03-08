import React from 'react'

const ContactForm = () => {
  return (
    <div>
            <form action="" className='w-full px-10' >
                <div className=' flex w-full gap-5'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="First Name" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Last Name" required></input>
                    </div>
                </div>

                <div className=' flex w-full gap-5'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Phone" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Email" required></input>
                    </div>
                </div>
                
                <div className=' flex w-full gap-5'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Team/Club" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Position" required></input>
                    </div>
                </div>

                <div className=' flex w-full gap-5'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <label htmlFor="tourStartDate" className='text-lg text-white font-bold '>Tour Start Date</label>
                        <input type="date" id='"tourStartName"' className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Team/Club" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <label htmlFor="tourEndName" className='text-lg text-white font-bold '>Tour End Date</label>
                        <input type="date" id='tourEndDate' className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Position" required></input>
                    </div>
                </div>

                <div className='flex w-full justify-center'>
                    <button className='bg-white px-20 py-1 outline-none text-gray-700 font-bold text-2xl'>Submit</button>
                </div>
              
            </form>        
    </div>
  )
}

export default ContactForm