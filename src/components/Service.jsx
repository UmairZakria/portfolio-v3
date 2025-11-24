import React, { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      title: "UI/UX Design",
      description:
        "Simple, modern, and strategically functional layouts focused on clarity, superior usability, and consistent brand identity.",
      img: "https://cdn.dribbble.com/userupload/14656775/file/original-387452115d08470ec289a098dd992c72.png?resize=752x564&vertical=center",
      icon: "https://img.icons8.com/?size=100&id=25049&format=png&color=4c95e9",
      points: [
        "Intuitive, engaging user flows.",
        "Optimized conversion paths.",
        "Stronger brand consistency.",
      ],
    },
    {
      title: "Custom Solution",
      description:
        "Creating secure, scalable, and tailored web solutions to meet your unique business needs with modern technologies.",
      img: "/custom.png",
      icon: "https://img.icons8.com/ios-filled/50/4c95e9/windows10-personalization.png",
      points: [
        "A solution perfectly matching business logic.",
        "Scalable architecture for future growth.",
        "Increased operational efficiency.",
      ],
    },
    {
      title: "Full-Stack Web Application",
      description:
        "Developing end-to-end web applications with seamless front-end and back-end integration, tailored for performance and scalability.",
      img: "https://cdn.dribbble.com/userupload/35895022/file/original-429970a9da804b924557444a4b2c5d87.jpg?resize=752x&vertical=center",
      icon: "https://img.icons8.com/?size=100&id=53450&format=png&color=4c95e9",
      points: [
        "Fully integrated, robust platform.",
        "High-performance and reliability.",
        "A cohesive user experience.",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Scalable online stores for seamless shopping experiences and efficient management. Secure transactions for revenue growth.",
      img: "https://cdn.dribbble.com/userupload/34224869/file/original-b66bfbf48ddbe37a5f061766c189edf5.png?resize=752x&vertical=center",
      icon: "https://img.icons8.com/?size=100&id=11834&format=png&color=4c95e9",
      points: [
        "Increased sales potential.",
        "Efficient inventory management.",
        "Secure checkout process.",
      ],
    },
    {
      title: "WordPress Development",
      description:
        "Customized, secure, and responsive websites with theme customization, plugin development, and e-commerce integration.",
      img: "https://cdn.dribbble.com/userupload/41720954/file/original-c2d576eb55ec1d94d0ca3f7c024d36a1.png?resize=800x600",
      icon: "https://img.icons8.com/?size=100&id=1ZW7Z0C6c26c&format=png&color=4c95e9",
      points: [
        "Easy content management.",
        "Responsive design.",
        "Plugin-based scalability.",
      ],
    },
    {
      title: "Backend Integration",
      description:
        "Seamless integration of APIs, databases, and third-party services with reliable, scalable architecture.",
      img: "https://cdn.dribbble.com/users/1434359/screenshots/3286476/attachments/708082/backend_illustration-hd.png",
      icon: "https://img.icons8.com/?size=100&id=32fUGrUStbEu&format=png&color=4c95e9",
      points: [
        "Reliable data flow.",
        "Optimized performance.",
        "Future-proof architecture.",
      ],
    },
  ];

  // -------------------- GSAP Optimized --------------------
  useGSAP(() => {
    if (isMobile) return;

    // Split title animation
    const split = new SplitType(titleRef.current, { types: "words" });

    gsap.fromTo(
      split.words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    const grid = gridRef.current;
    const container = containerRef.current;

    // 30vw card width + 2vw gap = 32vw per card
    const cardWidthVW = 34;
    const totalWidthVW = data.length * cardWidthVW;

    const totalWidthPX = (totalWidthVW / 100) * window.innerWidth;

    // Smooth horizontal scroll
    gsap.to(grid, {
      x: -(totalWidthPX - window.innerWidth),
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: totalWidthPX,
        scrub: 0.1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  }, [isMobile]);

  return (
    <div
      id="Service"
      ref={containerRef}
      className="min-h-screen py-[2vw] my-[10vw] px-4 lg:px-[4vw] overflow-hidden relative font-Montserrat"
    >
      <div className="space-y-12">
        <div className="flex items-start flex-col gap-[1.4vw] justify-between">
          <h3
            ref={titleRef}
            className="text-[4vw] text font-confortaa font-semibold"
          >
            Services I <span className="text-prime2">Offer</span>
          </h3>

          <p className="relative z-50 md:w-1/3 font-Poppins  text-white text-[1.1vw] font-extralight leading-relaxed">
            Creating innovative and high-performance digital solutions that
            enhance user experiences and drive growth.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        ref={gridRef}
        className="flex gap-[4vw] mt-[5vw] mb-[5vw] will-change-transform"
        style={{ width: `${data.length * 32}vw` }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-[30vw] h-[32vw] p-[0.1vw] rounded-md group"
          >
            <div className="absolute  inset-0 rounded-2xl z-0">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover h-full w-full rounded-2xl brightness-25"
              />
            </div>

            <div className="absolute inset-0 bg-black/60 rounded-2xl" />

            <div className="bg-[#00000025] border-[1px] w-full h-full flex flex-col justify-between  px-[1.5vw] py-[2vw] gap-[2vw] rounded-[1vw] backdrop-blur-[0.2vw] border-white/10 group-hover:border-white/10 hover:scale-105  transition-all duration-300">
              <h3 className="text-[2.4vw] font-medium font-Montserrat">
                {item.title.includes(" ") ? (
                  <>
                    <span className="text-prime2 font-semibold">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </>
                ) : (
                  item.title
                )}
              </h3>

              <p className="text-[1.2vw] text-white/80">{item.description}</p>

              <div>
                {item.points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-[1vw] mt-[1vw]">
                    <Check className="size-[1.4vw] text-prime2" />
                    <p className="text-[1vw] text-white/75">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
