import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const Aboutme = () => {
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

    }
  };
  return (
    <motion.div
      className=" relative container space-y-7 mx-auto   h-screen w-full lg:mt-[150px]  xl:mt-[300px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h1 className="text-4xl md:px-0 px-2 lg:text-7xl font-Poppins " variants={fadeUp}>
        Meet <span className="text-prime2 ">Umair.</span>
      </motion.h1>

      <div className="w-full  h-full grid  grid-cols-1 md:px-0 px-2 lg:grid-cols-2 ">
        <div className="h-full  ">
          <motion.h2
            className="text-2xl md:text-4xl text-white/90 italic font-Poppins mb-8"
            variants={fadeUp}
          >
            Bringing your brand to the life in the digital world
          </motion.h2>
          <div className="space-y-3  text-lg font-light font-Poppins text-white/70 ">
            <motion.p variants={fadeUp}>
              Hi, I’m Umair Zakria, a web developer passionate about turning
              ideas into powerful digital solutions. I enjoy creating products
              that not only look good but actually deliver results.
            </motion.p>
            <motion.p variants={fadeUp}>
              I specialize in React, Next.js, and Express.js, with a growing
              skill set that also includes backend technologies.
            </motion.p>
            <motion.p variants={fadeUp}>
              For my clients, I promise clear communication, on-time delivery,
              and solutions tailored to their needs—ensuring every project
              brings real value.
            </motion.p>
          </div>
          <motion.div className="mt-8 space-x-6" variants={fade}>
            <motion.button
              onClick={()=>{handleNavClick('Contact')}}
              className="bg-[#1d1d1d] py-3 px-6 font-Poppins  rounded-full "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              More
            </motion.button>
            <motion.a
            href="/overview"
              className="px-6 py-3 inline-flex gap-2 bg-white font-medium font-Poppins text-black rounded-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch{" "}
              <span>
                <MoveRight />
              </span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className=" md:block hidden absolute top-5 right-10 h-[500px] w-[400px] "
          variants={fade}
        >
          <img
            src="images/chess.jpg"
            className="w-full blur-[8px] h-full object-cover object-center"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
