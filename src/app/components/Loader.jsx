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



// "use client"

// import { motion } from "framer-motion"

// export default function Loader() {
//   return (
//     <motion.div
//       className="flex items-center justify-center min-h-screen relative overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="text-center relative z-10 flex flex-col items-center px-4">
//         <motion.div
//           className="text-7xl md:text-9xl"
//           animate={{
//             rotate: [0, 5, -5, 0],
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//         >
//           🪔
//         </motion.div>

//         <motion.h1
//           className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 mt-10 py-1.5"
//           animate={{ opacity: [0.7, 1, 0.7] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           Preparing Something Special...
//         </motion.h1>

//         <motion.p
//           className="text-orange-200 text-base md:text-lg mt-4"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           For My Lovely Sister 💖
//         </motion.p>
//       </div>
//     </motion.div>
//   )
// }

// "use client"

// import { motion } from "framer-motion"

// export default function Loader() {
//   return (
//     <motion.div
//       className="cinematic-loader"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="loader-glow" />
//       <div className="loader-content">
//         <motion.div
//           className="loader-diya"
//           initial={{ scale: 0.4, opacity: 0, filter: "blur(8px)" }}
//           animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.4, ease: "easeOut" }}
//         >
//           🪔
//         </motion.div>

//         <motion.p
//           className="loader-kicker"
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.8 }}
//         >
//           A little surprise is waiting...
//         </motion.p>

//         <motion.h1
//           className="loader-title"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.15, duration: 0.9 }}
//         >
//           For Someone Very Special
//         </motion.h1>

//         <motion.p
//           className="loader-name"
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.8, duration: 0.8 }}
//         >
//           Jaanu ❤️
//         </motion.p>

//         <motion.div
//           className="loader-line"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 2.25, duration: 0.9 }}
//         />
//       </div>
//     </motion.div>
//   )
// }
