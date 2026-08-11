import Hero from "../components/Hero";
import Service from "../components/Service";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { MoveRightIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Contact from "../components/Contact";
import Footer2 from "../components/Footer2";
import { useState, useEffect } from "react";
import Aboutme from "./Aboutme";
import Numbers from "./Numbers";
import Whyme from "./Whyme";
import CinematicIntro from "./CinematicIntro";
import StarryBackground from "./StarryBackground";
import Aboutus from "./Aboutus";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [startFade, setStartFade] = useState(false);
  const [endFade, setEndFade] = useState(false);

  useGSAP(() => {
    // if (!introComplete) {
    // Hide elements initially to prevent flashes
    gsap.set(".hero-anim", { opacity: 0 });
    gsap.set(".navbar-container", { opacity: 0, y: -50 });
    // return;
    // }

    // Play Entrance Animation on load finish
    gsap.to(".navbar-container", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.fromTo(
      ".hero-anim",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power4.out",
        delay: 0.2,
      }
    );

    gsap.to(".hero", {
      rotateX: 60,
      scale: 0.4,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    // gsap.to(".scene_2", {
    //   y: -100,
    //   scale:2,
    //   scrollTrigger: {
    //     trigger: ".scene_2",
    //     start: "bottom bottom ",
    //     end: "bottom top",
    //     markers:true, 
    //     scrub: true,
    //   },
    // });

    // ScrollTrigger.create({
    //   trigger: ".scene_1",
    //   start: "top top",
    //   // markers: true,
    //   end: "bottom center",
    //   onEnter: () => setStartFade(true),
    //   onEnterBack: () => setStartFade(false),
    // });

    // ScrollTrigger.create({
    //   trigger: ".scene_2",
    //   start: "top top",
    //   end: "bottom center",
    //   onEnter: () => setEndFade(true),
    //   onEnterBack: () => setEndFade(false),
    // });
  }, []);

  return (
    <div className="relative">
      {/* {!introComplete && <CinematicIntro onComplete={() => setIntroComplete(true)} />} */}
      <StarryBackground trigger={true} start={startFade} end={endFade} duration={1} />
      <Navbar />
      <div className="relative text-white !overflow-x-hidden">
        <div
          id="Home"
          className="hero relative h-screen  w-full flex items-center justify-center overflow-hidden"
        >
          <div className="aurora-effect"></div>

          <div className="p-4  text-center flex flex-col items-center   transition-all duration-500 hero-content-wrapper">
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

       

        <div className="scene_2 w-full">
          <Aboutus />
        </div>

        <div className="h-screen">
          {/* <Aboutme /> */}
        </div>

        <div className="h-screen">
          {/* <Whyme /> */}
        </div>

        {/* <div id="AboutUs" className="h-">
          <About />
        </div> */}

        {/* <div id="Contact" className="h-screen">
            <Contact />
            <Footer2 />
          </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Main;
