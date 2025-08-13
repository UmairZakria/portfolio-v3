import Lenis from 'lenis'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      return window.innerWidth <= 768 || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    setIsMobile(checkMobile());
  }, []);

  useGSAP(() => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    const lenis = new Lenis({
      lerp: isMobile ? 1 : 0.08, // Much lighter lerp on mobile
      smoothWheel: !isMobile, // Disable smooth wheel on mobile
      smoothTouch: isMobile, // Enable only on mobile
      wheelMultiplier: isMobile ? 0 : 1.2, // Disable wheel on mobile
      touchMultiplier: isMobile ? 0.8 : 0, // Light touch multiplier
      touchInertiaMultiplier: isMobile ? 12 : 35, // Lighter inertia
      easing: (t) => isMobile ? t : Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      duration: isMobile ? 0.8 : 1.2, // Faster on mobile
      syncTouch: isMobile,
      syncTouchLerp: isMobile ? 1 : 0.075,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.refresh();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [isMobile]);

  return <>{children}</>;
};

export default SmoothScrollProvider;