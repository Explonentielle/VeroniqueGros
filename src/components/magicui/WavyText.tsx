"use client";


import { cn } from "@/src/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

interface WavyTextProps {
    word: string;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
}
const WavyText = ({
    word,
    className,
    variant,
    duration = 0.2,
    delay = 0.02,
}: WavyTextProps) => {
    const defaultVariants = {
        hidden: { y: 1 },
        visible: { y: -10 },
    };
    const combinedVariants = variant || defaultVariants;
    const characters = useMemo(() => word.split(""), [word]);
    return (
        <div className="overflow-hidden p-2">
            <div className="flex justify-center space-x-1">
                <AnimatePresence>
                    {characters.map((char, i) => (
                        <motion.h1
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={combinedVariants}
                            transition={{
                                yoyo: Infinity,
                                duration: duration,
                                delay: i * delay,
                            }}
                            className={cn(
                                className,
                                "font-display text-center text-xs font-bold tracking-[-0.1em] md:text-3xl",
                            )}
                        >
                            {char}
                        </motion.h1>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WavyText;