"use client"

import { motion } from "motion/react"

export default function Celebration({ onNext }) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-orange-950" />

      <div className="absolute w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full" />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-4xl">
        {/* Diyas + Rakhi */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
        >
          <div className="text-5xl md:text-7xl">🪔</div>

          <motion.div
            className="text-7xl md:text-9xl"
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            🎀
          </motion.div>

          <div className="text-5xl md:text-7xl">🪔</div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Raksha Bandhan is Here
        </motion.h1>

        {/* Quote */}
        <motion.p
          className="text-lg md:text-2xl text-orange-100 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A bond tied with love, <br />
          strengthened by memories, <br />
          and protected forever ❤️
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={onNext}
          className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin the Ceremony ✨
        </motion.button>
      </div>
    </motion.div>
  )
}