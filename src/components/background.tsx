import React, { useRef, useState, useEffect, MouseEvent } from 'react'

interface DrawCanvasProps {
  width?: number
  height?: number
  clearAfter?: number // dalam milidetik
}

const DrawCanvas: React.FC<DrawCanvasProps> = ({
  width = 600,
  height = 400,
  clearAfter = 5000,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  const getCanvasCoordinates = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    const pos = getCanvasCoordinates(e)
    setLastPos(pos)
    setIsDrawing(true)
    resetClearTimeout()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    resetClearTimeout()
  }

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const newPos = getCanvasCoordinates(e)

    ctx.beginPath()
    ctx.moveTo(lastPos.x, lastPos.y)
    ctx.lineTo(newPos.x, newPos.y)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.closePath()

    setLastPos(newPos)
    resetClearTimeout()
  }

  const resetClearTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(clearCanvas, clearAfter)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: '1px solid black', cursor: 'crosshair' }}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onMouseMove={draw}
    />
  )
}

export default DrawCanvas
