"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export default function HappyRakshaBandhan({ onNext }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-8xl mb-8"
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

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
          Happy Raksha Bandhan
        </h1>

        <h2 className="text-3xl md:text-4xl text-white mb-6">
          My Lovely Sister 💖
        </h2>

        <p className="text-xl text-orange-300 mb-10">
          Celebrating our beautiful bond forever ✨
        </p>

        <button
          onClick={() => {
            console.log("HappyRakshaBandhan Button Clicked")
            onNext()
          }}
          className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
        >
          <div className="flex items-center gap-2">
            <span>See Our Memories</span>
            <ArrowRight />
          </div>
        </button>
      </motion.div>
    </motion.div>
  )
}