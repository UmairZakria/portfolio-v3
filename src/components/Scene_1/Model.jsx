import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useThree } from '@react-three/fiber'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
    const { nodes } = useGLTF("/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    const groupRef = useRef(null);

    useGSAP(() => {
        if (!torus.current || !groupRef.current) return;

        // ---------------------------------------------------------------
        // 1. ROTATION: scroll-driven on all three axes.
        //    A page-wide ScrollTrigger spans the entire scrollable area.
        //    Its self.progress drives rotation.x/y/z directly.
        //    Offsets preserve X > Y > Z.
        // ---------------------------------------------------------------
        const TARGET_DELTA = Math.PI * 12;
        const X_OFFSET = 0;
        const Y_OFFSET = 1.429;
        const Z_OFFSET = 2.859;

        const rotTrigger = ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            onUpdate: (self) => {
                const t = self.progress;
                torus.current.rotation.x = X_OFFSET + t * TARGET_DELTA;
                torus.current.rotation.y = Y_OFFSET + t * TARGET_DELTA * 0.75;
                torus.current.rotation.z = Z_OFFSET + t * TARGET_DELTA * 0.5;
            },
        });

        // ---------------------------------------------------------------
        // 2. Z POSITION fly-through into .About
        // ---------------------------------------------------------------
        const flyTrigger = gsap.to(groupRef.current.position, {
            z: 10,
            ease: "power1.inOut",
            
            scrollTrigger: {
                trigger: ".About",
                start: "top top",
                end: "20% top",
                scrub: 0.1,
            }
        });

        // ---------------------------------------------------------------
        // 3. Scale fade-out as the group passes the camera
        // ---------------------------------------------------------------
        const scaleTrigger = gsap.to(groupRef.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".About",
                start: "12% top",
                end: "20% top",
                scrub: 0.1,
            }
        });

        // return () => {
        //     rotTrigger.kill();
        //     if (flyTrigger.scrollTrigger) flyTrigger.scrollTrigger.kill();
        //     if (scaleTrigger.scrollTrigger) scaleTrigger.scrollTrigger.kill();
        //     flyTrigger.kill();
        //     scaleTrigger.kill();
        // };
    }, []);

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };
    return (
        <group ref={groupRef} scale={viewport.width / 3.75} >
            <Text font={'/Comfortaa-Regular.ttf'} position={[0, 0, -1]} fontSize={0.7} color="white" anchorX="center" anchorY="middle">
                Who We are
            </Text>
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}