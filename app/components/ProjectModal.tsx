"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "../../data/projects";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectData | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                            className="bg-[#181818] w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl border border-white/10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <IoClose size={24} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto custom-scrollbar flex-1">
                                {/* Header / Hero */}
                                <div className={`w-full h-64 md:h-80 bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-end relative`}>
                                    <div className="absolute inset-0 bg-black/20" /> {/* Overlay for better text readability */}
                                    <div className="relative z-10">
                                        <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-sm font-medium text-white mb-4 border border-white/10">
                                            {project.category}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                            {project.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                    {/* Main Description */}
                                    <div className="md:col-span-2 space-y-6">
                                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                                            {project.description}
                                        </p>

                                        <div className="prose prose-invert prose-lg max-w-none">
                                            <div className="whitespace-pre-line text-gray-400 leading-7 text-base md:text-lg">
                                                {project.content}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Info */}
                                    <div className="space-y-8">
                                        {/* Tech Stack */}
                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        {(project.liveLink || project.sourceLink) && (
                                            <div>
                                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                                    Project Links
                                                </h3>
                                                <div className="flex flex-col gap-3">
                                                    {project.liveLink && (
                                                        <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                                                        >
                                                            Visit Live Site ↗
                                                        </a>
                                                    )}
                                                    {project.sourceLink && (
                                                        <a
                                                            href={project.sourceLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                                                        >
                                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                            View Source Code ↗
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Back / Close (Mobile only mainly) */}
                                        <button
                                            onClick={onClose}
                                            className="w-full py-3 border border-white/10 hover:bg-white/5 text-gray-300 rounded-xl transition-colors md:hidden"
                                        >
                                            Close Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
