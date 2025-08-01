import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JobExperience } from '../types';
import JobTitle from './JobTitle';
import JobBalloon from './JobBalloon';

interface ExperienceSectionProps {
  experience: JobExperience[];
  isDarkMode: boolean;
}

export default function ExperienceSection({ experience, isDarkMode }: ExperienceSectionProps) {
  const [selectedJob, setSelectedJob] = useState<JobExperience | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleJobClick = (job: JobExperience) => {
    setSelectedJob(job);
  };

  const handleCloseBalloon = () => {
    setSelectedJob(null);
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white text-3d-dark' : 'text-gray-900 text-3d'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Click on any job title to explore the details
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
            >
              <JobTitle
                job={job}
                onClick={() => handleJobClick(job)}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Instruction */}
        <motion.div
          className={`text-center mt-12 p-6 rounded-2xl ${
            isDarkMode ? 'glass-dark' : 'glass'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className={`text-base ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨ <strong>Hover</strong> to see the magic, <strong>Click</strong> to discover more
          </motion.p>
        </motion.div>
      </div>

      {/* Job Balloon Modal */}
      {selectedJob && (
        <JobBalloon
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={handleCloseBalloon}
          isDarkMode={isDarkMode}
        />
      )}
    </section>
  );
}