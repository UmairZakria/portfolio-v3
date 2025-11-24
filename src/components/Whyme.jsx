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
      desc: "I don’t just deliver projects, I help them scale and succeed long after launch.",
    },
  ];
  return (
    <section className=" text-white  md:mt-30 py-16 px-6 ">
      <div className="lg:px-10 xl:px-0 xl:container mx-auto flex lg:flex-col xl:flex-row items-start md:items-center gap-10 flex-wrap md:flex-nowrap">
        {/* Left side */}
        <div className="space-y-6 w-full md:w-1/3 lg:w-full xl:w-1/2 xl:text-left lg:text-center">
          <h2 className="text-3xl text-prime2 md:text-5xl lg:text-6xl xl:text-5xl font-Montserrat font-medium">
            <span className="">Why</span> me?
          </h2>
          <p className="text-white/80  text-xl leading-relaxed">
            Every project is a journey, <br /> and I’m here to ensure it thrives long
            after delivery.
          </p>

        </div>

        {/* Right side */}
        <div className="w-full relative   md:w-3/4 lg:w-[85%] xl:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="absolute top-1/2 left-1/2 size-[200px] opacity-70 animate-spin rounded-t-full border-4 blur-3xl bg-prime2/20  !border-white -translate-1/2"></div>

          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#3a444b6b] gap-5 relative z-[50] flex-col rounded-xl w-full box-border min-h-[180px] h-full p-6 flex  shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-row items-center gap-4">

                <div className=" gap-3">
                  <div className="bg-prime/60 shadow-xl shadow-prime/20 backdrop-blur-2xl rounded-full w-12 h-12 flex items-center justify-center ">
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-2xl  border-b pb-2 border-prime/30 font-Poppins">{f.title}</h3>
              </div>
              <p className="text-white/80  text-[15px] font-Poppins ">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyme;
