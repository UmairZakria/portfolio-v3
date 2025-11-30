import Hero from "../components/Hero";
import Service from "../components/Service";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Lightbulb } from "lucide-react";
import Contact from "../components/Contact";
import Footer2 from "../components/Footer2";
import { useState, useEffect } from "react";
import Aboutme from "./Aboutme";
import Numbers from "./Numbers";
import Whyme from "./Whyme";
import Welcome from "./Welcome";
const Main = () => {
  const [anidone, setAnidone] = useState(false);

  return (
    <div className="relative  !overflow-x-hidden">
      {/* <a
        href="/overview"
        className="fixed bottom-0 left-0  text-[8px] lg:text-sm hidden md:flex items-center gap-2 pr-4 group z-[100] cursor-pointer text-white   font-Raleway font-normal bg-black p-1 px- rounded-tr-3xl hover:text-black hover:bg-white transition-all duration-700 ease-in-out "
      >
        <Lightbulb className="group-hover:text-black size-[16px] " /> Let's Discuss Your
        Idea
      </a> */}
      {/* <Welcome setAnidone={setAnidone} /> */}
      {/* <Flip/> */}
      <Navbar />


      {/* <SmoothScrollProvider> */}
      {/* <CustomScrollbar > */}

        <div className=" text-white">
          <Hero anidone={anidone} />
          <div className="geo">
            <Numbers />

          </div>
          <Service />
          <Aboutme />
          <Whyme />


          <div id="AboutUs " className="">
            <About />
          </div>

          <div id="Contact">
            <Contact />
            <Footer2 />
          </div>
        </div>

    </div>
  );
};

export default Main;
