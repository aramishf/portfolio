"use client"; // This makes it a Client Component (needed for interactivity)

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

// ============================================
// NAVIGATION COMPONENT
// ============================================
// This creates a sticky navigation bar that:
// - Stays at the top when scrolling
// - Has glassmorphism effect (blurred background)
// - Smooth scrolls to sections
// - Responsive mobile menu
// ============================================

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [scrolled, setScrolled] = useState(false); // Track if page is scrolled

    // ============================================
    // SCROLL DETECTION
    // ============================================
    // This useEffect hook listens for scroll events
    // When user scrolls >50px, we add a background to the nav
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ============================================
    // SMOOTH SCROLL FUNCTION
    // ============================================
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* ============================================
              LOGO / NAME
              ============================================ */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => scrollToSection("#home")}
                    >
                        <Image
                            src="/af-logo.png"
                            alt="AF Logo"
                            className="h-10 w-auto"
                            width={40} // Added width for Next.js Image component
                            height={40} // Added height for Next.js Image component
                        />
                    </motion.div>

                    {/* ============================================
              DESKTOP NAVIGATION LINKS
              ============================================ */}
                    <div className="hidden md:flex gap-8 ml-auto">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.href)}
                                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* ============================================
              MOBILE MENU BUTTON
              ============================================ */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ============================================
          MOBILE MENU DROPDOWN
          ============================================ */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-white/5 transition-all"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
