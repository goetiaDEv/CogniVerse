import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Importa os ícones de menu
import NeuralNetworkBackground from './NeuralNetworkBackground'; // Importa o componente

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-header-bg text-neutral-gray py-4 relative overflow-hidden"
    >
      <NeuralNetworkBackground /> {/* Adiciona o componente de fundo */}
      <div className="container mx-auto px-5 flex justify-between items-center flex-wrap relative z-10"> {/* Adiciona z-10 para ficar acima do canvas */}
        <div className="flex items-center space-x-4">
          {/* Logo da CogniVerse - Placeholder por enquanto */}
          <img src="/logo.png" alt="CogniVerse Logo" className="h-12" />
          {/* Slogan - Montserrat Bold */}
          <p className="font-montserrat font-bold text-lg hidden md:block">Descubra o poder da mente coletiva: CogniVerse</p>
        </div>
        <nav className="hidden md:flex flex-grow justify-end items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-neon-blue transition-colors duration-300">Home</a></li>
            <li><a href="#solutions" className="hover:text-neon-blue transition-colors duration-300">Solutions</a></li>
            <li><a href="#about" className="hover:text-neon-blue transition-colors duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-neon-blue transition-colors duration-300">Contact</a></li>
          </ul>
          <button className="bg-neon-blue text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors duration-300">
            Request Demo
          </button>
        </nav>

        {/* Mobile menu toggle (hidden on desktop) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-header-bg text-neutral-gray z-20 shadow-lg"
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><a href="#home" className="block py-2 hover:text-neon-blue transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#solutions" className="block py-2 hover:text-neon-blue transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Solutions</a></li>
            <li><a href="#about" className="block py-2 hover:text-neon-blue transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#contact" className="block py-2 hover:text-neon-blue transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li>
              <button className="bg-neon-blue text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                Request Demo
              </button>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
