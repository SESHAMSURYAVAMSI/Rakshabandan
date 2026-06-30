"use client"

import { motion } from "motion/react"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function Celebration({ onNext }) {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center mb-12">
        <motion.div
          className="text-8xl mb-8"
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎀
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-6">
          Raksha Bandhan is Here!
        </h1>

        <p className="text-xl text-orange-300 mb-8">
          A beautiful bond of love and care 💖
        </p>
      </div>

      <button
        // onClick={onNext}
          onClick={() => {
    console.log("Clicked")
    onNext()
  }}
        className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
      >
        Let's Celebrate Rakhi 🎉
      </button>
    </motion.div>
  )
}