import Link from "next/link"

import eth from "/public/etheritage.png";
import api from "/public/nodejsapi.png";
import mobile from "/public/mobile.PNG";
import zon from "/public/menged.png";
import menged from "/public/zometeanspoer.png";
import clock from "/public/clock.png";
import nextjsfront from "/public/nextfrontend.jpg";
import Image from "next/image";
import { FaGit, FaGithub, FaLink } from "react-icons/fa";

function Project() {

    return (
        <>
            <div id="project" className="w-screen sm:h-screen snap-start scroll-smooth bg-[#dc143c] hidden sm:block">
                <div className="h-20 bg-white w-screen"></div>
                <div className="text- py-5 font-light text-5xl  flex  justify-center text-white/90 ">Projects .
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-center  sm:w-1/2 px-2 sm:px-0 text-gray-800 text-xl  font-light pb-8">
                        I have  designed and deployed multiple mobile
                        apps, desktop softwares ,Ui-Ux design, web apps
                        including websites and apis . {" "}
                        <span className="underline text-blue-800 cursor-pointer" ><a href={"https://github.com/akibrot"}>more</a></span>{" "}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

                    <div className="sm:flex-[5] sm:flex flex-[4]  items-center justify-end  ">
                        <div className=" sm:h-[24rem] relative  px-4  sm:px-0   sm:w-[30rem] rounded  hover:scale-105 duration-300">
                            <Image src={mobile} />
                            <div className="absolute bottom-0 text-white py-3 px-5 font-light items-center flex  w-full">
                                <p>Flutter mobile application</p>
                                <div className="flex items-center ml-4">
                                    <div><FaGithub size={20} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" sm:flex flex-wrap gap-3 flex-[4] hidden ">

                        <div className=" relative h-[11rem] w-[15rem] rounded  hover:scale-105 duration-300">
                            <Image src={eth} />
                            <div className="absolute bottom-0  py-2  font-light items-center flex  w-full">
                                <div className="flex items-center gap-4">
                                    <div className=" rounded-lg w-fit text-white">MERN</div>
                                    <div><FaGithub size={20} className="cursor-pointer text-white" /></div>
                                </div>
                            </div>
                        </div>
                        <div className=" relative h-[11rem] w-[15rem] rounded  hover:scale-105 duration-300">
                            <Image src={menged} />
                            <div className="absolute bottom-0  py-2  font-light items-center flex justify-end w-full">
                                <div className="flex items-center gap-4 text-white">
                                    <div className=" rounded-lg w-fit ">electronjs</div>
                                    <div><FaGithub size={20} className="cursor-pointer mr-1" /></div>
                                </div>
                            </div>

                        </div>              <div className="relative  h-[11rem] w-[15rem] rounded  hover:scale-105 duration-300">
                            <Image src={nextjsfront} />
                            <div className="absolute bottom-0  py-2  font-light items-center flex  w-full">
                                <div className="flex items-center gap-4 text-white">
                                    <div className=" rounded-lg  w-fit ">Nextjs Front-End</div>
                                    <div><FaGithub size={20} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div><div className=" h-[11rem] w-[15rem] relative rounded  hover:scale-105 duration-300">
                            <Image src={api} />
                            <div className="absolute bottom-0  py-2 px-5 font-light items-center flex justify-end w-full">
                                <div className="flex items-center gap-4 text-white">
                                    <div className=" rounded-lg  w-fit ">Express REST API </div>
                                    <div><FaGithub size={20} className="cursor-pointer " /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex-[1]"></div>
                </div>



            </div>
            {/* portofolio mobile */}
            <div id="projectmobile" className="bg-[#0f1216] sm:hidden">
                <div id='project' className='flex   sm:hidden  items-center justify-center text-gray-200'>
                    <p className='px-12  text-3xl font-light my-5'>
                        Projects
                    </p>

                </div>
                <div className='text-gray-200 px-5 font-light text-center pb-2'>
                    <p >These are my recentlly published works that are already being used by diffrent organizations.</p>
                </div>
                {
                    Timelines.map((e) => {
                        return <div key={e.description} className='mx-8 py-3 relative'>
                            <div>
                                <Image src={e.image} alt='image' />
                            </div>
                            <div className='font-light text-gray-100 flex items-center justify-between pt-2'><p>{e.description}</p>
                                <div className="flex items-center justify-center gap-3 font-light text-gray-300 text-sm ">

                                    <a href={e.link} target="_blank" rel="noopener noreferrer"><FaLink size={19} /></a> <a href="https://github.com/akibrot" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                                </div>
                            </div>
                        </div>
                    })
                }</div>
        </>
    )
}

export default Project


export const Timelines = [
    {
        id: 3,
        direction: "left",
        image: mobile,
        description1:
            "Mobile app developed for gedeo zone curlture and tourism affairs , you can download the app from app stores. ",
        date: "2023",
        description: "Flutter mobile application",
        link: "https://github.com/akibrot"
    },
    {
        id: 122,
        direction: "left",
        image: nextjsfront,
        description: "Nextjs Front-End",
        description1:
            "This project called ethiopian heritages in everywhere developed in  MERN STACK with deep links algorithm.",
        date: "2022",
        link: "https://nextjs-front-end-m-a-d-technologies.vercel.app/"
    },
    {
        id: 1,
        direction: "left",
        image: eth,
        description: "MERN STACK",
        description1:
            "This project called ethiopian heritages in everywhere developed in  MERN STACK with deep links algorithm.",
        date: "2022",
        link: "https://github.com/akibrot"

    },

    {
        id: 2,
        direction: "right",
        image: api,
        description: "NODEJS EXPRESS",
        description1:
            "This is nodejs with express and mongoDb api designed for the above system  and it is up and running on the server.",
        date: "2022",
        link: "https://github.com/akibrot"

    },
    {
        id: 4,
        direction: "right",
        image: menged,
        description: "NEXTRON Electronjs",
        description1:
            "Full-Stack desktop software developed for Gedeo zone transport department , developed in NEXTRON Technologies.",
        date: "2023",
        link: "https://github.com/akibrot"

    },



];