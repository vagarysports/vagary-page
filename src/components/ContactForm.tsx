import React, { useState, SyntheticEvent } from 'react'
//@ts-ignore
import Datepicker from "react-tailwindcss-datepicker";
import { TextInput } from './form/TextInput'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import styles from '../styles/ContactForm.module.css'
import { BeatLoader } from 'react-spinners';

const ContactForm = () => {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [team, setTeam] = useState('')
    const [level, setLevel] = useState('')
    const [phone, setPhone] = useState<any>()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
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
            firstName: firstName,
            lastName,
            email,
            team,
            level,
            phone,
            startDate,
            endDate
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
    <div className='flex justify-center'> 
            <form onSubmit={handleSubmit} className='w-[90%] px-2 md:px-10 py-20 mb-20 rounded-3xl transition-all  h-full bg-black bg-opacity-70 border border-gray-100' >
                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <TextInput value={firstName} changeHandler={(value)=>setFirstName(value)} isValid={firstName.length>0} placeHolder='First Name' isRequired={true}  />
                    <TextInput value={lastName} changeHandler={(value)=>setLastName(value)} isValid={lastName.length>0} placeHolder='Last Name' isRequired={true}  />
                </div>

                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                <div className={`flex-1 flex flex-col mb-12 relative ${ styles.phoneInput }`}>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(value)=>setPhone(value)}
                        internationalIcon={()=><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2667 23.333C27.4 22.233 27.5 21.133 27.5 19.9997C27.5 18.8663 27.4 17.7663 27.2667 16.6663H32.9C33.1667 17.733 33.3334 18.8497 33.3334 19.9997C33.3334 21.1497 33.1667 22.2663 32.9 23.333M24.3167 32.5997C25.3167 30.7497 26.0834 28.7497 26.6167 26.6663H31.5334C29.9187 29.4468 27.3569 31.553 24.3167 32.5997ZM23.9 23.333H16.1C15.9334 22.233 15.8334 21.133 15.8334 19.9997C15.8334 18.8663 15.9334 17.7497 16.1 16.6663H23.9C24.05 17.7497 24.1667 18.8663 24.1667 19.9997C24.1667 21.133 24.05 22.233 23.9 23.333ZM20 33.2663C18.6167 31.2663 17.5 29.0497 16.8167 26.6663H23.1834C22.5 29.0497 21.3834 31.2663 20 33.2663ZM13.3334 13.333H8.46671C10.0648 10.545 12.6247 8.43548 15.6667 7.39967C14.6667 9.24967 13.9167 11.2497 13.3334 13.333ZM8.46671 26.6663H13.3334C13.9167 28.7497 14.6667 30.7497 15.6667 32.5997C12.6311 31.5524 10.0748 29.4459 8.46671 26.6663ZM7.10004 23.333C6.83337 22.2663 6.66671 21.1497 6.66671 19.9997C6.66671 18.8497 6.83337 17.733 7.10004 16.6663H12.7334C12.6 17.7663 12.5 18.8663 12.5 19.9997C12.5 21.133 12.6 22.233 12.7334 23.333M20 6.71634C21.3834 8.71634 22.5 10.9497 23.1834 13.333H16.8167C17.5 10.9497 18.6167 8.71634 20 6.71634ZM31.5334 13.333H26.6167C26.0951 11.2688 25.3227 9.27617 24.3167 7.39967C27.3834 8.44967 29.9334 10.5663 31.5334 13.333ZM20 3.33301C10.7834 3.33301 3.33337 10.833 3.33337 19.9997C3.33337 24.4199 5.08932 28.6592 8.21493 31.7848C9.76257 33.3324 11.5999 34.5601 13.622 35.3977C15.6441 36.2352 17.8113 36.6663 20 36.6663C24.4203 36.6663 28.6595 34.9104 31.7852 31.7848C34.9108 28.6592 36.6667 24.4199 36.6667 19.9997C36.6667 17.811 36.2356 15.6437 35.398 13.6216C34.5605 11.5995 33.3328 9.7622 31.7852 8.21456C30.2375 6.66692 28.4002 5.43926 26.3781 4.60168C24.356 3.7641 22.1887 3.33301 20 3.33301Z" fill="white"/></svg>}
                    />
                </div>
                    <TextInput value={email} changeHandler={(value)=>setEmail(value)} isValid={email.length>0} placeHolder='Email' isRequired={true}  />
                </div>
                
                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <TextInput value={team} changeHandler={(value)=>setTeam(value)} isValid={team.length>0} placeHolder='Team/Club' isRequired={true}  />
                    <TextInput value={level} changeHandler={(value)=>setLevel(value)} isValid={level.length>0} placeHolder='Level/League/Division' isRequired={true}  />
                </div>

                <div className=' flex w-full gap-5 flex-col sm:flex-row'> 
                    <div className='flex-1 flex flex-col mb-12'>
                        <label htmlFor="tourStartDate" className='text-lg text-white font-bold '>Tour Start Date</label>
                        <Datepicker
                            inputClassName=" bg-opacity-0 border border-gray-300 focus:border-white focus:ring-0 outline-none text-white placeholder:text-gray-200"
                            asSingle showFooter={true}  placeholder="YYYY-MM-DD"  useRange={false} value={startDate} onChange={(value:any)=>setStartDate(value)} 
                        />
                    </div>
                    <div className='flex-1 flex flex-col mb-12'>
                        <label htmlFor="tourEndName" className='text-lg text-white font-bold '>Tour End Date</label>
                        <Datepicker
                            inputClassName=" bg-opacity-0 border border-gray-300 focus:border-white focus:ring-0 outline-none text-white placeholder:text-gray-200"
                            asSingle showFooter={true}  placeholder="YYYY-MM-DD"  useRange={false} value={endDate} onChange={(value:any)=>setEndDate(value)} 
                        />                        
                    </div>
                </div>

                <div className='flex w-full justify-center'>
                    { (!isError && !isSending && !isSuccess) && (
                        <button 
                            type='submit'
                            className='py-3 px-20 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 hover:bg-opacity-30 hover:scale-95 transition-all border border-gray-100 text-white font-bold text-2xl'>
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
  )
}

export default ContactForm