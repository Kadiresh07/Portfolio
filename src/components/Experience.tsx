"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Radical Now Lab",
        role: "Full-Stack Developer Intern",
        period: "August 2025 – November 2025",
        description: [
            "Working on a Role-Based User Management System with authentication, authorization, and secure access control.",
            "Building front-end interfaces using React, Redux, and Next.js with reusable and scalable component structures.",
            "Developing backend services and REST APIs using Node.js and Express.",
            "Designing and managing data models using MongoDB and SQL for user, role, and permission mapping.",
            "Implementing JWT-based authentication, session handling, and protected route logic.",
        ],
    },
    {
        company: "eTech Prowess",
        role: "Web Technologies Intern",
        period: "Previous Internship",
        description: [
            "Acquired foundational knowledge of HTML, CSS, JavaScript, and SQL for front-end and database development.",
            "Gained hands-on experience in web development using VS Code and modern development tools.",
            "Developed interactive web pages and dynamic UI components.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-600 dark:text-purple-400"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-purple-500/30"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />

                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    {exp.company}
                                </h3>
                                <span className="text-zinc-600 dark:text-gray-400 text-sm flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-xl text-purple-500 dark:text-purple-300 mb-4">{exp.role}</h4>

                            <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-gray-300">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
