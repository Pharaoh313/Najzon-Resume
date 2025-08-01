import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import SkillPill from './SkillPill';

interface SkillsSectionProps {
  skills: Skill[];
  isDarkMode: boolean;
}

export default function SkillsSection({ skills, isDarkMode }: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryDisplayNames = {
    interpersonal: "Interpersonal Skills",
    management: "Management & Leadership",
    analytical: "Analytical Skills",
    productivity: "Productivity & Organization",
    operations: "Operations & Logistics"
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      interpersonal: "🤝",
      management: "👥",
      analytical: "🧠",
      productivity: "⚡",
      operations: "⚙️"
    };
    return icons[category as keyof typeof icons] || "🎯";
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white text-3d-dark' : 'text-gray-900 text-3d'
          }`}>
            Core Competencies
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional skills developed through hands-on experience
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className={`p-6 sm:p-8 rounded-3xl ${
                isDarkMode ? 'glass-dark' : 'glass'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.2 }}
              >
                <div className="text-4xl mb-2">
                  {getCategoryIcon(category)}
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {categoryDisplayNames[category as keyof typeof categoryDisplayNames]}
                </h3>
              </motion.div>

              {/* Skills Pills */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {categorySkills.map((skill, index) => (
                  <SkillPill
                    key={skill.id}
                    skill={skill}
                    isDarkMode={isDarkMode}
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className={`text-center mt-12 p-8 rounded-3xl ${
            isDarkMode ? 'glass-dark' : 'glass'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className={`text-lg font-medium ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💡 <strong>Hover over each skill</strong> to see the 3D magic in action!
          </motion.p>
          
          <motion.div
            className="mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Interpersonal
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2 ml-4"></span>
            Management
            <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2 ml-4"></span>
            Analytical
            <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 ml-4"></span>
            Productivity
            <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mr-2 ml-4"></span>
            Operations
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}