"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-4 bg-transparent text-white overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-center">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[200px] w-[150%] md:w-[100%] h-[400px] bg-purple-700/40 blur-[120px] rounded-[100%]"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-600 dark:text-purple-400">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center min-h-[360px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-sm md:max-w-md relative z-10"
            >
              <svg viewBox="0 0 420 300" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="200" width="300" height="14" rx="4" fill="#0ea5e9" opacity="0.9" />
                <rect x="100" y="214" width="12" height="70" rx="3" fill="#0284c7" />
                <rect x="308" y="214" width="12" height="70" rx="3" fill="#0284c7" />
                <rect x="196" y="170" width="28" height="32" rx="3" fill="#0284c7" />
                <rect x="176" y="198" width="68" height="8" rx="3" fill="#0369a1" />
                <rect x="110" y="55" width="200" height="120" rx="8" fill="#0c1a2e" stroke="#0ea5e9" strokeWidth="2.5" />
                <rect x="118" y="63" width="184" height="104" rx="5" fill="#050d1a" />
                <rect x="118" y="63" width="184" height="18" rx="5" fill="#0a1628" />
                <circle cx="130" cy="72" r="3.5" fill="#ff5f57" opacity="0.8" />
                <circle cx="142" cy="72" r="3.5" fill="#febc2e" opacity="0.8" />
                <circle cx="154" cy="72" r="3.5" fill="#28c840" opacity="0.8" />
                <rect x="122" y="87" width="54" height="18" rx="4" fill="#0d2a3a" stroke="#61DAFB" strokeWidth="0.8" />
                <text x="149" y="99" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#61DAFB" fontFamily="monospace">React</text>
                <rect x="184" y="87" width="54" height="18" rx="4" fill="#1a1a1a" stroke="#ffffff" strokeWidth="0.8" />
                <text x="211" y="99" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#ffffff" fontFamily="monospace">Next.js</text>
                <rect x="122" y="111" width="54" height="18" rx="4" fill="#0d2a1a" stroke="#68d391" strokeWidth="0.8" />
                <text x="149" y="123" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#68d391" fontFamily="monospace">Node.js</text>
                <rect x="184" y="111" width="54" height="18" rx="4" fill="#1a0a2e" stroke="#a78bfa" strokeWidth="0.8" />
                <text x="211" y="123" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#a78bfa" fontFamily="monospace">Redux</text>
                <rect x="122" y="135" width="54" height="18" rx="4" fill="#0a1f0a" stroke="#4ade80" strokeWidth="0.8" />
                <text x="149" y="147" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4ade80" fontFamily="monospace">MongoDB</text>
                <rect x="184" y="135" width="54" height="18" rx="4" fill="#2a1200" stroke="#fb923c" strokeWidth="0.8" />
                <text x="211" y="147" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#fb923c" fontFamily="monospace">JWT</text>
                <rect x="120" y="208" width="150" height="18" rx="4" fill="#0c1a2e" stroke="#0ea5e9" strokeWidth="1.2" />
                <rect x="126" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="138" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="150" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="162" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="174" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="186" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="198" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="210" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="222" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="234" y="212" width="9" height="5" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                <rect x="282" y="208" width="22" height="16" rx="6" fill="#0c1a2e" stroke="#0ea5e9" strokeWidth="1.2" />
                <line x1="293" y1="208" x2="293" y2="224" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.5" />
                <rect x="340" y="190" width="18" height="16" rx="3" fill="#0ea5e9" opacity="0.7" />
                <path d="M358 196 Q366 196 366 202 Q366 208 358 208" stroke="#0ea5e9" strokeWidth="1.5" fill="none" opacity="0.6" />
              </svg>
            </motion.div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed font-light">
              <p>I am a passionate <strong className="text-white">Full Stack Developer</strong> specializing in creating seamless, scalable, and user-centric digital experiences. I focus on bridging the gap between intuitive design and robust engineering to build high-quality web applications.</p>
              <p>With hands-on expertise in <span className="text-purple-300 font-semibold">React.js, Next.js, Redux, Node.js, and MongoDB</span>, I develop applications that are fast, secure, and highly maintainable.</p>
              <div className="pt-4 border-t border-purple-500/20">
                <p className="text-purple-200 font-medium italic">&quot;Committed to solving real-world problems through clean code, efficient architecture, and innovative technology solutions.&quot;</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="p-5 rounded-2xl bg-white/5 border border-purple-500/20 backdrop-blur-md">
                <h4 className="text-purple-300 font-bold mb-3">Core Focus</h4>
                <ul className="text-sm text-gray-400 space-y-1.5">
                  <li>- Full-stack web development</li>
                  <li>- UI performance optimization</li>
                  <li>- Secure API design and auth (JWT, RBAC)</li>
                  <li>- State management using Redux</li>
                  <li>- Database design (MongoDB)</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="p-5 rounded-2xl bg-white/5 border border-blue-500/20 backdrop-blur-md">
                <h4 className="text-blue-300 font-bold mb-3">Experience</h4>
                <ul className="text-sm text-gray-400 space-y-1.5">
                  <li>- Built and deployed real-world apps</li>
                  <li>- Secure auth and role-based access</li>
                  <li>- State management with Redux</li>
                  <li>- Scalable MongoDB databases</li>
                  <li>- Performance optimization</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
