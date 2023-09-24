import { BiMenu, BiTime, BiX } from "react-icons/bi"
import Logo from "./Logo"
import Link from "next/link"
import { useState } from "react"
function NavBar() {
    const [menu, setmenu] = useState(false)
    return (
        <div className='flex  bg-white h-16 items-center justify-between sm:px-14 px-9 sm:pt-4 pt-10 fixed z-30 w-screen bg-transparent'>

            <Logo />
            <div className="text-gray-900  gap-10 text-lg font-light mr-2 hidden sm:flex">
                <div className="hover:text-gray-500 duration-300" >
                    <Link href={"#home"}>home</Link>
                </div>
                <div className="hover:text-gray-500 duration-300">
                    <Link href={"#aboutpage"}>about</Link>
                </div>
                <div className="hover:text-gray-500 duration-300">
                    <Link href={"#project"}>projects</Link>
                </div>

                <div className="hover:text-gray-500 duration-300">
                    <Link href={"#contactus"}>contact me</Link>
                </div>
            </div>
            {
                menu ? <BiX size={45} color="" onClick={() => setmenu(!menu)} className="z-50" /> : <BiMenu onClick={() => setmenu(!menu)} size={45} className="relative mt-[-0.3rem] z-50 text-gray-900 sm:hidden" />

            }
            <div onClick={() => setmenu(false)} className={menu ? "text-gray-100  gap-1 text-4xl font-light w-screen h-screen -z-0 bg-[#140306a2] flex flex-col items-start justify-center pl-[33%] absolute left-0 top-0 sm:hidden" : "hidden sm:hidden -z-0"}>
                <div onClick={() => setmenu(false)} className="hover:text-gray-300 duration-300" >
                    <Link href={"#homemobile"}>home</Link>
                </div>
                <div onClick={() => setmenu(false)} className="hover:text-gray-300 duration-300">
                    <Link href={"#aboutmobile"}>about</Link>
                </div>
                <div onClick={() => setmenu(false)} className="hover:text-gray-300 duration-300">
                    <Link href={"#techmobile"}>techs</Link>
                </div>
                <div onClick={() => setmenu(false)} className="hover:text-gray-300 duration-300">
                    <Link href={"#projectsmobile"}>projects</Link>
                </div>

                <div onClick={() => setmenu(false)} className="hover:text-gray-300 duration-300">
                    <Link href={"#contactsmobile"}>contact</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar