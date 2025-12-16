"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings, Terminal } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="w-8 h-8 text-blue-400" />,
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Tailwind CSS"],
    },
    {
        category: "Backend",
        icon: <Server className="w-8 h-8 text-green-400" />,
        items: ["Node.js", "Express", "REST APIs", "Java", "Python"],
    },
    {
        category: "Databases",
        icon: <Database className="w-8 h-8 text-yellow-400" />,
        items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
        category: "Tools & Platforms",
        icon: <Settings className="w-8 h-8 text-purple-400" />,
        items: ["Git", "GitHub", "VS Code", "Postman"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-600 dark:text-purple-400"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/10 dark:bg-black/10 backdrop-blur-sm p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white dark:bg-zinc-800 rounded-lg w-fit group-hover:bg-purple-100 dark:group-hover:bg-zinc-700 transition-colors shadow-sm">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-gray-300 text-sm rounded-full border border-zinc-200 dark:border-zinc-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
