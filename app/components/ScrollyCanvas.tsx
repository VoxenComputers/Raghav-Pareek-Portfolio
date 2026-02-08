"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
    scrollProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollProgress }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Number of frames
    const frameCount = 152;

    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            // Pad with zeros: 0 -> 000, 10 -> 010, etc.
            const formattedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/${formattedIndex}.webp`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };

            // Maintain order
            loadedImages[i] = img;
        }
        setImages(loadedImages);
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Maintain object-fit: cover logic
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Calculate scaling to cover
        const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
        const x = (canvasWidth / 2) - (img.width / 2) * scale;
        const y = (canvasHeight / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Clamp index
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial draw and resize handler
    useEffect(() => {
        if (!isLoaded) return;

        const handleResize = () => {
            if (canvasRef.current) {
                // High-DPI Support
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                // Scale context to match
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) ctx.scale(dpr, dpr);

                // Ideally we would redraw here, but we need the current progress
                const currentProgress = scrollProgress.get();
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(currentProgress * frameCount)
                );
                renderFrame(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial resize

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, scrollProgress]);

    return (
        <div className="absolute inset-0 w-full h-full">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50 text-white">
                    Loading...
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover"
            />
        </div>
    );
}
