import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ChevronDown, Code, Cpu, Blocks, MessageSquare } from 'lucide-react';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
};

const Hero: React.FC = () => {
  useEffect(() => {
    const loadGoogleFont = () => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };
    loadGoogleFont();
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-lg font-semibold tracking-wide">
                SENIOR FULL STACK DEVELOPER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-6xl lg:text-7xl font-black text-white leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                MaxCoinTech
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl"
            >
              Crafting extraordinary digital experiences with{' '}
              <span className="text-purple-400 font-semibold">AI</span>,{' '}
              <span className="text-cyan-400 font-semibold">Blockchain</span>, and{' '}
              <span className="text-blue-400 font-semibold">Full Stack</span> technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Cpu, label: 'AI', color: 'text-purple-400' },
                { icon: Blocks, label: 'Blockchain', color: 'text-cyan-400' },
                { icon: Code, label: 'Full Stack', color: 'text-blue-400' },
                { icon: MessageSquare, label: 'Chatbots', color: 'text-green-400' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-all duration-300"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-white font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex space-x-4"
            >
              <button
                onClick={scrollToPortfolio}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white/20 rounded-2xl text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Let's Talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-gray-400 text-sm"
            >
              <p className="font-mono">
                8+ Years Experience • 50+ Projects • Trusted by Global Clients
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-96 lg:h-[600px] w-full"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToPortfolio}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white/80 transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
