"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiPython, SiReact, SiTypescript, SiNextdotjs, SiFastapi, SiDocker } from "react-icons/si";
import Image from "next/image";

const projects = [
    {
        title: "RAG-Based Document Analysis System",
        subtitle: "AI Research Assistant",
        description:
            "AI research assistant for PDF analysis with citation-backed answers using RAG architecture and local LLM inference.",
        highlights: [
            "RAG architecture with FAISS vector database and LLaMA 3 integration",
            "Multi-user authentication with JWT and real-time chat interface",
            "Strict prompting to prevent hallucinations and ensure evidence-based responses",
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
        gradient: "from-green-600 to-emerald-600",
        image: "/projects/rag-assistant.png",
    },
    {
        title: "Finger Counter - Real-Time Hand Gesture Recognition",
        subtitle: "Computer Vision Application",
        description:
            "Real-time hand tracking application that accurately counts fingers using computer vision and machine learning for gesture recognition.",
        highlights: [
            "Real-time hand detection and tracking using MediaPipe's Hand Landmarker model",
            "Accurate finger counting algorithm distinguishing between extended and folded fingers",
            "Live visual feedback with hand landmark visualization and connection lines",
        ],
        tech: [{ name: "Python", icon: SiPython }],
        github: "https://github.com/aramishf/FingerCounter",
        featured: false,
        gradient: "from-emerald-600 to-green-600",
        image: "/projects/finger-counter.png",
    },
    {
        title: "AI Virtual Painter",
        subtitle: "Interactive Gesture-Based Drawing",
        description:
            "Interactive virtual painting application that enables users to create digital art using hand gestures captured through webcam with real-time tracking.",
        highlights: [
            "Real-time hand gesture recognition using MediaPipe's 21 landmark hand tracking model",
            "Multiple drawing modes: draw with index finger, select colors with two fingers, erase with five fingers",
            "5 vibrant colors with intuitive UI featuring 160px color boxes and dual eraser system (50px/100px)",
        ],
        tech: [{ name: "Python", icon: SiPython }],
        github: "https://github.com/aramishf/VirtualPainter",
        featured: false,
        gradient: "from-purple-600 to-pink-600",
        image: "/projects/virtual-painter.png",
    },
    {
        title: "Aerosol Particle ML Predictor",
        subtitle: "Research Application",
        description:
            "ML-powered GUI application predicting atmospheric particle concentrations from environmental variables.",
        highlights: [
            "LSTM and XGBoost models for time-series aerosol prediction (10 nm – 3 μm)",
            "Intuitive Tkinter GUI for real-time predictions from atmospheric data",
            "Processed multi-instrument datasets from ARM Observatories",
        ],
        tech: [{ name: "Python", icon: SiPython }],
        github: "#",
        featured: false,
        gradient: "from-emerald-600 to-teal-600",
        image: "/projects/cpc-predictor.png",
    },
    {
        title: "Custom PCB Audio Amplifier",
        subtitle: "Hardware Design & Fabrication",
        description:
            "End-to-end PCB design and fabrication with analog frequency control and gain tuning.",
        highlights: [
            "Complete circuit design in KiCad with optimized trace routing",
            "AC coupling, biasing, and impedance matching for clean amplification",
            "Hand-soldered and debugged to achieve functional speaker output",
        ],
        tech: [],
        github: "#",
        featured: false,
        gradient: "from-teal-600 to-cyan-600",
        image: "/projects/pcb-amplifier.jpg",
    },
    {
        title: "Hardware Logic & FSMs",
        subtitle: "Digital Systems Design",
        description:
            "FPGA-based implementation of Finite State Machines and arithmetic circuits.",
        highlights: [
            "Complex FSM design for real-world control applications",
            "Carry-Lookahead and Ripple-Carry Adder implementations",
            "Synthesized and optimized on Basys3 FPGA for timing and resources",
        ],
        tech: [],
        github: "#",
        featured: false,
        gradient: "from-teal-600 to-green-700",
        image: "/projects/basys3-fpga.png",
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
            className={`glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 relative ${project.featured ? "md:col-span-2 glow" : ""
                }`}
        >
            {/* Green gradient background for featured project */}
            {project.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-emerald-600/20 to-green-900/10 pointer-events-none"></div>
            )}

            <div className={`h-2 bg-gradient-to-r ${project.gradient} relative z-10`}></div>

            {/* Project Image */}
            {project.image && (
                <div className="relative w-full h-64 md:h-80 overflow-hidden bg-black/20">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}

            <div className="p-6 md:p-8 relative z-10">
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
        <section id="projects" className="section-padding relative overflow-hidden bg-black/30 flex justify-center">
            {/* Green animated gradient background like hero section */}
            <div className="absolute inset-0 animated-gradient opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-10"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        <span className="gradient-text">Projects</span>
                    </h2>
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
