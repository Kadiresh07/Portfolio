"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Radical Now Lab",
        role: "Software Engineer Intern",
        period: "Aug 2025 – Mar 2026",
        description: [
            "Engineered responsive frontend applications using React.js and Next.js, improving page load performance by ~20%",
            "Designed reusable and scalable UI components, reducing development time by ~15%",
            "Developed and integrated REST APIs using Node.js and Express.js",
            "Built a Role-Based User Management System with secure authentication and authorization",
            "Implemented JWT-based authentication and RBAC for multi-role access control",
            "Designed and managed databases using MongoDB and SQL",
            "Strengthened security using protected routes, validation, and session handling",
            "Optimized UI and API performance, improving response time and user experience",
            "Collaborated in Agile sprints using Git for efficient feature delivery",
        ],
    },
    {
        company: "eTech Prowess",
        role: "Web Technologies Intern",
        period: "Feb 2025 – May 2025",
        description: [
            "Built responsive web pages using HTML, CSS, and JavaScript",
            "Developed interactive UI components using ES6+ features",
            "Debugged and resolved UI issues, improving application stability",
            "Gained hands-on experience with modern development tools (VS Code, Git)",
            "Completed multiple mini-projects to strengthen real-world development skills",
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
                    Work Experience
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

                            <div className="relative rounded-2xl p-5 bg-white/5 border border-purple-500/20 backdrop-blur-md">
                                <ul className="space-y-2 text-zinc-300 dark:text-gray-300">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="leading-relaxed text-sm flex items-start gap-2">
                                            <span className="text-purple-400 mt-1 shrink-0">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
