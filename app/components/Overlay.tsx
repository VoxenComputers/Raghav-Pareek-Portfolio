"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface OverlayProps {
    scrollProgress: MotionValue<number>;
}

export default function Overlay({ scrollProgress }: OverlayProps) {
    // Opacity & Y-translation transforms

    // Section 1: 0% - 20%
    const opacity1 = useTransform(scrollProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollProgress, [0, 0.15], [0, -50]);

    // Section 2: 25% - 45% (Peak at 35%)
    const opacity2 = useTransform(scrollProgress, [0.25, 0.35, 0.5], [0, 1, 0]);
    const y2 = useTransform(scrollProgress, [0.25, 0.5], [50, -50]);

    // Section 3: 55% - 75% (Peak at 70%)
    const opacity3 = useTransform(scrollProgress, [0.55, 0.7, 0.85], [0, 1, 0]);
    const y3 = useTransform(scrollProgress, [0.55, 0.85], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute top-1/4 left-0 w-full flex justify-center text-center px-4"
            >
                <div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mix-blend-difference text-white">
                        Raghav Pareek
                        <br />
                        <span className="text-2xl md:text-4xl font-light text-gray-300 block mt-2">Creative Developer</span>
                    </h1>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute top-1/2 left-4 md:left-20 max-w-lg"
            >
                <h2 className="text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                    I build digital <br />
                    <span className="text-blue-400">experiences.</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute top-[60%] right-4 md:right-20 text-right max-w-2xl"
            >
                <h2 className="text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                    Bridging <br />
                    <span className="text-purple-400">Design & Engineering.</span>
                </h2>
            </motion.div>
        </div>
    );
}
