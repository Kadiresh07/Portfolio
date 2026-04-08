"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-10 h-10 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]"
            >
                <Image
                    src="/k-logo.png"
                    alt="Kadiresh Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>
        </Link>
    );
}
