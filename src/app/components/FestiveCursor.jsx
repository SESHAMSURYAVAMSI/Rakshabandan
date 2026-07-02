"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FestiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-yellow-300 opacity-80 shadow-[0_0_30px_rgba(255,215,0,0.9)]" />
    </motion.div>
  )
}