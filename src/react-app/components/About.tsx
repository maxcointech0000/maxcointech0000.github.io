import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Blocks, MessageSquare, Award, Clock, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced ML models, NLP, computer vision, and AI integration',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Blocks,
      title: 'Blockchain Development',
      description: 'Smart contracts, DApps, NFT marketplaces, and DeFi protocols',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Modern web apps, APIs, databases, and cloud architecture',
      color: 'text-teal-400',
      bgColor: 'from-teal-500/20 to-cyan-500/20'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Systems',
      description: 'Conversational AI, NLP pipelines, and intelligent automation',
      color: 'text-emerald-400',
      bgColor: 'from-emerald-500/20 to-green-500/20'
    }
  ];

  const stats = [
    { icon: Award, label: 'Years Experience', value: '8+', color: 'text-amber-400' },
    { icon: Code2, label: 'Projects Completed', value: '50+', color: 'text-blue-400' },
    { icon: Globe, label: 'Global Clients', value: '30+', color: 'text-cyan-400' },
    { icon: Clock, label: 'Success Rate', value: '100%', color: 'text-emerald-400' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Design Philosophy
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I believe in crafting digital experiences that seamlessly blend cutting-edge technology 
            with intuitive design. Every project is an opportunity to push boundaries and create 
            solutions that make a real difference in people's lives.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold text-white mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Innovation First</h4>
                    <p className="text-gray-300 text-sm">Embracing cutting-edge technologies to solve complex problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quality Excellence</h4>
                    <p className="text-gray-300 text-sm">Delivering exceptional results with attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">User-Centric Design</h4>
                    <p className="text-gray-300 text-sm">Creating intuitive experiences that users love</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed italic">
                "Technology is best when it brings people together and solves real-world problems. 
                My mission is to create digital solutions that not only meet today's needs but 
                anticipate tomorrow's possibilities."
              </blockquote>
              <div className="mt-6 flex items-center space-x-4">
                <img
                  src="https://mocha-cdn.com/0199e1a2-209c-7211-83c4-a7750c9c9135/ChatGPT-Image-Oct-13-2025-10_01_16-AM.png"
                  alt="MaxCoinTech"
                  className="w-16 h-16 rounded-full border-2 border-blue-400"
                />
                <div>
                  <div className="text-white font-semibold">MaxCoinTech</div>
                  <div className="text-gray-400 text-sm">Senior Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
