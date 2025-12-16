"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-transparent text-black dark:text-white flex flex-col items-center justify-center">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-purple-900/20 dark:via-black dark:to-blue-900/20"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                {/* Floating Shapes */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="mb-8 relative w-32 h-32 md:w-40 md:h-40 mx-auto"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-50 animate-pulse" />
                        <Image
                            src="/profile-pic.png"
                            alt="Kadiresh P"
                            fill
                            className="rounded-full object-cover border-4 border-white dark:border-black relative z-10"
                            priority
                        />
                    </motion.div>

                    <h2 className="text-xl md:text-2xl font-mono text-purple-600 dark:text-purple-400 mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500">
                        Kadiresh P
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Full-Stack Developer | React & Next.js Enthusiast | Embedded Systems
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </Link>
                    <a
                        href="/resume.pdf" // Placeholder for resume path
                        download
                        className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-full font-semibold transition-all transform hover:scale-105"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-12 flex gap-6 justify-center"
                >
                    <a
                        href="https://github.com/Kadiresh07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110"
                    >
                        <Github className="w-8 h-8" />
                    </a>
                    <a
                        href="https://linkedin.com/in/kadiresh-p-004057328"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors transform hover:scale-110"
                    >
                        <Linkedin className="w-8 h-8" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
        </section>
    );
}
