import { useEffect, useState } from "react"
import Image from "next/image"
import { Carousel } from "@/components/Carousel"
import { HomeCard } from "@/components/HomeCard"
import { Testimonies } from "@/components/Testimonies"

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
          <div style={{ backgroundImage: 'url(/images/featured-home-bg.png' }} className="shadow-lg shadow-[#000000] bg-center bg-cover bg-no-repeat text-center mx-4 px-2 xs:px-10 md:px-32 py-10 md:py-20 w-full max-w-[800px] text-white bg-black font-bold text-base leading-6 tracking-wide md:text-xl md:leading-9 md:tracking-wider">
            Vagary Sports Management is a company that specializes in organizing highly personalized soccer tours to Spain for clubs, academies, ODPs, colleges, and universities. With over 20 years of experience living, coaching, playing and representing Athletes in the country, the owners of Vagary Sports Management developed a wealth of knowledge  and personal contacts that they put at the service of clients.
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-primary flex flex-col items-center justify-start px-2 pb-48 pt-20">
          <h3 className="w-full text-center font-bold text-2xl text-white mb-10">clubs we have worked with</h3>
          <Carousel />
        </div>
      </section>


      <section>
        <div className="w-full min-h-screen bg-primary flex flex-col items-center justify-start px-24">
          <div className="flex flex-col gap-10 items-center justify-start py-10">
            <HomeCard path="/aboutUs" title="About Us" backgroundImage="/images/about-card.png" />
            <HomeCard path="/facilities" title="Facilities" backgroundImage="/images/facilities/fieldabove.png" />
            <HomeCard path="/partnersAndSponsors" title="Partners" backgroundImage="/images/vgsmtravel-card.png" />
            <HomeCard path="/tourOptions" title="tour" backgroundImage="/images/services-card.png" />
            <HomeCard path="/contact" title="Contact Us" backgroundImage="/images/contact-card.png" />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-primary flex flex-col items-center justify-start px-2 pb-48 pt-40">
          <h3 className="w-full text-center font-bold text-xl xs:text-2xl text-white mb-10">What Our Clients Have To Say</h3>
          <Testimonies />
        </div>
      </section>


    </>
  )
}