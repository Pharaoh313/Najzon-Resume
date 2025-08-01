import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface HeroSectionProps {
  name: string;
  title: string;
  location: string;
  summary: string;
  isDarkMode: boolean;
}

export default function HeroSection({ name, title, location, summary, isDarkMode }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('experience');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Glassmorphism Container */}
      <motion.div
        className={`relative z-10 ${isDarkMode ? 'glass-dark' : 'glass'} rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Name with 3D Effect */}
        <motion.h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 ${
            isDarkMode ? 'text-white text-3d-dark' : 'text-gray-900 text-3d'
          }`}
          variants={itemVariants}
          style={{
            transform: "rotateX(10deg)",
            transformOrigin: "center center"
          }}
        >
          {name}
        </motion.h1>

        {/* Title with Glow Effect */}
        <motion.p
          className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 ${
            isDarkMode ? 'text-blue-300' : 'text-blue-600'
          }`}
          variants={itemVariants}
          style={{
            textShadow: isDarkMode 
              ? '0 0 20px rgba(147, 197, 253, 0.5)' 
              : '0 0 20px rgba(37, 99, 235, 0.3)'
          }}
        >
          {title}
        </motion.p>

        {/* Location */}
        <motion.p
          className={`text-lg sm:text-xl mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          variants={itemVariants}
        >
          📍 {location}
        </motion.p>

        {/* Summary */}
        <motion.p
          className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
          variants={itemVariants}
        >
          {summary}
        </motion.p>

        {/* Floating Call-to-Action */}
        <motion.div
          className="mt-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
            }`}
            style={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            Explore My Journey
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className={`flex flex-col items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDownIcon className="h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}