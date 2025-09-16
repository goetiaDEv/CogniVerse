import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Zap, Share2 } from 'lucide-react'; // Exemplos de ícones

const Features: React.FC = () => {
  const featureCards = [
    {
      icon: LineChart, // Ícone Lucide React
      title: 'Data Insights',
      description: 'Obtenha insights profundos dos seus dados com IA avançada.',
      link: '#',
    },
    {
      icon: Zap, // Ícone Lucide React
      title: 'Automation Power',
      description: 'Automatize processos e aumente a eficiência operacional.',
      link: '#',
    },
    {
      icon: Share2, // Ícone Lucide React
      title: 'Synergy Boost',
      description: 'Potencialize a colaboração e a inovação em sua equipe.',
      link: '#',
    },
  ];

  return (
    <section id="solutions" className="bg-neutral-gray py-20 text-center text-gray-800">
      <div className="container mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-montserrat font-bold text-dark-purple mb-12"
        >
          Nossas Soluções
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-dark-purple rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <card.icon className="w-16 h-16 text-neon-blue mx-auto mb-6" />
              <h3 className="text-2xl font-montserrat font-bold text-dark-purple mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <a href={card.link} className="text-neon-blue font-bold hover:underline">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
