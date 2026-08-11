import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Text, Sparkles } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

const COMFORTAA_FONT = "/Comfortaa-Regular.ttf";

const CinematicScene = ({ onComplete }) => {
  const { camera } = useThree();
  const uRef = useRef();
  const animatedRef = useRef(false);

  // Create linear gradient canvas texture for the 'm' letter mesh
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 256, 256, 0); // Diagonal gradient
    gradient.addColorStop(0, "#00d0ff"); // Cyan
    gradient.addColorStop(1, "#0d00fd"); // Blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }, []);

  // Frame loop checking when refs are fully mounted by React Three Fiber
  useFrame(() => {
    if (uRef.current && !animatedRef.current) {
      animatedRef.current = true;

      // Set initial values
      uRef.current.position.z = -4;
      uRef.current.scale.set(0, 0, 0);
      uRef.current.fillOpacity = 0;

      camera.position.set(0, 0, 5);
      camera.rotation.set(0, 0, 0);

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // 1. Entrance of name (3D fly-in & fade-in)
      tl.to(uRef.current, {
        fillOpacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }, 0);

      tl.to(uRef.current.position, { z: 0, duration: 1.2, ease: "power3.out" }, 0);
      tl.to(uRef.current.scale, { x: 1, y: 1, z: 1, duration: 1.2, ease: "power3.out" }, 0);

      // 2. Slow majestic camera drift during the 2 seconds hold
      tl.to(camera.position, {
        z: 4.2,
        duration: 2.0,
        ease: "power2.out",
      }, "-=0.4");

      tl.to(camera.rotation, {
        y: 0.05,
        x: -0.02,
        duration: 2.0,
        ease: "power2.out",
      }, "-=2.4");

      // 3. Zoom / Flythrough Phase
      // Target coordinates inside the right archway of Comfortaa lowercase "m"
      tl.to(camera.position, {
        x: 0.17,
        y: -0.2,
        z: -2.0,
        duration: 1.5,
        ease: "power4.in",
      }, "zoom");

      tl.to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0.03,
        duration: 1.5,
        ease: "power3.in",
      }, "zoom");

      // Fade out the overlay container as camera flies past
      tl.to(".intro-canvas-container", {
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      }, "zoom+=0.7");
    }
  });

  return (
    <>
      <ambientLight intensity={2.0} />
      
      {/* Floating dynamic stars */}
      <Sparkles count={120} scale={8} size={2.5} speed={0.4} color="#00d0ff" />
      
      <group position={[0, 0, 0]}>
        {/* Combined aligned text */}
        <Text
          ref={uRef}
          font={COMFORTAA_FONT}
          fontSize={1.2}
          color="white"
          position={[0, 0.05, 0]}
          anchorX="center"
          anchorY="middle"
        >
          .umair
          <meshBasicMaterial map={gradientTexture} />
        </Text>
      </group>
    </>
  );
};

const CinematicIntro = ({ onComplete }) => {
  useEffect(() => {
    // Disable scroll on mount
    const preventDefault = (e) => e.preventDefault();
    const preventKeys = (e) => {
      const keys = ["Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "End", "Home"];
      if (keys.includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventKeys, { passive: false });

    // Set overflow hidden on body to ensure scrollbars disappear
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll on unmount
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("keydown", preventKeys);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="intro-canvas-container fixed inset-0 w-screen h-screen bg-black z-[99999] overflow-hidden select-none pointer-events-auto">
      <Canvas>
        <CinematicScene onComplete={onComplete} />
      </Canvas>
    </div>
  );
};

export default CinematicIntro;
