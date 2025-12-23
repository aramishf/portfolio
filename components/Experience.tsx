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
        title: "CCI Research Intern",
        company: "U.S. Department of Energy",
        period: "2024 - Present",
        icon: FaBriefcase,
        problem:
            "Analyzing complex vertical profiles of meteorological and aerosol data from ARM Observatories required efficient processing of multi-instrument datasets.",
        solution:
            "Built Python pipelines using NetCDF4 and Pandas to process multi-instrument data from Lidar, Radar, and iMet sensors.",
        impact:
            "Developed LSTM and XGBoost models to predict aerosol particle concentrations (10 nm – 3 μm) with high accuracy, advancing atmospheric research capabilities.",
        tech: ["Python", "NetCDF4", "Pandas", "LSTM", "XGBoost", "RandomizedSearchCV"],
    },
    {
        title: "Mathematics Tutor",
        company: "Private Tutoring",
        period: "2022 - Present",
        icon: FaChalkboardTeacher,
        problem:
            "Students struggled with conceptual understanding in Calculus I/II and Algebra, needing step-by-step logical explanations.",
        solution:
            "Provided personalized tutoring sessions focusing on breaking down complex concepts into digestible steps.",
        impact:
            "Developed strong communication and problem-solving skills that directly translate to debugging complex code and explaining technical concepts.",
        tech: ["Calculus", "Algebra", "Problem Solving", "Communication"],
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

            <div className="md:ml-12 glass rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 gradient-bg rounded-lg">
                        <experience.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold font-heading text-foreground">
                            {experience.title}
                        </h3>
                        <p className="text-primary font-semibold">{experience.company}</p>
                        <p className="text-sm text-gray-400">{experience.period}</p>
                    </div>
                </div>

                {/* Problem/Solution/Impact */}
                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-1">The Problem</h4>
                        <p className="text-gray-300">{experience.problem}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-1">The Solution</h4>
                        <p className="text-gray-300">{experience.solution}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-1">The Impact</h4>
                        <p className="text-gray-300">{experience.impact}</p>
                    </div>
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
        <section id="experience" className="section-padding relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10"></div>

            <div className="max-w-5xl mx-auto relative z-10">
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
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Bridging research, education, and real-world problem solving
                    </p>
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
