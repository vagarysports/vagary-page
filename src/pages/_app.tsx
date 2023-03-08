import { useEffect, useState } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/layouts/MainLayout'


export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=>{
    setIsLoading(false)
  }, [])

  return (
    <>
      { isLoading 
        ? <div>lOADING...</div> 
        : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )
      }
    </>
  )
}
