import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative w-full bg-[#121212] selection:bg-white/20">
      <div className="relative">
        {/* ScrollyCanvas manages the 500vh container and sticky canvas */}
        <ScrollyCanvas />
        {/* Overlay is absolutely positioned over the 500vh area to track scroll alongside the canvas */}
        <Overlay />
      </div>

      {/* Projects grid placed below the 500vh scrollytelling section */}
      <Projects />
      
      {/* Simple Footer */}
      <footer className="relative w-full py-12 flex flex-col items-center justify-center border-t border-white/[0.05] text-gray-500 font-light z-20 bg-[#121212] gap-2">
        <p className="text-sm md:text-base">reply2soumyade@gmail.com | +91 9339865052 | Kolkata, India</p>
        <p className="text-xs md:text-sm">© {new Date().getFullYear()} Soumyadeep De. All rights reserved.</p>
      </footer>
    </main>
  );
}
