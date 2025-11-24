import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <div className="flex flex-col  flex-wrap-reverse md:flex-nowrap  items-center justify-center relative font-Poppins  lg:px-[4vw] px-4 text-white/90 pt-15   md:gap-[5vw] mx-auto ">
  
      <div className="space-y-[1vw]">
        <h4 className="uppercase text-center text-[1.2vw] font-Poppins text-prime ">
          Pioneering Trust and Innovation
        </h4>
        <h2 className="text-3xl md:text-[3.5vw]  text-center font-confortaa font-semibold ">
          Results That Matter
        </h2>
        {/* <p className="text-xl text-center md:w-1/2 text-white/80 mb-12">
          Your vision deserves more than just code—it deserves a solution that
          truly works.
        </p> */}

      </div>
      <div className="flex  flex-1 px-4 md:px-0 font-Poppins flex-wrap gap-15 md:gap-5  w-full md:w-full mx-auto text-center justify-between md:justify-around items-center md:gap-y-14 ">
        <div className="space-y-4">
          <div className="text-4xl md:text-[4vw]  font-medium  font-confortaa">
            3+
          </div>
          <p className=" text-lg md:text-[1.4vw] uppercase  text-white/75">Years of Experience</p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl md:text-[4vw]  font-medium font-confortaa ">
            30+
          </div>
          <p className=" text-lg md:text-[1.4vw] uppercase  text-white/75">Completed Projects</p>
        </div>
        <div className="space-y-4 ">
          <div className="text-4xl md:text-[4vw]   font-medium  font-confortaa">
            25+
          </div>
          <p className=" text-lg md:text-[1.4vw] uppercase  text-white/75"> Clients</p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl md:text-[4vw]  font-medium font-confortaa">
            99%
          </div>
          <p className=" text-lg md:text-[1.4vw] uppercase  text-white/75">Stasified clients</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
