"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiPython, SiReact, SiTypescript, SiNextdotjs, SiFastapi, SiDocker } from "react-icons/si";

const projects = [
    {
        title: "RAG-Based Document Analysis System",
        subtitle: "AI Research Assistant",
        description:
            "Full-stack AI research assistant that allows users to upload PDF documents and ask complex questions while receiving accurate, citation-backed answers using Retrieval-Augmented Generation (RAG).",
        highlights: [
            "Implemented RAG architecture with FAISS vector database for semantic search",
            "Integrated LLaMA 3 via Ollama for local LLM inference",
            "Designed strict prompts to prevent hallucinations and force evidence-based responses",
            "Built multi-user authentication system with JWT",
            "Created real-time chat interface with instant citation tooltips",
        ],
        tech: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Python", icon: SiPython },
            { name: "Docker", icon: SiDocker },
        ],
        github: "https://github.com/aramishf/portfolio",
        featured: true,
        gradient: "from-purple-500 to-blue-500",
    },
    {
        title: "Aerosol Particle ML Predictor",
        subtitle: "Research Application",
        description:
            "GUI-based application that predicts particle concentration based on environmental variables using machine learning models.",
        highlights: [
            "Developed LSTM and XGBoost models for time-series prediction",
            "Built intuitive Tkinter GUI for non-technical users",
            "Processed multi-instrument data from ARM Observatories",
            "Achieved high accuracy in predicting concentrations (10 nm – 3 μm)",
        ],
        tech: [{ name: "Python", icon: SiPython }],
        github: "#",
        featured: false,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Hardware Logic & FSMs",
        subtitle: "Digital Systems Design",
        description:
            "Design and implementation of Finite State Machines and arithmetic circuits on FPGA hardware.",
        highlights: [
            "Designed complex FSMs for real-world applications",
            "Implemented Carry-Lookahead and Ripple-Carry Adders",
            "Synthesized and tested on Basys3 FPGA board",
            "Optimized for timing and resource utilization",
        ],
        tech: [],
        github: "#",
        featured: false,
        gradient: "from-cyan-500 to-green-500",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ${project.featured ? "md:col-span-2 glow" : ""
                }`}
        >
            <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

            <div className="p-6 md:p-8">
                <div className="mb-4">
                    {project.featured && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold gradient-bg text-white rounded-full mb-3">
                            ⭐ Featured Project
                        </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-1">
                        {project.title}
                    </h3>
                    <p className="text-primary font-semibold">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start">
                                <span className="text-primary mr-2">▹</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {project.tech.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-primary/30 hover:border-primary/60 transition-colors"
                                >
                                    <tech.icon className="text-primary" size={20} />
                                    <span className="text-sm text-gray-300">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex gap-4">
                    {project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 gradient-bg text-white rounded-lg hover:scale-105 transition-transform"
                        >
                            <FaGithub size={20} />
                            <span className="font-semibold">View Code</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="section-padding relative overflow-hidden bg-black/30">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From AI research assistants to hardware design - showcasing full-stack engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
