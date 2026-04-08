"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TerminalSquare, Monitor, Server, Database, Wrench, Zap } from "lucide-react";

const categories = [
  {
    id: "frontend", label: "Frontend", icon: Monitor,
    color: "#a855f7", glow: "rgba(168,85,247,0.7)", gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "React",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "HTML5",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "backend", label: "Backend", icon: Server,
    color: "#3b82f6", glow: "rgba(59,130,246,0.7)", gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Node.js",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
      { name: "REST APIs",  icon: "🔗" },
      { name: "JWT Auth",   icon: "🔐" },
    ],
  },
  {
    id: "database", label: "Database", icon: Database,
    color: "#22c55e", glow: "rgba(34,197,94,0.7)", gradient: "from-green-400 to-emerald-500",
    skills: [
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    id: "tools", label: "Tools", icon: Wrench,
    color: "#f97316", glow: "rgba(251,146,60,0.7)", gradient: "from-orange-400 to-yellow-400",
    skills: [
      { name: "Git",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
      { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Vercel",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
    ],
  },
  {
    id: "special", label: "Special", icon: Zap,
    color: "#ec4899", glow: "rgba(236,72,153,0.7)", gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "RBAC",        icon: "🛡️" },
      { name: "Performance", icon: "⚡" },
      { name: "Responsive",  icon: "📱" },
      { name: "Clean Code",  icon: "✨" },
    ],
  },
];

type Skill = { name: string; src?: string; icon?: string; invert?: boolean };

