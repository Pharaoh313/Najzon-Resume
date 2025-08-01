import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ContactInfo } from '../types';

interface ContactSectionProps {
  contact: ContactInfo;
  isDarkMode: boolean;
}

export default function ContactSection({ contact, isDarkMode }: ContactSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Device detection
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      setIsMobile(mobileRegex.test(userAgent.toLowerCase()));
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const glowAnimation = {
    boxShadow: [
      '0 0 5px rgba(59, 130, 246, 0.3)',
      '0 0 25px rgba(59, 130, 246, 0.6)',
      '0 0 5px rgba(59, 130, 246, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
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
            Let's Connect
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to collaborate on exciting cloud security projects
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Email Card */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={`mailto:${contact.email}`}
              className={`
                block p-6 rounded-2xl border-2 transition-all duration-300 transform
                ${isDarkMode 
                  ? 'glass-dark border-green-400 hover:border-green-300' 
                  : 'glass border-green-500 hover:border-green-400'
                }
              `}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={glowAnimation}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <div className="text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    isDarkMode ? 'bg-green-600' : 'bg-green-500'
                  }`}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Email Me
                </h3>
                <p className={`text-sm break-all ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {contact.email}
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Phone Card */}
          <motion.div variants={itemVariants} className="relative">
            <motion.a
              href={isMobile ? `tel:${contact.phone}` : '#'}
              onClick={handlePhoneClick}
              className={`
                block p-6 rounded-2xl border-2 transition-all duration-300 transform cursor-pointer
                ${isDarkMode 
                  ? 'glass-dark border-blue-400 hover:border-blue-300' 
                  : 'glass border-blue-500 hover:border-blue-400'
                }
              `}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={glowAnimation}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <div className="text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
                  }`}
                  whileHover={{ 
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.4, repeat: 2 }
                  }}
                >
                  <PhoneIcon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Call Me
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {contact.phone}
                </p>
                {!isMobile && (
                  <p className={`text-xs mt-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Best on mobile
                  </p>
                )}
              </div>
            </motion.a>

            {/* Tooltip for desktop users */}
            <motion.div
              className={`
                absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg text-sm
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
                z-10
              `}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: showTooltip ? 1 : 0,
                y: showTooltip ? 0 : 10
              }}
              transition={{ duration: 0.2 }}
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              Use mobile to call directly
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          </motion.div>

          {/* Location Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              className={`
                p-6 rounded-2xl border-2 transition-all duration-300 transform
                ${isDarkMode 
                  ? 'glass-dark border-purple-400 hover:border-purple-300' 
                  : 'glass border-purple-500 hover:border-purple-400'
                }
              `}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              animate={glowAnimation}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <div className="text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    isDarkMode ? 'bg-purple-600' : 'bg-purple-500'
                  }`}
                  whileHover={{ 
                    y: [0, -5, 0],
                    transition: { duration: 0.4, repeat: 3 }
                  }}
                >
                  <MapPinIcon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Location
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {contact.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
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
            🚀 Ready to secure the cloud together? Let's make it happen!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}