import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BiLink, BiMailSend } from 'react-icons/bi';
import { FaCopyright, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTelegram, FaYoutube } from 'react-icons/fa';
import axios from 'axios'
function ContactUs() {
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
        setthankes("please check your internet ");
        setTimeout(() => {
            setthankes("")
        }, 3000);

    };
    return (
        <div id="contactus" className="relative snap-start w-screen sm:h-screen  bg-[#fff]  flex items-center flex-col sm:flex-row flex-wrap gap-2 justify-center">
            <div className='sm:flex-[4] sm:pl-20 text-xl font-light sm:h-[80vh] items-center sm:mt-32 pt-10 pb-24 flex flex-col gap-4'>
                <div className='sm:text-8xl text-5xl -ml-20 sm:ml-0 font-light pb-1 text-gray-700 sm:-mt-10 hidden sm:block'>Social links</div>
                <div className='sm:hidden flex items-center justify-center w-screen font-light text-4xl text-gray-700'><p>contact me</p></div>

                <div className='flex flex-col sm:gap-3 gap-2  sm:ml-0'>


                    <div className='flex items-center  gap-2 pl-3  font-light sm:text-2xl text-[#071738b4]'> <FaPhone className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' /><a href="tel:+251989489349">+251989489349</a></div>
                    <div className='flex items-center  gap-2 pl-3 font-light sm:text-2xl text-[#071738b4]'><FaPhone className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' /><a href="tel:+251934680311">+251934680311</a></div>
                    <div className='flex items-center  gap-2 pl-3 font-light sm:text-2xl text-[#071738b4]'><BiMailSend className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='brown' /><a href="mailto:akibrotsamuelas@gmail.com">akibrotsamuelas@gmail.com</a></div>
                    <div className='flex items-center  gap-2 pl-3 font-light sm:text-2xl text-[#071738b4]'><a href="https://linkedin/akibrot" target="_blank" rel="noopener noreferrer"><FaLinkedin className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='blue' /></a><a href="https://github.com/akibrot" target="_blank" rel="noopener noreferrer"><FaGithub className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' /></a> <a href="https://t.me/akibrot" target="_blank" rel="noopener noreferrer"><FaTelegram className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='blue' /></a> <a href="https://youtube.com/@codeaki" target="_blank" rel="noopener noreferrer"><FaYoutube className='bg-white shadow-lg rounded-full p-2 w-10 h-10 font-bold' color='red' /></a></div>
                </div>
            </div>

            <div className=" flex-[6] hidden h-[70vh] mt-[5.7rem]  sm:flex flex-col items-center gap-4">

                <form
                    onSubmit={(e) => sendmessage(e)}
                >
                    <div className="float-left w-[97%] ml-[-1rem] mt-1">
                        <div className="w-full float-left bg-white/10 my-3 flex items-center justify-center border-gray-100/70 border-2">
                            <input
                                className='w-[95%] bg-transparent placeholder:text-gray-400/70 pt-1 h-16 border-none text-gray-700/90 outline-none'

                                type="email"
                                name="email"
                                id=""
                                placeholder="your email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full bg-white/10 my-3 flex items-center justify-center border-gray-100/70 border-2">
                            <textarea
                                className='w-[95%] placeholder:text-gray-400/70 pt-2 border-none outline-none bg-transparent text-gray-700/90'
                                required
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                                placeholder="content"
                                onChange={(e) => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="pb-1 text-gray-700">{thankes}</div>
                        <div className="pb-5">
                            <button className='hover:bg-[#0c1031e1]  duration-300 text-white rounded-md  h-16 font-light  bg-[#090d29] w-full'> Send</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className='absolute bottom-0 w-screen h-16 bg-[#05081b] flex items-center justify-center text-white font-light'>made by me
                <div /> </div>
        </div>
    )
}

export default ContactUs