import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const textRef2 = useRef(null); // This ref isn't used in the provided logic, but I'll keep it.

  const data = [
    {
      name: "Marcus",
      category: "Web Design",
      img: "images/Marcus1.jpeg",
      subtitle: "Modern design, seamless experience, bold impression.",
      description:
        "A clean, modern, and fully custom portfolio website — crafted to showcase creativity, professionalism, and a seamless user experience. Designed with attention to detail to make a bold and lasting impression.",
      techStack: ["React.js", "Tailwind-CSS", "Lucide-Icons"],
      year: 2025,
    },
    {
      name: "Bitsmart",
      category: "Web Design",
      img: "images/bitsmart2.jpeg",
      subtitle: "Crafting digital masterpieces pixel by pixel.",
      description:
        "A modern, responsive, and brand-focused company portfolio website for Bitsmart Tech. Built to showcase services, projects, and client engagement with an emphasis on creativity, clean UI, and smooth user experience.",
      techStack: ["Next.js", "Tailwind-CSS", "Framer-Motion", "Mongodb", "REST API"],
      year: 2024,
    },
    {
      name: "SuperSub",
      category: "Web Design",
      img: "images/super2.jpeg",
      subtitle: "Bringing businesses to the digital world.",
      description:
        "SuperSub Officials — an IPTV subscription selling platform built with a modern tech to showcase its offerings. The site features an integrated online payment system with multiple banks options and a scalable design for future growth.",
      techStack: ["React.js", "Expres.js", "Tailwind-CSS", "MongoDB", "REST API"],
      year: 2024,
    },
    {
      name: "FashionMane",
      category: "Web Development",
      img: "images/fashion3.jpeg",
      subtitle: "Your style, your stories — managed effortlessly",
      description:
        "FashionMane is a fully functional blogging platform with a built-in CMS, featuring a user-friendly frontend, powerful admin panel, and secure backend. It supports full CRUD operations, dynamic routing, and is optimized for SEO.",
      techStack: ["Next.js", "Framer-Motion", "Tailwind-CSS", "MongoDB", "REST API"],
      year: 2025,
    },
    {
      name: "BusGoes+",
      category: "Web Design",
      img: "images/bus2.jpeg",
      subtitle: "Making bus journeys just a click away.",
      description:
        "Bus Goes is a modern online bus booking platform with a built-in CMS that makes intercity travel simple. It offers a seamless booking experience, smart route management, and an intuitive admin dashboard for effortless reservation handling.",
      techStack: ["Next.js", "Framer-Motion", "Tailwind-CSS", "MongoDB", "REST API"],
      year: 2024,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Preload all images (Good practice, keep this)
  // useEffect(() => {
  //   const imagePromises = data.map((item) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.onload = () => {
  //         setLoadedCount((prev) => prev + 1);
  //         resolve();
  //       };
  //       img.onerror = reject;
  //       img.src = item.img;
  //     });
  //   });

  //   Promise.all(imagePromises)
  //     .then(() => {
  //       setImagesLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading images:", error);
  //       setImagesLoaded(true); // Continue anyway
  //     });
  // }, []);

  useGSAP(() => {
    // if (!imagesLoaded) return; // Wait for images to load

    // Initial fade in for container elements
    gsap.set(".contthings", { opacity: 0 });
    gsap.to(".contthings", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".projects",
        start: "bottom bottom",
        end: "bottom bottom",
      },
    });

    let sections = data.length;
    const isMobileViewport = window.matchMedia("(max-width: 1023px)").matches;
    const textY = isMobileViewport ? 4 : 10;
    const snapConfig = isMobileViewport
      ? {
          snapTo: "labelsDirectional",
          duration: { min: 0.15, max: 0.25 },
          ease: "power1.out",
          delay: 0,
        }
      : {
          snapTo: "labelsDirectional",
          duration: { min: 0.2, max: 0.35 },
          ease: "power1.inOut",
          delay: 0,
        };
    
    // NOTE: We are removing the GSAP animation for the ".images" element
    // and letting React/Framer Motion handle the cross-fade on state change.
    const textFadeDuration = isMobileViewport ? 0.7 : 0.6;
    
    let tl = gsap.timeline({
      scrollTrigger: {
        id: "projects-sections",
        trigger: ".projects",
        pin: true,
        start: "top top",
        end: `+=${sections * (isMobileViewport ? window.innerHeight * 0.85 : window.innerHeight + window.innerHeight)}`,
        scrub: isMobileViewport ? 0.5 : 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: snapConfig,
      },
    });

   
    for (let i = 0; i < sections; i++) {
      tl.addLabel(`section${i}`);
      

      tl.to(
        [".proimages",".project-text h1", ".project-text h2", ".project-text p", ".techstack"],
        {
          opacity: 0,
          y: textY,
          ease: "power1.inOut",
          duration: textFadeDuration,
        },
        `section${i}`
      )
        // Image transition logic is REMOVED from the GSAP timeline here

        .add(() => {
          // This updates the image src and the text data
          const direction = tl && tl.scrollTrigger ? tl.scrollTrigger.direction : 1;
          const targetIndex = direction >= 0 ? Math.min(i, sections - 1) : Math.max(i - 1, 0);
          setActiveIndex((prev) => (prev !== targetIndex ? targetIndex : prev));
        }, ">") // Execute the state change *after* the fade-out
        
        .fromTo(
          [".proimages",".project-text h1", ".project-text h2", ".project-text p", ".techstack"],
          { opacity: 0, y: -textY },
          {
            opacity: 1,
            y: 0,
            duration: textFadeDuration,
            ease: "power2.out",
          },
          "<" // Start text fade-in immediately after state change
        );
    }
  }, [imagesLoaded]);

  return (
    <div className="projects mt-[10vw] relative w-full flex items-center justify-center h-screen py-[1vw]">
      <div className="absolute w-full h-[100px] bg-gradient-to-b z-[100] from-black via-black/70 to-transparent top-0 left-0"></div>
      <div className="absolute w-full h-[100px] bg-gradient-to-t z-[100] from-black via-black/70 to-transparent bottom-0 left-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full h-screen top-0 left-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(37, 157, 255, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(0, 154, 250, 0.4) 0%, transparent 40%),
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)
          `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      
      {/* Loading indicator */}
      {/* {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-[200] bg-black/50">
          <div className="text-white text-xl">
            Loading {loadedCount}/{data.length}...
          </div>
        </div>
      )} */}

      <div className="h-full  w-full flex-1">
        <div
          name="projects"
          className="bg- h-full lg:mx-[4vw] relative z-[100] bg-[#ffffff17] p-[1.5vw] rounded-[1.5vw] backdrop-blur-[1.5vw] mx-auto"
        >
          <div className="h-full  w-full">
            <div className="flex w-full flex-wrap  items-center justify-between font-confortaa">
              <h2 className="contthings text-lg md:text-3xl lg:text-[2.2vw] text-white font-confortaa">
                <span className="text-prime2">Featured</span> Work
              </h2>
              <a
                href="/projects"
                className="hover:text-white hover:border-white font-confortaa border-transparent border-b-[0.1vw] transition-all duration-300 ease-in-out  flex items-center gap-2 text-right contthings  text-[10px] lg:text-[1.2vw] text-prime"
              >
                 All Projects
                  {/* <ChevronRight /> */}
              </a>
            </div>
            <div className="flex md:flex-row flex-col justify-between  mx-[3vw] h-full ">
              <div className="relative h-full flex flex-col md:gap-0 gap-4   justify-evenly col-">
                

                <div
                    key={data[activeIndex].name} 
                    className="md:w-[350px] lg:w-[35vw] md:h-[25vw] rounded-[0.8vw] "
                >
                    <img
                        src={data[activeIndex].img}
                        alt={data[activeIndex].name}
                        className="proimages w-full h-full object-top rounded-[0.8vw] object-cover"
                        loading="eager"
                        // initial={{ opacity: 0,  }} 
                        // animate={{ opacity: 1,  }}
                        // transition={{ duration: 0.8, ease: "linear" }}
                    />
                </div>

                <div className="project-text space-y-[0.4vw]">
                  <h1 className="text-2xl lg:text-[3.2vw] font-Montserrat">
                    {data[activeIndex].name}
                  </h1>
                  <h2 className="text-prime2 font-Poppins lg:text-[1.2vw] italic font-light">
                    {data[activeIndex].subtitle}
                  </h2>
                </div>
              </div>
              <div className="project-text py-6 md:gap-0 gap-1 lg:pt-[1vw] w-full md:w-[300px] lg:w-[30vw]  h-full flex flex-col md:justify-around font-Montserrat">
                <div className="flex flex-wrap w-full items-start justify-between">
                  <div>
                    <h4 className="contthings  text-white/70 text-[1vw]  tracking-widest uppercase">Year</h4>
                    <p className="text-lg lg:text-[1.6vw] ">{data[activeIndex].year}</p>
                  </div>
                  <div className="contthings">
                    <span className="relative z-[50] flex gap-3 transition-all duration-300 ease-in-out">
                      <motion.a
                        href="projects/case1"
                        className="relative !z-[100] items-center gap-1 text-[1vw] border-b transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer border-prime2 text-prime2 inline-flex"
                      >
                        <ArrowUpRight className="size-[1vw]"/> Learn More
                      </motion.a>
                    </span>
                  </div>
                </div>
                <div className="hidden md:block space-y-[1vw]">
                  <h4 className="contthings text-white/70 text-[1vw] tracking-widest uppercase">Tech Stack</h4>
                  <section className="techstack flex flex-wrap gap-[1.4vw]">
                    {data[activeIndex].techStack.map((datas, index) => (
                      <div
                        key={index}
                        className="px-[1.3vw] hover:shadow-lg hover:text-white shadow-lg shadow-prime/50 hover:bg-black rounded-[2vw] hover:shadow-gray-500 bg-white text-black transition-all ease-in-out duration-500 py-[0.4vw] text-[1vw] font-medium "
                      >
                        {datas}
                      </div>
                    ))}
                  </section>
                </div>
                <div>
                  <h4 className="contthings text-white/70 text-[1vw] mb-[0.5vw] tracking-widest uppercase">Description</h4>
                  <p className="font-light text-white/90 font-Poppins text-xs  line-clamp-3 lg:text-[1.1vw] leading-[1.5vw]">
                    {data[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;