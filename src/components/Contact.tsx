"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full -translate-y-1/2 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:sheogekarsakshi3@gmail.com" className="text-[1.1rem] font-medium text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      sheogekarsakshi3@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <a href="tel:+919109887298" className="text-[1.1rem] font-medium text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      +91 9109887298
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-[1.1rem] font-medium text-gray-900 dark:text-white">
                      Indore, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">Connect with me</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/sakshi-sheogekar2515" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Sakshi2513/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500 relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
            
            <form action="mailto:sheogekarsakshi3@gmail.com" method="GET" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="subject" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none shadow-inner"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none shadow-inner"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">Message</label>
                <textarea 
                  id="message" 
                  name="body" 
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none shadow-inner"
                  placeholder="Hello, I'd like to discuss..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
