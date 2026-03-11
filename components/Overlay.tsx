"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], ["50%", "-50%"]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.9], ["50%", "-50%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-[500vh] w-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8 overflow-hidden">
        
        {/* Section 1: Intro (Center) */}
        <motion.div
           style={{ opacity: opacity1, y: y1 }}
           className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-2 md:mb-4 text-white drop-shadow-lg">
            Soumyadeep De
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-lg">
            Junior Creative Developer & CSE Undergraduate
          </p>
        </motion.div>

        {/* Section 2: Statement (Left Aligned) */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-6 sm:pl-[10%] md:pl-[15%] pr-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-2 md:mb-4 text-white drop-shadow-lg max-w-2xl leading-tight">
            Passionate about code.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-md">
            Proficient in Java, C, and Python, with a growing foundation in modern web development technologies.
          </p>
        </motion.div>

        {/* Section 3: Closing (Right Aligned) */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right pr-6 sm:pr-[10%] md:pr-[15%] pl-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-2 md:mb-4 text-white drop-shadow-lg max-w-2xl leading-tight">
            Constantly learning.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-md">
            Pursuing Computer Science at UEM Kolkata, building everything from Arduino radar systems to interactive web portfolios.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
