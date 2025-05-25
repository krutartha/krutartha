'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaPython, FaInstagram, FaLinkedin, FaEnvelope, FaCode, FaRobot } from 'react-icons/fa'
import { SiBeautifulsoup, SiGroq } from 'react-icons/si'
import { HiArrowLeft } from 'react-icons/hi'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const techStack = [
  {
    name: 'Python',
    description: 'Core programming language used for web scraping and data processing.',
    logo: FaPython,
    logoColor: 'text-blue-500',
  },
  {
    name: 'BeautifulSoup',
    description: 'Used for parsing and extracting data from Instagram web pages.',
    logo: FaCode,
    logoColor: 'text-green-500',
  },
  {
    name: 'Instagram API',
    description: 'Official API integration for accessing Instagram data and content.',
    logo: FaInstagram,
    logoColor: 'text-pink-500',
  },
  {
    name: 'Groq Cloud API',
    description: 'Leveraged for AI-powered caption summarization and analysis.',
    logo: FaRobot,
    logoColor: 'text-purple-500',
  },
]

export default function InstaScribe() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading state
  }

  return (
    <main className="min-h-screen bg-black text-gray-100">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-zinc-900 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Back Button */}
      <Link href="/#projects" className="fixed top-6 left-6 z-50">
        <motion.div
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiArrowLeft className="text-xl" />
          <span>Back</span>
        </motion.div>
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(29,78,216,0.1),rgba(0,0,0,0))]"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/grid.png")',
              backgroundSize: '30px 30px',
              opacity: 0.05
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
                InstaScribe
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                A Python-based Instagram scraper utilizing GenAI approaches for automated caption summarization.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/krutartha/instascribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-zinc-800 transition"
                >
                  <FaGithub /> View on GitHub
                </a>
                <button
                  onClick={() => {
                    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Project Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-[600px] h-[400px] bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 overflow-hidden">
                <Image
                  src="/projects/instascribe.png"
                  alt="InstaScribe Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Overview */}
            <motion.div
              id="overview"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  InstaScribe is an innovative tool that combines web scraping capabilities with advanced AI to analyze and summarize Instagram captions. 
                  The project demonstrates the power of combining traditional web technologies with modern AI approaches.
                </p>
                <p>
                  By leveraging the Groq Cloud API, InstaScribe provides intelligent summarization of Instagram content, making it easier to understand 
                  and analyze social media trends and patterns.
                </p>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {['Python', 'BeautifulSoup', 'Instagram API', 'Groq Cloud API'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-900 text-zinc-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Automated Scraping',
                  description: 'Efficient data collection from Instagram using BeautifulSoup and official API integration.'
                },
                {
                  title: 'AI Summarization',
                  description: 'Intelligent caption summarization using Groq Cloud API for quick content understanding.'
                },
                {
                  title: 'Data Analysis',
                  description: 'Comprehensive analysis of Instagram trends and patterns through processed data.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black p-6 rounded-lg border border-zinc-800"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in this project?</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can work together on similar projects.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/krutartha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-zinc-800 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:krutartha2002@gmail.com"
              className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-zinc-800 transition"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 