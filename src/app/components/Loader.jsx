"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen relative overflow-hidden"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center relative z-10 flex flex-col items-center">
        <motion.div
          className="text-8xl"
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🎀
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mt-12 py-1.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing Rakhi Surprise
        </motion.h1>

        <motion.p
          className="text-orange-300 text-lg mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          For my lovely sister 💖
        </motion.p>
      </div>
    </motion.div>
  )
}