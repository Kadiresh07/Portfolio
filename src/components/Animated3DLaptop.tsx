"use client";

import { motion } from "framer-motion";

export default function Animated3DLaptop() {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center" style={{ perspective: "1500px" }}>
            <motion.div
                className="relative w-full h-full flex items-center justify-center cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                    rotateY: [-5, 5, -5],
                    rotateX: [10, 20, 10],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{
                    rotateY: 15,
                    rotateX: 5,
                    scale: 1.05,
                    transition: { duration: 0.5 }
                }}
            >
                {/* Laptop Lid (Screen) */}
                <div
                    className="absolute w-56 h-36 md:w-72 md:h-48 bg-[#1e1e2f] border-[6px] border-[#0B0515] rounded-t-xl origin-bottom shadow-2xl overflow-hidden flex flex-col"
                    style={{
                        transform: "translateY(-40px) rotateX(-15deg)",
                        transformStyle: "preserve-3d",
                        boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                    }}
                >
                    {/* Screen Content - Editor UI */}
                    <div className="w-full h-4 bg-[#0B0515] flex items-center px-2 gap-1 border-b border-gray-800">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 w-full bg-[#1e1e2f] p-3 md:p-4 overflow-hidden relative">
                        {/* Animated Code Lines */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <motion.div className="h-2 md:h-2.5 w-3/4 bg-purple-500 rounded-full" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                            <div className="h-2 md:h-2.5 w-1/2 bg-blue-400 rounded-full" />
                            <div className="h-2 md:h-2.5 w-5/6 bg-green-400 rounded-full" />
                            <div className="h-2 md:h-2.5 w-1/3 bg-pink-400 rounded-full ml-4" />
                            <div className="h-2 md:h-2.5 w-2/3 bg-yellow-400 rounded-full ml-4" />
                            <div className="h-2 md:h-2.5 w-1/4 bg-blue-400 rounded-full" />
                            <div className="h-2 md:h-2.5 w-1/2 bg-purple-500 rounded-full" />
                        </div>
                        
                        {/* Glowing effect inside screen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
                    </div>
                    
                    {/* Brand logo space at bottom bezel */}
                    <div className="w-full h-4 bg-[#0B0515] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                    </div>
                </div>

                {/* Laptop Base (Keyboard & Trackpad) */}
                <div
                    className="absolute w-64 h-48 md:w-80 md:h-56 bg-gradient-to-br from-[#2a2a3f] to-[#1e1e2f] rounded-lg shadow-2xl flex flex-col items-center justify-start border-b-[8px] border-[#0B0515]"
                    style={{
                        transform: "translateY(70px) rotateX(70deg)",
                        transformStyle: "preserve-3d",
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 40px -10px, rgba(147, 51, 234, 0.4) 0px 20px 40px"
                    }}
                >
                    {/* Keyboard Area */}
                    <div className="w-56 h-24 md:w-64 md:h-28 bg-[#0B0515] rounded-md mt-4 md:mt-6 p-1 flex items-center justify-center" style={{ boxShadow: "inset 0 4px 10px rgba(0,0,0,0.5)"}}>
                        {/* Mocking keys with CSS Grid */}
                        <div className="w-full h-full grid grid-cols-12 grid-rows-5 gap-0.5 md:gap-1 p-1">
                            {Array.from({ length: 60 }).map((_, i) => (
                                <motion.div 
                                    key={i} 
                                    className="bg-[#3a3a4f] rounded-xs shadow-[0_2px_0_#1a1a2e]"
                                    whileHover={{ y: 1, boxShadow: "0_0px_0_#1a1a2e", backgroundColor: "#9333ea" }}
                                ></motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Trackpad */}
                    <div className="w-16 h-10 md:w-20 md:h-12 bg-[#3a3a4f] rounded-md mt-2 md:mt-3 border-[1px] border-[#1e1e2f] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"></div>
                </div>
            </motion.div>
        </div>
    );
}
