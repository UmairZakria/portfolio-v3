// import React from "react";
import React, { useState, useRef, useEffect } from "react";

import { MoveRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

// import { motion } from "framer-motion";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import ImageDistortionEffect from "./WaveImage";
const Service = () => {
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      title: "UI/UX Design",
      description:
        "Simple, modern layouts that focus on clarity, usability, and brand identity.",
      img: "https://cdn.dribbble.com/userupload/14656775/file/original-387452115d08470ec289a098dd992c72.png?resize=752x564&vertical=center",
      icon: "https://img.icons8.com/?size=100&id=25049&format=png&color=4c95e9",
    },
    {
      title: "Custom Solution",
      description:
        "Creating secure, scalable, and tailored web solutions to meet your unique business needs with modern technologies.",
      img: "/custom.png",
      icon: "https://img.icons8.com/ios-filled/50/4c95e9/windows10-personalization.png",
    },
    {
      title: "Full-Stack Web Application",
      description:
        "Developing end-to-end web applications with seamless front-end and back-end integration, tailored for performance and scalability.",
      img: "https://cdn.dribbble.com/userupload/35895022/file/original-429970a9da804b924557444a4b2c5d87.jpg?resize=752x&vertical=center",
      icon: "https://img.icons8.com/?size=100&id=53450&format=png&color=4c95e9",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Scalable online stores designed for seamless shopping experiences and efficient management.",
      img: "https://cdn.dribbble.com/userupload/34224869/file/original-b66bfbf48ddbe37a5f061766c189edf5.png?resize=752x&vertical=center",
      icon: "https://img.icons8.com/?size=100&id=11834&format=png&color=4c95e9",
    },
    {
      title: "WordPress Development",
      description:
        "Creating fully customized, secure, and responsive websites with theme customization, plugin development, and e-commerce integration.",
      img: "https://cdn.dribbble.com/userupload/41720954/file/original-c2d576eb55ec1d94d0ca3f7c024d36a1.png?resize=800x600",
      icon: "https://img.icons8.com/?size=100&id=1ZW7Z0C6c26c&format=png&color=4c95e9",
    },
    {
      title: "Backend Integration",
      description:
        "Seamless integration of APIs, databases, and third-party services with a smooth, responsive frontend experience.",
      img: "https://cdn.dribbble.com/users/1434359/screenshots/3286476/attachments/708082/backend_illustration-hd.png",
      icon: "https://img.icons8.com/?size=100&id=32fUGrUStbEu&format=png&color=4c95e9",
    },
  ];
  const [cursorImg, setCursorImg] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const gridRef = useRef(null);
  const cursorY = useMotionValue(-100);
  const handleMouseMove = (event) => {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  };

  const handleMouseEnter = (img) => {
    setCursorImg(img);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setCursorImg(null);
    setIsHovered(false);
  };

  const parentVariants = {
    hover: {
      padding: isMobile ? "10px" : "20px",
      transition: {
        // staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    initial: { opacity: isMobile ? 1 : 0 },
    hover: {
      opacity: 1,
      // y: 0,
      transition: {
        type: "tween",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const titleVariants = {
    hover: {
      fontSize: "35px",
      color: "#ffffff",
      paddingLeft: "10px",
      transition: {
        type: "tween",
        stiffness: 200,
        // damping: 10
      },
    },
  };

  useGSAP(() => {
    const split = new SplitType(titleRef.current, { types: "chars, words" });

    gsap.fromTo(
      split.words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: 2,
        },
      }
    );
    const grid = gridRef.current;
    if (grid) {
      gsap.fromTo(
        grid.children,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: grid,
            // markers:true,
            start: "top 100%",
            end: "bottom 10%",
            // scrub:true,
            // toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="Service"
      className=" bg-cover min-h-screen overflow-hidden bg-center py-[120px] bg-no-repeat   relative space-y-[10vh]  lg:space-y-[10vh]  font-Montserrat mt-[30vh] px-4 xl:px-20 lg:px-15"
    >
      {/* <div className=""> */}
      {/* <img src="/images/bg1.jpg" alt="" className="absolute   brightness-25  top-0 left-0  w-full object-center h-full object-cover" /> */}
      {/* </div> */}
      <div className="absolute w-full h-[200px] bg-gradient-to-b   z-[100] from-black via-black/40 to-transparent top-0 left-0 "></div>
      <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/70 to-transparent   2xl:-bottom-35   xl:-bottom-30 -bottom-20  left-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(37, 157, 255, 0.3) 0%, transparent 40%), /* Indigo glow bottom-left */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
          // Ensure the background covers the entire div
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <div className="space-y-12">
        <div className="flex items-center flex-col  gap-6 justify-between">
          <h3
            ref={titleRef}
            className="text-5xl lg:text-7xl text-center  font-Poppins font-light"
          >
            Services I <span className="text-prime2">Offer</span>

          </h3>
          {/* <p></p> */}
          <p
            className=" relative z-50 md:w-1/3 font-Inter text-center  text-white text-sm font-extralight leading-relaxed"
          >
            Creating innovative and high-performance digital solutions that
            enhance user experiences and drive growth.
          </p>

        </div>
      </div>

      <div
        ref={gridRef}
        className=" lg:w-full xl:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-20 gap-12"
      >
        {data.map((item, index) => (
          <div key={index} className="relative max-w-sm p-4 rounded-2xl group ">
            <div className="absolute p-5  inset-0 z-0 rounded-2xl">
              <img
                src={item.img}
                alt={item.title}
                fill
                className="object-cover h-full w-full  rounded-2xl  brightness-75"
              />
            </div>
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-2xl">
              {/* <span className="  text-blue-500 border-b border-blue-400 pb-2 font-semibold text-4xl cursor-pointer  font-raleway  transition-all duration-300">
                    Learn More
                  </span>
                   */}

              <motion.div className=" group/button relative w-[215px] font-poppins cursor-pointer  hover:text-blue-400 text-blue-400  overflow-hidden h-[50px]    ">
                <a href="/overview" className="group-hover:translate-x-[-210px] flex gap-3 transition-all duration-500 ease-in-out">
                  <motion.span className=" items-center gap-1 text-3xl border-b  border-blue-400    inline-flex">
                    <ArrowUpRight size={32} /> Learn&nbsp;More{" "}
                  </motion.span>
                  <motion.span className=" items-center gap-1 text-3xl border-b  border-blue-400  inline-flex">
                    Learn&nbsp;More <ArrowUpRight size={32} />
                  </motion.span>
                </a>
              </motion.div>
            </div>
            <div
              className="absolute inset-0 z-0  rounded-2xl"
              style={{
                background: `
            radial-gradient( circle at 70% 20%, rgba(255, 255, 255, 0.12)  0%, transparent 40%), 
            radial-gradient(circle at 20% 80%,  rgba(255, 255, 255, 0.12) 0%, transparent 45%), 
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) 
          `,
                // Ensure the background covers the entire div
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="bg-[#00000025] border  min-h-[360px] flex p-4 flex-col items-center justify-around  max-h-full rounded-2xl backdrop-blur-xs !border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
              <img src={item.icon} alt="" className="w-20 h-20" />
              <h3 className="text-3xl font-medium group-hover:opacity-40 text-center font-poppins">
                {" "}
                {item.title.includes(" ") ? (
                  <>
                    <span className="text-prime2 font-semibold">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-sm text-white px-4 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
