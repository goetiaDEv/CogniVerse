import React from 'react';
import { motion } from 'framer-motion';

const SynergyShowcase: React.FC = () => {
  const subsidiaryLogos = [
    { name: 'TradeFlow', src: '/tradeflow-logo.png' },
    { name: 'EduLabs', src: '/edulabs-logo.png' },
    { name: 'InnovateHub', src: '/innovatehub-logo.png' },
    { name: 'DataSphere', src: '/datasphere-logo.png' },
  ];

  return (
    <section className="bg-neutral-gray py-20 text-center">
      <div className="container mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-montserrat font-bold text-dark-purple mb-12"
        >
          Nossas Integrações
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex overflow-x-auto justify-start md:justify-center items-center py-5 space-x-10 scrollbar-hide"
        >
          {subsidiaryLogos.map((logo, index) => (
            <React.Fragment key={logo.name}>
              <img 
                src={logo.src} 
                alt={`${logo.name} Logo`} 
                className="h-20 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
              />
              {index < subsidiaryLogos.length - 1 && (
                <div className="w-10 h-0.5 bg-neon-blue flex-shrink-0"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SynergyShowcase;
