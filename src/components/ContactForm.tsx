import React, { useState } from 'react'
import { TextInput } from './form/TextInput'
import { ValidIndicator } from './form/ValidIndicator'

const ContactForm = () => {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [team, setTeam] = useState('')
    const [level, setLevel] = useState('')

    return (
    <div className='flex justify-center'> 
            <form action="" className='w-[90%] px-10 py-20 mb-20 rounded-3xl transition-all  h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' >
                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <TextInput value={firstName} changeHandler={(value)=>setFirstName(value)} isValid={firstName.length>0} placeHolder='Lirst Name' isRequired={true}  />
                    <TextInput value={lastName} changeHandler={(value)=>setLastName(value)} isValid={lastName.length>0} placeHolder='Last Name' isRequired={true}  />
                </div>

                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <input type="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" placeholder="Phone" required></input>
                    </div>
                    <TextInput value={email} changeHandler={(value)=>setEmail(value)} isValid={email.length>0} placeHolder='Email' isRequired={true}  />
                </div>
                
                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <TextInput value={team} changeHandler={(value)=>setTeam(value)} isValid={team.length>0} placeHolder='Team/Club' isRequired={true}  />
                    <TextInput value={level} changeHandler={(value)=>setLevel(value)} isValid={team.length>0} placeHolder='Level/League/Division' isRequired={true}  />
                </div>

                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <label htmlFor="tourStartDate" className='text-lg text-white font-bold '>Tour Start Date</label>
                        <input type="date" id='"tourStartName"' className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg" required></input>
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <label htmlFor="tourEndName" className='text-lg text-white font-bold '>Tour End Date</label>
                        <input type="date" id='tourEndDate' className="bg-gray-50 border outline-none border-gray-300 text-gray-900 block w-full p-2 text-lg"  required></input>
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