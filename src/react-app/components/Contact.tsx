import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import emailjs from 'emailjs-com';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  Phone, 
   
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // You would need to set up EmailJS with your service ID, template ID, and public key
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Uncomment and configure when you have EmailJS set up:
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        project: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'max.coin.tech@gmail.com',
      href: 'mailto:max.coin.tech@gmail.com',
      color: 'text-purple-400'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      value: 'maxcointech0000',
      href: 'https://discord.com/users/maxcointech0000',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Telegram',
      value: 'maxcointech1007',
      href: 'https://t.me/maxcointech1007',
      color: 'text-cyan-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/maxcointech',
      color: 'text-gray-400 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/maxcointech',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/maxcointech',
      color: 'text-cyan-400 hover:text-cyan-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
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
              Let's Create Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and explore 
            how cutting-edge technology can transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Send className="w-6 h-6 mr-3 text-purple-400" />
                Start Your Project
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project" className="block text-white font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select project type</option>
                      <option value="AI Development" className="bg-gray-800">AI Development</option>
                      <option value="Blockchain/Web3" className="bg-gray-800">Blockchain/Web3</option>
                      <option value="Full Stack Web App" className="bg-gray-800">Full Stack Web App</option>
                      <option value="Chatbot Development" className="bg-gray-800">Chatbot Development</option>
                      <option value="Mobile App" className="bg-gray-800">Mobile App</option>
                      <option value="Consultation" className="bg-gray-800">Technical Consultation</option>
                      <option value="Other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select timeline</option>
                      <option value="ASAP" className="bg-gray-800">ASAP (Rush)</option>
                      <option value="1-2 weeks" className="bg-gray-800">1-2 weeks</option>
                      <option value="1 month" className="bg-gray-800">1 month</option>
                      <option value="2-3 months" className="bg-gray-800">2-3 months</option>
                      <option value="3+ months" className="bg-gray-800">3+ months</option>
                      <option value="Flexible" className="bg-gray-800">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, requirements, and goals..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-green-400 font-semibold">&lt; 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Project Success Rate</span>
                  <span className="text-green-400 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Client Satisfaction</span>
                  <span className="text-green-400 font-semibold">⭐ 5.0/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Years of Experience</span>
                  <span className="text-cyan-400 font-semibold">8+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
