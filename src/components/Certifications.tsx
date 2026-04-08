"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { name: "Modern React with Redux", issuer: "Udemy", color: "#a78bfa" },
  { name: "Node with React Fullstack Development", issuer: "Udemy", color: "#a78bfa" },
  { name: "Web Technologies", issuer: "eTech Prowess", color: "#0ea5e9" },
  { name: "Basics of Python", issuer: "Infosys Springboard", color: "#34d399" },
  { name: "Network Hacking Prevention", issuer: "Infosys Springboard", color: "#34d399" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-600 dark:text-purple-400"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-4 p-5 rounded-2xl bg-white/5 border backdrop-blur-md"
              style={{ borderColor: `${cert.color}30` }}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}40` }}>
                <Award className="w-5 h-5" style={{ color: cert.color }} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-snug">{cert.name}</p>
                <p className="text-xs mt-1" style={{ color: cert.color }}>{cert.issuer}</p>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px rounded-full"
                style={{ background: `linear-gradient(to right, transparent, ${cert.color}40, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
