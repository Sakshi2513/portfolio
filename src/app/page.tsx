import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { OpenSource } from "@/components/OpenSource";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <OpenSource />
        <Experience />
        <Certifications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
