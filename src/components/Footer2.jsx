import { Copyright } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer2 = () => {
  const [email, setEmail] = useState("");
  const [discription, setDiscription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("Sending...");

    try {
      const response = await fetch("https://umair-portfolio-eight.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          discription,
        }),
      });

      const data = await response.json();
      
      if (data.status === "success") {
        setError("Thanks 😊 for showing interest!");
        setTimeout(() => {
          setError("");
          setEmail("");
          setDiscription("");
        }, 7000);
      }
    } catch (err) {
      console.log(err);
      setError("Server Error! , Try reloading the page.");
    }
  };

  return (
    <>
      <div className="w-full relative h-[2px] md:h-[0.1vw] bg-gradient-to-r from-[#bd06ab] to-prime overflow-hidden mt-16 md:mt-[8vw]"></div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(37, 157, 255, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(0, 154, 250, 0.1) 0%, transparent 40%),
              radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)
            `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>

        <div className="z-[100] flex flex-col items-center justify-between bg-[#ffffff04] relative px-4 md:px-[4vw] pt-8 md:pt-[4vw] lg:h-[25vw] w-full backdrop-blur-xl font-Montserrat">
          <div className="h-full flex w-full gap-8 md:gap-10 flex-wrap lg:flex-nowrap items-start lg:items-center justify-between">
            
            {/* Brand Section */}
            <div className="flex w-full lg:w-[24vw] h-full">
              <div className="gap-6 md:gap-[3vw] h-full flex flex-col justify-center items-start">
                <a href="https://www.umairlab.com/" title="Umair Lab" className="text-white">
                  <h1 className="text-3xl md:text-[2.6vw] space-x-[0.2vw] pb-[0vw] font-bold tracking-tight border-white/20 items-end font-confortaa">
                    <span>.umair</span>
                    <span className="text-[0.45em] font-confortaa text-transparent bg-gradient-to-tr from-[#b622a7] to-prime bg-clip-text">
                      lab
                    </span>
                  </h1>
                </a>
                <p className="text-sm md:text-base lg:text-[1.2vw] text-gray-200/80 font-Montserrat font-light leading-relaxed">
                  Creating innovative and high-performance digital solutions that enhance user experiences and drive growth.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="h-fit space-y-3 md:space-y-[1vw] w-full sm:w-auto">
              <h3 className="text-lg md:text-[1.2vw] font-Raleway text-gray-200">Contact</h3>
              <div className="flex text-sm md:text-base lg:text-[1.1vw] text-prime2 font-Poppins flex-wrap sm:flex-col gap-3 lg:gap-[0.4vw]">
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/umair-zakria-67477b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Linkedin
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/UmairZakria"
                >
                  Github
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/923184394363"
                >
                  Whatsapp
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:umairzakria6@gmail.com"
                >
                  Email
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/CV.pdf"
                >
                  My CV
                </a>
              </div>
            </div>

            {/* Nav Links */}
            <div className="h-fit space-y-3 md:space-y-[1vw] w-full sm:w-auto">
              <h3 className="text-lg md:text-[1.1vw] font-Raleway text-gray-200">Nav Links</h3>
              <div className="flex text-sm md:text-base lg:text-[1.1vw] text-prime2 font-Poppins flex-wrap sm:flex-col gap-3 lg:gap-[0.4vw]">
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  href="/services"
                >
                  Services
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  href="/projects"
                >
                  Projects
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  href="/work"
                >
                  Work
                </a>
                <a
                  className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  href="/overview"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="h-full w-full lg:w-[20vw] gap-3 md:gap-[0.6vw] transition-all duration-300 ease-in-out flex flex-col rounded-lg md:rounded-[1vw]">
              <h4 className="font-Poppins text-base md:text-lg lg:text-[1.1vw]">Leave a Message!</h4>
              {error && (
                <span className="text-green-500 text-xs md:text-sm lg:text-[0.8vw] font-Inter">
                  {error}
                </span>
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 md:border-[0.1vw] rounded-md md:rounded-[0.51vw] p-3 md:p-[0.7vw] text-sm md:text-base lg:text-[1vw] border-gray-500/50 bg-transparent text-white placeholder-gray-400"
                type="email"
                placeholder="Email"
              />
              <textarea
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                className="border-2 md:border-[0.1vw] rounded-md md:rounded-[0.51vw] p-3 md:p-[0.7vw] text-sm md:text-base lg:text-[1vw] h-32 md:h-full border-gray-500/50 bg-transparent text-white placeholder-gray-400 resize-none"
                placeholder="Message"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="px-4 md:px-6 hover:shadow-lg text-white bg-black rounded-sm cursor-pointer hover:shadow-gray-500 transition-all ease-in-out duration-500 py-3 md:py-[1vw] text-sm md:text-base lg:text-[1vw]"
              >
                Send
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="w-full text-xs md:text-sm lg:text-[1.1vw] pt-8 md:pt-[3vw] gap-4 md:gap-[2vw] flex flex-col md:flex-row items-center justify-center md:justify-around text-white/70 pb-4 md:pb-[1vw] text-center">
            <h4>© 2025 All Rights Reserved.</h4>
            <h3 className="gap-2 md:gap-[1vw] flex items-center md:items-end font-confortaa">
              Made by Umair at
              <a href="https://www.umairlab.com/" title="Umair Lab" className="text-white">
                <h1 className="text-xl md:text-2xl lg:text-[1.6vw] space-x-[0.2vw] pb-[0vw] font-bold tracking-tight border-white/20 items-end font-confortaa">
                  <span>.umair</span>
                  <span className="text-[0.45em] font-confortaa text-transparent bg-gradient-to-tr from-[#b622a7] to-prime bg-clip-text">
                    lab
                  </span>
                </h1>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;