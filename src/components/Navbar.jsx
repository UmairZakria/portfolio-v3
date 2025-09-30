import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Word from "./Word";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Codesandbox, MenuIcon, X, CodeXml } from "lucide-react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("intro");
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    { href: "/", name: "Home" },
    { href: "/services", name: "Services" },
    { name: "Work", href: "/work" },
    { name: "About-Me", href: "/overview" },
    { name: "Contact", href: "/overview" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observers = [];
    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setSelectedOption(section);
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(target);
        observers.push(observer);
      }
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [lastScrollY]);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSelectedOption(sectionId);
      setIsMenuOpen(false); // Close menu on mobile after click
    }
  };

  return (
    <div className="absolute top-0 left-1/2 -translate-x-[50%] lg:w-full xl:container lg:px-10  p-2 xl:px-0 px-4 flex items-center justify-between z-[100] w-full">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center md:px-0 gap-4"
      >
        <div className="text-white">
          {/* <h1 className=" text-4xl flex items-center   lg:text-3xl gap-1 font-Montserrat "> */}
            {/* <CodeXml />  */}
            {/* <Codesandbox /> */}
            {/* <img src="/logoL.png" className="size-[40px] backdrop-blur-2xl rotate-[180deg]" alt="" /> */}
            {/* <Terminal /> */}
            {/* <span> */}
              <h1 className="text-4xl space-x-2 inline-flex gap-2 pb-2 border-b-[1px] border-prime2/20 items-end font-Poppins">
                umair
                <span className="text-lg font-Poppins  text-prime2">Lab</span>
              </h1>
            {/* </span> */}
          {/* </h1> */}
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex bg-[black]  items-center font-Montserrat cursor-pointer lg:gap-1 xl:gap-2 px-2 py-2 rounded-full backdrop-blur-lg text-white">
        {sections.map((section) => (
          <a
            key={section.name}
            // onClick={() => handleNavClick(section)}
            href={section.href}
            className={`font-Karla px-5 py-[4px] rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ${
              selectedOption === section.name
                ? "bg-[#ffffff] text-black"
                : "bg-[black]"
            }`}
          >
            <span className="text-sm">
              {/* <Word> */}
                {section.name}

              {/* </Word> */}
            </span>
          </a>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full text-white active:animate-spin cursor-pointer bg-black "
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full right-0 mt-2 font-Montserrat w-48 bg-black  rounded-lg backdrop-blur-lg py-2"
          >
            {sections.map((section) => (
              <a key={section} href={section.href}>
                <div
                  className={`px-4 py-3 text-sm cursor-pointer text-white hover:bg-white hover:text-black transition-all ${
                    selectedOption === section ? "bg-white !text-black" : ""
                  }`}
                >
                  {/* <Word> */}
                    {section.name}

                  {/* </Word> */}
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
