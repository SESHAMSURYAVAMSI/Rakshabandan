"use client"

import { motion } from "motion/react"

export default function PhotoGallery({ onNext }) {
  const photos = [
    {
      id: 1,
      src: "/images/1.png",
      caption: "Beautiful Memory ❤️",
      rotate: "-rotate-6",
    },
    {
      id: 2,
      src: "/images/2.jpg",
      caption: "Sweet Moments 😊",
      rotate: "rotate-6",
    },
    {
      id: 3,
      src: "/images/3.png",
      caption: "Forever Bond ✨",
      rotate: "-rotate-3",
    },
    {
      id: 4,
      src: "/images/4.jpeg",
      caption: "Special Memories 💖",
      rotate: "rotate-3",
    },
  ]

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-red-950 via-black to-orange-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-4">
          Our Precious Memories 📸
        </h1>

        <p className="text-orange-100 text-sm md:text-xl max-w-2xl mx-auto">
          Every picture tells a story, <br />
          every memory strengthens our bond ❤️
        </p>
      </div>

      {/* Photo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-white p-3 rounded-xl shadow-2xl ${photo.rotate}`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-[250px] md:h-[320px] object-cover rounded-lg"
            />

            <p className="text-gray-700 text-center mt-4 font-semibold">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={onNext}
        className="mt-10 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        Continue Journey ✨
      </motion.button>
    </motion.div>
  )
}