"use client"

import { motion } from "motion/react"

export default function Celebration({ onNext }) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-orange-950" />

      {/* Golden glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-yellow-500/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Rakhi Thread Animation */}
        <div className="relative flex items-center justify-center mb-12 w-full max-w-3xl h-32">
          <motion.div
            className="absolute h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full left-0"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5 }}
          />

          <motion.div
            className="absolute h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full right-0"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5 }}
          />

          <motion.div
            className="text-7xl md:text-9xl z-20"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.8,
              delay: 1,
            }}
          >
            🎀
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Raksha Bandhan is Here
        </motion.h1>

        {/* Quote */}
        <motion.p
          className="text-lg md:text-2xl text-orange-100 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          A bond tied with love, <br />
          strengthened by memories, <br />
          and protected forever ❤️
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={onNext}
          className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Begin Journey ✨
        </motion.button>
      </div>
    </motion.div>
  )
}

// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function BondAnimation({ onNext }) {
//   const canvasRef = useRef(null)
//   const animationRef = useRef(null)
//   const stageRef = useRef(1)
//   const [stage, setStage] = useState(1)

//   useEffect(() => { stageRef.current = stage }, [stage])

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     let width = window.innerWidth
//     let height = window.innerHeight
//     let rotation = 0

//     const resize = () => {
//       width = window.innerWidth
//       height = window.innerHeight
//       const dpr = Math.min(window.devicePixelRatio || 1, 2)
//       canvas.width = width * dpr
//       canvas.height = height * dpr
//       canvas.style.width = `${width}px`
//       canvas.style.height = `${height}px`
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
//     }

//     resize()
//     const isMobile = width < 768
//     const particleCount = isMobile ? 105 : 250
//     const rakhiRadius = isMobile ? 72 : 125
//     const heartScale = isMobile ? 7.5 : 13
//     const words = ["JAANU", "SISTER", "LOVE", "CARE", "TRUST", "BOND", "FOREVER", "MEMORY", "PEDHA KOTHI", "❤️"]

//     const particles = Array.from({ length: particleCount }, () => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       tx: Math.random() * width,
//       ty: Math.random() * height,
//       word: words[Math.floor(Math.random() * words.length)],
//       size: isMobile ? Math.random() * 3 + 6 : Math.random() * 6 + 9,
//       alpha: Math.random() * .5 + .5,
//     }))

//     const shapes = { rakhi: [], heart: [] }
//     for (let i = 0; i < particleCount; i++) {
//       const angle = (i / particleCount) * Math.PI * 2
//       shapes.rakhi.push({ x: width / 2 + Math.cos(angle) * rakhiRadius, y: height / 2 + Math.sin(angle) * rakhiRadius })
//       const t = (i / particleCount) * Math.PI * 2
//       const x = 16 * Math.pow(Math.sin(t), 3)
//       const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
//       shapes.heart.push({ x, y })
//     }

//     const animate = () => {
//       ctx.fillStyle = "rgba(3,3,8,.24)"
//       ctx.fillRect(0, 0, width, height)
//       rotation += stageRef.current >= 3 ? 0.007 : 0

//       particles.forEach((p, i) => {
//         if (stageRef.current === 2) {
//           p.tx = shapes.rakhi[i].x
//           p.ty = shapes.rakhi[i].y
//         }
//         if (stageRef.current >= 3) {
//           const point = shapes.heart[i]
//           const cos = Math.cos(rotation)
//           const sin = Math.sin(rotation)
//           const depth = Math.sin((i / particleCount) * Math.PI * 2 + rotation) * 0.18 + 1
//           p.tx = width / 2 + (point.x * heartScale * cos - point.y * heartScale * sin) * depth
//           p.ty = height / 2 - (point.y * heartScale * cos + point.x * heartScale * sin) * depth
//         }

//         p.x += (p.tx - p.x) * 0.045
//         p.y += (p.ty - p.y) * 0.045
//         ctx.globalAlpha = p.alpha
//         ctx.fillStyle = stageRef.current >= 3 ? "#fda4af" : "#fbbf24"
//         ctx.shadowBlur = stageRef.current >= 3 ? 14 : 8
//         ctx.shadowColor = ctx.fillStyle
//         ctx.font = `${p.size}px Arial`
//         ctx.fillText(p.word, p.x, p.y)
//       })
//       ctx.globalAlpha = 1
//       ctx.shadowBlur = 0
//       animationRef.current = requestAnimationFrame(animate)
//     }

//     animate()
//     const timers = [
//       setTimeout(() => setStage(2), 2600),
//       setTimeout(() => setStage(3), 5200),
//       setTimeout(() => setStage(4), 8400),
//     ]
//     window.addEventListener("resize", resize)
//     return () => {
//       cancelAnimationFrame(animationRef.current)
//       timers.forEach(clearTimeout)
//       window.removeEventListener("resize", resize)
//     }
//   }, [])

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden bg-[#030308]">
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.58)_100%)]" />
//       <div className="absolute inset-x-0 top-10 z-10 text-center px-5">
//         <p className="eyebrow">A bond made of a million little moments</p>
//         {stage < 3 && <h1 className="mt-4 text-2xl md:text-4xl font-bold text-white">Watch our bond take shape ✨</h1>}
//         {stage >= 3 && <h1 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">JAANU ❤️</h1>}
//       </div>

//       {stage === 4 && (
//         <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 z-20 px-5 text-center bg-gradient-to-t from-black/70 via-transparent to-transparent">
//           <h2 className="text-2xl md:text-5xl font-bold text-white">No matter what...</h2>
//           <p className="text-orange-100 mt-3 max-w-xl">Some bonds aren't measured by time. They're measured by everything we've been through together. ❤️</p>
//           <button onClick={onNext} className="premium-button mt-7">Let the sky celebrate us 🎆</button>
//         </div>
//       )}
//     </section>
//   )
// }
