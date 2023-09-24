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
import { useEffect } from 'react'
//portololio images

function AboutPage() {

    return (
        <>
            <div id='aboutpage' className=" sm:h-screen w-screen snap-start hidden   flex-col  sm:flex justify-center ">

                <div className="flex sm:pt-0 pt-10">
                    <div className="sm:px-14 px-10 sm:ml-12 sm:text-lg flex-[5] items-center justify-center flex gap-7 mt-3 flex-col">
                        <p className='  font-light'>Hello again ! My full name is <b>Akibrot Samuel Daka</b> I am from <u>Addis Ababa , Ethiopia.</u> when i was i child i played a lot of computer games like GTA , EA Games alot and i always wondered how those games , apps and technologies work so i joined <b style={{ textTransform: "lowercase" }}>JIMMA UNIVERSITIY </b> .</p>
                        <p className="font-light">

                            I studied <b>computer science</b> and developed diffrent skills and learned leatest technology trends which is not coverded by the institute like <b>Flutter, </b> <b>MERN Stack, </b> <b>Nextjs</b> and many tools like <b>Figma, </b>  <b>tailwind css, </b> <b>typscript,</b> <b>version control (git)</b> and  gratuated in <b>Aug 2022 G.C</b> with BSC degree in <b>computer science</b> having  <b>CGPA of 3.58.</b> </p>
                        <p className=' font-light '>Im  hard worker, fast learner , problem solver,confident. I built and maintained multiple web and mobile
                            applications . Highly skilled in problem solving ,communication ,fast learning and time managment. </p>


                    </div>
                    <div className="flex-[5] sm:flex hidden  items-center gap-3 pt-5 mr-20 flex-wrap justify-center  ">

                        {
                            iconMap.map((e) => {
                                return (
                                    <div key={e.name} className=" opacity-70  w-32 h-32  flex items-center justify-center">

                                        <Image src={e.img} width={120} height={120} title={e.name} />
                                    </div>)
                            })
                        }
                    </div>
                    {/* xxx */}

                </div>
                {/* technologies */}
                <div id='tech' className='sm:hidden  w-screen'>

                    <div  >
                        <p className='font-light px-10 mt-7 '>I{"'"}m  familiar with the legacy development technologis and the treanding once !</p>
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
            </div>
            {/* mobile view */}
            <div data-aos="fade-up" className="sm:hidden    ">
                <div className="sm:px-14 px-10 sm:ml-12 sm:text-lg flex-[5] items-center justify-center flex gap-7 mt-3 flex-col">
                    <p className='  font-light'>Hello again ! My full name is <b>Akibrot Samuel Daka</b> I am from <u>Addis Ababa , Ethiopia.</u> when i was i child i played a lot of computer games like GTA , EA Games alot and i always wondered how those games , apps and technologies work so i joined <b style={{ textTransform: "lowercase" }}>JIMMA UNIVERSITIY </b> .</p>
                    <p className="font-light">

                        I studied <b>computer science</b> and developed diffrent skills and learned leatest technology trends which is not coverded by the institute like <b>Flutter, </b> <b>MERN Stack, </b> <b>Nextjs</b> and many tools like <b>Figma, </b>  <b>tailwind css, </b> <b>typscript,</b> <b>version control (git)</b> and  gratuated in <b>Aug 2022 G.C</b> with BSC degree in <b>computer science</b> having  <b>CGPA of 3.58.</b> </p>
                    <p className=' font-light '>Im  hard worker, fast learner , problem solver,confident. I built and maintained multiple web and mobile
                        applications . Highly skilled in problem solving ,communication ,fast learning and time managment. </p>


                </div>
            </div>
        </>
    )
}

export default AboutPage

export const iconMap = [
    {
        name: "reactjs",
        img: reactjs
    },
    {
        name: "next",
        img: next
    },

    {
        name: "flutter",
        img: flutter
    },
    {
        name: "mongo",
        img: mongo
    },
    {
        name: "node",
        img: node
    },
    {
        name: "sql",
        img: sql
    },
    {
        name: "git version control",
        img: git
    },
    {
        name: "tailwind css",
        img: tail
    },


    {
        name: "express",
        img: express
    },
    {
        name: "electron",
        img: electron
    }, {
        name: "linux",
        img: linux
    },

    {
        name: "more",
        img: mysql
    },
]



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