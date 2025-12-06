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
      className="relative lg:px-[4vw] px-4 mx-auto min-h-screen w-full lg:mt-[4vw] mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <motion.h1 
            className="text-4xl md:px-0  lg:text-[4.4vw] font-Poppins" 
            variants={fadeUp}
          >
            Meet{" "}
            <span className="text-transparent bg-gradient-to-tr from-[#b622a7] to-prime bg-clip-text font-confortaa font-medium tracking-tight">
              .umair
            </span>
          </motion.h1>
          <motion.h2
            className="text-sm md:text-xl lg:text-[1vw] uppercase text-white/75 font-Poppins mt-2"
            variants={fadeUp}
          >
            Silence from users is usually a design problem.
          </motion.h2>
        </div>
      </div>

      {/* Desktop Layout - Keep original */}
      <div className="hidden lg:block w-full h-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[calc(100%-10vw)] lg:px-[4vw] w-full">
          <div className="text-[1.2vw] font-light font-Poppins text-white">
            <motion.div
              variants={fadeUp}
              className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-[2vw] right-[4vw]"
            >
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="h-[0.2vw] mb-[0.5vw] w-[4vw] rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
              />
              Whether it's a CRM, ERP, eCommerce store, or a modern portfolio, I
              build systems that actually work fast, responsive, and simple to use.
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-[60%] right-[6vw]"
            >
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="h-[0.2vw] mb-[0.5vw] w-[4vw] rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
              />
              <strong>My toolkit?</strong> React, Next.js, Node.js, MongoDB,
              Tailwind CSS… plus smooth animations with GSAP/Framer Motion, and
              even 3D experiences with Babylon.js when the project calls for it.
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-1/4 left-[4vw]"
            >
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="h-[0.2vw] mb-[0.5vw] w-[4vw] rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
              />
              Hey, I'm Umair Zakria — a Full Stack Web Developer turning clients'
              visions into reality with clean, scalable, and user-friendly web
              applications.
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="w-[25vw] shadow-inner shadow-black bg-white/5 p-[1.5vw] rounded-[1vw] absolute top-[85%] left-[6.5vw]"
            >
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="h-[0.2vw] mb-[0.5vw] rounded-full w-[4vw] bg-gradient-to-tr from-[#b622a7] to-prime"
              />
              I keep the user at the center of every decision. Because a good
              product isn't just about functionality, it's about how people feel
              when they use it.
            </motion.div>
          </div>
        </div>

        <motion.div className="h-[35vw] w-[35vw] mx-auto" variants={fade}>
          <video
            src="/bg2.mp4"
            muted
            loop
            autoPlay
            className="w-full h-full object-cover origin-center"
          ></video>
        </motion.div>
      </div>

      {/* Mobile Layout - Stacked vertical cards */}
      <div className="lg:hidden mt-8 space-y-6">
        {/* Video on mobile - smaller and at top */}
        <motion.div className="w-full h-64 rounded-2xl overflow-hidden" variants={fade}>
          <video
            src="/bg2.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </motion.div>

        {/* Content cards stacked vertically */}
        <div className="space-y-4">
          <motion.div
            variants={fadeUp}
            className="w-full shadow-inner shadow-black bg-white/5 p-5 rounded-xl"
          >
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="h-1 mb-3 w-12 rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
            />
            <p className="text-sm md:text-base font-light font-Poppins text-white leading-relaxed">
              Hey, I'm Umair Zakria — a Full Stack Web Developer turning clients'
              visions into reality with clean, scalable, and user-friendly web
              applications.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full shadow-inner shadow-black bg-white/5 p-5 rounded-xl"
          >
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="h-1 mb-3 w-12 rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
            />
            <p className="text-sm md:text-base font-light font-Poppins text-white leading-relaxed">
              Whether it's a CRM, ERP, eCommerce store, or a modern portfolio, I
              build systems that actually work fast, responsive, and simple to use.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full shadow-inner shadow-black bg-white/5 p-5 rounded-xl"
          >
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="h-1 mb-3 w-12 rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
            />
            <p className="text-sm md:text-base font-light font-Poppins text-white leading-relaxed">
              <strong>My toolkit?</strong> React, Next.js, Node.js, MongoDB,
              Tailwind CSS… plus smooth animations with GSAP/Framer Motion, and
              even 3D experiences with Babylon.js when the project calls for it.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full shadow-inner shadow-black bg-white/5 p-5 rounded-xl"
          >
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="h-1 mb-3 w-12 rounded-full bg-gradient-to-tr from-[#b622a7] to-prime"
            />
            <p className="text-sm md:text-base font-light font-Poppins text-white leading-relaxed">
              I keep the user at the center of every decision. Because a good
              product isn't just about functionality, it's about how people feel
              when they use it.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;