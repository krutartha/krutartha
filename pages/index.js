'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiAcademicCap, HiCode, HiBriefcase, HiStar, HiLightBulb } from 'react-icons/hi'
import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-creative'
import TiltImage from '../components/TiltImage'
import TiltProject from '../components/TiltProject'
import TiltExperience from '../components/TiltExperience'
import projects from '../data/projects'
import experiences from '../data/experiences'
import achievements from '../data/achievements'
import skills from '../data/skills'
import education from '../data/education'
import certifications from '../data/certifications'
import testimonials from '../data/testimonials'

// Map icon string names to actual components
const iconMap = {
  HiAcademicCap,
  HiCode,
  HiBriefcase,
  HiStar,
  HiLightBulb,
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const containerRef = useRef(null)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const projectsScrollRef = useRef(null)
  const achievementsScrollRef = useRef(null)
  
  // Enhanced smooth scroll setup
  const { scrollY } = useScroll()
  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform values for parallax effects
  const heroY = useTransform(smoothY, [0, 300], [0, -50])
  const heroOpacity = useTransform(smoothY, [0, 300], [1, 0])
  const backgroundY = useTransform(smoothY, [0, 300], [0, 100])

  // Scroll progress indicator
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Adjust this value based on your header height or desired offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      
      // Hide nav when scrolling past hero section (300px)
      setIsNavVisible(window.scrollY < 300)
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  // Add scroll animation styles
  useEffect(() => {
    const scrollKeyframes = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-50% - 1.5rem));
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = scrollKeyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Achievements 3D Carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // State for expanded experience card
  const [expandedExperience, setExpandedExperience] = useState(null);

  // Responsive state for mobile/desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-black text-gray-100">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-zinc-900 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(29,78,216,0.1),rgba(0,0,0,0))]" />
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
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-0"
          >
            <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Hi, I&apos;m
                  </motion.span>{' '}
                  <motion.span
                    className="inline-block text-blue-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Krutartha
                  </motion.span>
                  <motion.span
                    className="block text-2xl sm:text-3xl lg:text-4xl mt-4 text-zinc-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Software Engineer &amp; AI/ML Enthusiast
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-zinc-400 mb-8 max-w-2xl lg:max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Computer Science student at Syracuse University, passionate about AI/ML and full-stack development.
                  Currently exploring LLM explainability and building innovative solutions.
                </motion.p>

                <motion.div
                  className="flex gap-6 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.a
                    href="mailto:krutartha2002@gmail.com"
                    className="group relative px-8 py-4 rounded-lg overflow-hidden transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-zinc-900"/>
                    <span className="relative flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                      <FaEnvelope className="text-blue-400 group-hover:text-blue-300" /> Get in Touch
                    </span>
                  </motion.a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="group relative px-8 py-4 rounded-lg overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-all duration-300"
                  >
                    <span className="relative flex items-center gap-2 text-white font-semibold">
                      Download Resume
                    </span>
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="mt-8 flex gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <a
                    href="https://github.com/krutartha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/krutartha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <TiltImage />
          </motion.div>
        </div>

        {/* Navigation Bar */}
        <motion.div
          className="hidden md:flex justify-center w-full mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isNavVisible ? 1 : 0,
            y: isNavVisible ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            {[
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20 px-4 bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-950 rounded-lg p-8 border border-zinc-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{education.school}</h3>
                  <p className="text-blue-400">{education.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400">{education.graduation}</p>
                  <p className="text-blue-400 font-semibold">GPA: {education.gpa}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-zinc-300">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map(course => (
                    <span key={course} className="bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-4 bg-zinc-950"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-black rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="bg-zinc-900 text-zinc-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-blue-400">AI/ML Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map(skill => (
                  <span key={skill} className="bg-zinc-900 text-zinc-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.web.map(skill => (
                  <span key={skill} className="bg-zinc-900 text-zinc-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Other Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map(skill => (
                  <span key={skill} className="bg-zinc-900 text-zinc-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-4 bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Professional Journey</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            A track record of delivering innovative solutions and driving technical excellence across different roles.
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-800"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <TiltExperience key={exp.company}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-black"></div>
                    
                    {/* Content container */}
                    <div className={`relative ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-[calc(50%-2rem)]`}>
                      <motion.div 
                        className="bg-zinc-950 rounded-lg p-6 border border-zinc-800 hover:bg-zinc-900 transition-all cursor-pointer relative group shadow-lg"
                        whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
                        onClick={() => {
                          setExpandedExperience(expandedExperience === index ? null : index);
                        }}
                      >
                        <div className={`flex flex-col relative`}>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                            <div>
                              <h3 className="text-base sm:text-xl font-bold text-white leading-tight">{exp.role}</h3>
                              <p className="text-blue-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                            </div>
                            <p className="text-zinc-400 text-xs sm:text-sm mt-1 sm:mt-0">{exp.duration}</p>
                          </div>
                          
                          {/* Expandable content */}
                          <div 
                            id={`exp-${index}`}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: expandedExperience === index ? '500px' : '0px' }}
                          >
                            <div className="mt-4 pt-4 border-t border-zinc-800">
                              <p className="text-zinc-300 mb-4">{exp.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map(tech => (
                                  <span key={tech} className="bg-zinc-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* Downward/Upward arrow at the end of the card */}
                          <div className="flex justify-center mt-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-6 w-6 text-blue-400 transition-transform duration-300 ${expandedExperience === index ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </TiltExperience>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-4 bg-zinc-950"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Featured Projects</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Showcasing some of my best work that demonstrates my technical expertise and problem-solving abilities.
          </p>
          
          <div className="relative w-full flex justify-center items-center py-8">
            {isMobile ? (
              <div className="relative w-full overflow-hidden">
                {/* Gradient Overlays for Scroll Indication */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>
                {/* Scrollable Content */}
                <div
                  className="flex overflow-x-auto pb-8 gap-6 px-4 scrollbar-hide w-full"
                  style={{
                    animation: 'scroll 30s linear infinite',
                    scrollBehavior: 'smooth',
                    width: 'max-content',
                  }}
                >
                  {[...projects, ...projects].map((project, index) => (
                    <div key={project.title + '-' + index} className="w-[180px] min-h-[160px] h-auto flex flex-col bg-black p-4 rounded-lg border border-zinc-800">
                      <TiltProject project={project} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Swiper
                effect="creative"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 2200, disableOnInteraction: false }}
                slidesPerView={2}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-120%", 0, -500],
                    rotate: [0, 0, -15],
                  },
                  next: {
                    shadow: true,
                    translate: ["120%", 0, -500],
                    rotate: [0, 0, 15],
                  },
                }}
                modules={[EffectCreative, Autoplay]}
                className="w-full sm:w-[900px] min-h-[360px]"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.title} className="flex justify-center items-center">
                    <div className="sm:w-[350px] sm:min-h-[320px] w-[180px] min-h-[160px] h-auto flex flex-col">
                      <TiltProject project={project} index={index} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        className="py-20 px-4 bg-zinc-950"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Achievements & Recognition</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Milestones and acknowledgments that showcase my commitment to excellence.
          </p>
          
          {/* Slideshow Container */}
          <div className="relative w-full flex justify-center items-center min-h-[340px] py-16">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 1800, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="w-[900px] h-[280px]"
            >
              {achievements.map((achievement, idx) => {
                const Icon = iconMap[achievement.icon];
                return (
                  <SwiperSlide key={achievement.title} className="flex items-center justify-center">
                    <div className="w-[350px] h-[240px] bg-black border border-zinc-800 rounded-2xl flex flex-col justify-between gap-4 shadow-lg p-8">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-zinc-900 rounded-md">
                          {Icon && <Icon className="text-2xl text-blue-400" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                          <p className="text-blue-400 font-medium">{achievement.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-zinc-300 text-base leading-relaxed">{achievement.description}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Interested in working together? Let&apos;s discuss how I can contribute to your team&apos;s success.
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
              href="https://github.com/krutartha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-zinc-800 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-black text-zinc-400 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Krutartha. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and 🔥</p>
        </div>
      </motion.footer>
    </main>
  )
}