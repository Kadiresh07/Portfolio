"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const hotspots = [
    {
        name: "Experience",
        href: "/experience",
        top: "30%",
        left: "45%",
        width: "25%",
        height: "25%",
        description: "View my work history",
    },
    {
        name: "Skills",
        href: "/skills",
        top: "55%",
        left: "20%",
        width: "15%",
        height: "20%",
        description: "Check out my tech stack",
    },
    {
        name: "About",
        href: "/about",
        top: "20%",
        left: "10%",
        width: "20%",
        height: "30%",
        description: "Learn more about me",
    },
    {
        name: "Contact",
        href: "/contact",
        top: "60%",
        left: "70%",
        width: "20%",
        height: "20%",
        description: "Get in touch",
    },
];

export default function InteractiveWorkspace() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="relative w-full max-w-5xl mx-auto aspect-video">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-full h-full"
            >
                <Image
                    src="/workspace_v2.png"
                    alt="Interactive Workspace"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>

            {hotspots.map((spot) => (
                <Link key={spot.name} href={spot.href}>
                    <motion.div
                        className="absolute cursor-pointer border-2 border-transparent hover:border-purple-500/50 rounded-lg bg-white/5 hover:bg-purple-500/10 transition-colors"
                        style={{
                            top: spot.top,
                            left: spot.left,
                            width: spot.width,
                            height: spot.height,
                        }}
                        onHoverStart={() => setHovered(spot.name)}
                        onHoverEnd={() => setHovered(null)}
                        whileHover={{ scale: 1.05 }}
                    >
                        {hovered === spot.name && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap pointer-events-none border border-purple-500/30 backdrop-blur-sm"
                            >
                                <p className="font-bold text-purple-400">{spot.name}</p>
                                <p className="text-xs text-gray-300">{spot.description}</p>
                            </motion.div>
                        )}
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
