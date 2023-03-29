import React from 'react'

const Cards = [
    { image:'/images/VGSMTravel/carousel2.jpeg', text:'You`re looking for an isolated training environment to maximize preparation for the upcoming season.' },
    { image:'/images/VGSMTravel/carousel1.jpeg', text:'You`re coming to Spain to play academy tournaments. If so, we can provide entry into high-level summer tournaments while providing you with full access to our facilities.' },
    { image:'/images/VGSMTravel/carousel3.jpeg', text:'You want a full Spanish cultural experience. Our close proximity to both Toledo and Madrid provides many possibilities for off-time activities. You can experience Spanish culture, professional soccer games and historical sites during the course of your trip.' },
    { image:'/images/VGSMTravel/carousel4.jpeg', text:'You want to challenge your team with competitive Spanish opposition. Our network of local clubs in the area of Madrid allows us to provide the level of competition you are looking for.' },
]

export const OurModelSection = () => {
  return (
    <section className="relative pt-28 pb-32 bg-gradient-to-r from-[#000] to-[#222] overflow-hidden" >
        {/* <img className="h-full absolute top-0 left-1/2 transform -translate-x-1/2" src="/icons/radial.svg" alt="" /> */}
        <div className="relative z-10 container mx-auto px-4">
            
            <div className="mb-16 w-full">
                <h2 className="text-center w-full mb-6 font-heading font-semibold text-white text-6xl sm:text-7xl">Our Model</h2>
                <p className="text-justify max-w-[500px] mt-10 mx-auto text-gray-200 text-lg">
                    We realize teams go on overseas trips for various different reasons. Our facility provides a hub for many scenarios as can be seen below:
                </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-[1100px] mx-auto align mb-0 transition-all`} >
                { Cards.map((card, index) => (
                    <div key={'ourModelSectionCard'+index} className=" mb-10 flex-shrink-0 p-3" >
                        <div className=" min-h-[320px] md:min-h-[400px] lg:min-h-[350px] max-w-[90vw]  sm:max-w-md rounded-10 bg-center bg-cover bg-no-repeat" style={{ backgroundImage:`url(${card.image})` }}>
                            <div className='min-h-[320px] md:min-h-[400px] lg:min-h-[350px] bg-gradient-to-b from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,1)] bg-opacity-70 pt-32 p-3 sm:p-10 sm:pt-32 shadow-sm shadow-[#ddd]'>
                                {/* <div className="mb-1 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">1</div> */}
                                <p className="text-white text-base sm:text-lg ">{ card.text }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    </section>
  )
}
