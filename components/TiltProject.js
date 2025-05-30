import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiLightBulb } from 'react-icons/hi'
import useTilt from './useTilt'

function TiltProject({ project, index }) {
  const { ref: containerRef, tilt, isHovered } = useTilt({ maxX: 10, maxY: 10 })

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-none w-[180px] min-h-[160px] sm:w-[350px] sm:min-h-[320px] perspective-1000"
    >
      <div 
        className="relative transition-all duration-300 ease-out bg-black p-3 sm:p-8 rounded-lg border border-zinc-800 hover:bg-zinc-950"
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
          <div className="relative h-20 sm:h-48 mb-3 sm:mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-white">{project.title}</h3>
            <p className="text-zinc-400 mb-2 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{project.description}</p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-zinc-900 text-zinc-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-xs sm:text-base"
            >
              View Project <HiLightBulb className="ml-1 sm:ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TiltProject; 