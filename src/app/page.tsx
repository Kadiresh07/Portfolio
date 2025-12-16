import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 pt-20 bg-transparent overflow-hidden">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </main>
    );
}
