// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function BondAnimation({ onNext }) {
//   const canvasRef = useRef(null)
//   const animationRef = useRef(null)
//   const stageRef = useRef(1)

//   const [stage, setStage] = useState(1)

//   useEffect(() => {
//     stageRef.current = stage
//   }, [stage])

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")

//     let width = window.innerWidth
//     let height = window.innerHeight

//     canvas.width = width
//     canvas.height = height

//     const isMobile = width < 768
//     const particleCount = isMobile ? 120 : 300
//     const rakhiRadius = isMobile ? 70 : 140
//     const heartScale = isMobile ? 8 : 16

//     const words = ["SISTER", "LOVE", "CARE", "TRUST", "BOND", "RAKHI"]

//     const particles = Array.from({ length: particleCount }, () => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       tx: Math.random() * width,
//       ty: Math.random() * height,
//       word: words[Math.floor(Math.random() * words.length)],
//       size: isMobile
//         ? Math.random() * 4 + 7
//         : Math.random() * 8 + 12,
//     }))

//     const rakhiShape = []
//     const heartShape = []

//     for (let i = 0; i < particleCount; i++) {
//       const angle = (i / particleCount) * Math.PI * 2

//       rakhiShape.push({
//         x: width / 2 + Math.cos(angle) * rakhiRadius,
//         y: height / 2 + Math.sin(angle) * rakhiRadius,
//       })
//     }

//     for (let i = 0; i < particleCount; i++) {
//       const t = (i / particleCount) * Math.PI * 2

//       const x = 16 * Math.pow(Math.sin(t), 3)
//       const y =
//         13 * Math.cos(t) -
//         5 * Math.cos(2 * t) -
//         2 * Math.cos(3 * t) -
//         Math.cos(4 * t)

//       heartShape.push({
//         x: width / 2 + x * heartScale,
//         y: height / 2 - y * heartScale,
//       })
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height)
//       ctx.fillStyle = "#09090b"
//       ctx.fillRect(0, 0, width, height)

//       particles.forEach((p, i) => {
//         if (stageRef.current === 2) {
//           p.tx = rakhiShape[i].x
//           p.ty = rakhiShape[i].y
//         }

//         if (stageRef.current >= 3) {
//           p.tx = heartShape[i].x
//           p.ty = heartShape[i].y
//         }

//         p.x += (p.tx - p.x) * 0.05
//         p.y += (p.ty - p.y) * 0.05

//         ctx.fillStyle = "#f59e0b"
//         ctx.font = `${p.size}px Arial`
//         ctx.fillText(p.word, p.x, p.y)
//       })

//       animationRef.current = requestAnimationFrame(animate)
//     }

//     animate()

//     const timer1 = setTimeout(() => setStage(2), 3000)
//     const timer2 = setTimeout(() => setStage(3), 6000)
//     const timer3 = setTimeout(() => setStage(4), 9000)

//     const handleResize = () => {
//       width = window.innerWidth
//       height = window.innerHeight
//       canvas.width = width
//       canvas.height = height
//     }

//     window.addEventListener("resize", handleResize)

//     return () => {
//       cancelAnimationFrame(animationRef.current)
//       clearTimeout(timer1)
//       clearTimeout(timer2)
//       clearTimeout(timer3)
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//       {stage === 4 && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
//           <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6 text-center">
//             No matter what...
//           </h1>

//           <p className="text-sm sm:text-lg md:text-2xl text-white mb-8 text-center">
//             Our bond remains forever ❤️
//           </p>

//           <button
//             onClick={onNext}
//             className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-xl hover:scale-105 transition"
//           >
//             Open Final Surprise 💌
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }



"use client"

import { useEffect, useRef, useState } from "react"

const WORDS = ["JAANU", "SISTER", "LOVE", "CARE", "TRUST", "BOND", "FOREVER", "RAKHI", "PEDHA KOTHI"]

export default function BondAnimation({ onNext }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const stageRef = useRef(1)
  const rotationRef = useRef(0)
  const [stage, setStage] = useState(1)

  useEffect(() => {
    stageRef.current = stage
  }, [stage])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const setup = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setup()

    const isMobile = width < 768
    const particleCount = isMobile ? 150 : 360
    const rakhiRadius = isMobile ? 72 : 125
    const heartScale = isMobile ? 7.2 : 14
    const words = WORDS

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      tx: Math.random() * width,
      ty: Math.random() * height,
      word: words[Math.floor(Math.random() * words.length)],
      size: isMobile ? Math.random() * 3 + 7 : Math.random() * 5 + 10,
      alpha: Math.random() * 0.55 + 0.45,
      phase: Math.random() * Math.PI * 2,
    }))

    const rakhiShape = []
    const heartShape = []
    const cx = width / 2
    const cy = height / 2 - 10

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      rakhiShape.push({ x: cx + Math.cos(angle) * rakhiRadius, y: cy + Math.sin(angle) * rakhiRadius })
      const t = (i / particleCount) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(t), 3)
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      heartShape.push({ x: cx + x * heartScale, y: cy - y * heartScale })
    }

    const stars = Array.from({ length: isMobile ? 55 : 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.5 + 0.2,
    }))

    const animate = (time = 0) => {
      ctx.clearRect(0, 0, width, height)
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.7)
      gradient.addColorStop(0, "#32101b")
      gradient.addColorStop(0.45, "#100b16")
      gradient.addColorStop(1, "#030305")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      stars.forEach((s) => {
        ctx.globalAlpha = s.a + Math.sin(time * 0.002 + s.x) * 0.12
        ctx.fillStyle = "#fff4c2"
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })

      if (stageRef.current >= 3) rotationRef.current += 0.004
      const rot = rotationRef.current
      particles.forEach((p, i) => {
        if (stageRef.current === 2) {
          p.tx = rakhiShape[i].x
          p.ty = rakhiShape[i].y
        } else if (stageRef.current >= 3) {
          const dx = heartShape[i].x - cx
          const dy = heartShape[i].y - cy
          p.tx = cx + dx * Math.cos(rot) - dy * Math.sin(rot) * 0.22
          p.ty = cy + dy * Math.cos(rot) + dx * Math.sin(rot) * 0.22
        }

        p.x += (p.tx - p.x) * 0.045
        p.y += (p.ty - p.y) * 0.045
        const glow = 0.7 + Math.sin(time * 0.003 + p.phase) * 0.2
        ctx.globalAlpha = p.alpha * glow
        ctx.shadowBlur = 14
        ctx.shadowColor = "#f59e0b"
        ctx.fillStyle = i % 3 === 0 ? "#ffd166" : "#ffb86b"
        ctx.font = `600 ${p.size}px Arial`
        ctx.fillText(p.word, p.x, p.y)
      })
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    const timer1 = setTimeout(() => setStage(2), 2500)
    const timer2 = setTimeout(() => setStage(3), 5200)
    const timer3 = setTimeout(() => setStage(4), 9000)

    const handleResize = () => setup()
    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(animationRef.current)
      clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {stage === 4 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 bg-black/10">
          <div className="mb-5 text-xs sm:text-sm tracking-[0.35em] uppercase text-amber-200/70">A bond beyond words</div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent mb-5 text-center drop-shadow-[0_0_25px_rgba(245,158,11,.35)]">
            No matter what...
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-9 text-center">Our bond remains forever ❤️</p>
          <button onClick={onNext} className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-[0_0_35px_rgba(245,158,11,.3)] hover:scale-105 transition-transform">
            One Last Surprise 🎁
          </button>
        </div>
      )}
    </div>
  )
}
