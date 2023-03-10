import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <>
      <div className='relative w-full bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:'url(/images/aboutUsHeader.jpeg)' }}>
      
        <div className='rotate-0 bg-black py-20 md:py-56 bg-opacity-70 top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row justify-center items-center  gap-5'>
          <div className='w-[150px] md:w-[200px] relative min-h-[300px] opacity-0 animate-[fadeIn_.5s_ease_forwards_.5s]'>
            <Image alt="" src="/logos/logo-vert.png" fill style={{ objectFit:'contain' }}/>
          </div>
          <div className='w-[1px] h-[300px] bg-white hidden md:block animate-[scaleY_.5s_ease_forwards] origin-center'></div>
          <div className='animate-[scaleY_.5s_ease_forwards_.5s] opacity-0 origin-top'>
            <h2 className='text-white text-3xl font-bold text-center md:text-left mb-3'>About Us</h2>
            <p className='tracking-wide max-w-[500px] text-white text-justify px-3'>Vagary Global Sports Management is a Sports Management Agency based in Charlotte, NC and Madrid, Spain. Vagary was born while Daniel and Michael were Juniors in college, ever since, Daniel and Michael started working together towards the future and started building relationships.</p>
          </div>
        </div>

      </div>

      <div className='flex flex-col md:flex-row justify-center items-center py-20'>
          <div className='flex-1 '>
            <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/vagary-beginnings.png)' }}>
              {/* <Image alt="" src="/images/vagary-beginnings.png" fill style={{ objectFit:'contain' }}/> */}
            </div>
          </div>
          <div className='flex-1 p-5 md:p-10 md:px-10'>
            <p className='text-justify text-xl lg:text-2xl text-[#938787] font-bold mb-10'>With more than 20+ years of experience playing soccer in Madrid, we have a vast network in the city with clubs such as Real Madrid, Atletico de Madrid, Leganes, Alcorcon, Rayo Vallecano, etc…</p>
            <p className='text-justify text-base lg:text-xl text-[#888888] '>We also have a global presence with projects in Argentina, Spain, USA and Germany. We work closely with JJ Sport Management where we acquired extensive experience assisting high value LaLiga-Premier League transfers. We have actively collaborated with JJ Sport Management in recent years advising on sports, marketing, sponsorship of their athletes based in the main European Soccer Leagues.</p>
          </div>        
      </div>

      <div className='bg-[#141618] py-10 px-5 sm:px-10'>
        <h2 className='text-5xl sm:text-7xl text-white font-bold text-center'>Meet The <br/>Founders</h2>
      </div>

      <div className='bg-[#141618] flex flex-col md:flex-row-reverse justify-center items-center py-20 lg:px-20'>
          <div className='flex-1 '>
            <div className='w-full relative min-h-[500px] min-w-[300px]'>
              <Image alt="" src="/images/mike.jpg" fill style={{ objectFit:'cover', objectPosition:'top center' }}/>
            </div>
          </div>
          <div className='flex-1 p-5 md:p-10 '>
            <p className='text-center md:text-justify text-4xl text-white font-bold mb-10'>Mike Hornsby:</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg'>Originally from Bieberach and der Riss, Germany. Mike grew up playing football in Germany at the highest level per year group year after year. In 2017, Michael moved to Charlotte, North Carolina and started playing at Queens University of Charlotte.</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg'>After graduating in 2020, he completed his Master’s Degree at  UNC Wilmington. In 2022, he signed his first professional contract with CV Fuego competing in USL 1. In 2023, Michael moved to Richmond Kickers in the same league.</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg'>Mike grew up playing at the highest level and has continued to do so during his career. That has allowed him to develop a network across the United States and Germany.</p>
          </div>        
      </div>

      <div className='bg-[#141618] flex flex-col md:flex-row justify-center items-center py-20 pb-72  lg:px-20 '>
          <div className='flex-1 '>
            <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[500px]'>
              <Image alt="" src="/images/daniel.jpg" fill style={{ objectFit:'cover', objectPosition:'top center' }}/>
            </div>
          </div>
          <div className='flex-1 p-5 md:p-10'>
            <p className='text-center md:text-justify text-4xl text-white font-bold mb-10'>Daniel Diaz Jr:</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg'>Originally from Madrid, Spain. Daniel started playing football at the age of 5. After competing for 13 years old at the highest national level in some of the most prestigious clubs in the city, Daniel moved to Charlotte, NC where he started playing at Queens University of Charlotte pursuing a Sports Management and International Studies degrees. During that time he also played for Tobacco Road FC of USL2.</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg'>Daniel holds the UEFA B & UEFA A Coaching licenses and is registered as Intermediary in the US Federation. While in college, Daniel coached ISL FC DA U16 Team and won regional Futsal Championships with the U16 team of Charlotte Futsal Academy.</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg'>After graduating in 2020, Daniel started collaborating with multiple agents and different club roles in Spain and learning about the intricacies of the industry. After 3 years of learning, assisting and networking Daniel decided to start Vagary Sports with Michael at the end of 2022.</p>
          </div>        
      </div>

     


    </>
  )
}

export default AboutUs