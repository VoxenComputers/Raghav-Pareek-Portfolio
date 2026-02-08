"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212]">
      {/* Scrollytelling Section */}
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          <Overlay scrollProgress={scrollYProgress} />
        </div>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Footer / Contact placeholder */}
      <footer className="py-24 text-center text-gray-500 pb-40">
        <p>© 2026 Raghav Pareek. All rights reserved.</p>
      </footer>
    </main>
  );
}
