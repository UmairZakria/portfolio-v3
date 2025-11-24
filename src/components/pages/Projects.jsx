import React from 'react'
import Navbar from '../Navbar'
import Footer2 from '../Footer2'
import { motion } from 'framer-motion'
const Projects = () => {
    const data = [
        {
            name: "Marcus",
            link:'/',
            category: "Web Design",
            img: "images/Marcus1.jpeg",
            subtitle: "Modern design, seamless experience, bold impression.",
            description:
                "A clean, modern, and fully custom portfolio website — crafted to showcase creativity, professionalism, and a seamless user experience. Designed with attention to detail to make a bold and lasting impression.",
            techStack: [
                "React.js",
                "Tailwind-CSS",
                "Lucide-Icons"
            ],
            year: 2025,
        },
        {
            name: "Bitsmart",
            link:'/',
            category: "Web Design",
            img: "images/bitsmart2.jpeg",
            subtitle: "Crafting digital masterpieces pixel by pixel.",
            description:
                "A modern, responsive, and brand-focused company portfolio website for Bitsmart Tech. Built to showcase services, projects, and client engagement with an emphasis on creativity, clean UI, and smooth user experience.",
            techStack: [
                "Next.js",
                "Tailwind-CSS",
                "Framer-Motion",
                "Mongodb",
                "REST API",
            ],
            year: 2024,
        },
        {
            name: "SuperSub",
            link:'/',
            category: "Web Design",
            img: "images/super2.jpeg",
            subtitle: "Bringing businesses to the digital world.",
            description:
                "SuperSub Officials — an IPTV subscription selling platform  built with a modern tech to showcase its offerings. The site features an integrated online payment system with multiple banks options and a scalable design for future growth.",
            techStack: [
                "React.js",
                "Expres.js",
                "Tailwind-CSS",
                "MongoDB",
                "REST API",
            ],
            year: 2024,
        },
        {
            name: "FashionMane",
            link:'/',
            category: "Web Development",
            img: "images/fashion3.jpeg",
            subtitle: "Your style, your stories — managed effortlessly",
            description:
                "FashionMane is a fully functional blogging platform with a built-in CMS, featuring a user-friendly frontend, powerful admin panel, and secure backend. It supports full CRUD operations, dynamic routing, and is optimized for SEO.",
            techStack: [
                "Next.js",
                "Framer-Motion",
                "Tailwind-CSS",
                "MongoDB",
                "REST API",
            ],
            year: 2025,
        },
        {
            name: "BusGoes+",
            link:'/',
            category: "Web Design",

            img: "images/bus2.jpeg",
            subtitle: "Making bus journeys just a click away.",
            description:
                "Bus Goes is a modern online bus booking platform with a built-in CMS that makes intercity travel simple. It offers a seamless booking experience, smart route management, and an intuitive admin dashboard for effortless reservation handling.",
            techStack: [
                "Next.js",
                "Framer-Motion",
                "Tailwind-CSS",
                "MongoDB",
                "REST API",
            ],
            year: 2024,
        },
    ];
    return (

        <div className=''>

            <Navbar />
            <div className=' relative mt-[100px] min-h-screen xl:container lg:px-10  2xl:gap-20 gap-5  xl:px-0 mx-auto flex items-center xl:justify-around 2xl:justify-center lg:justify-between gap-y-20 flex-wrap'>

                {
                    data.map((data) => (

                        <motion.div
                            key={data.name}
                            initial={{
                                opacity: 0,
                                y: 20

                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,

                                transition: {
                                    delay: 0.1,
                                    duration: 1.5,
                                },


                            }}
                            viewport={{ once: true }}
                            className=' h-full bg-[#3a444b6b] backdrop-blur-xl rounded-lg shadow-2xl shadow-prime/10 overflow-hidden
                        '>
                            <div


                                className=' relative flex flex-col  shadow-2xl   h-auto w-full md:w-[460px] max-w-sm'>
                                <div className='h-full relative '>

                                    <img className=' h-[240px] object-top hover:object-bottom transition-all duration-300 ease-linear w-full rounded-t-lg     object-cover ' src={data.img} alt="image" />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className="absolute w-full h-full top-0 left-0 -z-10"
                                    style={{
                                        background: `
                        radial-gradient(circle at 0% 50%, rgba(37, 157, 255, 0.1) 0%, transparent 40%), /* Indigo glow bottom-left */
                        radial-gradient(circle at 100% 100%, rgba(0, 154, 250, 0.1) 0%, transparent 40%) /* Pink glow top-right */
                          `,
                                        // Ensure the background covers the entire div
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></motion.div>

                                <div

                                    className='relative flex flex-col   px-3 py-6  border-gray-400 gap-4 '>

                                    <div className='flex  items-center  flex-wrap justify-between w-full'>


                                        <h1 className='text-2xl font text-white border-b-[1px] border-prime/50 pb-1 font-Poppins '>{data.name}</h1>
                                        <a target='_blank' href={data.name}
                                            className='text-lok flex text-prime  items-center  gap-3 border-b pb-1 border-prime/50'
                                        >
                                            {/* <img src="https://img.icons8.com/material-outlined/24/ffd401/external-link.png" alt="Umair Zakria" /> */}
                                            Explore</a>

                                    </div>
                                    <p

                                        className={` text-white/80   line-clamp-2`}>
                                        {data.description}

                                    </p>

                                </div>
                            </div>
                        </motion.div>
                    ))
                }


            </div >
            <Footer2 />

        </div>
    )
}

export default Projects
