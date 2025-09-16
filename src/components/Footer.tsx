import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-purple text-white py-10 text-center"
    >
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">Contact Us</p>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" aria-label="Facebook"><Facebook className="w-7 h-7 hover:text-neon-blue transition-colors duration-300" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-7 h-7 hover:text-neon-blue transition-colors duration-300" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="w-7 h-7 hover:text-neon-blue transition-colors duration-300" /></a>
        </div>
        <div className="footer-logo">
          <img src="/cogniverse-footer-logo.png" alt="CogniVerse Footer Logo" className="h-10" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
