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
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".Abouts",
        start: "bottom bottom",
        toggleActions: "play reverse play reverse",
        end: "top 20%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <div className="containerabout h-auto py-[120px] xl:h-screen relative flex  items-center justify-center  mt-[120px] ">
        <div className="absolute w-full h-[100px] bg-gradient-to-b   z-[100] from-black via-black/70 to-transparent top-0 left-0 "></div>
        <div className="absolute w-full h-[100px] bg-gradient-to-t   z-[100] from-black via-black/30 to-transparent   bottom-0  left-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            background: `
            radial-gradient(circle at 10% 90%, rgba(37, 157, 255, 0.4) 0%, transparent 30%), /* Indigo glow bottom-left */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
            // Ensure the background covers the entire div
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        <div className="container mx-auto h-full flex items-center gap-10 flex-wrap md:justify-between  ">
          <div className="space-y-5  flex justify-around flex-col h-full">
            {" "}
            <div className="space-y-3 relative z-[50] p-2">
              <h4 className="text-xl">Contact me</h4>
              <div className="inline-flex text-prime2  md:flex-col gap-5 flex-wrap md:flex-nowrap md:gap-1">
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className=" hover:text-white   transition-all duration-300 ease-in-out cursor-pointer border-b border-prime2 pb-2 inline-flex"
                  href="https://www.linkedin.com/in/umair-zakria-67477b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Linkedin
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className=" hover:text-white  transition-all duration-300 ease-in-out  cursor-pointer border-b border-prime2 pb-2 inline-flex"
                  href="https://wa.me/923184394363"
                >
                  Whatsapp
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className=" hover:text-white  transition-all duration-300 ease-in-out  cursor-pointer border-b border-prime2 pb-2 inline-flex"
                  href="mailto:umairzakria6@gmail.com"
                >
                  Email
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  target="_blank"
                  href="/CV.pdf"
                  className=" transition-all duration-300 ease-in-out  hover:text-white  cursor-pointer border-b border-prime2 pb-2 inline-flex"
                >
                  My CV
                </motion.a>
              </div>
            </div>
            <div className="border-t md:block hidden   w-full md:w-[300px] xl:w-[400px] border-prime2 space-y-5 pt-10">
              <h5 className="text-gray-300 font-Poppins ">
                Got a project in mind?
              </h5>
              <p className="md:text-2xl xl:text-3xl w-3/4 font-Raleway">
                Let's make something happen together.
              </p>
            </div>
          </div>
          {/* <div className="xl:flex gap-10"> */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="transition-all duration-100 mx-auto  shadow-xl rounded-full ease-in-out"
              style={{
                ...style,
                transformStyle: "preserve-3d",
                // transition: "transform 0.1s ease-",
              }}
            >
              <img
                src="/me.png"
                className=" w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] opacity-90   rounded-full object-cover "
                alt=""
              />
            </div>
            <div className="Abouts flex flex-col md:px-0 px-2 font-Karla w-[300px] xl:w-[500px] gap-10 ">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:text-xl xl:text-3xl"
              >
                As a developer and lifelong learner, I believe in growth through
                creation.
              </motion.p>
              <p ref={textRef} className="lg:text-xl xl:text-3xl"></p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/umair-zakria-67477b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="relative z-[50] flex gap-3 transition-all duration-500 ease-in-out"
              >
                <motion.span className=" relative !z-[100] items-center gap-1 text-xl border-b transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer  border-prime2 text-prime2  inline-flex">
                  <ArrowUpRight size={32} /> More About Me
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
