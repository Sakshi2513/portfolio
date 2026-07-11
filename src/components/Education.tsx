"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mt-1">
              <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">B.Tech, Computer Science (Data Science)</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">IPS Academy, IES, Indore (RGPV)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expected Graduation: 2027</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mt-1">
              <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Class XII (PCM)</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Medi-Caps International School</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Score: 85.6% (2023)</p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">Cleared JEE Mains</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mt-1">
              <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Class X</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Medi-Caps International School</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Score: 97.2% (2021)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
