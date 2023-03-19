import React from 'react'
import Image from 'next/image'
import { FacilitiesSlider } from '@/components/facilitiesSlider';
import { CTA1 } from '@/components/CTAs/facilities/CTA1';
import { useRouter } from 'next/router';
import { field, restaturant, rooms, terasse } from '@/constants/facilitiesSliderImages';

const Facilities = () => {
  const router = useRouter()

  return (
    <div className='pt-10'>

      <div className='relative w-full bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:'url(/images/facilities/fieldabove.png)' }}>
      
      <div className='rotate-0 bg-black py-20 md:py-56 bg-opacity-70 top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row justify-center items-center  gap-5'>
        <div className='w-[150px] md:w-[200px] relative min-h-[300px] opacity-0 animate-[fadeIn_.5s_ease_forwards_.5s]'>
          <Image alt="" src="/logos/logo-vert.png" fill style={{ objectFit:'contain' }}/>
        </div>
        <div className='w-[1px] h-[300px] bg-white hidden md:block animate-[scaleY_.5s_ease_forwards] origin-center'></div>
        <div className='animate-[scaleY_.5s_ease_forwards_.5s] opacity-0 origin-top'>
          <h2 className='text-6xl sm:text-8xl font-bold text-white'>Facilities</h2>
        </div>
      </div>

    </div>


        <div className='bg-gray-100 flex py-0 flex-col mx-auto my-20 lg:flex-row w-[95%] lg:w-[90%] rounded-3xl overflow-hidden shadow-gray-400 shadow-md'>
          <div className='w-full px-2 sm:px-5  flex justify-center items-center py-10 md:py-20'>
            <p className='text-center font-bold text-sm sm:text-xl  max-w-[500px]  tracking-wider leading-8'>Vagary Sports Management has the exclusive privilege through its collaboration with Ebora Formacion Deportiva, of offering the use of the new sports facilities at Ebora Formacion in Talavera de la Reina. Located just 70 miles from Madrid, these facilities, which were built in 2021, include a residence, restaurant, and two full-size soccer fields.</p>
          </div>
          <div className='w-full flex flex-col min-h-[400px] md:min-h-[500px] gap-4 justify-center items-center px-4 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities/field2.png)' }}>
            
          </div>
        </div>

        <div className='flex w-full py-0 flex-col lg:flex-row-reverse gap-10 sm:gap-0'>
          <div className='w-full px-5 py-14 flex justify-center items-center lg:items-start flex-col'>
            <div>
              <p className='text-justify font-bold text-sm mb-10 max-w-[500px] tracking-wider leading-8'> The Sports City is built on a 42,500 square meter lot and includes two artificial grass fields, two tennis courts, multi-sports courts, a changing room, gym, and parking, among other amenities. The Sports City has a range of spaces that can be used for a variety of different activities, including two 11-a-side soccer courts, four 7-a-side soccer courts, two basketball courts, changing rooms, four paddle tennis courts, two tennis courts, an indoor soccer court, and a swimming pool. Equipped with two 11-a-side soccer fields of the latest generation of artificial turf, with official and regulatory measures. Also our residence in Madrid, is divided into shared (2 persons) room with a shared bathroom. </p>
            </div>
          </div>
          <div className='w-full flex flex-col min-h-[400px] gap-4 justify-center items-center px-4 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities/food2.jpeg)' }}>
            
          </div>
        </div>


        <div className='flex justify-center w-full'>
          <div className='flex  py-10  flex-col lg:flex-row gap-16 lg:gap-0  justify-center items-center bg-gray-100 shadow-sm shadow-gray-400 my-20 overflow-hidden rounded-3xl  w-[90%]' >
            <div className='w-full px-5 '>
              <h2 className='text-center text-3xl font-bold mb-10'>Ciudad Deportiva Ebora Formación</h2>
              <p className='text-center text-xl mb-10'>Polígono Sector VI, 45683 Cazalegas, Toledo, Spain</p>
              <div className='w-full flex justify-center'>
                <button className='border px-5 py-2 text-xl text-white rounded-lg bg-black'>See Google Maps</button>
              </div>
            </div>

            <div className='w-full flex flex-col gap-4 justify-center items-center px-4'>
              <div className=''>
                <iframe className='shadow-md shadow-gray-600 hidden map-screen:block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6114.990028321624!2d-4.756643973357068!3d39.975041767675656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4019f035a40539%3A0x2175662a684acd25!2sCiudad%20Deportiva%20Ebora%20Formaci%C3%B3n!5e0!3m2!1ses!2sve!4v1678476025919!5m2!1ses!2sve" width="500" height="500"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <iframe className='shadow-md shadow-gray-600 map-screen:hidden block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6114.990028321624!2d-4.756643973357068!3d39.975041767675656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4019f035a40539%3A0x2175662a684acd25!2sCiudad%20Deportiva%20Ebora%20Formaci%C3%B3n!5e0!3m2!1ses!2sve!4v1678476025919!5m2!1ses!2sve" width="300" height="300"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>


        <div className='py-10 pt-20'>
          <h2 className='px-2 text-center text-3xl font-bold mb-10'>Take A look Inside our Installations</h2>
          <div className='flex justify-center'>
            <iframe className='scale-90 sm:scale-75 md:scale-100' width={560*1.5} height={315*1.5} src="https://www.youtube.com/embed/hb28yocGmyM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>


        <div className='flex w-full py-0 flex-col lg:flex-row gap-10 sm:gap-0'>
          <div className='w-full px-5 pt-28 flex justify-center flex-col items-center'>
            <h3 className='font-bold text-xl mb-7'>Cafeteria, Food, Swimming Pool Area</h3>
            <iframe className='scale-75 sm:scale-75 md:scale-125' width={560*.7} height={315*.7} src="https://www.youtube.com/embed/hb28yocGmyM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='w-full px-5 pt-28 flex justify-center flex-col items-center'>
            <h3 className='font-bold text-xl mb-7'>Padel Courts</h3>
            <iframe className='scale-75 sm:scale-75 md:scale-125' width={560*.7} height={315*.7} src="https://www.youtube.com/embed/8ktA0bOUyR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>

        <div className='flex w-full py-0 flex-col lg:flex-row gap-10 sm:gap-0'>
          <div className='w-full px-5 pt-28 flex justify-center flex-col items-center'>
            <h3 className='font-bold text-xl mb-7'>Practice Field</h3>
            <iframe className='scale-75 sm:scale-75 md:scale-125' width={560*.7} height={315*.7} src="https://www.youtube.com/embed/fhAyC75h72Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='w-full px-5 pt-28 flex justify-center flex-col items-center'>
            <h3 className='font-bold text-xl mb-7'>Stadium</h3>
            <iframe className='scale-75 sm:scale-75 md:scale-125' width={560*.7} height={315*.7} src="https://www.youtube.com/embed/bXLecnIf7uM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>

        <div className='flex w-full py-0 flex-col lg:flex-row gap-10 sm:gap-0'>
          <div className='w-full px-5 pt-28 flex justify-center flex-col items-center'>
            <h3 className='font-bold text-xl mb-7'>Rooms</h3>
            <iframe className='scale-75 sm:scale-75 md:scale-125' width={560*.7} height={315*.7} src="https://www.youtube.com/embed/AJkdxmU1hfc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='w-full px-5 pt-28 flex justify-center flex-col items-center'>
            <h3 className='font-bold text-xl mb-7'>Residence</h3>
            <iframe className='scale-75 sm:scale-75 md:scale-125' width={560*.7} height={315*.7} src="https://www.youtube.com/embed/iSz4fAhKNXI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>



        <div className='my-56 flex flex-col items-center'>
          <h2 className='text-2xl font-bold text-center px-1 '>fields</h2>
          <FacilitiesSlider images={field}  />
          <h2 className='text-2xl font-bold text-center px-1 mt-20'>restaurant</h2>
          <FacilitiesSlider images={restaturant}  />
          <h2 className='text-2xl font-bold text-center px-1 mt-20'>rooms</h2>
          <FacilitiesSlider images={rooms}  />
          <h2 className='text-2xl font-bold text-center px-1 mt-20'>terasse</h2>
          <FacilitiesSlider images={terasse}  />
        </div>

        <CTA1 />
        
        
    </div>
  )
}

export default Facilities