import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiSettings, FiGlobe } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times and seamless user experiences.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and actionable insights to drive informed business decisions.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that bring your team together, no matter where they are.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: FiSettings,
      title: 'Easy Integration',
      description: 'Connect with your existing tools and workflows with our robust API and integrations.',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: FiGlobe,
      title: 'Global Scale',
      description: 'Built for scale with global infrastructure and 99.9% uptime guarantee.',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;