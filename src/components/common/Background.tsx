'use client'

import { useEffect, useRef } from 'react'

interface AnimatedLinesProps {
  className?: string
  variant?: 'hero' | 'section' | 'floating'
}

export function AnimatedLines({
  className = '',
  variant = 'section',
}: AnimatedLinesProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const paths = svg.querySelectorAll('path')

    paths.forEach((path, index) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 2s ease-in-out'
        path.style.strokeDashoffset = '0'
      }, index * 200)
    })
  }, [])

  if (variant === 'hero') {
    return (
      <svg
        ref={svgRef}
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,300 Q200,100 400,300 T800,300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/20"
        />
        <path
          d="M0,400 Q300,200 600,400 T800,200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/15"
        />
        <path
          d="M100,0 Q300,200 500,100 T700,600"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/10"
        />
      </svg>
    )
  }

  if (variant === 'floating') {
    return (
      <svg
        ref={svgRef}
        className={`absolute top-0 right-0 w-64 h-64 ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,100 Q60,40 100,100 T180,100"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-primary/30 animate-pulse"
        />
        <path
          d="M40,80 Q80,120 120,80 T160,80"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/20"
        />
      </svg>
    )
  }

  return (
    <svg
      ref={svgRef}
      className={`w-full h-24 ${className}`}
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,50 Q100,20 200,50 T400,50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-primary/40"
      />
      <path
        d="M0,70 Q150,30 300,70 T400,30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary/25"
      />
    </svg>
  )
}

export function MorphingPath() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-1/4 left-1/4 w-96 h-96 opacity-30"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,150 Q100,50 150,150 T250,150"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary/20"
        >
          <animate
            attributeName="d"
            values="M50,150 Q100,50 150,150 T250,150;M50,150 Q100,250 150,150 T250,150;M50,150 Q100,50 150,150 T250,150"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M75,100 Q125,200 175,100 T275,100"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-primary/15"
        >
          <animate
            attributeName="d"
            values="M75,100 Q125,200 175,100 T275,100;M75,100 Q125,50 175,100 T275,100;M75,100 Q125,200 175,100 T275,100"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
