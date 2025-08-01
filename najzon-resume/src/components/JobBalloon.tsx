import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { JobExperience } from '../types';

interface JobBalloonProps {
  job: JobExperience;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function JobBalloon({ job, isOpen, onClose, isDarkMode }: JobBalloonProps) {
  const balloonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      rotateY: 90,
      transition: {
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Balloon Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={balloonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative max-w-2xl w-full mx-auto ${
                isDarkMode ? 'glass-dark' : 'glass'
              } rounded-3xl p-8 shadow-2xl`}
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(5deg)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'hover:bg-white hover:bg-opacity-20 text-white' 
                    : 'hover:bg-black hover:bg-opacity-10 text-gray-600'
                }`}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Job Title */}
              <motion.h3
                className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {job.title}
              </motion.h3>

              {/* Company and Duration */}
              <motion.div
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-lg font-semibold">{job.company}</span>
                <span className="text-sm sm:text-base">{job.duration}</span>
              </motion.div>

              {/* Description */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className={`text-lg font-semibold mb-3 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  Key Responsibilities:
                </h4>
                <ul className={`space-y-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {job.description.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className={`text-lg font-semibold mb-3 ${
                  isDarkMode ? 'text-purple-300' : 'text-purple-600'
                }`}>
                  Skills Demonstrated:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-purple-600 bg-opacity-30 text-purple-200 border border-purple-400' 
                          : 'bg-purple-100 text-purple-700 border border-purple-300'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 left-8 w-4 h-4 bg-current transform rotate-45 opacity-20"></div>
              <div className="absolute -bottom-2 right-8 w-6 h-6 bg-current transform rotate-45 opacity-10"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}