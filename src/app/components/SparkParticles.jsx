"use client"

import { motion } from "framer-motion"

export default function SparkParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            // eslint-disable-next-line react-hooks/purity
            left: `${Math.random() * 100}%`,
            // eslint-disable-next-line react-hooks/purity
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            // eslint-disable-next-line react-hooks/purity
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            // eslint-disable-next-line react-hooks/purity
            delay: Math.random() * 2,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}