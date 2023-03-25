import React from 'react'

const SERVICES = [
    { 
        title:'All inclusive team trips to Madrid. You will be able to train in an isolated environment, play high-level Spanish teams, and be immersed in a full European soccer culture.', 
        description: 'We offer fully customizable team trips to Spain. You will have full access to our new facilities which were completed in 2021. It provides everything needed to perform at the highest level for the duration of your trip. MORE DETAILS on the VGSM TRAVEL tab. ', 
        icon: ''
    },
    { 
        title:'Legal Representation for Professional Athletes', 
        description: 'We represent young talents for them to maximize their possibilities in their playing career. Our network of high-level coaches and teams provides us with an advantage when finding a team best suited for our clients goals. Our philosophy is to represent the best interest of athletes and family throughout their career. Everything we do is with our players best interests at heart by offering full transparency and commitment. We will be with you every step of the way. ', 
        icon: ''
    },
]

export const ServicesSection = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    <div className="mx-auto">
        <div className=" flex flex-wrap">
        <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="text-primary mb-2 block text-lg font-semibold">
                Our Services
            </span>
            <h2
                className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
            >
                What We Offer
            </h2>
            <p className="text-body-color text-base">
                {/* There are many trips of passages of Lorem Ipsum available but
                the majority have suffered alteration in some form. */}
            </p>
            </div>
        </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 px-5">
            {SERVICES.map(item=>(
                <div className="md:min-w-[430px] w-full  md:w-[40%]" key={item.title+'servicesCards'}>
                    <div className="min-h-[400px] mb-8 rounded-[20px] bg-gray-100 xs:p-10 p-7  shadow-md hover:shadow-lg " >
                        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl" > 
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z" fill="white"/> </svg>
                        </div>
                        <h4 className="text-dark mb-5 text-base md:text-xl font-semibold lg:text-center text-justify">
                            { item.title }
                        </h4>
                        <p className="text-[#444] text-base tracking-wide text-justify">
                            { item.description }
                        </p>
                    </div>
                </div>
            ))}
        
        </div>
    </div>
    </section>
  )
}
