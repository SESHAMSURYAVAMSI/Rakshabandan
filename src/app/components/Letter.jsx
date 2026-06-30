"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false)
  const [showText, setShowText] = useState(false)
  const [currentText, setCurrentText] = useState("")

  const letterText = `Happy Raksha Bandhan 💖🎀

You are not just my sister...
You are my best friend, my support system, and one of the most precious gifts in my life.

Thank you for always being there for me.
For caring, supporting, and understanding me.

No matter how much we fight,
our bond will always remain special ❤️

You mean so much to me, and I feel lucky to have you in my life.

I pray for your happiness, success, and endless smiles.

Stay happy always 😊
Stay blessed ✨

Happy Raksha Bandhan once again 💖🎀`

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

  const handleOpenLetter = () => {
    setIsOpen(true)
    setTimeout(() => setShowText(true), 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            A Letter For My Sister 💌
          </h1>
          <p className="text-orange-300 mt-2">Made with love 💖</p>
        </div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              onClick={handleOpenLetter}
              className="cursor-pointer flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <div className="w-80 h-52 bg-gradient-to-br from-red-200 to-orange-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-7xl">💌</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="p-8 rounded-2xl shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #fef3c7, #fed7aa)",
              }}
            >
              <div className="h-96 overflow-y-auto text-gray-700 whitespace-pre-wrap">
                {currentText}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}