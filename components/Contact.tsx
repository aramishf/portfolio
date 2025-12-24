"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [copied, setCopied] = useState(false);

    const email = "farooqaramish@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/aramishf",
            color: "hover:text-green-400",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://linkedin.com/in/aramishfarooq",
            color: "hover:text-emerald-400",
        },
        {
            name: "Email",
            icon: FaEnvelope,
            url: `mailto:${email}`,
            color: "hover:text-teal-400",
        },
    ];

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-black/20 flex justify-center">
            <div className="absolute inset-0 animated-gradient opacity-10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-4">
                        Interested in AI/ML collaboration or internship opportunities?
                    </p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, research opportunities, or
                        innovative ideas in machine learning and hardware engineering.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-2xl p-8 mb-12 max-w-2xl mx-auto"
                    >
                        <p className="text-sm text-gray-400 mb-2">Email me at</p>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <a
                                href={`mailto:${email}`}
                                className="text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform"
                            >
                                {email}
                            </a>
                            <button
                                onClick={copyEmail}
                                className="p-3 glass rounded-lg hover:scale-110 transition-all border border-primary/30 hover:border-primary/60"
                                title="Copy email"
                            >
                                {copied ? (
                                    <FaCheck className="text-green-400" size={20} />
                                ) : (
                                    <FaCopy className="text-primary" size={20} />
                                )}
                            </button>
                        </div>
                        {copied && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-green-400 mt-2"
                            >
                                ✓ Email copied to clipboard!
                            </motion.p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-gray-400 mb-6">Or connect with me on</p>
                        <div className="flex gap-6 justify-center">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                    className={`p-4 glass rounded-full ${link.color} transition-all hover:scale-110 border border-primary/30 hover:border-primary/60`}
                                    title={link.name}
                                >
                                    <link.icon size={32} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 text-gray-500 italic"
                    >
                        "Let's build something amazing together"
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
