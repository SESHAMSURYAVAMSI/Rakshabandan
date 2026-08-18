// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"

// export default function FinalCapsule() {
//   const [open, setOpen] = useState(false)

//   return (
//     <section className="capsule-screen">
//       <motion.div className="capsule-orb" animate={open ? { scale: 1.35, opacity: 0 } : { scale: [1, 1.08, 1] }} transition={{ duration: open ? 1 : 2.2, repeat: open ? 0 : Infinity }}>
//         ✨
//       </motion.div>
//       {!open ? (
//         <motion.div className="capsule-content" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
//           <p className="eyebrow">Before you leave...</p>
//           <h1>One Last Surprise 🎁</h1>
//           <p>There is one little thing I want you to remember.</p>
//           <button className="premium-button" onClick={() => setOpen(true)}>Open My Heart ❤️</button>
//         </motion.div>
//       ) : (
//         <motion.div className="capsule-message" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
//           <div className="capsule-heart">❤️</div>
//           <p className="eyebrow">Always and forever</p>
//           <h1>No matter where life takes us...</h1>
//           <p className="big-message">I'll always be your brother, your biggest supporter, and your partner in every crazy memory. ❤️</p>
//           <div className="signature">Made with ❤️ by Surya</div>
//         </motion.div>
//       )}
//     </section>
//   )
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FinalCapsule() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-5 py-16 bg-gradient-to-br from-red-950 via-black to-orange-950">
      
      {/* --------------------------------
          BACKGROUND GLOW
      -------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-500/20 blur-[100px]"
        />

        <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute bottom-[15%] right-[8%] w-40 h-40 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* --------------------------------
          FLOATING PARTICLES
      -------------------------------- */}
      {[...Array(12)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute text-yellow-300/70 text-xs sm:text-sm pointer-events-none"
          style={{
            left: `${8 + ((index * 17) % 84)}%`,
            top: `${8 + ((index * 23) % 80)}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 2.5 + (index % 4) * 0.5,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.span>
      ))}

      {/* --------------------------------
          MAIN CONTENT
      -------------------------------- */}
      <div className="relative z-20 w-full max-w-3xl flex flex-col items-center justify-center text-center">

        <AnimatePresence mode="wait">

          {/* =================================
              CLOSED CAPSULE
          ================================= */}
          {!open ? (
            <motion.div
              key="closed"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: -20,
              }}
              transition={{
                duration: 0.8,
              }}
              className="flex flex-col items-center"
            >
              {/* Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 5, -5, 0],
                  boxShadow: [
                    "0 0 25px rgba(251,191,36,0.25)",
                    "0 0 65px rgba(251,191,36,0.55)",
                    "0 0 25px rgba(251,191,36,0.25)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300/20 via-orange-500/20 to-red-500/20 border border-yellow-300/40 backdrop-blur-xl"
              >
                <span className="text-5xl sm:text-6xl">
                  ✨
                </span>
              </motion.div>

              {/* Text */}
              <div className="mt-10 max-w-xl">

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-yellow-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase"
                >
                  Before you leave...
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent leading-tight"
                >
                  One Last Surprise 🎁
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="mt-5 text-sm sm:text-lg text-white/70 leading-relaxed"
                >
                  There is one little thing I want you to remember.
                </motion.p>

                {/* Button */}
                <motion.button
                  type="button"
                  onClick={() => setOpen(true)}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9,
                  }}
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-9 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold text-sm sm:text-base border border-yellow-300/40 shadow-[0_0_35px_rgba(249,115,22,0.35)]"
                >
                  Open My Heart ❤️
                </motion.button>
              </div>
            </motion.div>
          ) : (

            /* =================================
                OPEN CAPSULE
            ================================= */
            <motion.div
              key="opened"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="w-full max-w-2xl flex flex-col items-center"
            >

              {/* Heart */}
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-7xl sm:text-8xl md:text-9xl drop-shadow-[0_0_35px_rgba(244,63,94,0.55)]"
                >
                  ❤️
                </motion.div>
              </motion.div>

              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-yellow-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase"
              >
                Always and forever
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                No matter where
                <br />
                <span className="bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                  life takes us...
                </span>
              </motion.h1>

              {/* Message */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.95,
                }}
                className="mt-7 max-w-xl text-base sm:text-xl md:text-2xl text-white/85 leading-relaxed"
              >
                I'll always be your brother,
                <br />
                your biggest supporter,
                <br />
                and your partner in every crazy memory. ❤️
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: "120px",
                  opacity: 1,
                }}
                transition={{
                  delay: 1.3,
                  duration: 0.8,
                }}
                className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mt-9"
              />

              {/* Signature */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.5,
                }}
                className="mt-7"
              >
                <p className="text-white/50 text-xs sm:text-sm tracking-wider">
                  With all my love
                </p>

                <p className="mt-2 text-lg sm:text-xl font-semibold text-yellow-300">
                  Made with ❤️ by Surya
                </p>
              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}