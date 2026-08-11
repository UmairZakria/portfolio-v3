import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const createStarTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const context = canvas.getContext('2d');
  
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 1.9)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

function FlyThroughStars() {
  const outerGroupRef = useRef();
  const innerGroupRef = useRef();
  
  const depth = 100;
  
  const starTexture = useMemo(() => createStarTexture(), []);
  
  const createGeo = (count) => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 150; // x spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 150; // y spread
      pos[i * 3 + 2] = -Math.random() * depth; // z depth
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  };

  // Generate 3 layers of stars for realistic parallax and depth
  const geo1 = useMemo(() => createGeo(1200), []); // Tiny, sharp stars
  const geo2 = useMemo(() => createGeo(400), []); // Medium, soft stars
  const geo3 = useMemo(() => createGeo(100), []);  // Large, faint glowing orbs

  useFrame((state) => {
    if (!outerGroupRef.current || !innerGroupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Fix for the stars moving off-screen: 
    // We only roll (rotate Z) and add a tiny gentle pitch/yaw wobble.
    // This stops the star "tunnel" from swinging wildly out of the camera's view.
    outerGroupRef.current.rotation.z = time * 0.05;
    outerGroupRef.current.rotation.x = Math.sin(time * 0.2) * 0.02;
    outerGroupRef.current.rotation.y = Math.cos(time * 0.3) * 0.02;
    
    // Subtle mouse parallax
    const mouseX = state.pointer.x * 0.2;
    const mouseY = state.pointer.y * 0.2;
    
    outerGroupRef.current.position.x += (mouseX - outerGroupRef.current.position.x) * 0.05;
    outerGroupRef.current.position.y += (mouseY - outerGroupRef.current.position.y) * 0.05;

    // Inner group handles forward translation smoothly
    const scrollZ = window.scrollY * 0.015;
    const timeZ = time * 1.5; // continuous slow forward movement
    
    let zPos = scrollZ + timeZ;
    zPos = zPos % depth; // Seamless loop
    
    innerGroupRef.current.position.z = zPos;
  });

  return (
    <group ref={outerGroupRef}>
      <group ref={innerGroupRef}>
        {/* Layer 1: Tiny, sharp white stars */}
        <points geometry={geo1}>
          <pointsMaterial size={0.2} color="#ffffff" transparent opacity={1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} map={starTexture} />
        </points>
        <points geometry={geo1} position={[0, 0, -depth]}>
          <pointsMaterial size={0.2} color="#ffffff" transparent opacity={1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} map={starTexture} />
        </points>

        {/* Layer 2: Medium, softer pale blue stars */}
        <points geometry={geo2}>
          <pointsMaterial size={0.4} color="#d4eaff" transparent opacity={1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} map={starTexture} />
        </points>
        <points geometry={geo2} position={[0, 0, -depth]}>
          <pointsMaterial size={0.4} color="#d4eaff" transparent opacity={1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} map={starTexture} />
        </points>

        {/* Layer 3: Large, faint warm glowing stars */}
        <points geometry={geo3}>
          <pointsMaterial size={0.8} color="#ffe6cc" transparent opacity={1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} map={starTexture} />
        </points>
        <points geometry={geo3} position={[0, 0, -depth]}>
          <pointsMaterial size={0.8} color="#ffe6cc" transparent opacity={1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} map={starTexture} />
        </points>
      </group>
    </group>
  );
}

const StarryBackground = ({ 
  fade = false, 
  duration = 1, 
  trigger, 
  start = "top top", 
  end = "bottom center", 
  scrub = true 
}) => {
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  const transitionDuration = useMemo(() => {
    if (typeof duration === 'number') {
      return duration > 50 ? `${duration / 1000}s` : `${duration}s`;
    }
    return duration;
  }, [duration]);

  // Handle manual CSS-based fade or boolean trigger fade
  useEffect(() => {
    if (typeof trigger === 'string') return;

    if (typeof trigger === 'boolean' && trigger) {
      if (start === true && end === false) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    } else {
      // Fallback to manual fade prop
      if (fade) {
        let frame1, frame2;
        frame1 = requestAnimationFrame(() => {
          frame2 = requestAnimationFrame(() => {
            setOpacity(0);
          });
        });
        return () => {
          if (frame1) cancelAnimationFrame(frame1);
          if (frame2) cancelAnimationFrame(frame2);
        };
      } else {
        setOpacity(1);
      }
    }
  }, [fade, trigger, start, end]);

  // Handle GSAP ScrollTrigger animation when trigger is a string (selector)
  useGSAP(() => {
    if (typeof trigger !== 'string') return;

    const anim = gsap.fromTo(
      containerRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        ease: scrub ? "none" : "power1.out",
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
          toggleActions: scrub ? undefined : "play none reverse none",
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, { dependencies: [trigger, start, end, scrub], scope: containerRef });

  const hasScrollTrigger = typeof trigger === 'string';

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030508] pointer-events-none" style={{ zIndex: -10 }}>
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{
          opacity: hasScrollTrigger ? undefined : opacity,
          transition: hasScrollTrigger ? 'none' : `opacity ${transitionDuration} ease-in-out`,
        }}
      >
        <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
          {/* Fog to hide the wrap-around boundary smoothly */}
          <fog attach="fog" args={['#030508', 20, 10]} />
          <ambientLight intensity={0.1} />
          <FlyThroughStars />
        </Canvas>
      </div>
    </div>
  );
};

export default StarryBackground;
