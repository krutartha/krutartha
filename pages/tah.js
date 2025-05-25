'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaReact } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiPayloadcms } from 'react-icons/si'
import { HiArrowLeft } from 'react-icons/hi'
import Link from 'next/link'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const techStack = [
  {
    name: 'Next.js',
    description: 'React framework used for building the frontend with server-side rendering capabilities.',
    logo: FaReact,
    logoColor: 'text-blue-500',
  },
  {
    name: 'TypeScript',
    description: 'Used for type-safe development and better code maintainability.',
    logo: SiTypescript,
    logoColor: 'text-blue-600',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development.',
    logo: SiTailwindcss,
    logoColor: 'text-cyan-500',
  },
  {
    name: 'Payload CMS',
    description: 'Headless CMS for content management and dynamic content updates.',
    logo: SiPayloadcms,
    logoColor: 'text-purple-500',
  },
]

export default function TheAmericanHindu() {
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
                The American Hindu
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                A full-stack website built with modern web development practices, featuring dynamic content management.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/krutartha/tah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-zinc-800 transition"
                >
                  <FaGithub /> View on GitHub
                </a>
                <a
                  href="https://theamericanhindu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition"
                >
                  View Website
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
                  src="/projects/tah.png"
                  alt="The American Hindu Website"
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
                  The American Hindu is a modern full-stack website that showcases the power of Next.js and Payload CMS in creating dynamic, 
                  content-rich web applications. The project demonstrates best practices in web development and content management.
                </p>
                <p>
                  Built with a focus on performance, scalability, and user experience, The American Hindu provides a robust foundation for 
                  content-driven websites with dynamic content management capabilities.
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
                {['Next.js', 'TypeScript', 'Tailwind', 'Payload CMS'].map((tech) => (
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
                  title: 'Dynamic Content',
                  description: 'Content management system for easy updates and modifications.'
                },
                {
                  title: 'Modern Stack',
                  description: 'Built with Next.js, TypeScript, and Tailwind CSS for optimal performance.'
                },
                {
                  title: 'Responsive Design',
                  description: 'Fully responsive layout that works seamlessly across all devices.'
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