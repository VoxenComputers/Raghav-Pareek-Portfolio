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
                                        {project.liveLink && (
                                            <div>
                                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                                    Project Link
                                                </h3>
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                                                >
                                                    Visit Live Site ↗
                                                </a>
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
