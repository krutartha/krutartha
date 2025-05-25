'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaReact, FaJava, FaNodeJs, FaRunning} from 'react-icons/fa'
import { SiFirebase, SiSpringboot, SiTailwindcss, SiJunit5 } from 'react-icons/si'
import { IoPhonePortrait } from "react-icons/io5";
import { HiMiniServerStack } from "react-icons/hi2";
import { TbBrandReactNative } from "react-icons/tb";
import { useState, useEffect } from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowLeft } from 'react-icons/hi'
import Link from 'next/link'

const techStack = [
  {
    name: 'React Native',
    description: 'React Native was used to build the mobile app, allowing for a smooth and responsive user experience across iOS and Android devices.',
    image: '/images/reactnative-usage.png', // Replace with your actual image paths
    logo: TbBrandReactNative,
    logoColor: 'text-sky-500',
  },
  {
    name: 'Java',
    description: 'Java was used for the backend development, providing a robust and scalable server-side solution with Spring Boot.',
    image: '/images/java-usage.png',
    logo: FaJava,
    logoColor: 'text-orange-500',
  },
   {
    name: 'JUnit',
    description: 'JUnit was used for unit testing the Java backend, ensuring code quality and reliability through automated tests.',
    image: '/images/junit-usage.png',
    logo: SiJunit5,
    logoColor: 'text-red-500',
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS provided utility-first styling, enabling rapid UI development with a clean, responsive design.',
    image: '/images/tailwind-usage.png',
    logo: SiTailwindcss,
    logoColor: 'text-cyan-500',
  },
  {
    name: 'Spring Boot',
    description: 'Spring Boot was used for building a secure and scalable backend REST API to handle user authentication and data flow.',
    image: '/images/springboot-usage.png',
    logo: SiSpringboot,
    logoColor: 'text-green-500',
  },
  {
    name: 'Firebase',
    description: 'Firebase powers media storage and real-time features such as image/video uploads and syncing across devices.',
    image: '/images/firebase-usage.png',
    logo: SiFirebase,   
    logoColor: 'text-yellow-500',
  },
]


export default function OpenNote() {
    const [mounted, setMounted] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    if (!mounted) {
        return null // or a loading state
    }

    // flex py-4 px-8 shadow-md justify-between items-center --> main div
    // flex flex-col items-center justify-center text-center max-w-4xl --> hero section
    // flex justify-center py-12 --> iPhone mockup section
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
                OpenNote
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                A cross-platform mobile app for notes sharing, leveraging advanced data storage and management techniques with real-time syncing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/cruzm298/OpenNote-Spring24"
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

            {/* Mobile Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center -mt-16"
            >
              <div className="relative w-[330px] h-[680px] bg-black rounded-[36px] shadow-2xl border-[6px] border-zinc-800">
                {/* Inner screen (video area) */}
                <div className="absolute top-[14px] left-[8px] right-[8px] bottom-[14px] bg-white rounded-[30px] overflow-hidden">
                  {mounted && (
                    <video
                      src="/demo.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Top notch */}
                <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[100px] h-[16px] bg-black rounded-b-xl z-10"></div>

                {/* Side buttons (right) */}
                <div className="absolute right-[-4px] top-[70px] w-[2px] h-[36px] bg-zinc-600 rounded-full"></div>
                <div className="absolute right-[-4px] top-[120px] w-[2px] h-[50px] bg-zinc-600 rounded-full"></div>

                {/* Side button (left - silent toggle) */}
                <div className="absolute left-[-4px] top-[90px] w-[2px] h-[24px] bg-zinc-600 rounded-full"></div>
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
                  OpenNote is a modern note-taking application that enables seamless sharing and collaboration across multiple platforms. 
                  Built with a focus on user experience and real-time synchronization.
                </p>
                <p>
                  The app features advanced data storage techniques, ensuring fast and reliable access to notes while maintaining data integrity 
                  across different devices.
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
                {['React Native', 'Java', 'JUnit', 'Spring Boot', 'Firebase'].map((tech) => (
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
                  title: 'Real-time Sync',
                  description: 'Instant synchronization of notes across all devices with conflict resolution.'
                },
                {
                  title: 'Cross-platform',
                  description: 'Seamless experience across iOS and Android devices with native performance.'
                },
                {
                  title: 'Secure Storage',
                  description: 'Advanced encryption and secure data storage for user privacy.'
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
