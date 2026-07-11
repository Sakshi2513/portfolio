"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const technicalExperiences = [
  {
    role: "AI/ML Intern",
    company: "Elevate Labs",
    date: "June 2026",
    description: "Built and optimized AI/ML solutions using Python, Scikit-learn, and TensorFlow by implementing data preprocessing, feature engineering, model training, evaluation, and performance optimization techniques, while exploring Generative AI and LLM applications through hands-on projects and real-world implementations.",
    logo: FaChartPie,
    logoColor: "from-blue-500 to-cyan-500"
  },
  {
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    date: "May 2025",
    description: "Recognized as the Best Performer for executing end-to-end Exploratory Data Analysis (EDA) on large-scale datasets using Python (Pandas, NumPy), uncovering key operational insights, and developing interactive Power BI dashboards that transformed raw data into actionable business intelligence for stakeholders.",
    certificate: "/assets/ELEVATE LABS DATA ANALYST INTERNSHIP CERTIFICATE.jpg",
    logo: FaChartPie,
    logoColor: "from-blue-500 to-cyan-500"
  },
  {
    role: "Data Analyst Intern",
    company: "Bold Analytics",
    date: "May 2026 – Jul 2026",
    description: "Completed internship as a Data Analyst Intern at Bold Analytics under the guidance of Yash Kale (Project Manager), demonstrating dedication, professionalism, and strong analytical skills.",
    certificate: "/assets/BA313807.jpg",
    logo: FaChartBar,
    logoColor: "from-fuchsia-500 to-purple-500"
  }
];

const leadershipExperiences = [
  {
    role: "Promotional Team Lead & Campus Ambassador",
    company: "E-Cell IIT Bombay & IPSA",
    date: "Jan 2025 – Present",
    description: "Served as Promotional Team Lead at IES IPS Academy and Campus Ambassador for IIT Bombay. Led promotional campaigns that boosted participation by 40%; managed corporate sponsors and 500+ attendees while fostering a culture of entrepreneurship and innovation.",
    rightImage: "/assets/PROMOTIONAL TEAM LEAD.jpeg",
    certificate: "/assets/CAMPUS AMBASSADOR E CELL IIT BOMBAY.jpg",
    certificateLabel: "View Offer Letter",
    logo: FaUsers,
    logoColor: "from-amber-500 to-orange-500"
  },
  {
    role: "NCC Cadet",
    company: "National Cadet Corps (NCC)",
    date: "2023 - 2026",
    description: "Proud holder of both 'B' and 'C' certificates in the NCC. Actively participated in numerous camps and training sessions, demonstrating discipline, strong leadership, and a deep sense of duty.",
    rightImage: "/assets/bbb.jpeg",
    logo: FaUsers,
    logoColor: "from-green-500 to-emerald-500"
  }
];

function TimelineItem({ exp, index, compact = false }: { exp: any, index: number, compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative ml-8 md:ml-10 group"
    >
      {/* Timeline Node */}
      <span className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-900 rounded-full -left-[44px] md:-left-[52px] ring-4 ring-white dark:ring-gray-950 border border-gray-200 dark:border-white/20 z-10 transition-colors group-hover:border-cyan-500 shadow-sm">
        <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full transition-transform group-hover:scale-125"></div>
      </span>

      {/* Glassmorphic Card */}
      <div className={`bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-white/10 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}`}>
        
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch">
          
          {/* Left Side: Content */}
          <div className="flex-grow w-full flex flex-col justify-center">
            <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
              {exp.role}
            </h3>
            
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 font-bold tracking-wide text-sm sm:text-base">
                {exp.company}
              </span>
              <time className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700 w-max">
                {exp.date}
              </time>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] leading-relaxed text-justify">
              {exp.description}
            </p>
            
            {exp.certificate && (
              <div className="mt-5">
                <a 
                  href={exp.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition-colors"
                >
                  {exp.certificateLabel || "View Certificate"} &rarr;
                </a>
              </div>
            )}
          </div>

          {/* Right Side: Image (Desktop) */}
          {exp.rightImage && (
            <div className="hidden sm:block relative w-32 sm:w-40 xl:w-48 flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm self-stretch min-h-[140px] bg-gray-50 dark:bg-white/5">
              <Image src={exp.rightImage} alt={`${exp.role} image`} fill className="object-contain p-2 hover:scale-105 transition-transform duration-500" />
            </div>
          )}
        </div>
        
        {/* Right Image (Mobile) */}
        {exp.rightImage && (
          <div className="sm:hidden relative w-full h-56 mt-5 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-gray-50 dark:bg-white/5">
            <Image src={exp.rightImage} alt={`${exp.role} image`} fill className="object-contain p-2" />
          </div>
        )}

        {exp.images && exp.images.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {exp.images.map((img: string, i: number) => (
              <div key={i} className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-gray-50 dark:bg-white/5">
                <Image src={img} alt={`${exp.role} image`} fill className="object-contain p-2 hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Technical Experience Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(6,182,212,0.4)] mb-10 text-center">
              TECHNICAL EXPERIENCE
            </h3>
            <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 md:ml-4 space-y-10">
              {technicalExperiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Leadership Experience Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(217,70,239,0.4)] mb-10 text-center">
              LEADERSHIP EXPERIENCE
            </h3>
            <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 md:ml-4 space-y-8">
              {leadershipExperiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} index={index} compact={true} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
