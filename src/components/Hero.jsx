import React, { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import Greeting from "./Greeting";
import Word from "./Word";
import { Linkedin, Github,MoveRight } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const Hero = ({ anidone }) => {
  const contref = useRef(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const vidref = useRef(null);

  useGSAP(() => {
    if (anidone) {
      const twelcome = gsap.timeline();
      twelcome
        .to(".section1", { opacity: 1, duration: 0.6 }, "label-bc")
        .from(".greeting", { y: -30, x: -30, opacity: 0 }, "label-bc")
        .from(
          ".greeting1",
          { y: -25, opacity: 0, delay: 0.5, duration: 0.4 },
          "label-bc"
        )
        .from(
          ".greeting2",
          { y: -25, opacity: 0, delay: 0.3, duration: 0.4 },
          "label-bc"
        )
        .from(
          ".greeting3",
          { y: -25, opacity: 0, delay: 0.2, duration: 0.4 },
          "label-bc"
        )
        // .from(".socials", { opacity: 0, y: 100, duration: 0.7 }, "label-bc")
        .from(".title1", { y: 15, opacity: 0, duration: 1 }, "label-bc");
      // .from(
      //   ".title2",
      //   { y: -15, scale: 1.1, opacity: 0, duration: 0.9 },
      //   "label-bc"
      // );
      twelcome.play();
    }
  }, [anidone]);

  //   useGSAP(() => {
  //     const section = sectionRef.current;
  //     const trigger = triggerRef.current;

  //     const numChildren = section.children.length;
  //     const containerWidth = numChildren * 100;
  //     section.style.width = `${containerWidth}vw`;

  //     const scrollWidth = section.scrollWidth - window.innerWidth;
  //     gsap.set(contref.current, { opacity: 0 });

  //     gsap.to(section, {
  //       x: -scrollWidth,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: trigger,
  //         start: "top top",
  //         end: () => `+=${scrollWidth}`,
  //         scrub: 0.1,
  //         pin: true,
  //         anticipatePin: 1,
  //         snap: {
  //           snapTo: 1 / (numChildren - 1),
  //           duration: { min: 0.5, max: 0.5 },
  //           ease: "power1.inOut",
  //           mandatory: true,
  //         },
  //       },
  //     });
  //   }, []);

  useGSAP(() => {
    gsap.to(".title1", {
      y: -100,
      rotateX: 55,

      ease: "none",
      scrollTrigger: {
        trigger: ".title1",
        start: "center center",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".title2", {
      x: -200,
      opacity: 0,

      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".title2",
        start: "center 30% ",
        ease: "power4.inOut",

        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".socials", {
      y: 100,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".socials",
        start: "bottom 80% ",
        end: "center center",
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    if (vidref.current) {
      vidref.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
      <div
        id="Home"
        ref={triggerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <a href="/overview" className="absolute left-1/2 -translate-x-1/2 text-black text-lg font-medium font-Montserrat z-[999] bottom-[40px] bg-white/90  border-white !border hover:bg-transparent hover:text-white transition-all duration-400 cursor-pointer ease-in-out  rounded-full px-4 md:px-8 py-2 flex items-center gap-2">Let's Talk <MoveRight /></a>
        <div className="socials text-sm absolute   hidden md:flex z-[999] gap-4  right-10 bottom-16 lg:bottom-[40px]   text-gray-300">
          <a
            href="https://www.linkedin.com/in/umair-zakria-67477b33a/"
            target="_blank"
            className="hover:bg-prime2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out border rounded-md p-2 text-prime2 !border-prime2 "
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/UmairZakria"
            target="_blank"
            className="hover:bg-prime2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out border rounded-md p-2 text-prime2 !border-prime2 "
          >
            <Github />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-screen   top-0 left-0 z-1"
          style={{
            background: `
                            radial-gradient(circle at 50% 50%, rgba(37, 157, 255, 0.35) 20%, transparent 50%), /* Indigo glow bottom-left */
                            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
                          `,
            // Ensure the background covers the entire div
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        <div className="absolute w-full h-[200px] bg-gradient-to-t     !z-[100] from-black via-black/70 to-transparent   2xl:-bottom-35   xl:-bottom-30 -bottom-20  left-0"></div>

        <motion.video
          initial={{ opacity: 0 }}
          animate={{
            opacity: anidone ? 1 : 0,
            transition: { delay: 0.1, duration: 1 },
          }}
          ref={vidref}
          src="/bg1.mp4"
          muted
          loop
          autoPlay
          className="absolute h-full w-full md:brightness-200 scale-70 md:scale-100  object-cover origin-center"
        />

        {/* Horizontal Scroll Container */}

        <div
          ref={sectionRef}
          className="absolute z-10   bg-[#0000004b] backdrop-blur-md md:backdrop-blur-xl 2xl:backdrop-blur-2xl inset-0 h-full flex"
        >
          {/* Section 1 */}
          <div className=" section1 opacity-0 h-screen w-screen   !overflow-hidden   relative   pt-[50px] ">
            <div className=" lg:w-full xl:container lg:px-10 xl:px-0 relative h-full overflow-hidden mx-auto flex flex-col justify-around md:justify-between pt-[50px] pb-[50px]  md:px-0 px-  gap-   ">



              <div className=" flex text-center  items-center justify-center flex-col h-full px-2 lg:px-0  text-xl  w-full space-y-3">
                {/* 
                <div className="  title1 lg:pl-1 text-[10px] md:space-y-2 xl:text-[20px] font-Raleway  text-white ">
                  <h3 className="tracking-widest font-Poppins text-lg md:text-3xl">
                    Hi, I'm <span> Umair Zakria</span>
                  </h3>

                  <span className="text-lg lg:text-5xl text-prime  xl:text-[32px] font-Poppins space-x   hover:text-white transition-all duration-200 ease-in-out">
                    <span className="text-[] border-b  ">Full-Stack Developer</span>{" "}
                  </span>
                </div>   */}
                <div className=" title1   font-Montserrat  text-2xl tracking-wide lg:text-6xl xl:text-7xl leading-normal ">
                  <div className=" ">
                    Bringing Your Brand To<span className="  text-prime2 -b  border-prime  "><br /> Life In The Digital World

                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
