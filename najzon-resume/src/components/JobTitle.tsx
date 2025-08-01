import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JobExperience } from '../types';

interface JobTitleProps {
  job: JobExperience;
  onClick: () => void;
  isDarkMode: boolean;
}

export default function JobTitle({ job, onClick, isDarkMode }: JobTitleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const bounceVariants = {
    initial: { 
      y: 0,
      scale: 1,
      rotateX: 0
    },
    hover: {
      y: [0, -8, 0],
      scale: 1.05,
      rotateX: [0, 10, 0],
      transition: {
        y: {
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3,
          ease: "easeOut"
        },
        rotateX: {
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants = {
    initial: {
      boxShadow: isDarkMode 
        ? '0 0 0px rgba(147, 197, 253, 0)' 
        : '0 0 0px rgba(37, 99, 235, 0)'
    },
    hover: {
      boxShadow: isDarkMode 
        ? '0 0 30px rgba(147, 197, 253, 0.4), 0 0 60px rgba(147, 197, 253, 0.2)' 
        : '0 0 30px rgba(37, 99, 235, 0.4), 0 0 60px rgba(37, 99, 235, 0.2)',
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="perspective-1000 cursor-pointer mb-6"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className={`
          relative p-6 rounded-2xl border-2 transition-all duration-300
          ${isDarkMode 
            ? 'glass-dark border-blue-400 hover:border-blue-300' 
            : 'glass border-blue-500 hover:border-blue-400'
          }
        `}
        variants={bounceVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        whileTap="tap"
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* Glow Effect Background */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Job Title */}
          <motion.h3
            className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            animate={{
              color: isHovered 
                ? (isDarkMode ? '#93C5FD' : '#2563EB')
                : (isDarkMode ? '#FFFFFF' : '#111827')
            }}
            transition={{ duration: 0.3 }}
          >
            {job.title}
          </motion.h3>

          {/* Company */}
          <motion.p
            className={`text-base sm:text-lg font-semibold mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            animate={{
              color: isHovered 
                ? (isDarkMode ? '#A78BFA' : '#7C3AED')
                : (isDarkMode ? '#D1D5DB' : '#4B5563')
            }}
            transition={{ duration: 0.3 }}
          >
            {job.company}
          </motion.p>

          {/* Duration */}
          <motion.p
            className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {job.duration}
          </motion.p>

          {/* Hover Indicator */}
          <motion.div
            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
            } flex items-center justify-center`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white text-xs font-bold">!</span>
          </motion.div>

          {/* Click Instruction */}
          <motion.div
            className={`absolute bottom-2 right-4 text-xs ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            Click to expand
          </motion.div>
        </div>

        {/* 3D Depth Effect */}
        <div 
          className={`absolute inset-0 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          } opacity-20`}
          style={{
            transform: "translateZ(-10px)",
            filter: "blur(2px)"
          }}
        />
      </motion.div>
    </motion.div>
  );
}