import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CloudIcon, ShieldCheckIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { CloudSecurityStep } from '../types';

interface CloudRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  roadmap: CloudSecurityStep[];
  isDarkMode: boolean;
}

export default function CloudRoadmapModal({ isOpen, onClose, roadmap, isDarkMode }: CloudRoadmapModalProps) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateY: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotateY: 180,
      transition: {
        duration: 0.5
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  const getStepIcon = (id: string) => {
    const icons = {
      'aws-fundamentals': CloudIcon,
      'security-fundamentals': ShieldCheckIcon,
      'devsecops': CogIcon,
      'monitoring-compliance': ChartBarIcon,
    };
    return icons[id as keyof typeof icons] || CloudIcon;
  };

  const getStepColor = (index: number) => {
    const colors = [
      { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-400' },
      { bg: 'from-green-500 to-emerald-500', border: 'border-green-400' },
      { bg: 'from-purple-500 to-violet-500', border: 'border-purple-400' },
      { bg: 'from-orange-500 to-red-500', border: 'border-orange-400' },
    ];
    return colors[index % colors.length];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
                isDarkMode ? 'glass-dark' : 'glass'
              } rounded-3xl p-8 shadow-2xl`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 p-3 rounded-full transition-colors z-10 ${
                  isDarkMode 
                    ? 'hover:bg-white hover:bg-opacity-20 text-white' 
                    : 'hover:bg-black hover:bg-opacity-10 text-gray-600'
                }`}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ☁️🔒
                </motion.div>
                <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  isDarkMode ? 'text-white text-3d-dark' : 'text-gray-900 text-3d'
                }`}>
                  The Cloud Engineer Pathway
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  My roadmap to becoming a Cloud Security Engineer
                </p>
              </motion.div>

              {/* Roadmap Steps */}
              <div className="space-y-6">
                {roadmap.map((step, index) => {
                  const IconComponent = getStepIcon(step.id);
                  const colors = getStepColor(index);
                  
                  return (
                    <motion.div
                      key={step.id}
                      custom={index}
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      className={`relative p-6 rounded-2xl border-2 ${
                        isDarkMode ? 'glass-dark' : 'glass'
                      } ${colors.border}`}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Step Number */}
                      <div className={`absolute -left-3 -top-3 w-8 h-8 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center text-white font-bold text-sm border-2 border-white`}>
                        {index + 1}
                      </div>

                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${colors.bg} text-white`}
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {step.title}
                          </h3>
                          <p className={`text-base mb-4 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {step.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  isDarkMode 
                                    ? 'bg-gray-700 text-gray-200 border border-gray-600' 
                                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Status */}
                        <motion.div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            step.completed 
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : isDarkMode
                                ? 'bg-yellow-900 text-yellow-200 border border-yellow-700'
                                : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                          }`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                        >
                          {step.completed ? '✅ Completed' : '🎯 In Progress'}
                        </motion.div>
                      </div>

                      {/* Connecting Line */}
                      {index < roadmap.length - 1 && (
                        <motion.div
                          className={`absolute left-1/2 -bottom-3 w-0.5 h-6 bg-gradient-to-b ${colors.bg} transform -translate-x-1/2`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: index * 0.2 + 1 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <motion.div
                className={`text-center mt-8 p-6 rounded-2xl ${
                  isDarkMode ? 'glass-dark' : 'glass'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <motion.p
                  className={`text-lg font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                  animate={{
                    textShadow: [
                      '0 0 5px rgba(59, 130, 246, 0.3)',
                      '0 0 15px rgba(59, 130, 246, 0.6)',
                      '0 0 5px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🚀 The journey to cloud security mastery begins with a single step!
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}