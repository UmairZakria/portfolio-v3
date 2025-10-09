import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [y, setY] = useState(4);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const textRef2 = useRef(null);

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

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload all images
  useEffect(() => {
    const imagePromises = data.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedCount((prev) => prev + 1);
          resolve();
        };
        img.onerror = reject;
        img.src = item.img;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setImagesLoaded(true); // Continue anyway
      });
  }, []);

  useGSAP(() => {
    if (!imagesLoaded) return; // Wait for images to load

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
    const imageFadeDuration = isMobileViewport ? 0.85 : 0.6;
    const textFadeDuration = isMobileViewport ? 0.7 : 0.6;
    const imageOutScale = isMobileViewport ? 0.98 : 1;
    const imageInStartScale = isMobileViewport ? 0.985 : 1;
    const imageInOffset = isMobileViewport ? ">+=0.06" : ">+=0.03";
    
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
        [".project-text h1", ".project-text h2", ".project-text p", ".techstack"],
        {
          opacity: 0,
          y: textY,
          ease: "power1.inOut",
          duration: textFadeDuration,
        },
        `section${i}`
      )
        .to(
          ".images",
          {
            opacity: 0,
            scale: imageOutScale,
            duration: imageFadeDuration,
            ease: "power2.inOut",
          },
          `section${i}`
        )
        .add(() => {
          const direction = tl && tl.scrollTrigger ? tl.scrollTrigger.direction : 1;
          const targetIndex = direction >= 0 ? Math.min(i, sections - 1) : Math.max(i - 1, 0);
          setActiveIndex((prev) => (prev !== targetIndex ? targetIndex : prev));
        })
        .fromTo(
          ".images",
          { opacity: 0, scale: imageInStartScale },
          {
            opacity: 1,
            scale: 1,
            duration: imageFadeDuration,
            ease: "power2.out",
          },
          imageInOffset
        )
        .fromTo(
          [".project-text h1", ".project-text h2", ".project-text p", ".techstack"],
          { opacity: 0, y: -textY },
          {
            opacity: 1,
            y: 0,
            duration: textFadeDuration,
            ease: "power2.out",
          },
          "<"
        );
    }
  }, [imagesLoaded]);

  return (
    <div className="projects mt-[120px] relative w-full flex items-center justify-center h-screen py-4">
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
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-[200] bg-black/50">
          <div className="text-white text-xl">
            Loading {loadedCount}/{data.length}...
          </div>
        </div>
      )}

      <div className="h-full 2xl:h-[800px] w-full flex-1">
        <div
          name="projects"
          className="bg- h-full lg:mx-10 xl:mx-auto xl:container relative z-[100] bg-[#ffffff17] p-3 rounded-3xl backdrop-blur-2xl mx-auto"
        >
          <div className="h-full space-y-5 w-full">
            <div className="flex w-full flex-wrap gap-4 items-center justify-between">
              <h2 className="contthings text-lg md:text-3xl xl:text-4xl text-white font-Montserrat">
                <span className="text-prime2">Featured</span> Work
              </h2>
              <a
                href="/projects"
                className="hover:text-white hover:border-white border-transparent border-b-[0.5px] transition-all duration-300 ease-in-out uppercase flex items-center gap-2 text-right contthings font-Inter text-[10px] lg:text-[16px] text-prime"
              >
                View All <ChevronRight />
              </a>
            </div>
            <div className="flex md:flex-row flex-col justify-around h-full lg:gap-30">
              <div className="relative h-full flex flex-col md:gap-0 gap-4 rounded-2xl justify-evenly col-">
                <img
                  src={data[activeIndex].img}
                  alt={data[activeIndex].name}
                  className="images md:w-[350px] lg:w-[450px] xl:w-[500px] rounded-md object-cover"
                  loading="eager"
                  style={{ willChange: 'transform, opacity' }}
                />

                <div className="project-text space-y-2">
                  <h1 className="text-2xl lg:text-5xl xl:text-7xl font-Montserrat">
                    {data[activeIndex].name}
                  </h1>
                  <h2 className="text-prime2 font-Montserrat">
                    {data[activeIndex].subtitle}
                  </h2>
                </div>
              </div>
              <div className="project-text py-4 md:gap-0 gap-1 lg:py-[20px] w-full md:w-[300px] lg:w-[400px] h-full flex flex-col 2xl:justify-evenly md:justify-around font-Poppins">
                <div className="flex flex-wrap w-full items-start justify-between">
                  <div>
                    <h4 className="contthings text-gray-400">Year</h4>
                    <p className="text-lg lg:text-2xl">{data[activeIndex].year}</p>
                  </div>
                  <div className="contthings">
                    <span className="relative z-[50] flex gap-3 transition-all duration-300 ease-in-out">
                      <motion.a
                        href="#"
                        className="relative !z-[100] items-center gap-1 text-sm border-b transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer border-prime2 text-prime2 inline-flex"
                      >
                        <ArrowUpRight size={16} /> Learn More
                      </motion.a>
                    </span>
                  </div>
                </div>
                <div className="hidden md:block space-y-3">
                  <h4 className="contthings text-gray-400">Tech Stack</h4>
                  <section className="techstack flex flex-wrap gap-4">
                    {data[activeIndex].techStack.map((datas, index) => (
                      <div
                        key={index}
                        className="px-4 hover:shadow-lg hover:text-white shadow-md shadow-prime2 hover:bg-black rounded-3xl hover:shadow-gray-500 bg-white text-black transition-all ease-in-out duration-500 py-[3px] text-sm"
                      >
                        {datas}
                      </div>
                    ))}
                  </section>
                </div>
                <div>
                  <h4 className="contthings text-gray-400">Description</h4>
                  <p className="font-light text-gray-300 text-xs line-clamp-3 lg:text-sm">
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