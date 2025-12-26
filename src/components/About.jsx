import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const textRef2 = useRef(null);

  const data = [
    {
      name: "Hexa4K IPTV",
      category: "Web Design",
      href: "https://hexa4k.com/",
      img: "https://i.ibb.co/VW2zdPKK/hexa4k.png",
      subtitle: "Streaming entertainment without limits.",
      description:
        "A sleek, user-friendly IPTV service website offering 4K streaming, multi-device support, and global content access.",
      techStack: [
        "React.js",
        "Tailwind-CSS",
        "Framer-Motion",
        "Lenis",
        
      ],
      year: 2024,
    },

    {
      name: "Marcus Portfolio",
      category: "Web Design",
      href: "https://mustafa-portfolio-nine.vercel.app/",
      img: "https://i.ibb.co/LXB9QZPv/Marcus3.png",
      subtitle: "Modern design, seamless experience, bold impression.",
      description:
        "A clean, modern, and fully custom portfolio website — crafted to showcase creativity, professionalism, and a seamless user experience. Designed with attention to detail to make a bold and lasting impression.",
      techStack: ["React.js", "Tailwind-CSS", "Lucide-Icons"],
      year: 2025,
    },
    {
      name: "Bitsmart Tech",
      category: "Web Design",
      href: "https://bitsmart-tech.vercel.app/",
      img: "https://i.ibb.co/0pdssWZ6/bitsmart5.png",
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
      name: "SuperSub Officials",
      category: "Web Design",
      href: "https://supersubofficials.com/",
      img: "https://i.ibb.co/zVBHW5CM/super4.png",
      subtitle: "Bringing businesses to the digital world.",
      description:
        "SuperSub Officials — an IPTV subscription selling platform built with a modern tech to showcase its offerings. The site features an integrated online payment system with multiple banks options and a scalable design for future growth.",
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
      name: "Fashion Mane",
      category: "Web Development",
      href: "https://fashionmane.com/",
      img: "https://i.ibb.co/b5DXPG9H/fashion5.png",
      subtitle: "Your style, your stories managed effortlessly",
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
      category: "Web Design",
      href: "https://github.com/UmairZakria/bus-management-system",
      img: "https://i.ibb.co/FLKZxttx/bus4.png",
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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    if (isMobile) return;

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
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
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

    const textFadeDuration = isMobileViewport ? 0.7 : 0.6;

    let tl = gsap.timeline({
      scrollTrigger: {
        id: "projects-sections",
        trigger: ".projects",
        pin: isMobileViewport ? false : true,
        start: "top top",
        end: `+=${
          sections *
          (isMobileViewport
            ? window.innerHeight * 0.85
            : window.innerHeight + window.innerHeight)
        }`,
        scrub: isMobileViewport ? 0.5 : 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: snapConfig,
      },
    });

    for (let i = 0; i < sections; i++) {
      tl.addLabel(`section${i}`);

      tl.to(
        [
          ".proimages",
          ".project-text h1",
          ".project-text h2",
          ".project-text p",
          ".techstack",
        ],
        {
          opacity: 0,
          y: textY,
          ease: "power1.inOut",
          duration: textFadeDuration,
        },
        `section${i}`
      )
        .add(() => {
          const direction =
            tl && tl.scrollTrigger ? tl.scrollTrigger.direction : 1;
          const targetIndex =
            direction >= 0 ? Math.min(i, sections - 1) : Math.max(i - 1, 0);
          setActiveIndex((prev) => (prev !== targetIndex ? targetIndex : prev));
        }, ">")
        .fromTo(
          [
            ".proimages",
            ".project-text h1",
            ".project-text h2",
            ".project-text p",
            ".techstack",
          ],
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
  }, [isMobile]);

  return (
    <div className="projects mt-12 md:mt-[10vw] relative w-full flex items-center justify-center min-h-[50vh] md:h-screen py-4 md:py-[1vw]">
      <div className="absolute w-full h-[100px] bg-gradient-to-b z-[100] from-black via-black/70 to-transparent top-0 left-0"></div>
      <div className="absolute w-full h-[100px] bg-gradient-to-t z-[100] from-black via-black/70 to-transparent bottom-0 left-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full h-full md:h-screen top-0 left-0 z-0"
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

      <div className="h-full w-full flex-1">
        <div
          name="projects"
          className="h-full mx-4 md:mx-[4vw] relative z-[100] bg-[#ffffff17] p-4 md:p-[1.5vw] rounded-xl md:rounded-[1.5vw] backdrop-blur-md md:backdrop-blur-[1.5vw]"
        >
          <div className="h-full w-full">
            <div className="flex w-full flex-wrap items-center justify-between font-confortaa mb-6 md:mb-0">
              <h2 className="contthings text-2xl md:text-3xl lg:text-[2.2vw] text-white font-confortaa">
                <span className="text-prime2">Featured</span> Work
              </h2>
            </div>

            {isMobile ? (
              /* MOBILE VIEW: Horizontal Swipe List */
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide py-4">
                {data.map((project, index) => (
                  <div
                    key={index}
                    className="snap-center shrink-0 w-[85vw] flex flex-col gap-4 bg-black/20 p-4 rounded-xl !border border-white/10"
                  >
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-2">
                      <h1 className="text-2xl font-Montserrat text-white font-">
                        {project.name}
                      </h1>
                      <h2 className="text-prime2 text-sm italic">
                        {project.subtitle}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white text-black px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-white/80 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-white">
                      <span className="text-xs tracking-widest uppercase text-white/60">
                        {project.year}
                      </span>
                      <motion.a
                        href={project.href}
                        target="_blank"
                        className="flex items-center gap-1 text-xs text-prime2 cursor-pointer border-b border-prime2"
                      >
                        <ArrowUpRight className="w-3 h-3" /> Learn More
                      </motion.a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* DESKTOP VIEW */
              <div className="flex flex-col md:flex-row justify-between mx-0 md:mx-[3vw] h-full gap-6 md:gap-0">
                <div className="relative h-full flex flex-col gap-4 md:gap-0 justify-evenly">
                  <div className="w-full  md:w-[350px] lg:w-[35vw] h-64 md:h-[25vw] rounded-lg md:rounded-[0.8vw]">
                    <img
                      src={data[activeIndex].img}
                      alt={data[activeIndex].name}
                      className="proimages shadow-2xl shadow-black w-full h-full object-top rounded-lg md:rounded-[0.5vw] object-cover"
                      loading="eager"
                    />
                  </div>

                  <div className="project-text space-y-2 md:space-y-[0.4vw]">
                    <h1 className="text-3xl md:text-2xl lg:text-[3vw] font-Montserrat text-white">
                      {data[activeIndex].name}
                    </h1>
                    <h2 className="text-prime2 font-Poppins text-base md:text-lg lg:text-[1.2vw] italic font-light">
                      {data[activeIndex].subtitle}
                    </h2>
                  </div>
                </div>

                <div className="project-text py-4 md:py-6 lg:pt-[1vw] w-full md:w-[300px] lg:w-[30vw] h-full flex flex-col gap-4 md:gap-1 md:justify-around font-Montserrat">
                  <div className="flex flex-wrap w-full items-start justify-between">
                    <div>
                      <h4 className="contthings text-white/70 text-xs md:text-[1vw] tracking-widest uppercase">
                        Year
                      </h4>
                      <p className="text-xl md:text-lg lg:text-[1.6vw] text-white">
                        {data[activeIndex].year}
                      </p>
                    </div>
                    <div className="contthings">
                      <span className="relative z-[50] flex gap-3 transition-all duration-300 ease-in-out">
                        <motion.a
                          href={data[activeIndex].href}
                          target="_blank"
                          className="relative !z-[100] items-center gap-1 text-sm md:text-[1vw] border-b transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer border-prime2 text-prime2 inline-flex"
                        >
                          <ArrowUpRight className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />{" "}
                          View
                        </motion.a>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-[1vw]">
                    <h4 className="contthings text-white/70 text-xs md:text-[1vw] tracking-widest uppercase">
                      Tech Stack
                    </h4>
                    <section className="techstack flex flex-wrap gap-2 md:gap-[1.4vw]">
                      {data[activeIndex].techStack.map((datas, index) => (
                        <div
                          key={index}
                          className="px-3 md:px-[1.3vw] hover:shadow-lg hover:text-white shadow-lg shadow-prime/50 hover:bg-black rounded-full md:rounded-[2vw] hover:shadow-gray-500 bg-white text-black transition-all ease-in-out duration-500 py-1 md:py-[0.4vw] text-xs md:text-[1vw] font-medium"
                        >
                          {datas}
                        </div>
                      ))}
                    </section>
                  </div>

                  <div>
                    <h4 className="contthings text-white/70 text-xs md:text-[1vw] mb-2 md:mb-[0.5vw] tracking-widest uppercase">
                      Description
                    </h4>
                    <p className="font-light text-white/90 font-Poppins text-sm md:text-xs lg:text-[1vw] leading-relaxed md:leading-[1.5vw]">
                      {data[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
