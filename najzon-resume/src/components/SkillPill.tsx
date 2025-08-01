import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillPillProps {
  skill: Skill;
  isDarkMode: boolean;
  index: number;
}

export default function SkillPill({ skill, isDarkMode, index }: SkillPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      interpersonal: isDarkMode 
        ? { bg: 'from-green-600 to-emerald-600', border: 'border-green-400', glow: 'rgba(34, 197, 94, 0.4)' }
        : { bg: 'from-green-500 to-emerald-500', border: 'border-green-500', glow: 'rgba(34, 197, 94, 0.3)' },
      management: isDarkMode 
        ? { bg: 'from-blue-600 to-indigo-600', border: 'border-blue-400', glow: 'rgba(59, 130, 246, 0.4)' }
        : { bg: 'from-blue-500 to-indigo-500', border: 'border-blue-500', glow: 'rgba(59, 130, 246, 0.3)' },
      analytical: isDarkMode 
        ? { bg: 'from-purple-600 to-violet-600', border: 'border-purple-400', glow: 'rgba(147, 51, 234, 0.4)' }
        : { bg: 'from-purple-500 to-violet-500', border: 'border-purple-500', glow: 'rgba(147, 51, 234, 0.3)' },
      productivity: isDarkMode 
        ? { bg: 'from-orange-600 to-red-600', border: 'border-orange-400', glow: 'rgba(249, 115, 22, 0.4)' }
        : { bg: 'from-orange-500 to-red-500', border: 'border-orange-500', glow: 'rgba(249, 115, 22, 0.3)' },
      operations: isDarkMode 
        ? { bg: 'from-teal-600 to-cyan-600', border: 'border-teal-400', glow: 'rgba(20, 184, 166, 0.4)' }
        : { bg: 'from-teal-500 to-cyan-500', border: 'border-teal-500', glow: 'rgba(20, 184, 166, 0.3)' }
    };
    return colors[category as keyof typeof colors] || colors.management;
  };

  const categoryColor = getCategoryColor(skill.category);

  const pillVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
    },
    hover: {
      scale: 1.1,
      rotateX: [0, 15, 0],
      rotateY: [0, 20, 0],
      z: 50,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        rotateX: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        },
        rotateY: {
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut"
        }
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const glowVariants = {
    initial: {
      boxShadow: `0 0 0px ${categoryColor.glow}`,
    },
    hover: {
      boxShadow: [
        `0 0 10px ${categoryColor.glow}`,
        `0 0 30px ${categoryColor.glow}, 0 0 50px ${categoryColor.glow}`,
        `0 0 10px ${categoryColor.glow}`,
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="perspective-1000"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut"
        }
      }}
    >
      <motion.div
        className={`
          relative px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 cursor-pointer
          bg-gradient-to-r ${categoryColor.bg} ${categoryColor.border}
          text-white font-semibold text-sm sm:text-base
          transform-gpu
        `}
        variants={pillVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        whileTap="tap"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center">
          <span className="text-center leading-tight">
            {skill.name}
          </span>
        </div>

        {/* 3D Depth Shadow */}
        <div 
          className="absolute inset-0 rounded-full bg-black opacity-20 blur-sm"
          style={{
            transform: "translateZ(-8px) translateY(2px)",
          }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={isHovered ? {
            opacity: [0, 0.3, 0],
            x: ['-100%', '100%'],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          } : {}}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
        />

        {/* Category Indicator Dot */}
        <motion.div
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            isDarkMode ? 'bg-white' : 'bg-gray-900'
          } border-2 border-current`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Floating Animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        />
      </motion.div>
    </motion.div>
  );
}