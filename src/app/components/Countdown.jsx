"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"

export default function Countdown({ birthdayDate, onComplete }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = birthdayDate.getTime() - now

      if (distance <= 0) {
        onComplete()
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [birthdayDate, onComplete])

  const timeUnits = [
    { label: "Days", value: timeLeft.days, color: "from-red-500 to-orange-500" },
    { label: "Hours", value: timeLeft.hours, color: "from-orange-500 to-yellow-500" },
    { label: "Minutes", value: timeLeft.minutes, color: "from-red-500 to-pink-500" },
    { label: "Seconds", value: timeLeft.seconds, color: "from-yellow-500 to-orange-500" },
  ]

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center mb-12">
        <div className="text-7xl mb-6">🎀</div>

        <h1 className="text-4xl md:text-6xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-4">
          Raksha Bandhan Countdown
        </h1>

        <p className="text-lg text-orange-300">
          Waiting for the beautiful celebration 💖
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className={`bg-gradient-to-br ${unit.color} rounded-2xl p-6 shadow-xl`}>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-white uppercase text-sm">{unit.label}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-orange-300">
        Rakhi surprise is coming soon 🎀
      </p>
    </motion.div>
  )
}