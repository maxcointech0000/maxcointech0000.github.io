import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, categories, type Category } from '@/shared/projects';
import { ExternalLink, Github, Users } from 'lucide-react';
import { Link } from 'react-router';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI': 'from-purple-500 to-pink-500',
      'Blockchain': 'from-cyan-500 to-blue-500',
      'App': 'from-green-500 to-teal-500',
      'Chatbot': 'from-yellow-500 to-orange-500',
      'Fullstack': 'from-red-500 to-purple-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover my latest works across AI, Blockchain, and Full Stack development. 
            Each project represents innovation, technical excellence, and real-world impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-xl shadow-purple-500/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
                        {project.category}
                      </span>
                    </div>

                    {/* User Count */}
                    {project.userCount && (
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <Users className="w-3 h-3 text-white" />
                        <span className="text-xs text-white font-medium">{project.userCount}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-1 text-white/60 text-xs font-medium">
                          +{project.stack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      
                      <div className="flex items-center space-x-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                        >
                          <ExternalLink className="w-4 h-4 text-white group-hover:text-cyan-400" />
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                          >
                            <Github className="w-4 h-4 text-white group-hover:text-purple-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">Ready to innovate?</h3>
              <p className="text-gray-300 text-sm">Let's build something extraordinary together</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
