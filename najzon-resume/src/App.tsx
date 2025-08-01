import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import EasterEgg from './components/EasterEgg';
import DarkModeToggle from './components/DarkModeToggle';
import { resumeData } from './data/resumeData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved dark mode preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Update document class and save preference
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          name={resumeData.name}
          title={resumeData.title}
          location={resumeData.location}
          summary={resumeData.summary}
          isDarkMode={isDarkMode}
        />

        {/* Experience Section */}
        <ExperienceSection
          experience={resumeData.experience}
          isDarkMode={isDarkMode}
        />

        {/* Skills Section */}
        <SkillsSection
          skills={resumeData.skills}
          isDarkMode={isDarkMode}
        />

        {/* Contact Section */}
        <ContactSection
          contact={resumeData.contact}
          isDarkMode={isDarkMode}
        />

        {/* Footer */}
        <motion.footer
          className={`py-12 px-4 sm:px-6 lg:px-8 text-center ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className={`p-6 rounded-2xl ${
                isDarkMode ? 'glass-dark' : 'glass'
              } mb-6`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg font-medium mb-2">
                ✨ Built with React, Three.js, Framer Motion & Tailwind CSS
              </p>
              <p className="text-sm">
                Designed to showcase modern web technologies and 3D interactions
              </p>
            </motion.div>
            
            <motion.p
              className="text-sm"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              © 2024 Najzon Weaver. Made with 💙 for the cloud security community.
            </motion.p>
          </div>
        </motion.footer>
      </div>

      {/* Easter Egg */}
      <EasterEgg
        roadmap={resumeData.cloudRoadmap}
        isDarkMode={isDarkMode}
      />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`
          fixed bottom-6 left-6 p-3 rounded-full z-40 transition-colors
          ${isDarkMode 
            ? 'glass-dark border border-gray-600 text-white hover:border-gray-500' 
            : 'glass border border-gray-300 text-gray-700 hover:border-gray-400'
          }
        `}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export default App;
