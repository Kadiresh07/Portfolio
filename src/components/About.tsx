"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-purple-600 dark:text-purple-400"
                >
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-700 dark:text-gray-300 space-y-6 text-lg leading-relaxed"
                >
                    <p>
                        Motivated Electronics and Communication Engineering (ECE) graduate currently working as a Full-Stack Developer Intern.
                        I have hands-on experience in building web applications using <strong>React, Redux, Next.js, Node.js, Express, MongoDB, and SQL</strong>.
                    </p>
                    <p>
                        Currently working on a Role-Based User Management System featuring user authentication, authorization, and scalable architecture.
                        I possess a strong foundation in Embedded Systems, IoT, and hardware-software understanding, which gives me a unique perspective on full-stack development.
                    </p>
                    <p>
                        Passionate about continuous learning, clean code practices, and delivering real-world software solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
