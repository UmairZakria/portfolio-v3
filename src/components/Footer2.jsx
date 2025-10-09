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
      <div className="w-full relative h-[3px]  bg-prime2   overflow-hidden mt-[120px] "></div>
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
        <div className="absolute w-full h-[100px] bg-gradient-to-b   z-[100] from-black via-black/70 to-transparent top-0 left-0 "></div>

        <div className="   z-[100]  bg-[#ffffff04] relative   p-2 py-[20px] lg:h-[300px] w-full backdrop-blur-xl     font-Montserrat">
          <div className="h-full flex lg:px-10 xl:container mx-auto   md:gap-0 gap-10 md:flex-nowrap flex-wrap  !justify-between">
            <div className="grid place-content-start  w-full lg:w-[350px]  h-full ">
              <div className="space-y-5  ">
                <h1 className="text-4xl space-x-2 text-white inline-flex gap-2 pb-2 border-b-[1px] border-prime2/20 items-end font-Poppins">
                  umair
                  <span className="text-lg font-Poppins  text-prime2">
                    Lab
                  </span>
                </h1>
                <p className=" text-xl text-gray-200/80 tracking-wider  font-Poppins font-light ">
                  Transforming ideas into powerful digital solutions.
                </p>
              </div>
            </div>
            <div className=" h-full space-y-4">
              <h3 className="text-xl font-Raleway text-gray-200">Contact</h3>
              <div className="flex xl:text-[16px] text-prime2 font-Poppins  md:flex-col gap-4 md:flex-nowrap flex-wrap md:gap-1">
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
            <div className=" h-full space-y-4">
              <h3 className="text-xl font-Raleway text-gray-200">Nav Links</h3>
              <div className="flex xl:text-[16px] text-prime2 font-Poppins md:flex-col gap-4 md:flex-nowrap flex-wrap md:gap-1">
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
            <div className="h-full w-[300px] md:mx-0   mx-auto   gap-2 transition-all duration-300 ease-in-out  flex flex-col  rounded-xl">
              <h4 className="font-Poppins text-lg">Leave a Message!</h4>
              {error && (
                <span className="text-green-500 text-sm font-Inter">
                  {error}
                </span>
              )}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] rounded-md p-2 border-gray-500/50"
                type="email"
                placeholder="Email"
              />
              <textarea
                onChange={(e) => setDiscription(e.target.value)}
                className="border-[1px]  rounded-md p-2 h-full border-gray-500/50"
                name=""
                placeholder="Message"
                id=""
              ></textarea>
              {/* <div className=" flex justify-center"> */}
              <button
                onClick={handleSubmit}
                className={`px-4 hover:shadow-lg hover:text-white  hover:bg-black rounded-sm cursor-pointer  hover:shadow-gray-500  bg-white text-black  transition-all ease-in-out duration-500   py-[8px] text-sm `}
              >
                Send
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
