"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Nivaran — AI Smart Civic Intelligence Platform",
    award: "2nd Place, UDAAN'26",
    description: [
      "Automates public grievance classification, prioritization, and routing using NLP and predictive analytics.",
      "Features real-time dashboards and geo-spatial insights for data-driven governance.",
      "Designed a scalable multi-service architecture integrating citizen and administrative portals.",
      "Powers complaint management, hazard monitoring, and decision-making."
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Python", "FastAPI", "NLP", "Machine Learning", "Docker"],
    github: "https://github.com/Sakshi2513/NIVARAN",
    images: ["/assets/NIVARAN 1.jpg", "/assets/NIVARAN 2.jpg", "/assets/NIVARAN 3.jpg", "/assets/NIVARAN 4.jpg"],
    featured: true
  },
  {
    title: "InsightIQ — AI Business Intelligence",
    description: [
      "Engineered an AI-powered Business Intelligence platform with dynamic CSV dataset uploading, automatic schema detection, and intelligent data cleaning.",
      "Integrated LLM-driven Natural Language-to-SQL capabilities, allowing users to ask business questions in plain English with context-aware insights.",
      "Built an Executive Dashboard featuring real-time KPI cards, interactive Recharts-powered data visualization, and automatic chart recommendation.",
      "Implemented comprehensive dataset management, query history tracking, and dynamic reporting for seamless analytics workflows."
    ],
    tech: ["React + Vite", "FastAPI", "Python", "PostgreSQL", "LLMs", "Recharts"],
    github: "https://github.com/Sakshi2513/InsightIQ",
    images: ["/assets/InsightIQ IMAGE 1.jpg", "/assets/InsightIQ IMAGE 2.jpg", "/assets/InsightIQ IMAGE 3.jpg"]
  },
  {
    title: "ReportIQ — AI Document Intelligence",
    description: [
      "Enterprise-inspired platform that automates engineering report analysis.",
      "Correlates, validates, and consolidates findings from inspection reports.",
      "Generates a Detailed Diagnostic Report (DDR) using Google Gemini.",
      "Reduces manual engineering effort while improving consistency."
    ],
    tech: ["FastAPI", "React + Vite", "Google Gemini", "PyMuPDF"],
    github: "https://github.com/Sakshi2513/REPORT-IQ",
    images: ["/assets/REPORT IQ 1.png", "/assets/REPORT IQ 2.png", "/assets/REPORT IQ 3.png"]
  },
  {
    title: "Handora — AI Gesture-Based System",
    description: [
      "Real-time gesture-controlled 3D visualization system.",
      "Uses computer vision to recognize hand movements.",
      "Generates dynamic particle simulations with interactive shape morphing."
    ],
    tech: ["Python", "MediaPipe", "Three.js", "WebGL"],
    images: ["/assets/HANDORA.jpeg"],
    demo: "https://www.linkedin.com/posts/activity-7417184601447772160-85xc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGMbgYBWOZxX4Ft9WIh36fKLsy8U9uEUNM"
  }
];

function Slideshow({ images, className }: { images: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500); // 1.5 seconds for a bit smoother experience than exactly 1s
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-contain p-4 drop-shadow-md"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-cyan-400 w-4' : 'bg-white/50'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {

  return (
    <section id="projects" className="-mt-4 pb-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">Work</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>
        
        {/* 2x2 Grid Layout for All Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col h-full overflow-hidden bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-gray-200/50 dark:border-white/10 group hover:border-cyan-500/30 transition-colors duration-500"
            >
              <Slideshow 
                images={project.images} 
                className="w-full h-[200px] sm:h-[250px] xl:h-[280px] bg-white/50 dark:bg-black/20 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="w-full p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full -z-10"></div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title.split('—')[0].trim()}</h3>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-4 tracking-wide">
                  {project.title.includes('—') ? project.title.split('—')[1].trim() : ''}
                </p>
                
                {project.award && (
                  <span className="inline-flex w-max items-center px-4 py-1.5 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 text-yellow-700 dark:text-yellow-300 text-sm font-bold rounded-full mb-6 ring-1 ring-yellow-500/30">
                    🏆 {project.award}
                  </span>
                )}
                
                <div className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-[0.95rem] flex-grow">
                  <ul className="list-disc pl-5 space-y-2 text-justify">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold rounded-xl transition-colors shadow-lg w-full sm:w-auto"
                    >
                      <FaGithub className="w-5 h-5 mr-3" />
                      View Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0A66C2] hover:bg-gray-100 font-bold rounded-xl transition-colors shadow-lg border border-gray-200 w-full sm:w-auto"
                    >
                      <FaLinkedin className="w-5 h-5 mr-3" />
                      See it in action
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
