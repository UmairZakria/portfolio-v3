import React from "react";
import { Users, CheckCircle, TrendingUp, Headset } from "lucide-react";

const Whyme = () => {
  const features = [
    {
      icon: <Users className="text-white w-6 h-6" />,
      title: "Client-Centered Approach",
      desc: "I listen, understand, and build solutions tailored to your unique goals.",
    },
    {
      icon: <CheckCircle className="text-white w-6 h-6" />,
      title: "Proven Delivery",
      desc: "On-time, efficient, and detail-oriented — ensuring smooth project execution.",
    },
    {
      icon: <TrendingUp className="text-white w-6 h-6" />,
      title: "Adaptable & Growing",
      desc: "Always learning and adopting new technologies to deliver modern, scalable solutions.",
    },
    {
      icon: <Headset className="text-white w-6 h-6" />,
      title: "Long-Term Support",
      desc: "I don’t just deliver projects, I help them scale and succeed long after launch.",
    },
  ];
  return (
    <section className=" text-white py-16 px-6 ">
      <div className="container mx-auto flex items-start md:items-center gap-10 flex-wrap md:flex-nowrap">
        {/* Left side */}
        <div className="space-y-6 w-full md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-Montserrat font-medium">
            Why Choose me?
          </h2>
          <p className="text-white/90 text-xl">
            Every project is a journey, and I’m here to ensure it thrives long
            after delivery.
          </p>

        </div>

        {/* Right side */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#1d1d1d] rounded-xl w-full box-border min-h-[180px] h-full p-6 flex gap-3 shadow-md hover:shadow-lg transition"
            >
              <div className=" gap-3">
                <div className="bg-prime w-12 h-12 flex items-center justify-center rounded-md">
                  {f.icon}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-Poppins">{f.title}</h3>
                <p className="text-gray-300 text-sm font-Poppins ">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyme;
