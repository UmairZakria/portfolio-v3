import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useMemo } from "react";
import { useGSAP } from '@gsap/react';
import Index from "./Scene_1";
gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const blobGroupRef = useRef(null);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const mobileSettings = { end: '+=3000' };
    const desktopSettings = { end: '+=18000' };

    const textContent = [
        `Automate <span class="text-[#2eafff]"> Smarter </span>, Scale Faster—<span class="text-[#2eafff]"> AI </span> That Works Seamlessly While You Reach New <span class="text-[#2eafff]"> Heights </span>.`,
        `At <span class="text-[#2eafff]"> CodAgentic </span>, we're fueling your <span class="text-[#2eafff]"> ideas </span> with <span class="text-[#2eafff]"> AI </span> that thinks, learns, and scales alongside Your <span class="text-[#2eafff]"> vision </span>.`,
        `Our <span class="text-[#2eafff]"> mission </span> is to shatter the <span class="text-[#2eafff]"> myth </span> that <span class="text-[#2eafff]"> AI </span> is only for tech giants bringing <span class="text-[#2eafff]"> intelligent </span> Automation to Everyone.`,
    ];

    const tokenizeText = (htmlText) => {
        const regex = /(<span class="text-\[#2eafff\]">.*?<\/span>|\s+|[^\s<]+)/g;
        const matches = htmlText.match(regex) || [];
        const tokens = [];
        matches.forEach((match) => {
            if (match.startsWith('<span')) {
                const content = match.replace(/<span.*?>|<\/span>/g, '').trim();
                const words = content.split(/(\s+)/);
                words.forEach((w) => {
                    if (w) tokens.push({ text: w, highlight: !/^\s+$/.test(w) });
                });
            } else if (/^\s+$/.test(match)) {
                tokens.push({ text: match, isSpace: true });
            } else {
                tokens.push({ text: match, highlight: false });
            }
        });
        return tokens;
    };

    const tokenizedTexts = useMemo(() => textContent.map(tokenizeText), []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                start: "top top",
                scrub: 5,
                ...(isMobile ? mobileSettings : desktopSettings),
            },
        });

        gsap.set(blobGroupRef.current, {
            scale: 0,
            rotation: 0,
            transformOrigin: "50% 50%",
        });

        tl.to({}, { duration: 1.5 });

        // Scale + rotate the Gemini sparkle as scroll scrubs through
        // the reveal window. Both tweens ride the same timeline so
        // the rotation eases in/out alongside the growth.
        tl.to(blobGroupRef.current, {
            scale: 8,
            rotation: 90, // 90° over the full reveal — adjust to taste
            duration: 2.5,
            ease: "power2.inOut",
        });

        textContent.forEach((_, index) => {
            const words = textRefs.current[index]?.querySelectorAll('.word-span');
            if (!words) return;

            gsap.set(words, {
                opacity: 0, y: 45, rotateX: 20, scale: 0.6,
                filter: "blur(20px)", transformOrigin: "50% 50% -30px",
            });

            tl.to(textRefs.current[index], {
                opacity: 1, duration: 1.0, ease: "power1.out",
            }, "-=0.8");

            tl.to(words, {
                opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)",
                stagger: 0.3, ease: "back.out(3.8)", duration: 3,
            }, "-=0.8");

            tl.to(words, {
                opacity: 0, y: -40, rotateX: -20, scale: 1.1, filter: "blur(15px)",
                stagger: 0.12, ease: "back.in(2.5)", duration: 3,
            }, "+=4.0");

            tl.to(textRefs.current[index], {
                opacity: 0, duration: 0.5,
            }, "-=0.5");
        });
    }, []);

    return (
        <div ref={containerRef} className="About font-confortaa h-screen w-full flex items-center justify-center relative overflow-hidden">
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <mask id="blob-reveal" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                        <rect x="0" y="0" width="1" height="1" fill="black" />
                        <g ref={blobGroupRef}>
                            {/* Gemini-style 4-pointed sparkle centered at (0.5, 0.5).
                                Outer points at the 4 tips (top/right/bottom/left);
                                concave Bezier control points pulled in toward the
                                center for the rounded concave look. */}
                            <path
                                d="M0.5 0
                                   C0.55 0.30, 0.70 0.45, 1.0 0.5
                                   C0.70 0.55, 0.55 0.70, 0.5 1.0
                                   C0.45 0.70, 0.30 0.55, 0.0 0.5
                                   C0.30 0.45, 0.45 0.30, 0.5 0 Z"
                                fill="white"
                            />
                        </g>
                    </mask>
                </defs>
            </svg>

            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Index />
            </div>

            <div
                className="absolute inset-0 z-10 flex items-center justify-center"
                style={{
                    maskImage: 'url(#blob-reveal)',
                    WebkitMaskImage: 'url(#blob-reveal)',
                    backgroundColor: '#ffffff',
                }}
            >
                {tokenizedTexts.map((tokens, index) => (
                    <div
                        key={index}
                        ref={el => (textRefs.current[index] = el)}
                        className="absolute text-center text-3xl lg:text-5xl xl:text-[50px] text-black font-semibold md:w-[70%] leading-tight opacity-0"
                        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                    >
                        {tokens.map((token, tIndex) => {
                            if (token.isSpace) return <span key={tIndex}>{" "}</span>;
                            return (
                                <span
                                    key={tIndex}
                                    className={`inline-block word-span ${token.highlight ? 'text-[#2eafff]' : ''}`}
                                >
                                    {token.text}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aboutus;