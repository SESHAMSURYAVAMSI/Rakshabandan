"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false)
  const [showText, setShowText] = useState(false)
  const [currentText, setCurrentText] = useState("")

  const letterText = `Happy Raksha Bandhan 💖

You are not just my sister...
You are my best friend, my support system, and one of the greatest blessings in my life.

Thank you for always being there for me.
For supporting me, understanding me, and caring for me.

No matter how much we fight or argue,
our bond will always remain strong ❤️

You bring happiness, warmth, and joy into my life.

I pray for your happiness, success, health, and endless smiles.

Stay happy always 😊
Stay blessed ✨

Happy Raksha Bandhan once again 💖`

  useEffect(() => {
    if (!showText) return

    let index = 0
    const timer = setInterval(() => {
      if (index < letterText.length) {
        setCurrentText(letterText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 25)

    return () => clearInterval(timer)
  }, [showText])

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => setShowText(true), 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-red-950 via-black to-orange-950">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            A Letter From My Heart 💖
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              className="flex justify-center cursor-pointer"
              onClick={handleOpen}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <div className="w-72 md:w-96 h-48 md:h-56 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 shadow-2xl flex items-center justify-center flex-col">
                <div className="text-6xl md:text-8xl">💌</div>
                <p className="mt-4 text-orange-800 font-semibold">
                  Tap to Open
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="rounded-3xl shadow-2xl border-4 border-yellow-300 p-6 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)",
              }}
              initial={{ opacity: 0, rotateX: -30 }}
              animate={{ opacity: 1, rotateX: 0 }}
            >
              <div className="h-[500px] overflow-y-auto whitespace-pre-wrap text-gray-800 text-sm md:text-lg leading-relaxed">
                {currentText}
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}