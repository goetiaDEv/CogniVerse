import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative bg-dark-purple text-center py-20 md:py-32 flex items-center justify-center min-h-[calc(100vh-80px)] aspect-w-4 aspect-h-3"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-purple to-neon-blue opacity-20"></div>
      <div className="container mx-auto px-5 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4"
        >
          Descubra o poder da mente coletiva
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-montserrat text-neutral-gray mb-8"
        >
          Transforme dados em decisões inteligentes com nossa IA
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-neon-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
