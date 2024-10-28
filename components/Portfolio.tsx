'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Paul Yi
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 mb-8 text-center">
          DevOps Engineer
        </h2>
        <div className="flex space-x-6 mb-12">
          <a href="https://github.com/paulcyi" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/paulcyi" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:yipaulc@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Featured Project Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Project
        </h2>

        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">
                Secure Healthcare Data Pipeline
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/paulcyi/secure-healthcare-data-pipeline"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://secure-healthcare-data-pipeline.paulyi.dev"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              A production-grade healthcare data pipeline demonstrating modern DevOps practices,
              security implementations, and cloud-native architecture. Built with FastAPI and
              designed for HIPAA compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    JWT-based authentication system
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Multi-stage Docker containerization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    GitHub Actions CI/CD pipeline
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Prometheus & Grafana monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    AWS cloud deployment
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'AWS', 'Python', 'React'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-8">
        <p>© 2024 Paul Yi. All rights reserved.</p>
      </footer>
    </div>
  );
}