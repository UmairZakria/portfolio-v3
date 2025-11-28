import { Copyright } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { motion } from "framer-motion";
const Footer2 = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState(email);
  const [lname, setLname] = useState(fname);
  const [budget, setBudget] = useState(fname);
  const [discription, setDiscription] = useState("");
  const [error, setError] = useState("");
  const [style, setStyle] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Sending...");

    axios
      .post("https://umair-portfolio-eight.vercel.app/api/contact", {
        fname,
        lname,
        email,
        budget,
        discription,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          setError("Thanks 😊 for showing interest!");
          setTimeout(() => {
            setError("");
          }, 7000);
        }
      })
      .catch((err) => {
        console.log(err);

        setError("Server Error! , Try reloading the page.");
      });
  };
  return (
    <>
      <div className="w-full relative h-[0.1vw]  bg-gradient-to-r from-[#bd06ab]  to-prime   overflow-hidden mt-[8vw]  "></div>
      <div className="relative ">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            background: `
            radial-gradient(circle at 20% 80%, rgba(37, 157, 255, 0.1) 0%, transparent 40%), /* Indigo glow bottom-left */
            radial-gradient(circle at 80% 20%, rgba(0, 154, 250, 0.1) 0%, transparent 40%), /* Pink glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
            // Ensure the background covers the entire div
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        {/* <div className="absolute w-full h-[100px] bg-gradient-to-b   !z-[999] from-black   via-black/70 to-transparent top-0 left-0 "></div> */}

        <div className="   z-[100] flex flex-col items-center justify-between    bg-[#ffffff04] relative   px-[4vw]  pt-[4vw] lg:h-[25vw] w-full backdrop-blur-xl     font-Montserrat">
          <div className="h-full  flex w-full   md:gap-0 gap-10 md:flex-nowrap flex-wrap items-center   !justify-between">
            <div className="flex   w-full lg:w-[24vw]  h-full ">
              <div className="gap-[3vw]  h-full flex flex-col justify-center  items-start ">
                <h1 className="text-3xl text-white md:text-[2.6vw]  inline-flex gap-[0.2vw]  pb-[0vw] font-bold border-b-[0.05vw] tracking-tight border-white/20 items-end font-confortaa">
                  .umair
                  <span className="text-[0.51em] font-confortaa  text-transparent bg-gradient-to-tr from-[#b622a7] to-prime bg-clip-text ">lab</span>
                </h1>
                <p className=" text-[1.2vw] text-gray-200/80    font-Montserrat font-light ">
                  {/* Transforming ideas into powerful digital solutions. */}
                  Creating innovative and high-performance digital solutions that enhance user experiences and drive growth.

                  UI/UX Design
                  UI/U
                </p>
              </div>
            </div>
            <div className=" h-fit space-y-[1vw] ">
              <h3 className="text-[1.2vw] font-Raleway text-gray-200">Contact</h3>
              <div className="flex lg:text-[1.1vw] text-prime2  font-Poppins  md:flex-col gap-[1.2vw] md:flex-nowrap flex-wrap md:gap-[0.4vw]">
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  target="_blank"
                  href="https://www.linkedin.com/in/umair-zakria-67477b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Linkedin
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  target="_blank"
                  href="https://github.com/UmairZakria"
                >
                  Github
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  target="_blank"
                  href="https://wa.me/923184394363"
                >
                  Whatsapp
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  target="_blank"
                  href="mailto:umairzakria6@gmail.com"
                >
                  Email
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  target="_blank"
                  href="/CV.pdf"
                >
                  My CV
                </a>
              </div>
            </div>
            <div className=" h-fit space-y-[1vw]">
              <h3 className="text-[1.1vw] font-Raleway text-gray-200">Nav Links</h3>
              <div className="flex lg:text-[1.1vw] text-prime2 font-Poppins md:flex-col gap-[1.2vw] md:flex-nowrap flex-wrap md:gap-[0.4vw]">
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  href="/"
                >
                  Home
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  href="/services"
                >
                  Services
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  href="/projects"
                >
                  Projects
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  href="/work"
                >
                  Work
                </a>
                <a
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer "
                  href="/overview"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="h-full w-[20vw] md:mx-0   mx-auto   gap-[0.6vw] transition-all duration-300 ease-in-out  flex flex-col  rounded-[1vw]">
              <h4 className="font-Poppins text-[1.1vw]">Leave a Message!</h4>
              {error && (
                <span className="text-green-500 text-[0.8vw] font-Inter">
                  {error}
                </span>
              )}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border-[0.1vw] rounded-[0.51vw] p-[0.7vw] text-[1vw] border-gray-500/50"
                type="email"
                placeholder="Email"
              />
              <textarea
                onChange={(e) => setDiscription(e.target.value)}
                className="border-[0.1vw] rounded-[0.51vw] p-[0.7vw] text-[1vw] h-full border-gray-500/50"
                name=""
                placeholder="Message"
                id=""
              ></textarea>
              {/* <div className=" flex justify-center"> */}
              <button
                onClick={handleSubmit}
                className={`px-[] hover:shadow-lg text-white bg-black rounded-sm cursor-pointer  hover:shadow-gray-500    transition-all ease-in-out duration-500   py-[1vw]  text-[1vw]  `}
              >
                Send
              </button>
              {/* </div> */}
            </div>
          </div>
          <div className=" w-full text-[1.1vw] pt-[3vw] gap-[2vw] flex items-center justify-around text-white/70 pb-[1vw] text-center">
            <h4>
              © 2025 All Rights Reserved.

            </h4>
            <h3 className="gap-[1vw] flex items-end font-confortaa">
              Made by Umair at
              <h1 className="text-3xl text-white md:text-[1.6vw]  inline-flex gap-[0.2vw]  pb-[0vw] font-bold tracking-tight border-white/20 items-end font-confortaa">
                .umair
                <span className="text-[0.51em] font-confortaa  text-transparent bg-gradient-to-tr from-[#b622a7] to-prime bg-clip-text ">lab</span>
              </h1>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
