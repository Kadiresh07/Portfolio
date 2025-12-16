"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-xl"
                    initial={{
                        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    style={{
                        width: `${Math.random() * 300 + 50}px`,
                        height: `${Math.random() * 300 + 50}px`,
                    }}
                />
            ))}
        </div>
    );
}
