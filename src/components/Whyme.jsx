import React from "react";
import { Users, CheckCircle, TrendingUp, Headset } from "lucide-react";

const Whyme = () => {
  const features = [
    {
      icon: <Users className="text-white w-5 h-5" />,
      title: "Client-Centered Approach",
      desc: "I listen, understand, and build solutions tailored to your unique goals.",
    },
    {
      icon: <CheckCircle className="text-white w-5 h-5" />,
      title: "Proven Delivery",
      desc: "On-time, efficient, and detail-oriented — ensuring smooth project execution.",
    },
    {
      icon: <TrendingUp className="text-white w-5 h-5" />,
      title: "Adaptable & Growing",
      desc: "Always learning and adopting new technologies to deliver modern, scalable solutions.",
    },
    {
      icon: <Headset className="text-white w-5 h-5" />,
      title: "Long-Term Support",
      desc: "I don't just deliver projects, I help them scale and succeed long after launch.",
    },
  ];

  return (
    <section className="text-white mt-16 lg:mt-[10vw]">
      <div className="px-4 md:px-[4vw] mx-auto flex lg:flex-row items-start md:items-center gap-8 lg:gap-[2vw] flex-wrap md:flex-nowrap">
        {/* Left side */}
        <div className="space-y-4 lg:space-y-6 w-full md:w-1/3 lg:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-[3.5vw] font-confortaa font-medium">
            <span className="text-prime2">Why</span> me?
          </h2>
          <p className="text-white/75 text-base md:text-lg lg:text-[1.3vw] lg:w-[30vw] leading-relaxed font-Poppins">
            Every project is a journey, <br className="hidden lg:block" /> and I'm here to ensure it thrives long
            after delivery.
          </p>
        </div>

        {/* Right side */}
        <div className="w-full relative md:w-3/4 lg:w-[85%] xl:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[2vw] items-stretch">
          <div className="absolute top-1/2 left-1/2 size-[200px] opacity-70 animate-spin rounded-t-full border-4 blur-3xl bg-prime2/20 !border-white -translate-x-1/2 -translate-y-1/2"></div>

          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#3a444b6b] gap-4 lg:gap-[1.2vw] relative z-[50] flex-col rounded-xl lg:rounded-[0.8vw] w-full box-border min-h-[200px] lg:h-[13.5vw] p-5 lg:p-[1.4vw] flex shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-row items-center gap-4 lg:gap-[1vw]">
                <div className="gap-[0.8vw]">
                  <div className="bg-prime/60 shadow-xl shadow-prime/20 backdrop-blur-2xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-[1.5vw] border-b pb-2 lg:pb-[0.9vw] border-prime/30 font-Poppins">
                  {f.title}
                </h3>
              </div>
              <p className="text-white/80 text-sm md:text-base lg:text-[1.1vw] font-Poppins leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyme;