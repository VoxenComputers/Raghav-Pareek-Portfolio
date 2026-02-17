"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import About from "./components/About";
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

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Connect with me</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Ready to start your next project? Feel free to reach out via any of the platforms below.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <a
              href="https://www.instagram.com/voxencomputers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-pink-500 transition-colors duration-300 group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/raghav-pareek-web-developer?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYPHlFLg5T0CUZamNRZjkeA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-blue-500 transition-colors duration-300 group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
              <span className="text-lg font-medium">LinkedIn</span>
            </a>

            <a
              href="https://wa.me/918849993205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-green-500 transition-colors duration-300 group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <span className="text-lg font-medium">WhatsApp</span>
            </a>

            <a
              href="mailto:raghavprk06@gmail.com"
              className="flex items-center gap-3 text-white transition-colors duration-300 group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                <svg viewBox="0 0 512 512" className="w-6 h-6">
                  <path d="M76 190v171q0 30 30 30h52V190" className="fill-current text-white group-hover:text-[#4285f4] transition-colors duration-300" />
                  <path d="M354 190v201h52q30 0 30-30V190" className="fill-current text-white group-hover:text-[#34a853] transition-colors duration-300" />
                  <path d="M350 255V149l28-21c24-18 58 2 58 30v32" className="fill-current text-white group-hover:text-[#fbbc04] transition-colors duration-300" />
                  <path d="M154 249V143l102 77 98-74v106l-98 74" className="fill-current text-white group-hover:text-[#ea4335] transition-colors duration-300" />
                  <path d="M76 190v-32c0-29 34-48 58-30l24 18v106" className="fill-current text-white group-hover:text-[#c5221f] transition-colors duration-300" />
                </svg>
              </div>
              <span className="text-lg font-medium group-hover:text-[#ea4335] transition-colors duration-300">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500">
        <p>© 2026 Raghav Pareek. All rights reserved.</p>
      </footer>
    </main>
  );
}
