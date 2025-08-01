import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudIcon } from '@heroicons/react/24/outline';
import { CloudSecurityStep } from '../types';
import CloudRoadmapModal from './CloudRoadmapModal';

interface EasterEggProps {
  roadmap: CloudSecurityStep[];
  isDarkMode: boolean;
}

export default function EasterEgg({ roadmap, isDarkMode }: EasterEggProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const eggVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const glowVariants = {
    initial: {
      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
    },
    hover: {
      boxShadow: [
        '0 0 10px rgba(59, 130, 246, 0.4)',
        '0 0 30px rgba(59, 130, 246, 0.8)',
        '0 0 10px rgba(59, 130, 246, 0.4)',
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Easter Egg Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: 2, duration: 0.5 }
        }}
      >
        <motion.button
          onClick={handleClick}
          className={`
            relative p-4 rounded-full cursor-pointer border-2
            ${isDarkMode 
              ? 'glass-dark border-blue-400 hover:border-blue-300' 
              : 'glass border-blue-500 hover:border-blue-400'
            }
          `}
          variants={eggVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            variants={glowVariants}
            initial="initial"
            whileHover="hover"
          />

          {/* Icon */}
          <motion.div
            className={`relative z-10 ${
              isDarkMode ? 'text-blue-300' : 'text-blue-600'
            }`}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CloudIcon className="h-8 w-8" />
          </motion.div>

          {/* Pulse Ring */}
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${
              isDarkMode ? 'border-blue-400' : 'border-blue-500'
            }`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Secret Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ?
          </motion.div>
        </motion.button>

        {/* Hint Tooltip */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              className={`
                absolute bottom-full right-0 mb-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
                shadow-lg
              `}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              🎯 Discover the Cloud Security Pathway!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Cloud Roadmap Modal */}
      <CloudRoadmapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roadmap={roadmap}
        isDarkMode={isDarkMode}
      />
    </>
  );
}