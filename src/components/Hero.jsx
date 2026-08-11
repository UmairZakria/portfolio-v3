import React, { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import Greeting from "./Greeting";
import { useNavigate } from "react-router-dom";

import Word from "./Word";
import { Linkedin, Github, MoveRight, MoveRightIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ anidone }) => {
  const navigate = useNavigate();
  const contref = useRef(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const vidref = useRef(null);

  useGSAP(() => {
    // Entrance Animation on Load
    const tl = gsap.timeline();

    // tl.from(".hero-anim", {
    //   y: 40,
    //   opacity: 0,
    //   duration: 0.2,
    //   stagger: 0.2,
    //   ease: "power3.out",
    //   delay: 0.1
    // });

    // Parallax / Fade Out on Scroll
    // gsap.set(".hero-content-wrapper", { transformPerspective: 1000, transformOrigin: "bottom center" });

    // gsap.to(".hero-content-wrapper", {
    //   y: -200,
    //   opacity: 0,
    //   rotateX: 0,
    //   scale: 0.85,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".hero-content-wrapper",
    //     start: "top 35%",
    //     end: "+=500",
    //     scrub: 1,
    //   }
    // });
  });
  useEffect(() => {
    if (vidref.current) {
      vidref.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
      <div
        id="Home"
        className="relative h-screen border w-full flex items-center justify-center overflow-hidden"
      >
        <div className="aurora-effect"></div>

        
          <div className="p-4 border text-center flex flex-col items-center   transition-all duration-500 hero-content-wrapper">
            <h1 className="hero-anim font-confortaa text-4xl md:text-6xl lg:text-[4.5vw] tracking-tight text-white mb-6 leading-tight">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-prime to-[#0d00fd] font-semibold  italic font-confortaa  ">
                dynamic
              </span>{" "}
              <br className="hidden md:block" /> Web Experiences
            </h1>

            <p className="hero-anim font-Montserrat text-sm md:text-lg text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
              We engineer high-performance, visually stunning applications that
              elevate your brand beyond the horizon. Fast, responsive, and
              infinitely scalable.
            </p>

            <div className="hero-anim flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <a
                href="https://calendly.com/umairzakria6/30min"
                target="_blank"
                title="Book 15 Minute call with Umair"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4  text-sm md:text-base  text-black font-semibold  transition-all duration-300 rounded-full bg-[white] font-Poppins overflow-hidden"
              >
                
                <span>Book a Call</span>
                <MoveRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#Contact"
                className="inline-flex items-center justify-center px-8 py-4 font-Montserrat text-sm md:text-base font-medium text-white transition-all duration-300 border-2 border-white/20 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                Explore Work
              </a>
            </div>
          </div>
      </div>
    </>
  );
};

export default Hero;
