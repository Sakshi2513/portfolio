"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3 whitespace-nowrap">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">Sakshi Sheogekar</span>
            </h1>
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-6">
              AI/ML Engineer | Data Scientist | Generative AI | LLMs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              I build intelligent, end-to-end AI solutions that combine Machine Learning, Generative AI, LLMs, and Data Science to solve real-world challenges. From predictive models and intelligent automation to AI-powered applications, I enjoy transforming complex data into scalable, impactful products that deliver meaningful insights and drive smarter decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center px-4 py-2 bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 text-yellow-800 dark:text-yellow-300 text-sm font-bold rounded-xl backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-0.5 w-max">
                🏆 SIH 2025 National Finalist
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-green-50/80 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 text-green-800 dark:text-green-300 text-sm font-bold rounded-xl backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-0.5 w-max">
                🎖️ NCC Cadet
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-cyan-50/80 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700/50 text-cyan-800 dark:text-cyan-300 text-sm font-bold rounded-xl backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-0.5 w-max">
                🚀 Campus Ambassador, E-Cell IIT Bombay
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)] text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 transition-all"
              >
                View Projects
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="/assets/RESUME.pdf?v=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Download className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/Sakshi2513/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/sakshi-sheogekar2515" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="mailto:sheogekarsakshi3@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(217,70,239,0.4)] transition-shadow duration-500 z-10 -translate-y-4 lg:-translate-y-8">
              <Image
                src="/assets/WhatsApp Image 2026-07-11 at 2.53.49 PM.jpeg"
                alt="Sakshi Sheogekar"
                fill
                className="object-cover object-[center_10%]"
                priority
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
