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
      name: "PixelCraft",
      category: "Web Design",
      img: "https://cdn.dribbble.com/userupload/15287907/file/original-1947f11c0ad56aba125d43db4d155cc2.png?resize=752x564&vertical=center",
      subtitle: "Crafting digital masterpieces pixel by pixel.",
      description:
        "PixelCraft is a visually stunning web design project focused on delivering pixel-perfect interfaces and engaging user experiences for creative brands.",
      techStack: ["Figma", "Adobe XD", "React", "Tailwind CSS"],
      year: 2023,
    },
    {
      name: "CreativeVision",
      category: "Web Design",
      img: "https://cdn.dribbble.com/userupload/15027790/file/original-ec0a19ccfded1a1640077d91738715d0.png?resize=752x564&vertical=center",
      subtitle: "Bringing creative ideas to life online.",
      description:
        "CreativeVision transforms innovative concepts into beautiful, functional websites, emphasizing creativity and modern aesthetics.",
      techStack: ["Figma", "Next.js", "Chakra UI", "GSAP"],
      year: 2022,
    },
    {
      name: "Code Nexus",
      category: "Web Development",
      img: "https://cdn.dribbble.com/userupload/40515275/file/original-dfc2d613e15f0cfe4a34f4def8a94edc.png?resize=1200x900&vertical=center",
      subtitle: "Where code meets innovation.",
      description:
        "Code Nexus is a robust web development platform that connects advanced coding practices with innovative solutions for scalable applications.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      year: 2024,
    },
    {
      name: "BrandFlow",
      category: "Web Design",
      img: "https://cdn.dribbble.com/userupload/40490768/file/original-cca1edc6f848feb3af09c6f764ff4ade.png?resize=1200x900&vertical=center",
      subtitle: "Designing brands that flow with purpose.",
      description:
        "BrandFlow delivers seamless brand experiences through elegant web design, focusing on fluid layouts and strong visual identity.",
      techStack: ["Figma", "React", "Styled Components", "Framer Motion"],
      year: 2023,
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
    // if (!aboutContainerRef.current) return;
    gsap.set(".contthings", { opacity: 0 });
    gsap.to(".contthings", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
      
      scrollTrigger: {
        trigger: ".projects",
        start: "bottom bottom ",
        end: "bottom bottom ",
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
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut",
          // inertia: false,
        },
      },
    });

    for (let i = 0; i < sections; i++) {
      tl.addLabel(`section${i}`);

      // Fade out current content and network simultaneously

      tl.to(
        ".project-text h1",
        {
          opacity: 0,
          x: 5,
          ease: "power1.inOut",
          duration: 0.5,
        },
        `section${i}`
      );
      tl.to(
        ".project-text section",
        {
          opacity: 0,
          x: 15,
          ease: "power1.inOut",
          duration: 0.5,
        },
        `section${i}`
      )
        .to(
          ".project-text h2",
          {
            opacity: 0,
            y: 5,
            ease: "power1.inOut",
            duration: 0.5,
          },
          `section${i}`
        )
        .to(
          ".project-text p",
          {
            opacity: 0,
            y: 5,
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
            // opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          `section${i}`
        )

        // Update active index
        .add(() => setActiveIndex(i))

        // Bring in new content - network and text together

        .fromTo(
          ".images",
          {

            scale: 0,
            transformOrigin: "top left",
          },
          {

            scale: 1,
            transformOrigin: "top left",

            duration: 0.5,
            ease: "power1.inout",
          }
        )

        .fromTo(
          ".project-text section",
          {
            x: -15,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.inout",
          }
        )
        .fromTo(
          ".project-text h1",
          {
            opacity: 0,
            x: -10,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power1.out",
          },
        )

        .fromTo(
          [ ".project-text h2", ".project-text p"],
          {
            opacity: 0,
            y: -5,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
          },
          "<" // Start at the same time as images animation
        );
      // .add(() => setActiveIndex(i));
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
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,ease:'easeInOut'}}
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

              <div className="images md:w-[350px] lg:w-[450px] xl:w-[550px] xl:h-[350px] rounded-sm object-cover">
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
                <section className="flex flex-wrap gap-4">
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
