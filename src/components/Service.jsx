import React, { useState, useRef, useEffect } from "react";
import { Check, MoveRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

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
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
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

  // -------------------- GSAP Optimized (Desktop Only) --------------------
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

    const wrapper = wrapperRef.current;
    const container = containerRef.current;

    // 30vw card width + 4vw gap = 34vw per card
    const cardWidthVW = 34;
    const totalWidthVW = data.length * cardWidthVW;

    const totalWidthPX = (totalWidthVW / 100) * window.innerWidth;

    // Smooth horizontal scroll
    gsap.to(wrapper, {
      x: -(totalWidthPX - window.innerWidth),
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: totalWidthPX,
        scrub: 0.1,

        invalidateOnRefresh: true,
      },
    });
  }, [isMobile]);

  const handleInertia = (slider) => {
    const currentX = gsap.getProperty(slider, "x");
    let velocity = slider.velocity || 0;

    // If the user stopped dragging for > 100ms, velocity is effectively 0
    if (Date.now() - (slider.lastTime || 0) > 100) {
      velocity = 0;
    }

    // Inertia factor (adjust for feel)
    const inertiaFactor = 300;
    let targetX = currentX + velocity * inertiaFactor;

    // Clamping limits
    const cardWidthVW = 34;
    const totalWidthVW = data.length * cardWidthVW;
    const totalWidthPX = (totalWidthVW / 100) * window.innerWidth;

    // Max scroll is negative
    const maxScroll = -(totalWidthPX - window.innerWidth);
    const minScroll = 0; // Left edge

    // Clamp
    if (targetX > minScroll) targetX = minScroll;
    if (targetX < maxScroll) targetX = maxScroll;

    gsap.to(slider, {
      x: targetX,
      duration: Math.min(Math.abs(velocity) * 500 + 0.8, 2.5), // Dynamic duration based on velocity
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleNext = () => {
    // Card width + gap calculation
    // Desktop: 30vw card + 4vw gap = 34vw
    // Mobile: 90vw card + gap (handled by snap usually, but lets approx)

    if (isMobile) {
      if (gridRef.current) {
        const cardWidth = window.innerWidth * 0.9 + 24; // 90vw + gap estimate
        gridRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    } else {
      const slider = gridRef.current;
      const currentX = gsap.getProperty(slider, "x");
      const cardWidthVW = 34; // 34vw
      const cardWidthPX = (cardWidthVW / 100) * window.innerWidth;

      let targetX = currentX - cardWidthPX;

      // Clamp
      const totalWidthVW = data.length * cardWidthVW;
      const totalWidthPX = (totalWidthVW / 100) * window.innerWidth;
      const maxScroll = -(totalWidthPX - window.innerWidth);

      if (targetX < maxScroll) targetX = maxScroll;

      gsap.to(slider, {
        x: targetX,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <div
      id="Service"
      ref={containerRef}
      className="min-h-screen py-8 md:py-[2vw] my-12 md:my-[10vw] px-4 lg:px-[4vw] overflow-hidden relative font-Montserrat"
    >
      <div className="space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-[1.4vw] justify-between">
          <h3
            ref={titleRef}
            className="text-4xl md:text-[4vw] font-confortaa font-bold"
          >
            Services I <span className="text-prime">Offer</span>
          </h3>

          <p className="relative z-50 md:w-1/3 font-Poppins text-white/75 text-base md:text-[1.1vw] font-extralight leading-relaxed">
            Creating innovative and high-performance digital solutions that
            enhance user experiences and drive growth.
          </p>
        </div>
      </div>

      {/* Navigation Arrow */}
      <button
        onClick={handleNext}
        className="absolute md:block hidden  right-2 md:right-[5vw] top-1/2 -translate-y-1/2 z-50 p-3 md:p-[1vw] rounded-full bg-white/10 backdrop-blur-md border-[1px] border-white/20 hover:bg-white/20 transition-all duration-300 group/btn"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 md:w-[1.5vw] md:h-[1.5vw] text-white group-hover/btn:translate-x-1 transition-transform" />
      </button>

      {/* Desktop: Horizontal Scroll | Mobile: Horizontal Swipe */}
      <div
        ref={wrapperRef}
        className={`${!isMobile ? "will-change-transform" : ""}`}
      >
        <div
          ref={gridRef}
          className={`
            flex gap-6 md:gap-[4vw] mt-8 md:mt-[5vw] mb-8 md:mb-[5vw]
            ${
              isMobile
                ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                : ""
            }
            cursor-grab active:cursor-grabbing
          `}
          style={!isMobile ? { width: `${data.length * 34}vw` } : {}}
          onMouseDown={(e) => {
            const slider = gridRef.current;
            // Stop any ongoing inertia/animation
            gsap.killTweensOf(slider);

            slider.isDown = true;
            slider.startX = e.pageX - slider.offsetLeft;
            slider.scrollLeftStart = slider.scrollLeft;

            // Track for click prevention
            slider.clickStartX = e.clientX;
            slider.clickStartY = e.clientY;

            // Desktop separate drag tracking
            if (!isMobile) {
              slider.dragStartX = gsap.getProperty(slider, "x") || 0;
              // Initialize velocity tracking
              slider.lastX = e.pageX;
              slider.lastTime = Date.now();
              slider.velocity = 0;
            }
          }}
          onMouseLeave={() => {
            const slider = gridRef.current;
            if (slider && slider.isDown) {
              slider.isDown = false;
              if (!isMobile) handleInertia(slider);
            }
          }}
          onMouseUp={() => {
            const slider = gridRef.current;
            if (slider && slider.isDown) {
              slider.isDown = false;
              if (!isMobile) handleInertia(slider);
            }
          }}
          onMouseMove={(e) => {
            const slider = gridRef.current;
            if (!slider || !slider.isDown) return;
            e.preventDefault();

            if (isMobile) {
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - slider.startX) * 1.5;
              slider.scrollLeft = slider.scrollLeftStart - walk;
            } else {
              // Desktop: Velocity Tracking
              const now = Date.now();
              const dt = now - slider.lastTime;
              const currentX = e.pageX;

              if (dt > 0) {
                slider.velocity = (currentX - slider.lastX) / dt; // pixels per ms
              }
              slider.lastX = currentX;
              slider.lastTime = now;

              // Damped Drag
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - slider.startX) * 1;
              const targetX = slider.dragStartX + walk;

              // Smoothly animate to drag position (damping)
              gsap.to(slider, {
                x: targetX,
                duration: 0.5,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          }}
          onClickCapture={(e) => {
            const slider = gridRef.current;
            if (!slider) return;
            const dist = Math.hypot(
              e.clientX - (slider.clickStartX || 0),
              e.clientY - (slider.clickStartY || 0)
            );
            if (dist > 5) {
              e.stopPropagation();
              e.preventDefault();
            }
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                relative group flex-shrink-0
                ${
                  isMobile
                    ? "w-[90vw] h-[120vw] snap-center"
                    : "w-[29vw] h-[35vw]"
                }
                p-[0.1vw] rounded-md
              `}
            >
              <div className="absolute inset-0 p-2 md:p-[1vw] z-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover h-full w-full brightness-75 rounded-lg select-none pointer-events-none"
                />
              </div>

              <div className="absolute inset-0 bg-black/60 rounded-2xl pointer-events-none" />

              <div className="bg-[#00000025] border-[1px] w-full h-full flex flex-col justify-between px-6 py-5 md:px-[1.8vw] md:py-[1.3vw] gap-6 md:gap-[2vw] rounded-xl md:rounded-[1vw] backdrop-blur-sm md:backdrop-blur-[0.2vw] border-white/10 group-hover:border-white/10 shadow-inner shadow-black transition-all duration-300 pointer-events-none">
                <h3 className="text-3xl md:text-[2.5vw] font-light font-Poppins">
                  {item.title.includes(" ") ? (
                    <>
                      <span className="text-prime">
                        {item.title.split(" ")[0]}
                      </span>{" "}
                      {item.title.split(" ").slice(1).join(" ")}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>

                <p className="text-base md:text-[1.2vw] text-white leading-relaxed">
                  {item.description}
                </p>

                <div>
                  {item.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 md:gap-[1vw] mt-3 md:mt-[1vw]"
                    >
                      <Check className="w-5 h-5 md:w-[1.4vw] md:h-[1.4vw] text-prime2 flex-shrink-0" />
                      <p className="text-sm md:text-[1vw] text-white">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://calendly.com/umairzakria6/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Book 15 Minute call with Umair"
                  className="bg-[#004e7e] flex justify-between gap-3 md:gap-[0.8vw] items-center rounded md:rounded-[0.21vw] text-base md:text-[1.2vw] transition-all duration-300 ease-in-out hover:scale-105 font-Montserrat cursor-pointer px-6 md:px-[2vw] py-3 md:py-[0.9vw] pointer-events-auto"
                >
                  <span>Learn More</span>
                  <MoveRight className="w-5 h-5 md:w-auto md:h-auto" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile scroll indicator */}
      {/* {isMobile && (
        <div className="flex justify-center gap-2 mt-4">
          {data.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      )} */}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Service;
