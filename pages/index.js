'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiAcademicCap, HiCode, HiBriefcase, HiStar, HiLightBulb } from 'react-icons/hi'
import { useState, useRef, useEffect } from 'react'

function TiltImage() {
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      if (!isHovered) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate distance from center as a percentage (-50 to 50)
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -15

      setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isHovered])

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto perspective-1000"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div 
        className="relative transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl transform scale-110"></div>
        
        {/* Image container */}
        <div 
          className="relative rounded-full overflow-hidden border-4 border-white/10 mx-auto"
          style={{ transform: 'translateZ(20px)', width: '100%', maxWidth: '400px', aspectRatio: '1/1' }}
        >
          <Image
            src="/pp.jpg"
            alt="Profile"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </motion.div>
  )
}

function TiltProject({ project, index }) {
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      if (!isHovered) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate distance from center as a percentage (-50 to 50)
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10

      setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isHovered])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-none w-[350px] perspective-1000"
    >
      <div 
        className="relative transition-all duration-300 ease-out bg-black p-8 rounded-lg border border-zinc-800 hover:bg-zinc-950"
        style={{
          transform: isHovered ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Glow effect */}
        <div 
          className="absolute inset-0 bg-blue-500/10 rounded-lg blur-xl transform scale-110 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Content container */}
        <div 
          className="relative transition-transform duration-300"
          style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}
        >
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-zinc-400 mb-4 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-zinc-900 text-zinc-300 px-3 py-1 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              View Project <HiLightBulb className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function TiltExperience({ children }) {
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      if (!isHovered) return
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8
      setTilt({ x: rotateX, y: rotateY })
    }
    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
      setIsHovered(false)
    }
    const handleMouseEnter = () => {
      setIsHovered(true)
    }
    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className="transition-transform duration-500 ease-out"
      style={{
        transform: isHovered ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'rotateX(0deg) rotateY(0deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}

const projects = [
  {
    title: 'OpenNote',
    description: 'A cross-platform mobile app for notes sharing, leveraging advanced data storage and management techniques with real-time syncing.',
    tech: ['React Native', 'Java', 'JUnit', 'Spring Boot', 'Firebase'],
    link: '/opennote',
    image: '/projects/opennote.png'
  },
  {
    title: 'EchoScope',
    description: 'An NLP tool analyzing sentiment trends and potential echo chambers within Reddit communities using advanced ML techniques.',
    tech: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras'],
    link: '/echoscope',
    image: '/projects/echoscope.png'
  },
  {
    title: 'InstaScribe',
    description: 'A Python-based Instagram scraper utilizing GenAI approaches for automated caption summarization.',
    tech: ['Python', 'BeautifulSoup', 'Instagram API', 'Groq Cloud API'],
    link: '/instascribe',
    image: '/projects/instascribe.png'
  },
  {
    title: 'The American Hindu',
    description: 'A full-stack website built with modern web development practices, featuring dynamic content management.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Payload CMS'],
    link: '/tah',
    image: '/projects/tah.png'
  }
]

const experiences = [
  {
    company: 'PapeX',
    role: 'Software Engineer',
    duration: 'April 2025 - Present',
    description: 'Enhanced LLM explainability incorporating RAG framework in PyTorch and HuggingFace, improving transparency and trust in predictions. Compared XAI methods like LIME and SHAP for feature relevance analysis. Improved data usability using NumPy, Pandas, and Scikit-learn.',
    tech: ['PyTorch', 'HuggingFace', 'NumPy', 'Pandas', 'Scikit-learn']
  },
  {
    company: 'Syracuse University',
    role: 'AI/ML Researcher',
    duration: 'Jan 2023 - May 2025',
    description: 'Enhanced LLM explainability with RAG framework, improved transparency and interpretability in predictions. Conducted comparative analysis of XAI methods and improved data usability for NLP tasks.',
    tech: ['PyTorch', 'HuggingFace', 'LIME', 'SHAP', 'Scikit-learn']
  },
  {
    company: 'ITS (Syracuse University)',
    role: 'Software Solutions Technician',
    duration: 'Dec 2022 - May 2025',
    description: 'Resolved 10,000+ client issues using Jira in an agile environment. Conducted software training and created comprehensive documentation in Confluence for system maintenance.',
    tech: ['Jira', 'Confluence', 'Agile']
  },
  {
    company: 'Ace \'N Rally',
    role: 'Software Engineer',
    duration: 'April 2023 - Sep 2023',
    description: 'Improved player matching with RN Geolocation API, built data-driven UI dashboards, and integrated AI-driven analytics for enhanced matchmaking algorithms.',
    tech: ['TypeScript', 'MongoDB', 'AWS', 'Node.js', 'AWS Sagemaker']
  }
]

const achievements = [
  {
    title: 'Tau Beta Pi',
    subtitle: 'Honorary Member',
    description: 'Recognized for academic excellence and leadership in engineering. Selected as an honorary member of the oldest engineering honor society in the United States.',
    icon: HiAcademicCap
  },
  {
    title: 'CuseHacks 2024',
    subtitle: 'Grand Prize Winner',
    description: 'Led a team to victory in Syracuse University\'s premier hackathon, developing an innovative solution that addressed real-world challenges in education technology.',
    icon: HiCode
  },
  {
    title: 'Oakridge CodeFest',
    subtitle: 'Grand Prize Winner',
    description: 'Demonstrated exceptional problem-solving skills and technical expertise in a competitive coding environment, creating a solution that impressed industry judges.',
    icon: HiStar
  },
  {
    title: 'Stonehill Codeathon',
    subtitle: 'Grand Prize Winner',
    description: 'Showcased leadership and technical prowess in a high-pressure coding competition, delivering a solution that combined innovation with practical implementation.',
    icon: HiLightBulb
  },
  {
    title: 'Hindu YUVA at SU',
    subtitle: 'Chapter President',
    description: 'Led and grew the university\'s Hindu youth organization, fostering cultural awareness and community engagement while organizing successful campus events.',
    icon: HiBriefcase
  },
  {
    title: 'Young Hindu Creators Club',
    subtitle: 'Content Writer',
    description: 'Contributed to digital content creation, sharing cultural insights and engaging stories that resonated with the youth community.',
    icon: HiStar
  }
]

const testimonials = [
  {
    name: 'John Doe',
    role: 'Engineering Manager',
    content: 'One of the most dedicated and skilled developers I have worked with.',
    image: '/images/testimonial1.jpg'
  },
  // Add more testimonials here
]

const skills = {
  languages: ['Python', 'Java', 'Javascript/Typescript', 'C/C++', 'SQL'],
  aiml: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'R', 'Keras', 'HuggingFace', 'LangChain'],
  web: ['React/Next.js', 'React Native', 'Tailwind', 'Shadcn', 'Node', 'MongoDB', 'PostgreSQL'],
  other: ['Git', 'Jira', 'Trello', 'Docker', 'Bash', 'Figma', 'Confluence', 'MochaJS', 'JUnit', 'StoryBook']
}

