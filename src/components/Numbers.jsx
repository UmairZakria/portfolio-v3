import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <div className="flex flex-wrap-reverse md:flex-nowrap gap-20 items-center justify-between relative font-Poppins  lg:w-full xl:container lg:px-10 xl:px-0 text-white/90 py-5  md:gap-0 mx-auto ">
      <div
        className="absolute  inset-0   -z-"
        style={{
          background: `
            radial-gradient(circle  at 75% 50%, rgba(37, 157, 255, 0.1) 1%, transparent 16%) 

          `,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative z-10 md:px-0 px-2">
        <h4 className="uppercase text-prime mb-1">
          Pioneering Trust and Innovation
        </h4>
        <h2 className="text-3xl md:text-5xl font-Raleway font-semibold mb-5">
          Results That Matter
        </h2>
        <p className="text-xl md:w-3/4 text-white/80 mb-10">
          Your vision deserves more than just code—it deserves a solution that
          truly works.
        </p>
        <motion.a
          href="/overview"
          className="px-6 py-3 inline-flex gap-2 bg-white font-medium font-Poppins text-black rounded-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Let's Talk{" "}
          <span>
            <MoveRight />
          </span>
        </motion.a>
      </div>
      <div className="flex px-4 md:px-0 font-Poppins flex-wrap gap-15 md:gap-5  w-full md:w-[450px]  mx-auto text-center justify-between md:justify-around items-center md:gap-y-14">
        <div className="space-y-4">
          <div className="text-4xl md:text-5xl  font-medium  font-Poppins">
            2+
          </div>
          <p className=" text-lg text-white/80">Years of Experience</p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl md:text-5xl  font-medium  font-Poppins">
            25+
          </div>
          <p className=" text-lg text-white/80">Completed Projects</p>
        </div>
        <div className="space-y-4 ">
          <div className="text-4xl md:text-5xl   font-medium  font-Poppins">
            15+
          </div>
          <p className=" text-lg text-white/80"> Clients</p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl md:text-5xl  font-medium  font-Poppins">
            100%
          </div>
          <p className=" text-lg text-white/80">Stasified clients</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
