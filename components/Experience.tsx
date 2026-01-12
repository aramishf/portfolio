"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";

// ============================================
// EXPERIENCE SECTION COMPONENT
// ============================================
// Displays work experience in a timeline format
// Features:
// - Scroll-triggered animations
// - Problem/Solution/Impact format
// - Tech stack badges
// - Timeline visual
// ============================================

const experiences = [
    {
        title: "AI Content Specialist (Conversational AI)",
        company: "Handshake",
        period: "Dec 2025 - Present",
        icon: FaBriefcase,
        description:
            "Optimizing LLMs through RLHF training and expert persona simulation, generating diverse conversational datasets to improve AI response quality.",
        highlights: [
            "Conducted 100+ recorded sessions for model training data",
            "Simulated expert personas in AI/ML domains for Q&A evaluation",
        ],
        tech: ["AI Training", "RLHF", "Prompt Engineering", "NLP"],
    },
    {
        title: "Machine Learning Research Engineer Intern",
        company: "Pacific Northwest National Laboratory (U.S. DOE)",
        period: "Jan 2025 - Jun 2025",
        icon: FaBriefcase,
        description:
            "Developed ML models to predict aerosol size distributions, creating low-cost alternatives to traditional atmospheric sampling methods.",
        highlights: [
            "Built Random Forest, XGBoost, and LSTM models for particle prediction (<135 nm)",
            "Visualized aerosol trends (10 nm – 3 μm) using Matplotlib and Seaborn",
        ],
        tech: ["Python", "Random Forest", "XGBoost", "LSTM", "Pandas"],
    },
    {
        title: "Machine Learning/AI Engineer Intern",
        company: "Pacific Northwest National Laboratory (U.S. DOE)",
        period: "Aug 2024 - Dec 2024",
        icon: FaBriefcase,
        description:
            "Built ML models and interactive GUI tool for predicting vertical aerosol concentration from ground-based atmospheric measurements.",
        highlights: [
            "Developed Tkinter GUI for real-time aerosol predictions",
            "Collaborated remotely with atmospheric scientists on modeling efforts",
        ],
        tech: ["Python", "scikit-learn", "Tkinter", "Pandas"],
    },
    {
        title: "Mathematics Tutor",
        company: "Diablo Valley College",
        period: "Aug 2024 - Dec 2024",
        icon: FaChalkboardTeacher,
        description:
            "Provided one-on-one and small group tutoring in Algebra I/II, Precalculus, and Calculus I/II, helping students build confidence and improve grades.",
        highlights: [
            "Taught problem-solving strategies and critical thinking techniques",
            "Strengthened communication and adaptive teaching skills",
        ],
        tech: ["Calculus", "Algebra", "Communication"],
    },
    {
        title: "Volunteer",
        company: "Ahmadiyya Muslim Community",
        period: "Jun 2014 - Present",
        icon: FaChalkboardTeacher,
        description:
            "11+ years of community service including environmental cleanups, food drives, and charity programs supporting underprivileged families.",
        highlights: [
            "Organized and executed sustainability and beautification initiatives",
            "Contributed to combating food insecurity through consistent service",
        ],
        tech: ["Community Service", "Leadership", "Teamwork"],
    },
];

// ============================================
// EXPERIENCE CARD COMPONENT
// ============================================
function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
        >
            {/* Timeline connector */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary hidden md:block"></div>

            {/* Timeline dot */}
            <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1.5 hidden md:block glow"></div>

            <div className="glass rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300" style={{ paddingLeft: '64px' }}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold font-heading text-foreground">
                            {experience.title}
                        </h3>
                        <p className="text-primary font-semibold">{experience.company}</p>
                        <p className="text-sm text-gray-400">{experience.period}</p>
                    </div>
                </div>

                {/* Description & Highlights */}
                <div className="mb-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
                    <ul className="space-y-2">
                        {experience.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start">
                                <span className="text-primary mr-2">▹</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm glass rounded-full text-accent border border-accent/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// ============================================
// MAIN EXPERIENCE SECTION
// ============================================
export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-black/15 flex justify-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
