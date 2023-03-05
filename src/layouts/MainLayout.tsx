import React, { PropsWithChildren } from 'react'
import { Navbar } from '@/commons/Navbar'

const MainLayout = ({ children }:PropsWithChildren) => {
  return (
    <>
        <Navbar />
        <div>
            { children }
        </div>
    </>
  )
}

export default MainLayout