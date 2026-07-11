"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

const awards = [
  {
    title: "National Finalist, Smart India Hackathon (SIH) 2025",
    org: "Ministry of Mines",
    desc: "AI-powered Rockfall Prediction & Alert System (SIH25071)",
    images: ["/assets/SIH.jpg", "/assets/SIH 2.jpg", "/assets/SIH CERTIFICATE.jpg"]
  },
  {
    title: "2nd Position, UDAAN'26 Minor Project Exhibition",
    org: "IPS Academy IES, Indore",
    desc: "For Nivaran (AI-powered smart civic intelligence platform)",
    images: ["/assets/UDAAN SECOND POSITION.jpg", "/assets/UDAAN SECOND POSITION CERTIFICATE.jpg"]
  },
  {
    title: "Rank 119, National Entrepreneurship Challenge (NEC) 2025",
    org: "Basic Track",
    desc: "Team E-Cell, IIT Bombay",
    images: ["/assets/1767541735511.jpg"]
  }
];

function Slideshow({ images, className }: { images: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds for slower transitions
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
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-contain p-4 drop-shadow-md hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-amber-400 w-4' : 'bg-white/50'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Awards() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2rem] shadow-xl border border-gray-200/50 dark:border-white/10 overflow-hidden flex flex-col h-full hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 group"
            >
              
              {/* Image Slideshow (Top Half) */}
              <Slideshow 
                images={award.images} 
                className="w-full h-56 sm:h-64 border-b border-gray-200/50 dark:border-white/10 bg-gray-50/50 dark:bg-black/10"
              />

              {/* Content (Bottom Half) */}
              <div className="p-8 flex-grow flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                    <Award className="text-white w-5 h-5" />
                  </div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-500 font-bold tracking-wide uppercase text-sm">
                    {award.org}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-amber-500 transition-colors">
                  {award.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] leading-relaxed">
                  {award.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
