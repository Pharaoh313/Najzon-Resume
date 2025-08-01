import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ isDarkMode, onToggle }: DarkModeToggleProps) {
  const toggleVariants = {
    light: {
      backgroundColor: '#f59e0b',
      transition: { duration: 0.3 }
    },
    dark: {
      backgroundColor: '#1e293b',
      transition: { duration: 0.3 }
    }
  };

  const switchVariants = {
    light: {
      x: 2,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 500, damping: 30 }
    },
    dark: {
      x: 26,
      rotate: 360,
      transition: { type: "spring" as const, stiffness: 500, damping: 30 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      className="fixed top-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { delay: 1, duration: 0.5 }
      }}
    >
      <motion.button
        onClick={onToggle}
        className={`
          relative w-14 h-8 rounded-full p-1 focus:outline-none focus:ring-4
          ${isDarkMode 
            ? 'focus:ring-blue-500 focus:ring-opacity-50' 
            : 'focus:ring-yellow-500 focus:ring-opacity-50'
          }
        `}
        variants={toggleVariants}
        animate={isDarkMode ? 'dark' : 'light'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Toggle Switch */}
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
          variants={switchVariants}
          animate={isDarkMode ? 'dark' : 'light'}
        >
          {/* Sun Icon */}
          <motion.div
            className="absolute"
            variants={iconVariants}
            initial="hidden"
            animate={!isDarkMode ? "visible" : "hidden"}
          >
            <SunIcon className="h-4 w-4 text-yellow-500" />
          </motion.div>

          {/* Moon Icon */}
          <motion.div
            className="absolute"
            variants={iconVariants}
            initial="hidden"
            animate={isDarkMode ? "visible" : "hidden"}
          >
            <MoonIcon className="h-4 w-4 text-blue-600" />
          </motion.div>
        </motion.div>

        {/* Background Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <motion.div
            animate={{ 
              opacity: !isDarkMode ? 0.6 : 0.2,
              scale: !isDarkMode ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
          >
            <SunIcon className="h-4 w-4 text-yellow-300" />
          </motion.div>
          <motion.div
            animate={{ 
              opacity: isDarkMode ? 0.6 : 0.2,
              scale: isDarkMode ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
          >
            <MoonIcon className="h-4 w-4 text-blue-300" />
          </motion.div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDarkMode 
              ? '0 0 20px rgba(59, 130, 246, 0.3)' 
              : '0 0 20px rgba(245, 158, 11, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className={`
          absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded-lg text-xs
          ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
          opacity-0 pointer-events-none
        `}
        whileHover={{ opacity: 1 }}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-900"></div>
      </motion.div>
    </motion.div>
  );
}