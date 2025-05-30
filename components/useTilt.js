import { useRef, useState, useEffect } from 'react'

/**
 * useTilt - Custom hook for 3D tilt effect
 * @param {Object} config - { maxX: number, maxY: number }
 * @returns {Object} { ref, tilt, isHovered }
 */
function useTilt({ maxX = 15, maxY = 15 } = {}) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMouseMove = (e) => {
      if (!isHovered) return
      const rect = node.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * maxY
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -maxX
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
    node.addEventListener('mouseleave', handleMouseLeave)
    node.addEventListener('mouseenter', handleMouseEnter)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      node.removeEventListener('mouseleave', handleMouseLeave)
      node.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isHovered, maxX, maxY])

  return { ref, tilt, isHovered }
}

export default useTilt; 