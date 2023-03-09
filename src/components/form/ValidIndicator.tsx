import React from 'react'

export const ValidIndicator = ({ isValid=false }:{ isValid?:boolean }) => {
  return (
    <>
        <div className={`${isValid ? 'bg-green-300' : 'bg-gray-500'} transition-all w-[10px] h-[10px] rounded-full absolute top-1/2 -translate-y-1/2 right-3`}></div>
    </>
  )
}
