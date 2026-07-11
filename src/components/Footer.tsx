import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="#" className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
              Sakshi Sheogekar
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              AI/ML Engineer & Data Scientist
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/Sakshi2513/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sakshi-sheogekar2515" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sheogekarsakshi3@gmail.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Sakshi Sheogekar. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm italic">
            Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
