"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="h-auto min-h-screen flex items-center justify-center relative overflow-hidden py-32"
        >
            <div className="absolute inset-0 animated-gradient opacity-20"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                style={{ paddingTop: '12rem' }}
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading"
                    style={{ marginBottom: '0.75rem' }}
                >
                    <span className="gradient-text">Aramish Farooq</span>
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl text-gray-300 font-medium"
                    style={{ marginBottom: '1.5rem' }}
                >
                    Computer Engineering @ SJSU
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    style={{ marginBottom: '2rem' }}
                >
                    Passionate about{" "}
                    <span className="text-accent font-semibold">
                        AI/ML and hardware engineering
                    </span>
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    style={{ marginBottom: '8rem' }}
                >
                    <button
                        onClick={() => scrollToSection("#projects")}
                        className="px-8 py-4 gradient-bg text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 glow-hover"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("#contact")}
                        className="px-8 py-4 glass text-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 border border-primary/50"
                    >
                        Get In Touch
                    </button>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 justify-center mb-16"
                >
                    <a
                        href="https://github.com/aramishf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aramishfarooq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="mailto:aramish.farooq@sjsu.edu"
                        className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                        <FaEnvelope size={32} />
                    </a>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center"
                >
                    <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <HiArrowDown className="text-primary" size={24} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
