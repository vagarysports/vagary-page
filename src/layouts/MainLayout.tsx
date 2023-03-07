import React, { PropsWithChildren } from 'react'
import { Navbar } from '@/commons/Navbar'
import { Footer } from '@/commons/Footer'

const MainLayout = ({ children }:PropsWithChildren) => {
  return (
    <>
        <Navbar />
        <div>
            { children }
        </div>
        <Footer />
    </>
  )
}

export default MainLayout