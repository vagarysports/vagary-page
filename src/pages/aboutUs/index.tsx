import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { CTA1 } from '@/components/CTAs/aboutUs/CTA1'
import { CTA2 } from '@/components/CTAs/aboutUs/CTA2'
import { Header } from '@/components/Header'


const AboutUs = () => {
  return (
    <div className='bg-[#eee]'>
      <Head>
        <title>Vagary Sports About Us</title>
      </Head>
      <Header scrollToId='aboutUsSlide1' title='About Us' bgImage='/images/about-card.png' description='Vagary Global Sports Management is a Sports Management Agency based in Charlotte, NC and Madrid, Spain. Vagary was born while Daniel and Michael were Juniors in college, ever since, Daniel and Michael started working together towards the future and started building relationships.' />

      <div id='aboutUsSlide1' className='bg-gradient-to-r from-[#000] to-[#222] pt-36 py-10 px-5 sm:px-10'>
        <h2 className='text-5xl sm:text-7xl text-white font-bold text-center'>Meet The <br/>Founders</h2>
      </div>

      <div className='bg-gradient-to-r from-[#000] to-[#222] flex flex-col md:flex-row-reverse justify-center items-center py-20 lg:px-20'>
          <div className='flex-1 '>
            <div className='w-full relative min-h-[500px] min-w-[300px]'>
              <Image alt="" src="/images/mike.jpg" fill style={{ objectFit:'cover', objectPosition:'top center' }}/>
            </div>
          </div>
          <div className='flex-1 p-5 md:p-10 '>
            <p className='text-center md:text-justify text-4xl text-white font-bold mb-10'>Mike Hornsby:</p>
            <p className='text-justify text-[#ccc] mb-5 text-lg tracking-wider'>Originally from Biberach an der Riß, Germany. Mike grew up playing football in Germany at the highest level per year group year after year. In 2017, Michael moved to Charlotte, North Carolina and started playing at Queens University of Charlotte. After graduating in 2020, he completed his Master’s Degree at  UNC Wilmington. In 2022, he signed his first professional contract with CV Fuego competing in USL 1. In 2023, Michael moved to Richmond Kickers in the same league.</p>
            <p className='text-justify text-[#ccc] mb-5 text-lg tracking-wider'>Mike grew up playing at the highest level and has continued to do so during his career. That has allowed him to develop a network across the United States and Germany.</p>
            <p className='text-justify text-[#ccc] mb-5 text-lg tracking-wider'>Being fully immersed in the professional environment for years, Mike knows the ins and outs of how teams at a high level work and operate. Therefore, Vagary Sports Management aims to provide those standards for every team that comes to our facilities. </p>
          </div>        
      </div>

      <div className='bg-[#121618] flex justify-center items-center flex-col gap-2 p-3 pb-0'>
            <div className='w-full relative h-[500px] max-w-[800px]'>
              <Image alt="" src="/images/mike-playing.jpg" fill style={{ objectFit:'cover', objectPosition:'top center' }}/>
            </div>
            {/* <p className='text-sm italic text-white'>Mike playing X game with X team in X date</p> */}
      </div>

      <div className='bg-[#141618] flex flex-col md:flex-row justify-center items-center py-20   lg:px-20 '>
          <div className='flex-1 '>
            <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[500px]'>
              <Image alt="" src="/images/daniel-cup.jpg" fill style={{ objectFit:'cover', objectPosition:' center' }}/>
            </div>
          </div>
          <div className='flex-1 p-5 md:p-10 '>
            <p className='text-center md:text-justify text-4xl text-white font-bold mb-10'>Daniel Diaz Jr:</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg tracking-wider'>Originally from Madrid, Spain. Daniel started playing football at the age of 5. After competing for 13 years old at the highest national level in some of the most prestigious clubs in the city, Daniel moved to Charlotte, NC where he started playing at Queens University of Charlotte pursuing a Sports Management and International Studies degrees. During that time he also played for Tobacco Road FC of USL2.</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg tracking-wider'>Daniel holds the UEFA B & UEFA A Coaching licenses and is registered as Intermediary in the US Federation. While in college, Daniel coached ISL FC DA U16 Team and won regional Futsal Championships with the U16 team of Charlotte Futsal Academy.</p>
            <p className='text-justify text-[#DDD] mb-5 text-lg tracking-wider'>After graduating in 2020, Daniel started collaborating with multiple agents and different club roles in Spain and learning about the intricacies of the industry. After 3 years of learning, assisting and networking Daniel decided to start Vagary Sports with Michael at the end of 2022.</p>
          </div>        
      </div>

      <div className='bg-[#121618] flex justify-center items-center flex-col gap-2 p-3 pb-20'>
            <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[500px] max-w-[700px]'>
              <Image alt="" src="/images/daniel-playing.jpeg" fill style={{ objectFit:'cover', objectPosition:'top center' }}/>
            </div>
            {/* <p className='text-sm italic text-white'>Daniel Receiving X awward of X cup</p> */}
      </div>

      <section className='px-0 lg:px-20 bg-[#eee]'>
        <div className='flex justify-center items-center gap-10 p-10'>
              <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/vagary-beginnings.png)' }}></div>
              <div className='w-full hidden md:block relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/aboutUs3.jpg)' }}></div>
        </div>

        <div className='flex-1 p-5 md:p-10 md:px-10'>
          <p className='text-justify sm:text-center text-xl lg:text-2xl text-[#353333] font-bold mb-10'>With more than 20+ years of experience playing soccer in Madrid, we have a vast network in the city with clubs such as Real Madrid, Atletico de Madrid, Leganes, Alcorcon, Rayo Vallecano, etc…</p>
          <p className='text-justify text-base lg:text-xl text-[#555] '>We also have a global presence with projects in Argentina, Spain, USA and Germany. We work closely with JJ Sport Management where we acquired extensive experience assisting high value LaLiga-Premier League transfers. We have actively collaborated with JJ Sport Management in recent years advising on sports, marketing, sponsorship of their athletes based in the main European Soccer Leagues.</p>
        </div>        
        
        <div className='flex justify-center items-center gap-10 p-10'>
              <div className='w-full md:hidden block relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/aboutUs3.jpg)' }}></div>
        </div>
      </section>
    
      <CTA2 />
     
    </div>
  )
}

export default AboutUs


