"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Volume2, VolumeX } from "lucide-react"

import Loader from "./components/Loader"
import Countdown from "./components/Countdown"
import Celebration from "./components/Celebration"
import HappyRakshaBandhan from "./components/HappyRakshaBandhan"
import PhotoGallery from "./components/PhotoGallery"
import Letter from "./components/Letter"

export default function RakshaBandhanApp() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)

  // Countdown date
  const getNextRakshaBandhan = () => {
    const now = new Date()
    const currentYear = now.getFullYear()

    // Set your Rakhi date here
    // let rakhiDate = new Date(`${currentYear}-08-09T00:00:00`)
     let rakhiDate = new Date(`${currentYear}-06-16T00:00:00`)

    if (now.getTime() > rakhiDate.getTime()) {
      //  rakhiDate = new Date(`${currentYear}-08-09T00:00:00`)
       rakhiDate = new Date(`${currentYear}-06-16T00:00:00`)
      // rakhiDate = new Date(`${currentYear + 1}-06-16T00:00:00`)
    }


    return rakhiDate
  }

  const rakhiDate = getNextRakshaBandhan()

  const [isFestivalStarted, setIsFestivalStarted] = useState(
    new Date().getTime() >= rakhiDate.getTime()
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const playMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0

    audio.play().catch((err) => {
      console.log("Audio blocked:", err)
    })

    let vol = 0
    const interval = setInterval(() => {
      if (vol < 1) {
        vol += 0.1
        audio.volume = vol
      } else {
        clearInterval(interval)
      }
    }, 200)
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  const renderScreen = () => {
    if (isLoading) {
      return <Loader key="loader" />
    }

    if (currentScreen === 0) {
      if (!isFestivalStarted) {
        return (
          <Countdown
            key="countdown"
            birthdayDate={rakhiDate}
            onComplete={() => setIsFestivalStarted(true)}
          />
        )
      }

      return (
        <Celebration
          key="celebration"
          onNext={() => {
            playMusic()
            setCurrentScreen(1)
          }}
        />
      )
    }

    if (currentScreen === 1) {
      return (
        <HappyRakshaBandhan
          key="happy"
          onNext={() => setCurrentScreen(2)}
        />
      )
    }

    if (currentScreen === 2) {
      return (
        <PhotoGallery
          key="gallery"
          onNext={() => setCurrentScreen(3)}
        />
      )
    }

    return <Letter key="letter" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950/30 via-black to-orange-950/30 overflow-hidden relative">
      <audio ref={audioRef} loop>
        <source src="/audio/jaanu.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 text-white"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>

      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed bottom-4 right-4 text-white/40 text-sm"
      >
        @Raksha Bandhan 💖
      </motion.div>
    </div>
  )
}