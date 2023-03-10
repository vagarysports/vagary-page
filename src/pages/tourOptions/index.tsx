import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const FEATURES = [
  {
    icon: <svg className='' width="150" viewBox="0 0 109 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56.8328 39.0957C58.6151 39.0957 60.3243 39.8037 61.5846 41.0639C62.8448 42.3242 63.5528 44.0334 63.5528 45.8157C63.5528 47.598 62.8448 49.3072 61.5846 50.5675C60.3243 51.8277 58.6151 52.5357 56.8328 52.5357C55.0506 52.5357 53.3413 51.8277 52.0811 50.5675C50.8208 49.3072 50.1128 47.598 50.1128 45.8157C50.1128 44.0334 50.8208 42.3242 52.0811 41.0639C53.3413 39.8037 55.0506 39.0957 56.8328 39.0957ZM56.8328 55.8957C64.2584 55.8957 70.2728 58.9029 70.2728 62.6157V65.9757H43.3928V62.6157C43.3928 58.9029 49.4072 55.8957 56.8328 55.8957Z" fill="black"/><path d="M57.085 96.3838V80.2558" stroke="black" stroke-width="4.032"/><circle cx="7.812" cy="7.812" r="5.796" transform="matrix(1 0 0 -1 49.2729 107.977)" stroke="black" stroke-width="4.032"/><path d="M91.842 78.9561L77.8748 70.8921" stroke="black" stroke-width="4.032"/><circle cx="7.812" cy="7.812" r="5.796" transform="matrix(0.5 -0.866025 -0.866025 -0.5 97.9751 91.5176)" stroke="black" stroke-width="4.032"/><path d="M94.866 35.8652L80.8987 43.9292" stroke="black" stroke-width="4.032"/><circle cx="7.812" cy="7.812" r="5.796" transform="matrix(-0.5 -0.866025 -0.866025 0.5 108.811 36.835)" stroke="black" stroke-width="4.032"/><path d="M57.085 12.2168V28.3448" stroke="black" stroke-width="4.032"/><circle cx="7.812" cy="7.812" r="5.796" transform="matrix(-1 0 0 1 64.897 0.624023)" stroke="black" stroke-width="4.032"/><path d="M20.8818 36.873L34.8491 44.937" stroke="black" stroke-width="4.032"/><circle cx="7.812" cy="7.812" r="5.796" transform="matrix(-0.5 0.866025 0.866025 0.5 14.7488 24.3115)" stroke="black" stroke-width="4.032"/><path d="M14.834 78.957L28.8012 70.893" stroke="black" stroke-width="4.032"/><circle cx="7.812" cy="7.812" r="5.796" transform="matrix(0.5 0.866025 0.866025 -0.5 0.888916 77.9873)" stroke="black" stroke-width="4.032"/></svg>,
    title: 'High Level Network',
    desc: 'Vagary has a network of contacts in the city of Madrid that includes La Liga academies, local professional teams (2,3 and 4 tier in Spain) and a high selection of tournaments during the course of the year for grassroots soccer academies.',
  },
  {
    icon: <svg width="150"  viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M84.401 54.5614L75.9635 46.1239C75.4361 45.5966 74.7209 45.3004 73.9751 45.3004C73.2293 45.3004 72.5141 45.5966 71.9867 46.1239L45.8501 72.2604V84.6748H58.2645L84.401 58.5382C84.9283 58.0108 85.2245 57.2956 85.2245 56.5498C85.2245 55.804 84.9283 55.0888 84.401 54.5614ZM55.9357 79.0498H51.4751V74.5892L65.5376 60.5267L69.9982 64.9873L55.9357 79.0498ZM73.9751 61.0104L69.5145 56.5498L73.9751 52.0892L78.4357 56.5498L73.9751 61.0104ZM51.4751 50.9248V39.6748H57.1001V50.9248H51.4751ZM40.2251 50.9248V34.0498H45.8501V50.9248H40.2251ZM28.9751 50.9248V22.7998H34.6001V50.9248H28.9751Z" fill="black"/><path d="M34.6001 84.6748H17.7251C16.2337 84.6733 14.8038 84.0802 13.7493 83.0256C12.6947 81.9711 12.1016 80.5412 12.1001 79.0498V11.5498C12.1016 10.0584 12.6947 8.62854 13.7493 7.57397C14.8038 6.5194 16.2337 5.92629 17.7251 5.9248H62.7251C64.2165 5.92629 65.6464 6.5194 66.7009 7.57397C67.7555 8.62854 68.3486 10.0584 68.3501 11.5498V39.6748H62.7251V11.5498H17.7251V79.0498H34.6001V84.6748Z" fill="black"/></svg>,
    title: 'Total Freedom',
    desc: "The client, working with us, will have total freedom to organize the trip as he/she wishes. The coaches or managers of the trip can tell us what they are looking for and Vagary will adapt around the client's objective. ",
  },
  {
    icon: <svg width="150"  viewBox="0 0 93 78" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="77.4068" cy="16.6532" r="9.70591" fill="black"/><circle cx="40.0765" cy="67.4227" r="9.70591" fill="black"/><rect x="21.8037" y="33.2783" width="21.9005" height="2.48869" transform="rotate(-45 21.8037 33.2783)" fill="black"/><rect x="37.2898" y="35.0381" width="21.9005" height="2.48869" transform="rotate(-135 37.2898 35.0381)" fill="black"/><rect x="68.5913" y="57.1699" width="21.9005" height="2.48869" transform="rotate(-45 68.5913 57.1699)" fill="black"/><rect x="84.0771" y="58.9297" width="21.9005" height="2.48869" transform="rotate(-135 84.0771 58.9297)" fill="black"/><path d="M10.845 0.901751C10.5301 0.414773 9.88012 0.275242 9.39314 0.590098L1.45736 5.72099C0.970386 6.03584 0.830853 6.68586 1.14571 7.17284C1.46057 7.65981 2.11058 7.79935 2.59756 7.48449L9.65158 2.9237L14.2124 9.97772C14.5272 10.4647 15.1772 10.6042 15.6642 10.2894C16.1512 9.97452 16.2907 9.3245 15.9759 8.83753L10.845 0.901751ZM24.8954 65.6802C25.4758 64.8052 25.4764 64.8055 25.4768 64.8058C25.4769 64.8059 25.4772 64.8061 25.4773 64.8061C25.4774 64.8062 25.4771 64.806 25.4764 64.8056C25.4751 64.8047 25.4723 64.8028 25.468 64.7999C25.4594 64.794 25.445 64.7841 25.4248 64.7701C25.3846 64.742 25.3218 64.6974 25.2382 64.6358C25.071 64.5127 24.8208 64.3218 24.5022 64.0598C23.8649 63.5358 22.9544 62.7275 21.8876 61.6078C19.7541 59.3686 16.9956 55.8844 14.5438 50.9352C9.64901 41.0543 5.9337 25.2465 10.9898 1.69223L8.93662 1.25147C3.78912 25.2313 7.53989 41.5276 12.6621 51.8674C15.2188 57.0285 18.1065 60.6837 20.3672 63.0564C21.4974 64.2426 22.4709 65.1084 23.1684 65.6819C23.5171 65.9687 23.797 66.1825 23.993 66.3268C24.091 66.399 24.1681 66.4538 24.2224 66.4917C24.2495 66.5107 24.271 66.5254 24.2865 66.5359C24.2942 66.5412 24.3005 66.5455 24.3052 66.5487C24.3076 66.5503 24.3096 66.5516 24.3113 66.5527C24.3121 66.5532 24.313 66.5538 24.3134 66.5541C24.3142 66.5547 24.315 66.5551 24.8954 65.6802Z" fill="black"/><path d="M64.204 26.7284C64.4081 26.1856 64.1335 25.5801 63.5907 25.376L54.7453 22.0501C54.2025 21.846 53.5971 22.1206 53.393 22.6634C53.1889 23.2062 53.4635 23.8117 54.0063 24.0158L61.8688 26.9721L58.9125 34.8347C58.7084 35.3775 58.983 35.9829 59.5258 36.187C60.0686 36.3911 60.6741 36.1166 60.8781 35.5738L64.204 26.7284ZM44.3071 53.7345C45.3469 53.588 45.3469 53.5886 45.347 53.5891C45.347 53.5892 45.3471 53.5896 45.3471 53.5898C45.3471 53.5901 45.3472 53.5902 45.3471 53.59C45.3471 53.5895 45.3469 53.5881 45.3465 53.5856C45.3459 53.5806 45.3447 53.5714 45.3431 53.5581C45.3399 53.5316 45.3351 53.4888 45.3293 53.4306C45.3178 53.314 45.3028 53.1355 45.2906 52.9014C45.2661 52.433 45.2528 51.743 45.301 50.8805C45.3975 49.1545 45.7397 46.7469 46.7246 44.0461C48.6833 38.6744 53.2161 32.0489 63.6548 27.3151L62.7875 25.4026C51.8235 30.3746 46.8993 37.4369 44.7517 43.3266C43.6833 46.2565 43.31 48.8729 43.2043 50.7633C43.1514 51.709 43.1654 52.4752 43.1934 53.0111C43.2074 53.2791 43.225 53.4897 43.2395 53.6367C43.2467 53.7103 43.2532 53.7679 43.2581 53.8088C43.2606 53.8293 43.2627 53.8456 43.2642 53.8577C43.265 53.8637 43.2657 53.8686 43.2662 53.8725C43.2665 53.8744 43.2667 53.8761 43.2669 53.8775C43.267 53.8782 43.2671 53.8791 43.2672 53.8794C43.2673 53.8802 43.2674 53.8809 44.3071 53.7345Z" fill="black"/></svg>,
    title: 'First Class Coaches',
    desc: "video analysis and technical talks with La Liga and second division coaches",
  },
]

