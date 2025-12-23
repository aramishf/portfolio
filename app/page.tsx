import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// ============================================
// HOME PAGE
// ============================================
// This is the main landing page that composes
// all sections together in a single-page layout
// ============================================

export default function Home() {
    return (
        <div className="relative">
            {/* Navigation - Sticky at top */}
            <Navigation />

            {/* Main Content - All sections stack vertically */}
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
