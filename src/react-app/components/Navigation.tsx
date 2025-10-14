import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, MessageSquare, Award } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#portfolio', label: 'Projects', icon: Briefcase },
    { href: '#about', label: 'About', icon: User },
    { href: '#testimonials', label: 'Reviews', icon: Award },
    { href: '#contact', label: 'Contact', icon: MessageSquare }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">MC</span>
            </div>
            <span className="text-white font-bold text-xl">MaxCoinTech</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Let's Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full text-left text-white/80 hover:text-white font-medium py-3 hover:bg-white/5 rounded-xl px-4 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
