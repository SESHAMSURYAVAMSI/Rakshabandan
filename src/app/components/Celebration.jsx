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