"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-20 md:py-32 bg-[#121212] text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-150px" }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Bio Text */}
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I am <span className="text-white font-semibold">Raghav Pareek</span>, a visionary <span className="text-white">Full Stack Developer</span> and <span className="text-white">AI Architect</span> dedicated to redefining digital interactions.
                            </p>
                            <p>
                                My expertise lies at the intersection of robust engineering and artificial intelligence. I don't just build websites; I engineer intelligent ecosystems. From high-conversion e-commerce platforms like <span className="text-white">Voxen Computers</span> to advanced conversational agents like <span className="text-white">Voxen Ai</span>, my work pushes the boundaries of what's possible on the web.
                            </p>
                            <p>
                                Driven by a relentless pursuit of innovation, I craft scalable, high-performance solutions that are not only functional but transformative.
                            </p>
                        </div>

                        {/* Skills / Stats */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-6 text-white">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
                                    "Node.js", "Tailwind CSS", "Framer Motion", "Python",
                                    "AWS", "API Integration"
                                ].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200 hover:bg-white/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Game Dev Section */}
                    <div className="mt-16 text-center bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-4">Aspiring Game Developer</h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            Expanding my technical expertise beyond web technologies, I am actively pursuing Game Development. My objective is to leverage my background in systems architecture and performance optimization to engineer immersive, high-fidelity gaming experiences.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
