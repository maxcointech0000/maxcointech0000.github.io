import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  RefreshCw,
  ArrowRight 
} from 'lucide-react';

const Workflow: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workflowSteps = [
    {
      icon: Search,
      title: 'Discovery & Research',
      description: 'Deep dive into requirements, market analysis, and user needs',
      details: ['Stakeholder interviews', 'Competitive analysis', 'Technical feasibility study', 'User persona development'],
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description: 'Crafting the roadmap and defining the architecture',
      details: ['Solution architecture', 'Technology stack selection', 'Project timeline', 'Resource allocation'],
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
      borderGradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Development & Implementation',
      description: 'Building robust, scalable solutions with clean code',
      details: ['Agile development', 'Code reviews', 'Version control', 'Documentation'],
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/20 to-indigo-500/20',
      borderGradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: TestTube,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure reliability and performance',
      details: ['Unit testing', 'Integration testing', 'Performance optimization', 'Security audits'],
      color: 'text-green-400',
      bgGradient: 'from-green-500/20 to-teal-500/20',
      borderGradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Deployment & Launch',
      description: 'Seamless deployment with monitoring and support',
      details: ['CI/CD pipeline', 'Production deployment', 'Performance monitoring', 'Launch support'],
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      borderGradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: RefreshCw,
      title: 'Maintenance & Evolution',
      description: 'Continuous improvement and feature enhancement',
      details: ['Regular updates', 'Feature enhancements', 'Performance tuning', 'Technical support'],
      color: 'text-red-400',
      bgGradient: 'from-red-500/20 to-pink-500/20',
      borderGradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              My Workflow
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that combines agile principles with cutting-edge practices 
            to deliver exceptional results consistently.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.bgGradient} border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-semibold">STEP {index + 1}</div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.borderGradient} rounded-full`}></div>
                        <span className="text-gray-300 text-sm font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`relative h-64 lg:h-80 rounded-3xl bg-gradient-to-br ${step.bgGradient} border border-white/10 overflow-hidden group-hover:scale-105 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Step Number */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.borderGradient} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-6 left-6">
                      <step.icon className={`w-20 h-20 ${step.color} opacity-50`} />
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${((index + 1) / workflowSteps.length) * 100}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${step.borderGradient}`}
                      ></motion.div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (except for last item) */}
                {index < workflowSteps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
                    <ArrowRight className="w-8 h-8 text-white/30 rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center space-y-6 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-3xl px-12 py-8">
            <h3 className="text-2xl font-bold text-white">Ready to start your project?</h3>
            <p className="text-gray-300 max-w-md">
              Let's discuss how this proven workflow can bring your vision to life
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
