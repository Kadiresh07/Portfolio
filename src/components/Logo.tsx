"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl"
            >
                K
            </motion.div>
        </Link>
    );
}
