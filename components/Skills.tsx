"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTensorflow, SiPytorch, SiDocker, SiGit, SiLinux, SiPostgresql } from "react-icons/si";
import { FaMicrochip, FaServer, FaRobot } from "react-icons/fa";

const skillCategories = [
    {
        title: "Languages",
        icon: FaServer,
        skills: [
            { name: "Python", icon: SiPython, level: "Expert" },
            { name: "C++", icon: SiCplusplus, level: "Proficient" },
            { name: "JavaScript", icon: SiJavascript, level: "Proficient" },
            { name: "TypeScript", icon: SiTypescript, level: "Proficient" },
            { name: "SQL", icon: SiPostgresql, level: "Intermediate" },
            { name: "Verilog/SystemVerilog", icon: FaMicrochip, level: "Intermediate" },
        ],
    },
    {
        title: "AI/ML",
        icon: FaRobot,
        skills: [
            { name: "XGBoost", level: "Advanced" },
            { name: "LSTM", level: "Advanced" },
            { name: "RAG", level: "Advanced" },
            { name: "FAISS", level: "Intermediate" },
            { name: "TensorFlow", icon: SiTensorflow, level: "Intermediate" },
            { name: "PyTorch", icon: SiPytorch, level: "Intermediate" },
        ],
    },
    {
        title: "Hardware",
        icon: FaMicrochip,
        skills: [
            { name: "Digital Systems Design", level: "" },
            { name: "FSM Design", level: "" },
            { name: "ALU Design", level: "" },
            { name: "CMOS/MOSFET Analysis", level: "" },
            { name: "FPGA (Basys3)", level: "" },
            { name: "Vivado", level: "" },
        ],
    },
    {
        title: "Tools & Frameworks",
        icon: FaServer,
        skills: [
            { name: "Git", icon: SiGit, level: "" },
            { name: "Docker", icon: SiDocker, level: "" },
            { name: "Next.js", icon: SiNextdotjs, level: "" },
            { name: "React", icon: SiReact, level: "" },
            { name: "FastAPI", level: "" },
            { name: "Linux/Bash", icon: SiLinux, level: "" },
        ],
    },
];

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 gradient-bg rounded-lg">
                    <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground">
                    {category.title}
                </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors group"
                    >
                        {skill.icon && <skill.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-300 truncate">{skill.name}</p>
                            {skill.level && (
                                <p className="text-xs text-gray-500">{skill.level}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-padding relative overflow-hidden bg-black/10 flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
                        A diverse toolkit spanning software, AI/ML, and hardware engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
