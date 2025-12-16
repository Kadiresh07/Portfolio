"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-600 dark:text-purple-400"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Contact Information</h3>

                        <div className="flex items-center gap-4 text-zinc-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-gray-500">Email</p>
                                <a href="mailto:kadiresh06@gmail.com" className="text-lg">kadiresh06@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-gray-500">Phone</p>
                                <a href="tel:+917795381687" className="text-lg">+91 7795381687</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-gray-500">Location</p>
                                <p className="text-lg">Bengaluru, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-600 dark:text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-purple-500 text-zinc-900 dark:text-white transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-600 dark:text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-purple-500 text-zinc-900 dark:text-white transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-600 dark:text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-purple-500 text-zinc-900 dark:text-white transition-colors"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
