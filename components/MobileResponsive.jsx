import { useEffect, useState } from "react"
import profile from '/public/aki.png'
import profile1 from '/public/aki1.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import reactjs from '/public/react.svg'
import next from '/public/Nextjs-logo.svg'
import node from '/public/node.png'
import mongo from '/public/mongo.png'
import sql from '/public/SQL.png'
import electron from '/public/icon.ico'
import linux from '/public/linux-logo.png'
import flutter from '/public/flutter.png'
import mysql from '/public/more.png'
import express from '/public/express.png'
import git from '/public/git1.png'
import tail from '/public/tail.png'
//portololio images
import "aos/dist/aos.css";
import Link from "next/link"

import eth from "/public/etheritage.png";
import api from "/public/nodejsapi.png";
import mobile from "/public/mobile.PNG";
import zon from "/public/menged.png";
import menged from "/public/zometeanspoer.png";
import clock from "/public/clock.png";
import nextjsfront from "/public/nextfrontend.jpg";
import { FaGit, FaLink } from "react-icons/fa";
import { useRouter } from 'next/router';
import { BiLink, BiMailSend } from 'react-icons/bi';
import axios from 'axios'
import { FaCopyright, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTelegram, FaYoutube } from 'react-icons/fa';
function MobileResponsive() {



    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);
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
    const route = useRouter()
    const [thankes, setthankes] = useState("");
    const [Email, setEmail] = useState("");
    const [Desc, setDesc] = useState("");
    const sendmessage = (e) => {
        e.preventDefault();
        axios.post("https://emailsendserver.herokuapp.com/sendautoemail", { "Email": Email, "Desc": Desc }).then((res) => {
            console.log(res)

            setthankes("Thanks!, i will replay ASAP ):");


        }).catch((err) => { throw err })
        setthankes("please check your internet connections");
        setTimeout(() => {
            setthankes("")
        }, 3000);

    };

    return (
        <>
            {/* hero moblie */}
            <div className="sm:hidden  w-screen h-screen snap-y scroll-smooth snap-mandatory  ">
                <div data-aos="fade-up" id="homemobile" className="sm:hidden snap-start  w-[22rem] h-[19rem]    ml-[0.27rem] pt-[8.5rem] flex items-center justify-center ">
                    <Image src={profile1} />
                </div>
                <div className=" flex flex-col items-center justify-center w-full mt-14">
                    <div data-aos="fade-up" className="text-4xl pt-3 pb-2 px-2 font-bold text-gray-700">{"<"}Hello 🌎 {"/>"}, I{"'"}m</div>

                    <div data-aos="fade-up" className="text-3xl font-400 text-gray-700">Akibrot Samuel</div>
                    <div data-aos="fade-up" className="text-2xl font-light text-gray-900">From Addis Ababa, Ethiopia</div>
                    <div data-aos="fade-up" className=" text-2xl font-extralight animate-pulse ">{item}</div>

                </div>
                <div id="aboutmobile" className=" px-8 mt-5">
                    <div className="bg-[#dc143c] text-2xl text-gray-200 py-4 flex items-center justify-center rounded  cursor-pointer duration-300 hover:scale-105 font-light"><a href="/AkibrotSamuelResumesimple.pdf" download="Akibrot Samuel Resume">download cv</a></div>

                </div>
            </div>
            {/* hero end */}
            <div className="sm:px-14 px-10 sm:ml-12 sm:text-lg flex-[5] items-center justify-center flex gap-7 mt-3 flex-col">
                <p data-aos="fade-up" className='  font-light'>Hello again ! My full name is <b>Akibrot Samuel Daka</b> I am from <u>Addis Ababa , Ethiopia.</u> when i was i child i played a lot of computer games like GTA , EA Games alot and i always wondered how those games , apps and technologies work so i joined <b style={{ textTransform: "lowercase" }}>JIMMA UNIVERSITIY </b> .</p>
                <p data-aos="fade-up" className="font-light">

                    I studied <b>computer science</b> and developed diffrent skills and learned leatest technology trends which is not coverded by the institute like <b>Flutter, </b> <b>MERN Stack, </b> <b>Nextjs</b> and many tools like <b>Figma, </b>  <b>tailwind css, </b> <b>typscript,</b> <b>version control (git)</b> and  gratuated in <b>Aug 2022 G.C</b> with BSC degree in <b>computer science</b> having  <b>CGPA of 3.58.</b> </p>
                <p data-aos="fade-up" className=' font-light '>Im  hard worker, fast learner , problem solver,confident. I built and maintained multiple web and mobile
                    applications . Highly skilled in problem solving ,communication ,fast learning and time managment. </p>


            </div>
            {/* ende */}
            {/* technologies */}
            <div id='techmobile' className='sm:hidden '>

                <div >
                    <p data-aos="fade-up" className='font-light px-10 mt-7 '>I{"'"}m  familiar with the legacy development technologis and the treanding once !</p>
                </div>
                <div className='w-full'>
                    <div className='py-10 mt-5 bg-[#dc143cw] px-12 flex flex-wrap items-center w-full justify-center gap-2'>
                        {
                            techImage.map((e) => {
                                return <div data-aos="fade-up" key={e.title} className='h-20 w-32 bg-white flex shadow-lg items-center justify-center'>
                                    <Image key={e.id} src={e.image} width={70} height={70} alt='image' />
                                </div>
                            })
                        }
                    </div>
                </div></div>
            {/* tech end */}
            {/* portofolio mobile */}
            <div id="projectsmobile" className="bg-[#0f1216] sm:hidden">
                <div id='project' className='flex   sm:hidden  items-center justify-center text-gray-200'>
                    <p data-aos="fade-up" className='px-12  text-3xl font-light my-5'>
                        Projects
                    </p>

                </div>
                <div className='text-gray-200 px-5 font-light text-center pb-2'>
                    <p data-aos="fade-up" >These are my recentlly published works that are already being used by diffrent organizations.</p>
                </div>
                {
                    Timelines.map((e) => {
                        return <div data-aos="fade-up" key={e.description} className='mx-8 py-3 relative'>
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

            {/* end project */}
            <div data-aos="fade-up" id="contactsmobile" className='sm:hidden flex items-center justify-center w-screen snap-start font-light text-4xl text-gray-700 py-5 '><p>contact me</p></div>

            <div data-aos="fade-up" className='sm:hidden flex flex-col w-screen'>
                <form action="" onSubmit={(e) => sendmessage(e)}>
                    <div className='mx-7 flex items-center my-2 justify-center bg-blue-100 rounded py-3 text-xl'><input placeholder='email' className='bg-transparent w-[95%] h-full outline-none' type="email"
                        name="email"
                        id=""
                        required
                        onChange={(e) => setEmail(e.target.value)} /></div>

                    <div className='bg-blue-100 mx-7 rounded flex items-center justify-center pt-1'><textarea placeholder='content' className='bg-transparent w-[95%] outline-none px-1 py-1' name="" id="" cols="20" rows="7" onChange={(e) => setDesc(e.target.value)} required></textarea></div>
                    <div className="pb-1 text-gray-700 mx-10 mt-2">{thankes}</div>
                    <div className="pb-5 mx-7 mt-1">
                        <button className='hover:bg-blue-300  duration-300 text-white rounded-md  h-16 font-light  bg-blue-400 w-full'> Send</button>
                    </div>

                </form>
            </div>
            <div className='flex flex-col sm:gap-3 gap-2  sm:ml-0 relative pb-20 '>


                <div data-aos="fade-up" className='flex items-center  gap-2 pl-7  font-light sm:text-2xl text-[#071738b4]'> <FaPhone className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' /><a href="tel:+251989489349">+251989489349</a></div>
                <div data-aos="fade-up" className='flex items-center  gap-2 pl-7 font-light sm:text-2xl text-[#071738b4]'><FaPhone className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' /><a href="tel:+251934680311">+251934680311</a></div>
                <div data-aos="fade-up" className='flex items-center  gap-2 pl-7 font-light sm:text-2xl text-[#071738b4]'><BiMailSend className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='brown' /><a href="mailto:akibrotsamuelas@gmail.com">akibrotsamuelas@gmail.com</a></div>
                <div className='flex items-center  gap-2 pl-7 font-light sm:text-2xl text-[#071738b4]'><a href="https://linkedin/akibrot" target="_blank" rel="noopener noreferrer"><FaLinkedin className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='blue' /></a><a href="https://github.com/akibrot" target="_blank" rel="noopener noreferrer"><FaGithub className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' /></a> <a href="https://t.me/akibrot" target="_blank" rel="noopener noreferrer"><FaTelegram className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='blue' /></a> <a href="https://youtube.com/@codeaki" target="_blank" rel="noopener noreferrer"><FaYoutube className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='red' /></a></div>
                <div className='absolute bottom-0 w-screen h-16 bg-[#05081b] flex items-center justify-center text-white font-light'>made by me</div>

            </div>

        </>


    )
}

export default MobileResponsive



export const techImage = [
    {
        id: 1,
        title: "Reactjs",
        image: reactjs
    }, {
        id: 2,
        title: "Nextjs",
        image: next
    }, {
        id: 3,
        title: "Electron",
        image: electron
    }, {
        id: 4,
        title: "Flutter",
        image: flutter
    }, {
        id: 5,
        title: "nodejs",
        image: node
    }, {
        id: 6,
        title: "express",
        image: express
    },
    {
        id: 7,
        title: "Mongodb",
        image: mongo
    },
    {
        id: 1,
        title: "sql",
        image: sql
    },
    {
        id: 8,
        title: "git",
        image: git
    },
    {
        id: 9,
        title: "tail",
        image: tail
    },

    {
        id: 7,
        title: "linux",
        image: linux
    },
    {
        id: 10,
        title: "...etc",
        image: mysql
    },
]


export const Timelines = [
    {
        id: 3,
        direction: "left",
        image: mobile,
        description1:
            "Mobile app developed for gedeo zone curlture and tourism affairs , you can download the app from app stores. ",
        date: "2023",
        description: "Flutter mobile application",
        link: "https://github.com/akibrot/"
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