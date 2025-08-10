import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, MoveRightIcon, MoveDown } from "lucide-react";
import { motion } from "framer-motion";
import ImageDistortionEffect from "./WaveImage";
import SplitType from "split-type";
import Word from "./Word";

gsap.registerPlugin(ScrollTrigger);
const Procard = ({ category, title, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
      className="md:w-auto -space-y-24 lg:-space-y-6 xl:space-y-8   pb-2"
    >
      <div
        className="relative overflow-hidden rounded-xl object-cover object-center
             w-full  h-[400px]"
      >
        {/* <img className="rounded-xl object-cover transition-all ease-in-out duration-300 hover:scale-110 w-full shadow-xl h-full" src={image} alt={title} /> */}
        {/* <WaveImage imageSrc={image} /> */}
        <p className="shadow-2xl shadow-gray-900 ">
          <ImageDistortionEffect imageUrl={image} />
        </p>
      </div>
      <div className="pl-4 ">
        <span className="p-2 uppercase text-gray-300 font-Raleway">
          {category}
        </span>
        {/* <h3 className="text-center text-gray-600 dark:text-gray-400 font-semibold"></h3> */}
        <h2 className="p-2 group text-2xl font-Montserrat transition-all duration-300 ease-in-out flex items-center gap-2   ">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ x: 0, opacity: 1 }}
            className=" group-hover:block hidden transition-all duration-300 ease-in-out"
          >
            <MoveRightIcon />
          </motion.span>

          {title}
        </h2>
      </div>
    </motion.div>
  );
};
const About = () => {
  const [y, setY] = useState(4);
  const textRef2 = useRef(null);

  const formatKey = (key) => {
    if (!key) return "";

    const formattedKey = key
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim();

    return formattedKey
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const data = [
    {
      name: "Bitsmart",
      category: "Web Design",
      img: "images/bitsmart2.jpeg",
      subtitle: "Crafting digital masterpieces pixel by pixel.",
      description:
        "A modern, responsive, and brand-focused company portfolio website for Bitsmart Tech. Built to showcase services, projects, and client engagement with an emphasis on creativity, clean UI, and smooth user experience.",
      techStack: ["Next.js", "Tailwind-CSS", "Framer-Motion", "Mongodb","REST API"],
      year: 2024,
    },
    {
      name: "SuperSub",
      category: "Web Design",
      img: "images/super2.jpeg",
      subtitle: "Bringing businesses to the digital world.",
      description:
        "SuperSub Officials — an IPTV subscription selling platform  built with a modern tech to showcase its offerings. The site features an integrated online payment system with multiple banks options and a scalable design for future growth.",
      techStack: ["React.js", "Expres.js", "Tailwind-CSS", "MongoDB","REST API"],
      year: 2024,
    },
    {
      name: "FashionMane",
      category: "Web Development",
      img: "images/fashion2.jpeg",
      subtitle: "Your style, your stories — managed effortlessly",
      description:
        "FashionMane is a fully functional blogging platform with a built-in CMS, featuring a user-friendly frontend, powerful admin panel, and secure backend. It supports full CRUD operations, dynamic routing, and is optimized for SEO.",
      techStack: ["Next.js", "Framer-Motion", "Tailwind-CSS", "MongoDB","REST API"],
      year: 2025,
    },
    {
      name: "BusGoes+",
      category: "Web Design",
      img: "images/bus2.jpeg",
      subtitle: "Making bus journeys just a click away.",
      description:
        "Bus Goes is a modern online bus booking platform with a built-in CMS that makes intercity travel simple. It offers a seamless booking experience, smart route management, and an intuitive admin dashboard for effortless reservation handling.",
      techStack: ["Next.js", "Framer-Motion", "Tailwind-CSS", "MongoDB","REST API"],
      year: 2024,
    },
  ];

  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const [Categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutContainerRef = useRef(null);
  const normalizedData = data.map((item) => ({
    ...item,
    category: item.category.toLowerCase(),
  }));
  const filteredData = normalizedData.filter((item) => {
    const categories = item.category;
    return selectedCategory
      ? categories.includes(selectedCategory.toLowerCase())
      : true;
  });
  useGSAP(() => {
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
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        pin: true,
        start: "top top",
        end: `+=${sections * window.innerHeight}`,
        scrub: true,
        snap: {
          snapTo: "labelsDirectional",
          duration: { min: 0.2, max: 0.4 },
          ease: "power1.inOut",
        },
      },
    });
  
    for (let i = 0; i < sections; i++) {
      tl.addLabel(`section${i}`);
  
      // Fade OUT current content
      tl.to(
        [".project-text h1", ".project-text h2", ".project-text p",".techstack"],
        {
          opacity: 0,
          y: 10,
          ease: "power1.inOut",
          duration: 0.5,
        },
        `section${i}`
      )
        .to(
          ".images",
          {
            transformOrigin: "bottom right",
            scale: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          `section${i}`
        )
        .add(() => setActiveIndex(i)) // change active index
  
        // Fade IN new content
        .fromTo(
          ".images",
          { scale: 0, transformOrigin: "top left" },
          { scale: 1, transformOrigin: "top left", duration: 0.5, ease: "power1.inOut" }
        )
        .fromTo(
          [".project-text h1", ".project-text h2", ".project-text p",".techstack"],
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 },
          "<"
        );
    }
  }, []);
  
  useEffect(() => {
    const allCategories = data.map((item) => item.category.toLowerCase());
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="projects mt-[120px] relative b w-full  h-screen py-4 ">
      <div className="absolute w-full h-[100px] bg-gradient-to-b   z-[100] from-black via-black/70 to-transparent top-0 left-0 "></div>
      <div className="absolute w-full h-[100px] bg-gradient-to-t   z-[100] from-black via-black/70 to-transparent   bottom-0  left-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(37, 157, 255, 0.4) 0%, transparent 40%), /* Indigo glow bottom-left */
            radial-gradient(circle at 80% 20%, rgba(0, 154, 250, 0.4) 0%, transparent 40%), /* Pink glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
          // Ensure the background covers the entire div
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>

      <div
        name="projects"
        className=" bg- h-full container  relative z-[100] bg-[#ffffff17] p-3  rounded-3xl backdrop-blur-2xl mx-auto    "
      >
        <div className=" h-full space-y-5 w-full">
          <div className="flex w-full flex-wrap gap-4 items-center  justify-between">
            <h2 className="contthings text-lg md:text-3xl xl:text-4xl  text-white font-Montserrat">
              <span className="text-prime2">Featured</span> Work
            </h2>
            <p className="md:w-1/4 contthings  leading-loose font-Inter font-extralight text-[10px] md:text-[10px] xl:text-[12px] text-gray-200  ">
              A glimpse into the ideas I've brought to life crafted with
              purpose, shaped by function, and driven by simplicity.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-around h-full   xl:gap-30 ">
            <div className=" relative   h-full flex flex-col  md:gap-0 gap-4 rounded-2xl justify-evenly  col-">
              <div className="images md:w-[350px] lg:w-[450px] xl:w-[500px]  rounded-sm object-cover">
                <ImageDistortionEffect imageUrl={data[activeIndex].img} />
              </div>

              <div className="project-text space-y-2">
                <h1 className="text-2xl lg:text-5xl xl:text-7xl font-Montserrat">
                  {data[activeIndex].name}
                </h1>
                <h2 className="text-prime2  font-Montserrat">
                  {data[activeIndex].subtitle}
                </h2>
              </div>
            </div>
            <div className="project-text py-4 md:gap-0 gap-1 lg:py-[20px] w-full  md:w-[300px] lg:w-[400px] h-full flex flex-col  2xl:justify-evenly  md:justify-around    font-Poppins ">
              <div>
                <h4 className="contthings text-gray-400">Year</h4>
                <p className=" text-lg lg:text-2xl">{data[activeIndex].year}</p>
              </div>
              <div className="hidden md:block space-y-3">
                <h4 className="contthings text-gray-400">Tech Stack</h4>
                <section className="techstack flex flex-wrap gap-4">
                  {data[activeIndex].techStack.map((datas, index) => (
                    <div
                      key={index}
                      className={`px-4 hover:shadow-lg hover:text-white shadow-md shadow-prime2 hover:bg-black rounded-3xl  hover:shadow-gray-500  bg-white text-black  transition-all ease-in-out duration-500   py-[3px] text-sm `}
                    >
                      {datas}
                    </div>
                  ))}
                </section>
              </div>
              <div>
                <h4 className="contthings text-gray-400 ">Description</h4>
                <p className=" font-light text-gray-300 text-xs lg:text-sm  ">
                  {data[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
