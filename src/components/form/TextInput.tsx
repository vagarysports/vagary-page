import React, { SyntheticEvent } from 'react'
import { ValidIndicator } from './ValidIndicator'

export const TextInput = ({ value, changeHandler, isValid, placeHolder="", isRequired=false }:{ value:string, changeHandler:(value:string)=>void, isValid:boolean, placeHolder?:string, isRequired?:boolean }) => {
  return (
    <div className='flex-1 flex flex-col mb-12 relative'>
        <input value={value} onChange={(e)=>changeHandler(e.target.value)} type="text" className="rounded-lg bg-transparent border outline-none border-gray-300 focus:border-white text-white placeholder:text-gray-200 block w-full p-2 text-lg" placeholder={placeHolder} required={isRequired}></input>
        <ValidIndicator isValid={isValid} />
    </div>
  )
}