// Laptop SVG — 3D perspective purple-themed
function LaptopSVG({
  active, cat, onTabClick,
}: {
  active: number;
  cat: typeof categories[0];
  onTabClick: (i: number) => void;
}) {
  return (
    <svg viewBox="0 0 700 480" width="1000" height="686" style={{ display: "block" }}>
      <defs>
        <linearGradient id="lid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d1b4e" />
          <stop offset="100%" stopColor="#1a0a2e" />
        </linearGradient>
        <linearGradient id="base-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1035" />
          <stop offset="100%" stopColor="#120820" />
        </linearGradient>
        <linearGradient id="screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d0520" />
          <stop offset="100%" stopColor="#080312" />
        </linearGradient>
        <filter id="laptop-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="screen-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="screen-clip">
          <rect x="90" y="28" width="520" height="300" rx="8" />
        </clipPath>
      </defs>

      {/* Glow behind laptop */}
      <ellipse cx="350" cy="420" rx="260" ry="32"
        fill={cat.color} opacity="0.14" filter="url(#laptop-glow)" />

      {/* ── Laptop lid (screen) ── */}
      <rect x="74" y="12" width="552" height="328" rx="18"
        fill="url(#lid-grad)"
        stroke={cat.color} strokeWidth="2" opacity="0.9"
        filter="url(#laptop-glow)" />
      <rect x="90" y="28" width="520" height="300" rx="8"
        fill="url(#screen-grad)" />

      {/* Screen content */}
      <g clipPath="url(#screen-clip)">
        {/* Scanlines */}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={i} x1="90" y1={28 + i * 18} x2="610" y2={28 + i * 18}
            stroke="rgba(255,255,255,0.012)" strokeWidth="1" />
        ))}

        {/* Top bar */}
        <rect x="90" y="28" width="520" height="28" fill="rgba(0,0,0,0.55)" />
        <circle cx="106" cy="42" r="5.5" fill="#ff5f57" opacity="0.85" />
        <circle cx="122" cy="42" r="5.5" fill="#febc2e" opacity="0.85" />
        <circle cx="138" cy="42" r="5.5" fill="#28c840" opacity="0.85" />
        <text x="350" y="46" textAnchor="middle" fontSize="10"
          fill="rgba(255,255,255,0.3)" fontFamily="monospace">skills.tsx — My Tech Stack</text>

        {/* Tab bar */}
        <rect x="90" y="56" width="520" height="30" fill="rgba(0,0,0,0.3)" />
        {categories.map((c, i) => {
          const tabW = 520 / categories.length;
          const tx = 90 + i * tabW;
          const isAct = active === i;
          return (
            <g key={c.id} onClick={() => onTabClick(i)} style={{ cursor: "pointer" }}>
              {isAct && (
                <rect x={tx} y="56" width={tabW} height="30"
                  fill={`${c.color}25`}
                  stroke={c.color} strokeWidth="0.6" opacity="0.9" />
              )}
              <text x={tx + tabW / 2} y="75" textAnchor="middle"
                fontSize="10" fontWeight={isAct ? "700" : "400"}
                fill={isAct ? c.color : "rgba(255,255,255,0.3)"}>
                {c.label}
              </text>
            </g>
          );
        })}

        {/* Active tab indicator */}
        <motion.rect
          key={`tab-ind-${active}`}
          x={90 + active * (520 / categories.length)}
          y="84" width={520 / categories.length} height="2.5" rx="1.5"
          fill={cat.color}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Screen body */}
        <rect x="90" y="87" width="520" height="241" fill="rgba(0,0,0,0.2)" />

        {/* Grid lines */}
        {[1, 2, 3, 4].map(i => (
          <line key={`sg${i}`} x1="90" y1={87 + i * 60} x2="610" y2={87 + i * 60}
            stroke={cat.color} strokeWidth="0.4" opacity="0.12" />
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <line key={`sv${i}`} x1={90 + i * 65} y1="87" x2={90 + i * 65} y2="328"
            stroke={cat.color} strokeWidth="0.4" opacity="0.12" />
        ))}

        {/* Skill icons on screen — bigger, more spaced */}
        <AnimatePresence>
          {cat.skills.map((skill, i) => {
            const col = i % 6;
            const row = Math.floor(i / 6);
            const ix = 130 + col * 72;
            const iy = 130 + row * 80;
            return (
              <motion.g key={`${cat.id}-${skill.name}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 260, damping: 20 }}
              >
                <rect x={ix - 24} y={iy - 24} width="48" height="48" rx="10"
                  fill={`${cat.color}18`}
                  stroke={cat.color} strokeWidth="1" opacity="0.9"
                  filter="url(#screen-glow)" />
                {skill.src && (
                  <image href={skill.src} x={ix - 17} y={iy - 17} width="34" height="34"
                    style={{ filter: skill.invert ? "invert(1) brightness(0.85)" : undefined }} />
                )}
                {skill.icon && (
                  <text x={ix} y={iy + 10} textAnchor="middle" fontSize="24">{skill.icon}</text>
                )}
                <text x={ix} y={iy + 32} textAnchor="middle" fontSize="7.5"
                  fill="rgba(255,255,255,0.6)">{skill.name}</text>
              </motion.g>
            );
          })}
        </AnimatePresence>

        {/* Screen edge glow */}
        <rect x="90" y="28" width="520" height="300" rx="8"
          fill="none" stroke={cat.color} strokeWidth="1.2" opacity="0.3"
          filter="url(#screen-glow)" />
      </g>

      {/* Webcam */}
      <circle cx="350" cy="20" r="4" fill={cat.color} opacity="0.6"
        filter="url(#screen-glow)" />
      <motion.circle cx="350" cy="20" r="4" fill={cat.color}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }} />

      {/* ── Base / keyboard ── */}
      <path d="M 40 344 L 660 344 L 634 430 L 66 430 Z"
        fill="url(#base-grad)"
        stroke={cat.color} strokeWidth="1.2" opacity="0.85" />
      <rect x="74" y="338" width="552" height="12" rx="4"
        fill="#1a0a2e" stroke={cat.color} strokeWidth="1" opacity="0.7" />

      {/* Keyboard rows */}
      {[0, 1, 2, 3].map(row => (
        <g key={row}>
          {Array.from({ length: row === 0 ? 14 : row === 3 ? 6 : 13 }).map((_, k) => {
            const kw = row === 3 ? 52 : 32;
            const kx = row === 3
              ? 168 + k * (kw + 5)
              : 80 + k * (kw + 4);
            const ky = 358 + row * 16;
            return (
              <rect key={k} x={kx} y={ky} width={kw} height="12" rx="3"
                fill="rgba(168,85,247,0.08)"
                stroke="rgba(168,85,247,0.2)" strokeWidth="0.6" />
            );
          })}
        </g>
      ))}

      {/* Touchpad */}
      <rect x="268" y="424" width="164" height="38" rx="7"
        fill="rgba(168,85,247,0.06)"
        stroke="rgba(168,85,247,0.2)" strokeWidth="1" />

      {/* Base bottom glow */}
      <path d="M 66 430 L 634 430"
        stroke={cat.color} strokeWidth="2" opacity="0.3"
        filter="url(#laptop-glow)" />
    </svg>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const cat = categories[active];

  // Auto-cycle tabs
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setActive(i => (i + 1) % categories.length);
    }, 3500);
    return () => clearInterval(t);
  }, [autoPlay]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setAutoPlay(false);
  };

  return (
    <section
      id="skills"
      className="relative py-12 sm:py-20 px-2 sm:px-4 text-white overflow-hidden min-h-screen flex flex-col items-center justify-center border-t border-purple-900/30 bg-transparent"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-900/15 blur-[160px] rounded-full" />
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[120px]"
          style={{ background: cat.glow.replace("0.7", "0.08") }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 mb-5 backdrop-blur-md">
          <TerminalSquare className="w-3.5 h-3.5 text-purple-300" />
          <span className="text-xs font-semibold text-purple-200 tracking-[0.2em] uppercase">Technical Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-600 dark:text-purple-400">
          My Tech Stack
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4" />
      </motion.div>

      {/* Laptop + rain columns */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full flex items-center justify-center gap-4 px-4 overflow-x-auto"
      >
        {/* ── Laptop center ── */}
        <motion.div
          className="relative z-10 flex-shrink-0"
          style={{ width: "1000px", maxWidth: "1000px", minWidth: "1000px" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <LaptopSVG active={active} cat={cat} onTabClick={handleTabClick} />
        </motion.div>

      </motion.div>

      {/* Skills icons below laptop - always visible */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-2 sm:px-4 w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div key={cat.id} className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {cat.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${cat.color}15`,
                    border: `1px solid ${cat.color}50`,
                    boxShadow: `0 0 12px ${cat.glow}`,
                  }}>
                  {skill.icon
                    ? <span className="text-xl sm:text-2xl">{skill.icon}</span>
                    : <img src={skill.src} alt={skill.name}
                        className={`w-7 h-7 sm:w-9 sm:h-9 object-contain ${skill.invert ? "invert brightness-90" : ""}`} />
                  }
                </div>
                <span className="text-[9px] sm:text-[10px] text-white/60 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Category dots */}
      <div className="relative z-10 flex gap-2 mt-6">
        {categories.map((c, i) => (
          <button
            key={c.id}
            onClick={() => handleTabClick(i)}
            className="transition-all duration-300 rounded-full outline-none"
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              background: active === i ? c.color : "rgba(255,255,255,0.2)",
              boxShadow: active === i ? `0 0 10px ${c.glow}` : "none",
            }}
          />
        ))}
      </div>

      {/* Active category label */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`cat-label-${active}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mt-3 text-xs font-semibold tracking-widest uppercase"
          style={{ color: cat.color }}
        >
          {cat.label} — {cat.skills.length} Technologies
        </motion.p>
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none z-0" />
    </section>
  );
}