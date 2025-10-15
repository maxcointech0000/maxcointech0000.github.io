import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MessageSquare, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/maxcointech',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/maxcointech',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/maxcointech',
      label: 'Twitter',
      color: 'hover:text-cyan-400'
    }
  ];

  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:max.coin.tech@gmail.com',
      label: 'max.coin.tech@gmail.com'
    },
    {
      icon: MessageSquare,
      href: 'https://discord.com/users/maxcointech0000',
      label: 'maxcointech0000'
    },
    {
      icon: Phone,
      href: 'https://t.me/maxcointech1007',
      label: 'maxcointech1007'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">MC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">MaxCoinTech</h3>
                <p className="text-gray-400 text-sm">Senior Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Crafting exceptional digital experiences with AI, Blockchain, and Full Stack technologies. 
              Turning innovative ideas into reality with 8+ years of expertise.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <contact.icon className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm">{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>&copy; {new Date().getFullYear()} MaxCoinTech. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and cutting-edge tech</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
