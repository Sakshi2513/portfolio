"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Artificial Intelligence", "Machine Learning", "Generative AI", 
      "Large Language Models (LLMs)", "Natural Language Processing (NLP)", 
      "TensorFlow", "Scikit-learn", "Prompt Engineering", "Predictive Modeling"
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      "Exploratory Data Analysis (EDA)", "Statistical Analysis", 
      "Data Visualization", "Power BI", "Pandas", "NumPy"
    ],
  },
  {
    title: "Development & Tools",
    skills: [
      "Git", "GitHub", "Firebase", "Flutter", "MySQL", 
      "Docker", "FastAPI", "React", "Next.js"
    ],
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "Data Structures & Algorithms (DSA)", "Software Development", "ML Workflows"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Leadership", "Team Collaboration & Agile Coordination", 
      "Problem Solving & Analytical Thinking", "Communication", 
      "Technical Pitching & Stakeholder Management"
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-6 bg-blue-500 rounded-sm mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
