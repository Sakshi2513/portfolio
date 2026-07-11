"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, FileBadge } from "lucide-react";

const certifications = [
  {
    title: "Generative AI & Data Analytics",
    org: "TATA (Forage, Jan 2026)",
    desc: "Completed modules on data preprocessing, NLP, and implementing generative models.",
    image: "/assets/TATA GEN AI JOB SIMULATION.jpg"
  },
  {
    title: "GenAI Business Consulting",
    org: "BCG (Forage, Mar 2026)",
    desc: "Gained insights into AI-driven business transformations and strategic consulting.",
    image: "/assets/BCG X JOB SIMULATION.jpg"
  },
  {
    title: "Introduction to Data Science",
    org: "Commonwealth Bank (Forage, Apr 2026)",
    desc: "Mastered fundamental concepts in data analysis, statistics, and machine learning.",
    image: "/assets/COMMONWEALTH BANK JOB SIMULATION.jpg"
  },
  {
    title: "Data Analytics & Visualization",
    org: "Deloitte Australia & TATA (Forage, 2025–2026)",
    desc: "Specialized in creating impactful data narratives and interactive dashboards.",
    image: "/assets/TATA DATA VISUALISATION JOB SIMULATION.jpg"
  },
  {
    title: "Technology Risk Frameworks",
    org: "EY (Forage, Mar 2026)",
    desc: "Learned core IT risk management, compliance policies, and audit procedures.",
    image: "/assets/EY.jpg"
  }
];

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Simulations</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Grid Layout (3 in a row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-md border border-gray-200/50 dark:border-white/10 flex flex-col h-full hover:border-indigo-400/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4 mb-6 flex-grow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800/50 group-hover:scale-110 transition-transform shadow-inner">
                  <FileBadge className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-[1.15rem] leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 uppercase tracking-wider mb-3">
                    {cert.org}
                  </p>
                  <p className="text-[0.95rem] text-gray-600 dark:text-gray-300 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-5 border-t border-gray-200/50 dark:border-white/5 flex justify-end">
                {cert.image ? (
                  <button 
                    onClick={() => setSelectedImage(cert.image)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group/btn"
                  >
                    View Certificate
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <span className="text-sm font-medium text-gray-400 dark:text-gray-500 italic">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-[85vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Certificate Full View" 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