const education = {
  school: 'Syracuse University',
  location: 'Syracuse, NY',
  degree: 'Bachelor of Science in Computer Science',
  graduation: 'May 2025',
  gpa: '3.8/4.0',
  courses: ['Operating Systems', 'Systems Programming', 'Multiagent Systems', 'Evolutionary Machine Learning']
}

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    status: 'Completed'
  },
  {
    name: 'Azure AI Fundamentals',
    status: 'In Progress'
  }
]

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

  // Auto-scroll effect for projects and achievements
  useEffect(() => {
    const projectsContainer = projectsScrollRef.current;
    const achievementsContainer = achievementsScrollRef.current;
    let projectsAnimationFrame;
    let achievementsAnimationFrame;
    let projectsScrollAmount = 0;
    let achievementsScrollAmount = 0;
    const projectsScrollSpeed = 4;
    const achievementsScrollSpeed = 2; // Decreased speed for achievements
    let isProjectsScrolling = true;
    let isAchievementsScrolling = true;

    const scrollProjects = () => {
      if (!projectsContainer || !isProjectsScrolling) return;
      projectsScrollAmount += projectsScrollSpeed;
      if (projectsScrollAmount >= projectsContainer.scrollWidth - projectsContainer.clientWidth) {
        projectsScrollAmount = 0;
        projectsContainer.scrollLeft = 0;
      } else {
        projectsContainer.scrollLeft = projectsScrollAmount;
      }
      projectsAnimationFrame = requestAnimationFrame(scrollProjects);
    };

    const scrollAchievements = () => {
      if (!achievementsContainer || !isAchievementsScrolling) return;
      achievementsScrollAmount += achievementsScrollSpeed;
      if (achievementsScrollAmount >= achievementsContainer.scrollWidth - achievementsContainer.clientWidth) {
        achievementsScrollAmount = 0;
        achievementsContainer.scrollLeft = 0;
      } else {
        achievementsContainer.scrollLeft = achievementsScrollAmount;
      }
      achievementsAnimationFrame = requestAnimationFrame(scrollAchievements);
    };

    // Define event handlers
    const handleProjectsMouseEnter = () => {
      isProjectsScrolling = false;
    };

    const handleProjectsMouseLeave = () => {
      isProjectsScrolling = true;
      scrollProjects();
    };

    const handleAchievementsMouseEnter = () => {
      isAchievementsScrolling = false;
    };

    const handleAchievementsMouseLeave = () => {
      isAchievementsScrolling = true;
      scrollAchievements();
    };

    // Start scrolling immediately
    scrollProjects();
    scrollAchievements();

    // Add hover event listeners
    if (projectsContainer) {
      projectsContainer.addEventListener('mouseenter', handleProjectsMouseEnter);
      projectsContainer.addEventListener('mouseleave', handleProjectsMouseLeave);
    }

    if (achievementsContainer) {
      achievementsContainer.addEventListener('mouseenter', handleAchievementsMouseEnter);
      achievementsContainer.addEventListener('mouseleave', handleAchievementsMouseLeave);
    }

    // Cleanup
    return () => {
      if (projectsAnimationFrame) {
        cancelAnimationFrame(projectsAnimationFrame);
      }
      if (achievementsAnimationFrame) {
        cancelAnimationFrame(achievementsAnimationFrame);
      }
      if (projectsContainer) {
        projectsContainer.removeEventListener('mouseenter', handleProjectsMouseEnter);
        projectsContainer.removeEventListener('mouseleave', handleProjectsMouseLeave);
      }
      if (achievementsContainer) {
        achievementsContainer.removeEventListener('mouseenter', handleAchievementsMouseEnter);
        achievementsContainer.removeEventListener('mouseleave', handleAchievementsMouseLeave);
      }
    };
  }, []);

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
                        className="bg-zinc-950 rounded-lg p-6 border border-zinc-800 hover:bg-zinc-900 transition-all cursor-pointer"
                        whileHover={{ scale: 1.01 }}
                        onClick={() => {
                          const element = document.getElementById(`exp-${index}`);
                          const isExpanded = element.classList.contains('expanded');
                          
                          // First, collapse all other expanded cards
                          const allExpanded = document.querySelectorAll('.expanded');
                          allExpanded.forEach(el => {
                            if (el !== element) {
                              el.classList.remove('expanded');
                              el.style.maxHeight = '0px';
                            }
                          });

                          // Then toggle the clicked card
                          if (isExpanded) {
                            element.classList.remove('expanded');
                            element.style.maxHeight = '0px';
                          } else {
                            element.classList.add('expanded');
                            element.style.maxHeight = '500px';
                          }
                        }}
                      >
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                              <p className="text-blue-400 font-semibold">{exp.company}</p>
                            </div>
                            <p className="text-zinc-400 text-sm">{exp.duration}</p>
                          </div>
                          
                          {/* Expandable content */}
                          <div 
                            id={`exp-${index}`}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: '0px' }}
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
          
          {/* Horizontal Scroll Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>
            
            {/* Scrollable Content */}
            <div 
              ref={projectsScrollRef}
              className="flex overflow-x-auto pb-8 gap-12 px-8 scrollbar-hide w-full"
              style={{
                animation: 'scroll 30s linear infinite',
                scrollBehavior: 'smooth',
                width: 'max-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              {[...projects, ...projects].map((project, index) => (
                <TiltProject key={`${project.title}-${index}`} project={project} index={index} />
              ))}
            </div>
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
          
          {/* Horizontal Scroll Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>
            
            {/* Scrollable Content */}
            <div 
              ref={achievementsScrollRef}
              className="flex overflow-x-auto pb-8 gap-12 px-8 scrollbar-hide w-full"
              style={{
                animation: 'scroll 30s linear infinite',
                scrollBehavior: 'smooth',
                width: 'max-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              {[...achievements, ...achievements].map((achievement, index) => (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-none w-[350px] bg-black p-8 rounded-lg border border-zinc-800 hover:bg-zinc-950 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-zinc-900 rounded-md">
                      <achievement.icon className="text-2xl text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                      <p className="text-blue-400 font-medium">{achievement.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section
      <motion.section
        className="py-20 px-4 bg-zinc-950"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">What People Say</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Feedback from colleagues and clients that reflects my professional impact.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-zinc-950 p-8 rounded-xl shadow-lg ${
                    index === activeTestimonial ? 'block' : 'hidden'
                  }`}
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-900">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-blue-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                </motion.div>
              ))}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-blue-600' : 'bg-zinc-700 hover:bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}

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
          <p className="mt-2">Built with Next.js, Tailwind CSS, and ❤️</p>
        </div>
      </motion.footer>
    </main>
  )
}
