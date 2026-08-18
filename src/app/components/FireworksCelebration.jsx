"use client"

import { useEffect, useRef, useState } from "react"

export default function FireworksCelebration({ onNext }) {
  const canvasRef = useRef(null)
  const rocketsRef = useRef([])
  const particlesRef = useRef([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let width = window.innerWidth
    let height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth; height = window.innerHeight
      canvas.width = width * dpr; canvas.height = height * dpr
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const colors = ["#ffd166", "#ff7aa2", "#f97316", "#fef08a", "#c084fc"]
    const launch = (x = Math.random() * width, targetY = height * (0.18 + Math.random() * 0.35)) => {
      rocketsRef.current.push({ x, y: height + 8, targetY, speed: 8 + Math.random() * 3, color: colors[Math.floor(Math.random() * colors.length)] })
    }
    const burst = (x, y, color) => {
      for (let i = 0; i < 70; i++) {
        const angle = (Math.PI * 2 * i) / 70 + Math.random() * 0.12
        const speed = 1.5 + Math.random() * 5
        particlesRef.current.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color, size: Math.random() * 2.5 + 1 })
      }
    }

    const handlePointer = (e) => launch(e.clientX, e.clientY * 0.72)
    canvas.addEventListener("pointerdown", handlePointer)
    const interval = setInterval(() => launch(), 900)
    launch(width * 0.28, height * 0.3); launch(width * 0.72, height * 0.25)

    let raf
    const animate = () => {
      ctx.fillStyle = "rgba(2,2,8,0.2)"
      ctx.fillRect(0, 0, width, height)
      rocketsRef.current = rocketsRef.current.filter((r) => {
        r.y -= r.speed
        ctx.fillStyle = r.color
        ctx.shadowBlur = 14; ctx.shadowColor = r.color
        ctx.beginPath(); ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2); ctx.fill()
        if (r.y <= r.targetY) { burst(r.x, r.y, r.color); return false }
        return true
      })
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.045; p.life -= 0.012
        ctx.globalAlpha = Math.max(p.life, 0); ctx.fillStyle = p.color; ctx.shadowBlur = 10; ctx.shadowColor = p.color
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill()
        return p.life > 0
      })
      ctx.globalAlpha = 1; ctx.shadowBlur = 0
      raf = requestAnimationFrame(animate)
    }
    animate()
    const show = setTimeout(() => setReady(true), 3200)
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(raf); clearInterval(interval); clearTimeout(show)
      canvas.removeEventListener("pointerdown", handlePointer); window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020208]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full touch-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-5">
        <div className="text-amber-200/80 text-xs sm:text-sm tracking-[0.4em] uppercase mb-4">For my forever sister</div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center bg-gradient-to-r from-rose-200 via-amber-200 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,.35)]">
          Happy Raksha Bandhan
        </h1>
        <p className="mt-5 text-xl sm:text-2xl md:text-3xl text-white/90">Jaanu ❤️</p>
        <p className="mt-3 text-xs sm:text-sm text-white/45">Tap anywhere to launch a firework</p>
      </div>
      {ready && (
        <button onClick={onNext} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto rounded-full bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 px-7 py-3 text-white font-semibold shadow-[0_0_30px_rgba(245,158,11,.3)] hover:scale-105 transition-transform">
          Open My Letter 💌
        </button>
      )}
    </div>
  )
}


// "use client"

// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// export default function FireworksCelebration({ onNext }) {
//   const canvasRef = useRef(null)
//   const fireworksRef = useRef([])
//   const animationRef = useRef(null)
//   const [ready, setReady] = useState(false)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     let width = window.innerWidth
//     let height = window.innerHeight

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

//     const burst = (x, y) => {
//       const colors = ["#ffd166", "#ff6b6b", "#ff9f1c", "#f72585", "#ffffff"]
//       const particles = Array.from({ length: width < 768 ? 42 : 72 }, (_, i) => {
//         const angle = (Math.PI * 2 * i) / 72 + Math.random() * 0.15
//         const speed = 1.8 + Math.random() * 4.2
//         return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color: colors[i % colors.length], size: 1.5 + Math.random() * 2.5 }
//       })
//       fireworksRef.current.push({ x, y, particles })
//     }

//     const launch = (x = width * (0.2 + Math.random() * 0.6), y = height * (0.2 + Math.random() * 0.45)) => burst(x, y)
//     resize()
//     launch(width * 0.5, height * 0.28)
//     const auto = setInterval(() => launch(), 1150)
//     setTimeout(() => setReady(true), 1500)

//     const draw = () => {
//       ctx.fillStyle = "rgba(3, 3, 10, 0.22)"
//       ctx.fillRect(0, 0, width, height)
//       fireworksRef.current.forEach((burstItem) => {
//         burstItem.particles.forEach((p) => {
//           p.x += p.vx
//           p.y += p.vy
//           p.vy += 0.035
//           p.vx *= 0.988
//           p.life -= 0.012
//           if (p.life > 0) {
//             ctx.globalAlpha = p.life
//             ctx.fillStyle = p.color
//             ctx.shadowBlur = 12
//             ctx.shadowColor = p.color
//             ctx.beginPath()
//             ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//             ctx.fill()
//           }
//         })
//       })
//       ctx.globalAlpha = 1
//       ctx.shadowBlur = 0
//       fireworksRef.current = fireworksRef.current.filter((b) => b.particles.some((p) => p.life > 0))
//       animationRef.current = requestAnimationFrame(draw)
//     }
//     draw()

//     const handleClick = (event) => burst(event.clientX, event.clientY)
//     window.addEventListener("resize", resize)
//     window.addEventListener("pointerdown", handleClick)
//     return () => {
//       clearInterval(auto)
//       cancelAnimationFrame(animationRef.current)
//       window.removeEventListener("resize", resize)
//       window.removeEventListener("pointerdown", handleClick)
//     }
//   }, [])

//   return (
//     <section className="fireworks-screen">
//       <canvas ref={canvasRef} className="fireworks-canvas" />
//       <div className="fireworks-vignette" />
//       <motion.div className="fireworks-copy" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}>
//         <p className="eyebrow">For my forever little sister</p>
//         <h1>Happy Raksha Bandhan, Jaanu ❤️</h1>
//         <p>Tap anywhere to make a wish ✨</p>
//         {ready && <motion.button className="premium-button" onClick={(e) => { e.stopPropagation(); onNext() }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>Open Your Letter 💌</motion.button>}
//       </motion.div>
//     </section>
//   )
// }
