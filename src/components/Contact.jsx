import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [style, setStyle] = useState({});
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const rotateX = yPercent * 15;
    const rotateY = -xPercent * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0)",
      transition: "transform 0.3s ease-out",
    });
  };
  useGSAP(() => {
    const textContent = `Being a developer is about turning ideas into results. It’s dedicating yourself to building reliable, scalable solutions that drive business growth while delivering an exceptional user experience.`;

    textRef.current.innerHTML = textContent
      .split(" ")
      .map((word) => `<span class="inline-block  opacity-0">${word} </span>`)
      .join(" ");

    const wordElements = textRef.current.querySelectorAll("span");
    gsap.to(wordElements, {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".Abouts",
        start: "bottom bottom",
        toggleActions: "play reverse play reverse",
        end: "top 20%",
        scrub: 2,
      },
    });
  }, []);
  return (
    <>
      <div className="containerabout h-auto py-[12vw]   relative flex md  items-center justify-center  mt-[12vw] ">
        <div className="absolute w-full h-[8vw]  bg-gradient-to-b   z-[100] from-black via-black/70 to-transparent top-0 left-0 "></div>
        <div className="absolute w-full  h-[8vw]  bg-gradient-to-t   z-[100] from-black via-black/30 to-transparent   bottom-0  left-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            background: `
            radial-gradient(circle at 10% 90%, rgba(37, 157, 255, 0.4) 0%, transparent 30%) /* Indigo glow bottom-left */
             
          `,
            // Ensure the background covers the entire div
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        <div className="lg:px-[4vw]  w-full   mx-auto h-full flex items-center gap-10 flex-wrap md:justify-between  ">
          <div className="space-y-[2vw]  flex justify-around flex-col h-full">
            {" "}
            <div className="space-y-[1.5vw] relative z-[50] p-[]">
              <h4 className="text-[1.5vw]">Contact me</h4>
              <div className="inline-flex text-[1.1vw] text-prime2  md:flex-col gap-5 flex-wrap md:flex-nowrap md:gap-[1vw]">
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer border-b border-prime2 pb-[0.4vw] inline-flex"
                  href="https://www.linkedin.com/in/umair-zakria-67477b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Linkedin
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className=" hover:text-white  transition-all duration-300 ease-in-out  cursor-pointer border-b border-prime2 pb-[0.4vw] inline-flex"
                  href="https://wa.me/923184394363"
                >
                  Whatsapp
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className=" hover:text-white  transition-all duration-300 ease-in-out  cursor-pointer border-b border-prime2 pb-[0.4vw] inline-flex"
                  href="mailto:umairzakria6@gmail.com"
                >
                  Email
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  target="_blank"
                  href="https://github.com/UmairZakria"
                  className=" transition-all duration-300 ease-in-out  hover:text-white  cursor-pointer border-b border-prime2 pb-[0.4vw] inline-flex"
                >
                  Github
                </motion.a>
              </div>
            </div>
      <div className="w-full relative h-[0.09vw] rounded-full  bg-gradient-to-r from-[#bd06ab]  to-prime   overflow-hidden mt-[1vw] "></div>

            <div className=" relative z-[100] md:block hidden   w-full  lg:w-[30vw]  space-y-[2vw] pt-[1vw]">
              <h5 className="text-white/65 text-[1.2vw] font-Poppins ">
                Got a project in mind?
              </h5>
              <p className="md:text-[1.9vw] text-white  w-3/4 lg:w-[22vw] font-confortaa">
                Let's make something happen together.
              </p>
            </div>
          </div>
          {/* <div className="xl:flex gap-10"> */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="transition-all duration-100 mx-auto  rounded-full ease-in-out"
              style={{
                ...style,
                transformStyle: "preserve-3d",
                // transition: "transform 0.1s ease-",
              }}
            >
              <img
              title="Umair Zakria"
                src="/me.png"
                className=" w-[250px] h-[250px] lg:w-[23vw] lg:h-[23vw] opacity-90   rounded-full object-cover "
                alt=""
              />
            </div>
            <div className="Abouts flex flex-col md:px-0 px-2 font-Karla w-[300px]  lg:w-[31vw] gap-10 ">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:text-[1.6vw]"
              >
                As a developer and lifelong learner, I believe in growth through
                creation.
              </motion.p>
              <p ref={textRef} className="lg:text-[1.6vw]"></p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/umair-zakria-67477b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="relative z-[50] flex gap-3 transition-all duration-500 ease-in-out"
              >
                <motion.span className=" relative !z-[100] items-center gap-1 text-[1.4vw] border-b transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer  border-prime2 text-prime2  inline-flex">
                  <ArrowUpRight className="size-[1.5vw]" />
                   More About Me
                </motion.span>
              </a>
            </div>
          {/* </div> */}
        </div>
      </div>

    </>
  );
};

export default Contact;
