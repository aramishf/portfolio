"use client";

import { FaHeart } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative border-t border-white/10 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold font-heading gradient-text mb-2">
                            Aramish Farooq
                        </h3>
                        <p className="text-gray-400 text-sm">
                            AI/ML Engineer & Computer Engineering Student
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Built With</h4>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-primary/30">
                                <SiNextdotjs className="text-primary" size={20} />
                                <span className="text-sm text-gray-300">Next.js</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-primary/30">
                                <SiTailwindcss className="text-primary" size={20} />
                                <span className="text-sm text-gray-300">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
                        <span>© {currentYear} Aramish Farooq. All rights reserved.</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Made with <FaHeart className="text-red-500" size={14} /> and lots of coffee
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
