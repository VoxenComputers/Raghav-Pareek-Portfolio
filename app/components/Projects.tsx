"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projects, ProjectData } from "../../data/projects";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <section className="relative min-h-screen py-24 px-4 md:px-12 bg-[#121212] z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-white"
                >
                    My Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="block group cursor-pointer"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 h-full"
                            >
                                <div className="mb-4">
                                    <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <span>View Case Study</span>
                                    <span>→</span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
}
