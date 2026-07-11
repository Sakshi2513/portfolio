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

export function About() {
  return (
    <section id="about" className="py-24 relative flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">About Me & Technical Arsenal</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* About Me Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex"
          >
          
          <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 dark:border-gray-700/50 text-left space-y-6 flex-1">
            
            <div className="mb-10 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500 leading-tight tracking-tight">
                "I believe the best AI isn't the one that predicts the future—it's the one that creates it."
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <strong className="text-gray-900 dark:text-white font-semibold">Hi, I'm Sakshi Sheogekar,</strong> a final-year Computer Science (Data Science) student passionate about building intelligent technologies for meaningful impact.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I specialize in <strong className="text-gray-900 dark:text-white font-medium">AI, Machine Learning, Generative AI, LLMs, Agentic AI, NLP, and Data Science</strong>. I enjoy developing end-to-end solutions that turn complex data and challenging ideas into scalable, real-world products.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Driven by hands-on innovation, I am a <strong className="text-gray-900 dark:text-white font-medium">Smart India Hackathon (SIH) 2025 National Finalist</strong>, having built an AI-powered Rockfall Prediction System. My experience spans full-cycle development, from predictive analytics to public grievance platforms.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Beyond tech, I value leadership and collaboration. As an <strong className="text-gray-900 dark:text-white font-medium">NCC Cadet, E-Cell Promotional Lead, and Campus Ambassador at IIT Bombay</strong>, I thrive in dynamic and team-driven environments.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I constantly explore emerging technologies to build solutions with measurable value. My goal is simple: <strong className="text-gray-900 dark:text-white font-medium">to develop AI that doesn't just demonstrate intelligence—it delivers impact.</strong>
            </p>

          </div>
        </motion.div>

        {/* Technical Skills Column */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex"
          >
          <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 dark:border-gray-700/50 text-left flex-1 flex flex-col justify-between gap-6">
            
            {skillCategories.map((category) => (
              <div key={category.title} className="group">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center tracking-tight">
                  <span className="w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded-sm mr-3 group-hover:h-6 transition-all"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-between">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex-grow justify-center inline-flex items-center px-3 py-1.5 text-sm font-medium bg-blue-50/50 dark:bg-blue-900/40 text-blue-800 dark:text-cyan-200 border border-blue-100 dark:border-cyan-700/50 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform text-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
}
