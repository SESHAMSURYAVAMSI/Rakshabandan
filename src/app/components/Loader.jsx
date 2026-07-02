"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center relative z-10 flex flex-col items-center px-4">
        <motion.div
          className="text-7xl md:text-9xl"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🪔
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 mt-10 py-1.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing Something Special...
        </motion.h1>

        <motion.p
          className="text-orange-200 text-base md:text-lg mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          For My Lovely Sister 💖
        </motion.p>
      </div>
    </motion.div>
  )
}