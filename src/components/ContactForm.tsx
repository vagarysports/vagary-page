import React from 'react'

const ContactForm = () => {
  return (
    <div>
            <form action="" className='w-full px-10 pb-20' >
                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="First Name" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Last Name" required></input>
                    </div>
                </div>

                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Phone" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Email" required></input>
                    </div>
                </div>
                
                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Team/Club" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Position" required></input>
                    </div>
                </div>

                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
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
                    <button 
                        className='py-3 px-20 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 hover:bg-opacity-30 hover:scale-95 transition-all border border-gray-100 text-white font-bold text-2xl'>Send</button>
                </div>
              
            </form>        
    </div>
  )
}

export default ContactForm