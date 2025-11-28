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
      className=" relative lg:px-[4vw] px-4 mx-auto   min-h-screen w-full lg:mt-[4vw]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex items-center justify-between">

        <div>

          <motion.h1 className="text-4xl md:px-0 px-2 lg:text-[4.4vw] font-Poppins " variants={fadeUp}>
            Meet <span className="text-transparent bg-gradient-to-tr from-[#b622a7]  to-prime bg-clip-text font-confortaa font-medium tracking-tight ">.umair  </span>
          </motion.h1>
          <motion.h2
            className="text-2xl lg:text-[1vw] uppercase text-white/75  font-Poppins "
            variants={fadeUp}
          >
            Silence from users is usually a design problem.
          </motion.h2>
        </div>
        {/* <motion.a
          href="/overview"
          className="bg-gradient-to-br rounded-md flex gap-[1vw]  items-center  md:text-[1.1vw]  transition-all duration-300 ease-in-out hover:scale-105 font-Poppins  from-prime/40  to-prime2/50 cursor-pointer px-6 md:px-[2vw] py-3 md:py-[0.9w] "
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get in Touch{" "}
          <span>
            <MoveRight />
          </span>
        </motion.a> */}
      </div>

      <div className="w-full  h-full flex items-start md:items-center justify-center  ">
        <div className="absolute   top-1/2 -translate-y-1/2 left-0  h-[calc(100%-10vw)] lg:px-[4vw] w-full ">

          <div className="  text-[1.2vw] font-light font-Poppins text-white ">
            <motion.div variants={fadeUp} className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] text- absolute top-[2vw] right-[4vw]">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="h-[0.2vw] mb-[0.5vw] w-[4vw] rounded-full bg-gradient-to-tr from-[#b622a7] to-prime " />
              Whether it’s a CRM, ERP, eCommerce store, or a modern portfolio, I build systems that actually work fast, responsive, and simple to use.
            </motion.div>
            <div>


              <motion.div variants={fadeUp} className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-[60%] right-[6vw]">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                  className="h-[0.2vw] mb-[0.5vw] w-[4vw] rounded-full bg-gradient-to-tr from-[#b622a7] to-prime " />

                <strong>My toolkit?</strong> React, Next.js, Node.js, MongoDB, Tailwind CSS… plus smooth animations with GSAP/Framer Motion, and even 3D experiences with Babylon.js when the project calls for it.
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-1/4 left-[4vw]">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }} className="h-[0.2vw] mb-[0.5vw] w-[4vw] rounded-full bg-gradient-to-tr from-[#b622a7] to-prime " />

              I’m Umair Zakria, a Full Stack Web Developer who turn messy problems into clean, scalable, and user-friendly web applications.
            </motion.div>
            <motion.div variants={fadeUp} className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-[85%] left-[6.5vw]">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }} className="h-[0.2vw] mb-[0.5vw] rounded-full w-[4vw] bg-gradient-to-tr from-[#b622a7] to-prime " />
              Atque aspernatur at fugit ratione, quis, exercitationem nulla doloremque aperiam reiciendis quas alias ab quibusdam. Nam, maxime ad! Pariatur, ratione. Obcaecati, quos.
            </motion.div>
          </div>
          {/* <motion.div className="mt-8 space-x-6 flex " variants={fade}>
            <motion.button
              onClick={() => { handleNavClick('Contact') }}
              className="bg-white/10 shadow-inner shadow-black py-3 px-6 font-Poppins  rounded-[0.7vw] "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              More
            </motion.button>
            <motion.a
              href="/overview"
              className="bg-gradient-to-b rounded-md flex gap-[1vw]  items-center  md:text-[1.1vw]  transition-all duration-300 ease-in-out hover:scale-105 font-Poppins  from-prime/60 to-prime/6 cursor-pointer px-6 md:px-[2vw] py-3 md:py-[0.9w] "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch{" "}
              <span>
                <MoveRight />
              </span>
            </motion.a>
          </motion.div> */}
        </div>

        <motion.div
          className=" md:block   hidden  h-[35vw] w-[35vw] "
          variants={fade}
        >
          {/* <img
            src="images/chess.jpg"
            className="w-full blur-[8px] h-full object-cover object-center"
            alt=""
          /> */}
          <video src="/bg2.mp4"
            muted
            loop
            autoPlay
            className="w-full  h-full object-cover origin-center"
          ></video>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
