import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'

const ITEMS = [
    { path:'/', name:'home' },
    { path:'/aboutUs', name:'about us' },
    { path:'/facilities', name:'facilities' },
    { path:'/partnersAndSponsors', name:'partners' },
    { path:'/VGSM-TRAVEL', name:'VGSM TRAVEL' },
    { path:'/services', name:'services' },
    { path:'/contact', name:'contact' },
]

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { pathname } = useRouter()

    const handleCloseMenu = () => {
        setTimeout(()=>setShowMenu(false), 500)
    }

  return (
    <nav className="fixed z-40 top-0 left-0 w-full border-gray-200 px-2 py-2.5 bg-black ">
        <div className="flex items-center justify-between md:justify-start w-full">

            <Link href={'/'} className="block text-white rounded">
                <Image src={'/logos/logo.png'} height={58} width={142} alt="Vagary" />
            </Link>

            <button onClick={()=>setShowMenu(!showMenu)} type="button" className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <MdMenu size={40} color="white" />
            </button>

            <div className={`${showMenu?'-translate-x-0':'-translate-x-[240px]'} transition-all md:hidden z-50 fixed top-0 bottom-0 left-0 w-[240px] bg-black text-white p-2`}>
                <div onClick={()=>setShowMenu(!showMenu)} className="w-full flex justify-center border-b border-b-white pb-2 mt-2">
                    <Link href={'/'} className="block text-white rounded">
                        <Image src={'/logos/logo.png'} height={58} width={142} alt="Vagary" />
                    </Link>
                </div>

                <ul className="flex flex-col p-4 mt-4 gap-3 text-lg font-bold">
                    {ITEMS.map((item, index)=>(
                        <li key={'menuMobile'+item.path} onClick={handleCloseMenu}>
                            <Link href={item.path} className="block text-white">
                                <span className="inline-block">
                                    { item.name }
                                    <div className={`${pathname===item.path?'scale-x-1':'scale-x-0'} origin-left transition-all w-full h-1 bg-white`}></div>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hidden w-full md:block md:w-auto ml-10 " id="navbar-default">
                <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {ITEMS.map(item=>(
                        <li key={"desktopmenu"+item.path}>
                            <Link href={item.path} className="text-xl block text-white rounded relative">
                                <span className="inline-block relative">
                                    { item.name }
                                    <div className={`${pathname===item.path?'scale-x-1':'scale-x-0'} absolute top-[120%] origin-left transition-all w-full h-[1px] bg-white`}></div>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}
