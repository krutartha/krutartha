import { useRef, useState, useEffect } from 'react'
import useTilt from './useTilt'

function TiltExperience({ children }) {
  const { ref: containerRef, tilt, isHovered } = useTilt({ maxX: 8, maxY: 8 })

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

export default TiltExperience; 