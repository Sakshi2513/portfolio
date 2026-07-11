"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const proposals = [
  {
    title: "AI-Powered Mental Health Crisis Detection",
    description: [
      "Proposed system for identifying suicide risk and substance abuse patterns.",
      "Detects behavioral warning signs using AI-driven contextual analysis.",
      "Designed to respect user privacy and ethical guidelines."
    ],
    images: ["/assets/ANTARDHWANI.png"],
    github: "https://github.com/Sakshi2513/ANTARDHWANI-"
  },
  {
    title: "Gemini-API–Powered Intelligent Care Assistant",
    description: [
      "Proposed context-aware conversational assistant.",
      "Delivers personalized, ethical support experiences.",
      "Leverages Gemini APIs for deep contextual understanding."
    ],
    images: ["/assets/gsoc_care_assistant_ui.jpg"],
    github: "https://github.com/Sakshi2513/Ayushman-AI-Care-for-a-healthier-tomorrow"
  }
];

function Slideshow({ images, className }: { images: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
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

export function OpenSource() {
  return (
    <section id="opensource" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Proposals</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] mt-2">
            <p className="text-lg font-extrabold text-white tracking-wide font-[Arial]">
              Google Summer of Code (GSoC) 2026 Applicant
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {proposals.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col h-full overflow-hidden bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-gray-200/50 dark:border-white/10 group hover:border-blue-500/30 transition-colors duration-500"
            >
              <Slideshow 
                images={item.images} 
                className="w-full h-[200px] sm:h-[250px] xl:h-[280px] bg-white/50 dark:bg-black/20 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="w-full p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -z-10"></div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{item.title}</h3>
                
                <div className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-[0.95rem] flex-grow">
                  <ul className="list-disc pl-5 space-y-2 text-justify">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold rounded-xl transition-colors shadow-lg w-full sm:w-auto"
                    >
                      <FaGithub className="w-5 h-5 mr-3" />
                      View Source
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