const TourOptions = () => {
  const router = useRouter()

  return (
    <div>

      <div className='bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:'url(/images/vgsmTravel.png)' }}>
        <div className='w-full min-h-screen flex justify-center items-center bg-black bg-opacity-60 '>
          <div className='w-full max-w-[500px] p-5 font-medium md:font-bold leading-5 md:leading-7 tracking-wide md:tracking-wider text-lg md:text-xl text-justify text-white'>
            <p className='mb-4'>Vagary´s main objective is to ensure that the teams have all possible tools at hand and the highest possible level of competition in preparation for the season.</p>
            <p>Vagary has a network of contacts in the city of Madrid that includes La Liga academies, local professional teams (2,3 and 4 tier in Spain) and a high selection of tournaments during the course of the year for grassroots soccer academies.</p>
          </div>
        </div>
      </div>

      <div className='flex w-full py-20 flex-col lg:flex-row'>
        <div className='w-full flex justify-center items-center p-5'>
          <div className='w-full max-w-[600px]'>
            <p className='text-justify mb-10 text-lg md:text-2xl text-gray-800'>The client will only have to take care of the travel insurance and the plane ticket. Vagary will take care of the client´s needs from the time they land at Barajas International Airport until they leave for the United States. Our prices include everything, lodging, meals, transportation, sports equipment, etc...</p>
            <p className='text-justify mb-10 text-2xl md:text-3xl font-bold text-black'>We offer our services to youth soccer clubs, college teams and professional teams</p>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 justify-center items-center px-4'>
          {FEATURES.map((feature, index)=>(
          <div key={feature.title+index+'features'} className='max-w-[600px] min-h-[200px]  p-5 sm:p-5 border border-black rounded-3xl flex items-center flex-col sm:flex-row gap-3'>
            <div className='shrink-0'>
              { feature.icon }
            </div>
            <div className=''>
              <h2 className='text-center sm:text-left text-2xl mb-5 font-bold'>{ feature.title }</h2>
              <p className='text-center sm:text-left'>{feature.desc}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      
      
      <div className='flex w-full py-20 flex-col lg:flex-row'>
        <div className='w-full flex justify-center items-center p-5'>
          <div className='w-full max-w-[600px]'>
            <h2 className='text-justify mb-10 text-2xl md:text-3xl font-bold text-black'>Facilities</h2>
            <p className='text-justify mb-10 text-lg  text-gray-800'>In addition to organizing friendly matches with competitive rivals, Vagary Sports Management also has the exclusive privilege through its collaboration with Ebora Formacion Deportiva, of offering the use of the new sports facilities at Ebora Formacion in Talavera de la Reina.</p>
            <p className='text-justify mb-10 text-lg  text-gray-800'>These facilities, which were built in 2021, include a residence, restaurant, and two full-size soccer fields.</p>
            <p className='text-justify mb-10 text-lg  text-gray-800'>The Sports City is built on a 42,500 square meter lot and includes two artificial grass fields, two tennis courts, multi-sports courts, a changing room, gym, and parking, among other amenities.</p>
            <button onClick={()=>router.push('/facilities')} className='border border-gray-700 w-full py-2 text-xl text-gray-700 rounded-2xl'>See installations</button>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 justify-center items-center px-4'>
          <div className='relative w-full h-[300px]'>
            <Image src='/images/render.png' alt='' fill style={{ objectFit:'contain' }} />
          </div>
          <p className='text-justify font-bold max-w-[500px] mb-10 text-lg  text-gray-800'>Our facilities are located in Cazalegas, Toledo, Spain. It is located less than 60 miles from the center of Madrid.</p>
        </div>
      </div>

    </div>
  )
}

export default TourOptions