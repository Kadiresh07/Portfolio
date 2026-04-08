"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Animated3DLaptop from "./Animated3DLaptop";
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiNextdotjs } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-black dark:text-white flex flex-col items-center justify-center pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-900/10"
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
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/30 rounded-full blur-3xl"
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
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 gap-12 lg:gap-8">
                {/* Left Side: Text Content */}
                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start w-full"
                    >
                        {/* Profile & Name Container */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-center lg:items-center gap-6 mb-8 w-full justify-center lg:justify-start">
                            {/* Cool Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-tr from-purple-700 to-purple-400 shadow-[0_0_50px_rgba(147,51,234,0.6)] shrink-0"
                            >
                                <div className="w-full h-full rounded-full bg-purple-900/40 p-1.5 overflow-hidden">
                                    <Image
                                        src="/kd.png"
                                        alt="Kadiresh P"
                                        width={224}
                                        height={224}
                                        className="w-full h-full object-cover rounded-full"
                                        style={{ objectPosition: "center 20%" }}
                                        priority
                                    />
                                </div>
                            </motion.div>

                            <div className="text-center sm:text-left">
                                <h2 className="text-2xl md:text-3xl font-mono text-purple-600 dark:text-purple-400 mb-2">
                                    Hello, I'm
                                </h2>
                                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 leading-tight whitespace-nowrap">
                                    Kadiresh P
                                </h1>
                            </div>
                        </div>

                        <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-8 text-center lg:text-left h-8">
                            <TypeAnimation
                                sequence={[
                                    'Full-Stack Developer',
                                    1500,
                                    'React & Next.js Developer',
                                    1500,
                                    'Backend Developer',
                                    1500,
                                    'MERN Stack Developer',
                                    1500
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-mono text-purple-600 dark:text-purple-400 font-medium"
                            />
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </Link>
                        <a
                            href="/KADIRESH-P-CV.pdf"
                            download
                            className="px-8 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 rounded-full font-semibold transition-all transform hover:scale-105 flex justify-center items-center"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-12 flex gap-6 justify-center lg:justify-start"
                    >
                        <a
                            href="https://github.com/Kadiresh07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                        >
                            <Github className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/kadiresh-p-004057328"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Side: 3D Laptop */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full flex justify-center lg:justify-end items-center"
                >
                    <div className="relative">
                        <Animated3DLaptop />

                        {/* Floating Tech Icons in Black Circles */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -left-4 md:-top-10 md:-left-10 w-14 h-14 md:w-16 md:h-16 bg-[#111111] rounded-full flex items-center justify-center shadow-2xl border border-gray-800/50 z-20"
                        >
                            <SiReact className="w-7 h-7 md:w-8 md:h-8 text-[#61DAFB]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 -left-8 md:top-1/3 md:-left-16 w-12 h-12 md:w-14 md:h-14 bg-[#111111] rounded-full flex items-center justify-center shadow-2xl border border-gray-800/50 z-20"
                        >
                            <SiJavascript className="w-6 h-6 md:w-7 md:h-7 text-[#F7DF1E]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-2 -right-4 md:-top-5 md:-right-8 w-12 h-12 md:w-14 md:h-14 bg-[#111111] rounded-full flex items-center justify-center shadow-2xl border border-gray-800/50 z-20"
                        >
                            <SiNodedotjs className="w-6 h-6 md:w-7 md:h-7 text-[#339933]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-4 -right-6 md:bottom-10 md:-right-12 w-14 h-14 md:w-16 md:h-16 bg-[#111111] rounded-full flex items-center justify-center shadow-2xl border border-gray-800/50 z-20"
                        >
                            <SiTypescript className="w-7 h-7 md:w-8 md:h-8 text-[#3178C6]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                            className="absolute -top-12 md:-top-16 left-0 right-0 mx-auto w-12 h-12 md:w-14 md:h-14 bg-[#111111] rounded-full flex items-center justify-center shadow-2xl border border-gray-800/50 z-20"
                        >
                            <SiNextdotjs className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="w-6 h-6 text-purple-500/50" />
            </motion.div>
        </section>
    );
}
