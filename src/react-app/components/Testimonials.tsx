import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechVision Inc.',
      company: 'AI Startup',
      testimonial: 'MaxCoinTech delivered an exceptional AI-powered platform that exceeded our expectations. The attention to detail and innovative approach transformed our business operations completely. The project was delivered on time and within budget.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=150&h=150&fit=crop&crop=face',
      project: 'AI Analytics Platform'
    },
    {
      name: 'David Rodriguez',
      role: 'Founder, CryptoFlow',
      company: 'Blockchain Company',
      testimonial: 'Working with MaxCoinTech on our DeFi platform was incredible. Their deep understanding of blockchain technology and smart contract development is unmatched. The security audits passed with flying colors.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      project: 'DeFi Trading Platform'
    },
    {
      name: 'Emily Watson',
      role: 'CTO, InnovateLab',
      company: 'Tech Consultancy',
      testimonial: 'The full-stack solution MaxCoinTech built for us revolutionized our client management system. The performance improvements were remarkable - 300% faster load times and enhanced user experience.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      project: 'Client Management System'
    },
    {
      name: 'Michael Kim',
      role: 'Product Manager, ChatBot Pro',
      company: 'SaaS Company',
      testimonial: 'Our conversational AI chatbot became 10x more intelligent after MaxCoinTech\'s implementation. The natural language processing capabilities are outstanding, and customer satisfaction increased by 85%.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      project: 'Conversational AI Bot'
    },
    {
      name: 'Lisa Thompson',
      role: 'Director of Engineering, ScaleUp',
      company: 'E-commerce Platform',
      testimonial: 'MaxCoinTech\'s expertise in modern web technologies helped us scale from 10K to 1M users seamlessly. The architecture is robust, secure, and perfectly optimized for performance.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face',
      project: 'E-commerce Scaling Solution'
    },
    {
      name: 'James Wilson',
      role: 'VP of Technology, FinTech Solutions',
      company: 'Financial Services',
      testimonial: 'The blockchain-based payment system MaxCoinTech developed has processed over $10M in transactions with zero issues. The code quality and security standards are exceptional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      project: 'Blockchain Payment System'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what industry leaders say about 
            our collaboration and the results we've achieved together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-purple-400/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Project Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-400/50"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-purple-400 text-xs font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { value: '100%', label: 'Client Satisfaction', color: 'text-green-400' },
            { value: '50+', label: 'Projects Delivered', color: 'text-purple-400' },
            { value: '30+', label: 'Happy Clients', color: 'text-cyan-400' },
            { value: '8+', label: 'Years Experience', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <div className={`text-5xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center space-y-6 bg-gradient-to-r from-green-500/10 via-transparent to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl px-12 py-8">
            <h3 className="text-2xl font-bold text-white">Join the success stories</h3>
            <p className="text-gray-300 max-w-md">
              Ready to transform your business with cutting-edge technology solutions?
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
