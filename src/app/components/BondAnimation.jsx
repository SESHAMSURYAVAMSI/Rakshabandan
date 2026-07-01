"use client"

import { useEffect, useRef, useState } from "react"

export default function BondAnimation({ onNext }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const stageRef = useRef(1)

  const [stage, setStage] = useState(1)

  useEffect(() => {
    stageRef.current = stage
  }, [stage])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const isMobile = width < 768
    const particleCount = isMobile ? 120 : 300
    const rakhiRadius = isMobile ? 70 : 140
    const heartScale = isMobile ? 8 : 16

    const words = ["SISTER", "LOVE", "CARE", "TRUST", "BOND", "RAKHI"]

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      tx: Math.random() * width,
      ty: Math.random() * height,
      word: words[Math.floor(Math.random() * words.length)],
      size: isMobile
        ? Math.random() * 4 + 7
        : Math.random() * 8 + 12,
    }))

    const rakhiShape = []
    const heartShape = []

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2

      rakhiShape.push({
        x: width / 2 + Math.cos(angle) * rakhiRadius,
        y: height / 2 + Math.sin(angle) * rakhiRadius,
      })
    }

    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 2

      const x = 16 * Math.pow(Math.sin(t), 3)
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t)

      heartShape.push({
        x: width / 2 + x * heartScale,
        y: height / 2 - y * heartScale,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "#09090b"
      ctx.fillRect(0, 0, width, height)

      particles.forEach((p, i) => {
        if (stageRef.current === 2) {
          p.tx = rakhiShape[i].x
          p.ty = rakhiShape[i].y
        }

        if (stageRef.current >= 3) {
          p.tx = heartShape[i].x
          p.ty = heartShape[i].y
        }

        p.x += (p.tx - p.x) * 0.05
        p.y += (p.ty - p.y) * 0.05

        ctx.fillStyle = "#f59e0b"
        ctx.font = `${p.size}px Arial`
        ctx.fillText(p.word, p.x, p.y)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const timer1 = setTimeout(() => setStage(2), 3000)
    const timer2 = setTimeout(() => setStage(3), 6000)
    const timer3 = setTimeout(() => setStage(4), 9000)

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {stage === 4 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6 text-center">
            No matter what...
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl text-white mb-8 text-center">
            Our bond remains forever ❤️
          </p>

          <button
            onClick={onNext}
            className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-xl hover:scale-105 transition"
          >
            Open Final Surprise 💌
          </button>
        </div>
      )}
    </div>
  )
}