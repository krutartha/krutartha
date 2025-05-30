import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useTilt from './useTilt'

function TiltImage() {
  const { ref: containerRef, tilt, isHovered } = useTilt({ maxX: 15, maxY: 15 })

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

export default TiltImage; 