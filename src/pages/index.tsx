import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(()=>{

  },[])


  return (
    <>
      <section className="bg-black min-h-screen w-full relative">
          <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <video className="absolute w-screen h-screen object-cover" id="background-video" autoPlay={true} loop muted >
              <source src="/videos/video_shorted.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="animate-heroContent opacity-0 bg-black bg-opacity-75 absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <Image src="/logos/logo-vert.png" alt="" width={250} height={250} />
          </div>
      </section>

      <section>
        <div className="w-full min-h-[100vh] bg-primary flex justify-center items-center">
          <div style={{ backgroundImage: 'url(/images/featured-home-bg.png' }} className="shadow-lg shadow-[#000000] bg-center bg-cover bg-no-repeat text-center py-20 px-32 w-full max-w-[800px] text-white bg-black text-xl font-bold leading-9 tracking-wider">
            Vagary Sports Management is a company that specializes in organizing highly personalized soccer tours to Spain for clubs, academies, ODPs, colleges, and universities. With over 20 years of experience living, coaching, playing and representing Athletes in the country, the owners of Vagary Sports Management developed a wealth of knowledge  and personal contacts that they put at the service of clients.
          </div>
        </div>
      </section>

      <section>
        <div className="w-full min-h-screen bg-primary flex flex-col items-center justify-start px-24">
          <h3 className="w-full text-center font-bold text-2xl text-white ">clubs we have worked with</h3>
          <div className="w-full max-w-[2000px] mx-10 bg-black">
            test
          </div>
        </div>
      </section>
    </>
  )
}