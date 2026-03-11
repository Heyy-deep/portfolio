"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 192; // 0 to 191

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameIndex, setFrameIndex] = useState(0);

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0-1 scroll progress to frame index (0-191)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    // 1. Preload images sequence
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        // Format the index with 3 digits, e.g., 000, 001... 191
        const indexStr = i.toString().padStart(3, "0");
        const src = `/sequence/frame_${indexStr}_delay-0.041s.png`;
        img.src = src;

        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push(img);
            resolve(true);
          };
          img.onerror = () => {
             console.warn(`Failed to load frame ${i}`);
             // Push an empty image or the last loaded one to prevent breaking the sequence
             loadedImages.push(loadedImages[loadedImages.length - 1] || new Image());
             resolve(false);
          }
        });
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Update logic when scroll changes
  useMotionValueEvent(currentIndex, "change", (latest) => {
    setFrameIndex(Math.floor(latest));
  });

  // Draw frame on Canvas when index or images change
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];
    if (!img || !img.complete) return;

    // Handle high-dpi displays and resize
    const drawImage = () => {
      // Set canvas drawing dimensions to match internal pixel size smoothly
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);

      // object-fit: cover calculation
      const canvasRatio = rect.width / rect.height;
      const imgRatio = img.width / img.height;

      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        // Canvas is wider than image (e.g. desktop)
        drawHeight = rect.width / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
      } else {
        // Canvas is taller than image (e.g. mobile)
        drawWidth = rect.height * imgRatio;
        offsetX = (rect.width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    drawImage();

    // Re-draw on resize so the cover logic recalculates
    window.addEventListener("resize", drawImage);
    return () => window.removeEventListener("resize", drawImage);

  }, [frameIndex, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        {/* An overlay gradient to blend bottom edge for next section */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#121212] to-transparent z-0" />
      </div>
    </div>
  );
}
