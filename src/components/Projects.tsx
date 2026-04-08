"use client";

import { motion } from "framer-motion";
import { Play, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Dr. Chaitra S K",
    subtitle: "Doctor Appointment Platform",
    description: "A full-stack healthcare web application designed to simplify doctor appointment booking and patient management. The platform provides a seamless experience for users to schedule consultations, view services, and access medical information across devices.",
    highlights: [
      "Built responsive UI with Next.js & Tailwind CSS",
      "Improved mobile usability by ~25%",
      "Optimized performance for faster load times",
      "Implemented clean and intuitive booking flow",
      "Deployed on Vercel with production-ready setup",
    ],
    image: "/dr chaitra.webp",
    videoUrl: "/Recording dr chaithra.mp4",
    githubUrl: "https://github.com/Kadiresh07",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#ec4899",
  },
  {
    id: 2,
    title: "Elysyal",
    subtitle: "AI-Powered Digital Experience Builder",
    description: "A modern service-based platform designed to help businesses build smarter digital experiences using AI-driven tools. Focused on performance, scalability, and SEO optimization for better visibility and faster user interaction.",
    highlights: [
      "Developed scalable architecture using Next.js",
      "Improved SEO and discoverability",
      "Reduced load time by ~20%",
      "Built reusable UI components for faster development",
      "Designed clean, futuristic UI with smooth animations",
    ],
    image: "/elysyal (1).webp",
    videoUrl: "/Recording 2026 ELYSYAL.mp4",
    githubUrl: "https://github.com/Kadiresh07",
    tech: ["Next.js", "Tailwind CSS", "AI Integration"],
    color: "#a855f7",
  },
    {
    id: 4,
    title: "Role-Based User Management System",
    subtitle: "Secure Authentication & Access Control",
    description: "A secure authentication system designed to manage multiple user roles with controlled access and protected routes.",
    highlights: [
      "Implemented JWT authentication",
      "Role-Based Access Control (RBAC)",
      "Secure API handling with Node.js & Express",
      "Protected routes and validation",
    ],
    image: "/rbms.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Kadiresh07",
    tech: ["Node.js", "Express", "JWT", "RBAC"],
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Cove And Compass",
    subtitle: "Travel Planning Platform",
    description: "A travel companion web application that helps users discover destinations and plan their journeys efficiently. It offers interactive exploration features and a smooth user experience across all devices.",
    highlights: [
      "Built with React & TypeScript",
      "Interactive destination discovery interface",
      "Responsive design for all screen sizes",
      "Clean and structured UI for better usability",
      "Focused on performance and scalability",
    ],
    image: "/project 3.webp",
    videoUrl: "/Recording 2026-cove and compasss.mp4",
    githubUrl: "https://github.com/Kadiresh07",
    tech: ["React", "TypeScript", "Next.js"],
    color: "#3b82f6",
  },
  {
    id: 5,
    title: "Netflix Clone",
    subtitle: "Streaming UI with Real-Time API Data",
    description: "A responsive Netflix-inspired web application that allows users to browse movies and TV shows using real-time API data. Designed with a focus on performance, UI accuracy, and smooth user experience.",
    highlights: [
      "Integrated movie data using external APIs",
      "Built responsive UI similar to Netflix",
    ],
    image: "/netflix clone.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Kadiresh07",
    tech: ["React", "Next.js", "API", "Tailwind CSS"],
    color: "#e50914",
  },
 
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const activeProject = projects.find((p) => p.id === selectedVideo);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 px-4 sm:px-6 text-white overflow-hidden bg-transparent"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Video Modal */}
      {selectedVideo && activeProject?.videoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              className="w-full h-full"
            >
              <source src={activeProject.videoUrl} type="video/mp4" />
            </video>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-600 dark:text-purple-400">
            Projects
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects List */}
        <div className="space-y-20 sm:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 sm:gap-12 items-center`}
            >
              {/* Project Info */}
              <div className="w-full lg:flex-1 space-y-5">
                <div>
                  <span className="text-purple-500 font-semibold mb-2 block tracking-wider uppercase text-xs">
                    Featured Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-purple-200/60 font-medium text-base sm:text-lg italic">
                    {project.subtitle}
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                  <div className="relative p-5 sm:p-7 rounded-2xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-1.5">
                      <p className="text-purple-300 font-semibold text-xs sm:text-sm">Key Highlights:</p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start">
                            <span className="text-purple-400 mr-2 mt-0.5">â€¢</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 border border-purple-500/30 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-2">
                  {project.videoUrl && (
                    <button
                      onClick={() => setSelectedVideo(project.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-900/70 border border-purple-500/30 text-white transition-all group"
                      aria-label="Watch Project Video"
                    >
                      <Play size={16} fill="currentColor" className="text-purple-300" />
                      <span className="text-sm font-medium">Watch Video</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image or Icon */}
              <div className="w-full lg:flex-1">
                {project.image ? (
                  <div
                    className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] group cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => project.videoUrl && setSelectedVideo(project.id)}
                  >
                    <div
                      className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none rounded-2xl"
                      style={{ backgroundColor: `${project.color}40` }}
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    {project.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                          <Play size={28} fill="white" className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-500">
                    <div
                      className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
                      style={{ backgroundColor: `${project.color}40` }}
                    />
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex flex-col items-center gap-3 relative z-10"
                    >
                      <Lock size={64} className="text-cyan-400" strokeWidth={1} />
                      <p className="text-cyan-300 font-semibold text-sm text-center px-6">Secure Authentication System</p>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
