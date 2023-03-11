import React from 'react'
import { useRouter } from 'next/router'

export const CTA1 = () => {
    const router = useRouter()

  return (
    <>
        <div className="container my-24 px-6 mx-auto ">

        <section className="mb-32 rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
            <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-[400px]"  style={{backgroundImage: "url(/images/facilities/terasse2.jpeg)"}}>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black bg-opacity-70">
                <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                    <h2 className="text-5xl font-bold tracking-tight leading-tight mb-12">
                        Did you see <br /><span>Our Facilities?</span>
                    </h2>
                    <button type="button"
                    onClick={()=>router.push('/facilities')}
                    className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Take a Look
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>

        </div>
    </>
  )
}
