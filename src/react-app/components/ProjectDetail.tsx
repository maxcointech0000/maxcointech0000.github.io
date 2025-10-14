import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { projects } from '@/shared/projects';
import { ArrowLeft, ExternalLink, Github, Users, Code, Target, Zap, Award } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <Link 
            to="/" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="relative z-10 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column - Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative h-96 rounded-3xl overflow-hidden bg-gray-800">
                <img
                  src={project.images[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-6 gap-3">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-2 ring-purple-400 scale-105' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Title and Category */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-4 py-2 rounded-2xl text-sm font-bold text-white bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
                    {project.category}
                  </span>
                  {project.userCount && (
                    <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">{project.userCount}</span>
                    </div>
                  )}
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Site</span>
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-purple-400" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="relative z-10 py-16 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-red-400" />
                Challenges Solved
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-green-400" />
                Project Impact
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.impact}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
