"use client"

import { motion } from "motion/react"
import { Camera, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCube, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"

export default function PhotoGallery({ onNext }) {
  const photos = [
    { id: 1, src: "/images/1.png" },
    { id: 2, src: "/images/2.jpg" },
    { id: 3, src: "/images/3.png" },
    { id: 4, src: "/images/4.jpeg" },
    { id: 5, src: "/images/5.png" },
  ]

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center mb-8">
        <Camera className="w-16 h-16 text-orange-400 mx-auto mb-6" />

        <h1 className="text-4xl md:text-6xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-4">
          Our Beautiful Memories
        </h1>

        <p className="text-xl text-orange-300">
          Moments that make our bond special 💖
        </p>
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="h-[450px]"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <img
                src={photo.src}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={onNext}
        className="mt-10 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
      >
        <div className="flex items-center gap-2">
          <span>One Last Surprise</span>
          <ArrowRight />
        </div>
      </button>
    </motion.div>
  )
}