import Image from "next/image"
import { useEffect, useState } from "react"
import profile from '/public/aki.png'
import profile1 from '/public/aki1.png'

function HeroSection() {

    const [item, setitem] = useState("Full-Stack developer")
    useEffect(() => {
        setTimeout(() => {
            if (item == "Full-Stack developer") {
                setitem("Ui - Ux designer")
            }
            else if (item == "Ui - Ux designer") {
                setitem("Mobile app developer")
            }
            else if (item == "Mobile app developer") {
                setitem("Flutter cross-platform")
            }
            else if (item == "Flutter cross-platform") {
                setitem("Font-End developer")
            }
            else setitem("Full-Stack developer")
        }, 3000)
    }, [item])
    return (
        <>
            <div id="home" className="hidden  sm:flex-row sm:flex relative flex-col pt-14  w-screen sm:h-screen snap-start  gap-5 z-[-60px] " >
                <div className=" sm:flex-[5] relative   overflow-hidden">
                    <div className="sm:w-[700px] sm:h-[700px] w-[30rem]  h-[30rem] mt-7  rounded-[50%] float-right flex items-center justify-center bg-[#dc143c]">
                        <Image src={profile} />
                    </div>


                    {/* <div className="bg-white top-32 w-[42rem] h-full rounded-full relative  z-[-10px]">test</div> */}
                </div>
                <div className=" sm:flex-[5] pl-0 items-start justify-center sm:flex hidden flex-col gap-3">
                    <div className="pl-10 flex flex-col gap-3">
                        <div className="text-5xl py-3 ml-[-1.8rem] ">{"<"}Hello 🌎 {"/>"}, Im</div>
                        <div className="text-5xl font-400 text-gray-700">Akibrot Samuel</div>
                        <div className="text-4xl font-light text-gray-900">From Addis Ababa, Ethiopia</div>
                        <div className=" text-4xl font-extralight animate-pulse ">{item}</div>
                        <div className="bg-[#dc143c] text-gray-200 px-28 py-5 flex items-center justify-center rounded mt-10 text-2xl cursor-pointer duration-300 hover:scale-105 font-light"><a href="/AkibrotSamuelResume.pdf" download="Akibrot Samuel Resume">download cv</a></div>

                    </div>


                </div>


            </div>
            {/* mobile view */}
            <div className="sm:hidden  w-screen  ">
                <div data-aos="fade-up" id="homemo" className="sm:hidden  w-[22rem] h-[19rem]    ml-[0.27rem] mt-[5.5rem] flex items-center justify-center ">
                    <Image src={profile1} />
                </div>
                <div className=" flex flex-col items-center justify-center w-full">
                    <div className="text-4xl pt-3 pb-2 px-2 font-bold text-gray-700">{"<"}Hello 🌎 {"/>"}, I{"'"}m</div>

                    <div data-aos="fade-up" className="text-3xl font-400 text-gray-700">Akibrot Samuel</div>
                    <div data-aos="fade-right" className="text-2xl font-light text-gray-900">From Addis Ababa, Ethiopia</div>
                    <div data-aos="fade-left" className=" text-2xl font-extralight animate-pulse ">{item}</div>

                </div>
                <div className=" px-8 mt-5">
                    <div className="bg-[#dc143c] text-2xl text-gray-200 py-4 flex items-center justify-center rounded  cursor-pointer duration-300 hover:scale-105 font-light"><a href="/AkibrotSamuelResume.pdf" download="Akibrot Samuel Resume">download cv</a></div>

                </div>
            </div>
        </>
    )
}

export default HeroSection