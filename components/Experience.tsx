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
        title: "Machine Learning Engineer (Payload Subsystems)",
        company: "SpartanSat",
        period: "Apr 2026 - Present",
        icon: FaBriefcase,
        description:
            "Developing an onboard pipeline for a NASA-supported CubeSat mission to automatically identify lunar crescent phases using illuminated fraction algorithms.",
        highlights: [
            "Deploying IllumiCurveNet on NVIDIA Jetson Orin Nano to reconstruct high-detail imagery of the Moon's dark side.",
            "Engineering a 200:1 compression architecture, shrinking 3.3GB of raw lunar video to 60MB for satellite downlink.",
            "Working on a lunar limb detection model to extract geometric features for autonomous positioning in deep space."
        ],
        tech: ["Edge AI", "Embedded Systems", "Computer Vision", "OpenCV", "PyTorch"],
    },
    {
        title: "AI/LLM Evaluation & Data Specialist",
        company: "Handshake",
        period: "Dec 2025 - Present",
        icon: FaBriefcase,
        description:
            "Evaluating and fine-tuning advanced AI models through human-in-the-loop data analysis and RLHF.",
        highlights: [
            "Reviewing model reasoning, voice-to-voice conversation dynamics, and complex image-generation instructions.",
            "Conducted many recorded conversational sessions to provide diverse, natural language datasets for model training.",
            "Acted as Subject Matter Expert in AI/ML domains to evaluate model performance in complex Q&A scenarios."
        ],
        tech: ["RLHF", "Human-in-the-Loop", "LLM Evaluation", "AI Training", "NLP"],
    },
    {
        title: "Data Research Annotator",
        company: "Prolific",
        period: "Jan 2026 - Mar 2026",
        icon: FaBriefcase,
        description:
            "Performed high-fidelity language assessments and provided human-in-the-loop feedback for academic and corporate AI research.",
        highlights: [
            "Validated Urdu/Hindi-English language data to improve translation accuracy and NLP model performance.",
            "Provided detailed preference-based data and ranking to ensure data integrity for behavioral training sets.",
            "Participated in UX/UI usability testing for emerging technologies like Smart Grid AR."
        ],
        tech: ["Data Validation", "HITL", "UX/UI Research", "NLP"],
    },
    {
        title: "Machine Learning Research Engineer Intern",
        company: "Pacific Northwest National Laboratory",
        period: "Jan 2025 - Jun 2025",
        icon: FaBriefcase,
        description:
            "Developed supervised ML models in Python to predict aerosol size distributions, contributing to climate research.",
        highlights: [
            "Built Random Forest, XGBoost, and LSTM models focusing on particles <135 nm.",
            "Processed and engineered features from high-quality ARM SGP datasets using Pandas and scikit-learn.",
            "Visualized aerosol size distribution trends (10 nm – 3 μm) using Matplotlib and Seaborn."
        ],
        tech: ["Python", "XGBoost", "LSTM", "Pandas", "scikit-learn"],
    },
    {
        title: "Machine Learning/AI Engineer Intern",
        company: "Pacific Northwest National Laboratory",
        period: "Aug 2024 - Dec 2024",
        icon: FaBriefcase,
        description:
            "Developed ML models and built an interactive GUI tool for predicting vertical aerosol concentration from ground-based measurements.",
        highlights: [
            "Handled data preprocessing and transformation of large meteorological datasets.",
            "Built an interactive GUI tool in Tkinter for predicting aerosol concentration outputs.",
            "Collaborated remotely with atmospheric scientists and engineers on aerosol modeling."
        ],
        tech: ["Python", "Machine Learning", "Tkinter", "Data Analysis"],
    },
    {
        title: "Tutor & Volunteer",
        company: "Diablo Valley College",
        period: "Jan 2023 - Dec 2024",
        icon: FaChalkboardTeacher,
        description:
            "Tutored students in advanced mathematics and collaborated on project management initiatives.",
        highlights: [
            "Tutored Algebra I & II, Precalculus, and Calculus I & II in one-on-one and small group sessions.",
            "Broke down complex math concepts and taught problem-solving strategies.",
            "Collaborated with Project Bracket to design a board game, gaining insights into project management."
        ],
        tech: ["Calculus", "Leadership", "Communication", "Project Management"],
    },
    {
        title: "Computer Hardware Specialist",
        company: "Independent",
        period: "Jan 2018 - Present",
        icon: FaBriefcase,
        description:
            "Built custom gaming PCs and provided hardware diagnostics and repair services for clients.",
        highlights: [
            "Assembled 15+ custom gaming computers with optimized component selection.",
            "Diagnosed and resolved hardware failures including GPU, RAM, and motherboard issues.",
            "Performed stress testing and benchmarking to ensure system stability and performance."
        ],
        tech: ["PC Building", "Hardware Diagnostics", "Optimization", "Troubleshooting"],
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
                    className="text-center mb-24"
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
