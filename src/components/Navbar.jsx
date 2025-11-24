import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Word from "./Word";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Codesandbox, MenuIcon, X, CodeXml, Send, Linkedin } from "lucide-react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("Home");
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
    <div className="absolute !z-[999] top-0 left-1/2 -translate-x-[50%] lg:px-[4vw]  py-3 lg:py-[0.8vw] px-4 flex items-center justify-between  w-full">
      <motion.div
      // initial={{ x: -200, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 0.5 }}
      >
        <div className="text-white">

          <h1 className="text-3xl md:text-[2.6vw]  inline-flex gap-[0.2vw]  pb-[0vw] font-bold border-b-[0.05vw] tracking-tight border-white/20 items-end font-confortaa">
            .umair
            <span className="text-[0.51em] font-confortaa  text-prime2 ">lab</span>
          </h1>

        </div>
      </motion.div>



      {/* Mobile Navigation */}
      <div className=" ">
        <button className="pl-[1vw] rounded-[0.6vw] text-white cursor-pointer  backdrop-blur-xs">
          <Linkedin className=" md:size-[1.9vw]" />
        </button>
        <button className="px-4 md:px-[1.5vw] rounded-[0.6vw] text-white cursor-pointer  backdrop-blur-xs">
          <Send className=" md:size-[1.9vw]" />
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-[0.6vw] rounded-[0.6vw] text-white cursor-pointer bg-white/5  backdrop-blur-xs "
        >
          {isMenuOpen ? <X className="md:size-[1.9vw]" /> : <MenuIcon className="md:size-[1.9vw]" />}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-3/4 right-0 lg:right-[4vw] mt-2 font-Poppins w-48 bg-white/5 rounded-lg backdrop-blur-xs py-2"
          >
            {sections.map((section) => (
              <a key={section} href={section.href}>
                <div
                  className={`px-4 py-3 text-sm cursor-pointer text-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out ${selectedOption === section ? "bg-white !text-black" : ""
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
