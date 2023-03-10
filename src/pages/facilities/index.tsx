import React from 'react'
import Image from 'next/image'
import { FacilitiesSlider } from '@/components/facilitiesSlider';

const Facilities = () => {
  return (
    <div className='pt-10'>

        <div className='w-full h-[70vh] bg-center bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/fieldabove.png)' }}>
          
        </div>

        <div className='flex w-full py-0 flex-col lg:flex-row gap-10 sm:gap-0'>
          <div className='w-full px-5 pt-28 flex justify-center items-center'>
            <p className='text-center font-bold text-2xl mb-10 max-w-[500px] tracking-wider leading-8'>In addition to organizing friendly matches with competitive rivals, Vagary Sports Management also has the exclusive privilege of offering the use of the new sports facilities at Ebora Formacion in Talavera de la Reina</p>
          </div>
          <div className='w-full flex flex-col min-h-[400px] gap-4 justify-center items-center px-4 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities-1.png)' }}>
            
          </div>
        </div>

        <div className='flex w-full py-0 flex-col lg:flex-row-reverse gap-10 sm:gap-0'>
          <div className='w-full px-5 pt-28 flex justify-center items-center flex-col'>
            <div>
              <p className='text-justify font-bold text-sm mb-10 max-w-[500px] tracking-wider leading-8'>Located just 70 miles from Madrid, these facilities, which were built in 2021, include a residence, restaurant, and two full-size soccer fields. The Sports City is built on a 42,500 square meter lot and includes two artificial grass fields, two tennis courts, multi-sports courts, a changing room, gym, and parking, among other amenities.</p>
              <p className='text-justify font-bold text-sm mb-10 max-w-[500px] tracking-wider leading-8'>One of the key objectives of the Ebora Formacion facilities is to create a space that not only increases the educational, sports, and recreational offerings in the area, but also promotes the development of sports values as a catalyst center for sports activity. The Sports City has a range of spaces that can be used for a variety of different activities, including two 11-a-side soccer courts, four 7-a-side soccer courts, two basketball courts, changing rooms, four paddle tennis courts, two tennis courts, an indoor soccer court, and a swimming pool.</p>
            </div>
          </div>
          <div className='w-full flex flex-col min-h-[400px] gap-4 justify-center items-center px-4 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/facilities-2.png)' }}>
            
          </div>
        </div>


        <div className='flex justify-center w-full'>
          <div className='flex  py-20 flex-col lg:flex-row gap-10 sm:gap-0  md:flex-row-reverse justify-center items-center bg-gray-100 shadow-sm shadow-gray-400 my-20 overflow-hidden rounded-3xl  w-[90%]' >
            <div className='w-full px-5 pt-28'>
              <h2 className='text-center text-3xl font-bold mb-10'>Ciudad Deportiva Ebora Formación</h2>
              <p className='text-center text-xl mb-10'>Polígono Sector VI, 45683 Cazalegas, Toledo, Spain</p>
              <div className='w-full flex justify-center'>
                <button className='border px-5 py-2 text-xl text-white rounded-lg bg-black'>See Google Maps</button>
              </div>
            </div>

            <div className='w-full flex flex-col gap-4 justify-center items-center px-4'>
              <div className=''>
                <iframe className='hidden map-screen:block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6114.990028321624!2d-4.756643973357068!3d39.975041767675656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4019f035a40539%3A0x2175662a684acd25!2sCiudad%20Deportiva%20Ebora%20Formaci%C3%B3n!5e0!3m2!1ses!2sve!4v1678476025919!5m2!1ses!2sve" width="500" height="500"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <iframe className='map-screen:hidden block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6114.990028321624!2d-4.756643973357068!3d39.975041767675656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4019f035a40539%3A0x2175662a684acd25!2sCiudad%20Deportiva%20Ebora%20Formaci%C3%B3n!5e0!3m2!1ses!2sve!4v1678476025919!5m2!1ses!2sve" width="300" height="300"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>


        <div className='py-10 pt-20'>
          <h2 className='text-center text-3xl font-bold mb-10'>Take A look Inside our Installations</h2>
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



        <div className='my-56 flex flex-col items-center'>
          <h2 className='text-2xl font-bold text-center px-1 '>Take an inside View to our Facilities</h2>
          <FacilitiesSlider  />
        </div>
        
        
    </div>
  )
}

export default Facilities