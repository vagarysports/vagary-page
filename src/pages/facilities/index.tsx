import React from 'react'
import Image from 'next/image'
import { FacilitiesSlider } from '@/components/facilitiesSlider';
import { CTA1 } from '@/components/CTAs/facilities/CTA1';
import { useRouter } from 'next/router';
import { field, restaturant, rooms, terasse } from '@/constants/facilitiesSliderImages';
import { Header } from '@/components/Header';

const Facilities = () => {
  const router = useRouter()

  return (
    <div className='pt-10'>
        <Header title='Facilities' bgImage='/images/facilities/field1.png' scrollToId='facilitiesSlide1' />

        <div id='facilitiesSlide1' className='bg-gray-100 flex py-0 flex-col mx-auto my-20 lg:flex-row w-[95%] lg:w-[90%] rounded-3xl overflow-hidden shadow-gray-400 shadow-md'>
          <div className='w-full px-2 sm:px-5  flex justify-center items-center py-10 md:py-20'>
            <p className='text-center font-bold text-sm sm:text-xl  max-w-[500px]  tracking-wider leading-8'>Vagary Sports Management has the exclusive privilege to partner with Ebora Formacion Deportiva. This brand new facility is located in Talavera de la Reina just 70 miles from Madrid and 45 miles from the historic town of Toledo. These facilities which were built in 2021 include a residence, restaurant, two full-sized soccer fields, pool area, and much more.</p>
          </div>
          <div className='w-full flex flex-col min-h-[400px] md:min-h-[500px] gap-4 justify-center items-center px-4 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities/field2.png)' }}>
            
          </div>
        </div>

        <div className='flex w-full py-0 flex-col lg:flex-row-reverse gap-10 sm:gap-0'>
          <div className='w-full px-5 py-14 flex justify-center items-center lg:items-start flex-col'>
            <div>
              <p className='text-justify font-bold text-base mb-4 max-w-[500px] tracking-wider leading-8'> Ebora Sports City is built on a 42,500 square meter lot and includes the following: </p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> two full sized latest generation artificial grass fields (official and regulatory measures)</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> indoor soccer court</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> four 7-a-side soccer courts</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> two tennis courts</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> multi-sports courts</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> changing rooms</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> gym</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> residence (2 person bedroom with a shared bathroom)</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> two basketball courts</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> four paddle tennis courts</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> swimming pool</p>
              <p className='ml-3 text-justify text-base mb-2 sm:mb-0 max-w-[500px]'><span className='ml-1 font-bold text-lg'>-</span> restaurant with outside terrace</p>

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
          <h2 className='text-2xl font-bold text-center px-1 '>FIELDS</h2>
          <FacilitiesSlider images={field}  />
          <h2 className='text-2xl font-bold text-center px-1 mt-20'>RESTAURANT</h2>
          <FacilitiesSlider images={restaturant}  />
          <h2 className='text-2xl font-bold text-center px-1 mt-20'>ROOMS</h2>
          <FacilitiesSlider images={rooms}  />
          <h2 className='text-2xl font-bold text-center px-1 mt-20'>TERASSE</h2>
          <FacilitiesSlider images={terasse}  />
        </div>

        <CTA1 />
        
        
    </div>
  )
}

export default Facilities