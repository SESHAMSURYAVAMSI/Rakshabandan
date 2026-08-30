// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function Letter() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showText, setShowText] = useState(false)
//   const [currentText, setCurrentText] = useState("")

//   const letterText = `Happy Raksha Bandhan 💖

// You are not just my sister...
// You are my best friend, my support system, and one of the greatest blessings in my life.

// Thank you for always being there for me.
// For supporting me, understanding me, and caring for me.

// No matter how much we fight or argue,
// our bond will always remain strong ❤️

// You bring happiness, warmth, and joy into my life.

// I pray for your happiness, success, health, and endless smiles.

// Stay happy always 😊
// Stay blessed ✨

// Happy Raksha Bandhan once again 💖`

//   useEffect(() => {
//     if (!showText) return

//     let index = 0
//     const timer = setInterval(() => {
//       if (index < letterText.length) {
//         setCurrentText(letterText.slice(0, index + 1))
//         index++
//       } else {
//         clearInterval(timer)
//       }
//     }, 25)

//     return () => clearInterval(timer)
//   }, [showText])

//   const handleOpen = () => {
//     setIsOpen(true)
//     setTimeout(() => setShowText(true), 600)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-red-950 via-black to-orange-950">
//       <div className="max-w-4xl w-full">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
//             A Letter From My Heart 💖
//           </h1>
//         </div>

//         <AnimatePresence mode="wait">
//           {!isOpen ? (
//             <motion.div
//               className="flex justify-center cursor-pointer"
//               onClick={handleOpen}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//             >
//               <div className="w-72 md:w-96 h-48 md:h-56 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 shadow-2xl flex items-center justify-center flex-col">
//                 <div className="text-6xl md:text-8xl">💌</div>
//                 <p className="mt-4 text-orange-800 font-semibold">
//                   Tap to Open
//                 </p>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               className="rounded-3xl shadow-2xl border-4 border-yellow-300 p-6 md:p-10"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)",
//               }}
//               initial={{ opacity: 0, rotateX: -30 }}
//               animate={{ opacity: 1, rotateX: 0 }}
//             >
//               <div className="h-[500px] overflow-y-auto whitespace-pre-wrap text-gray-800 text-sm md:text-lg leading-relaxed">
//                 {currentText}
//                 <span className="animate-pulse">|</span>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Letter({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const letterText = `Happy Raksha Bandhan 💖

You are not just my sister...
You are my best friend, my support system, and one of the greatest blessings in my life.

Thank you for always being there for me.
For supporting me, understanding me, and caring for me.

No matter how much we fight or argue,
our bond will always remain strong ❤️

Actually direct ga vachi surprise idham anukoni chala plans vesa kaani nuvvu ekkada vunnavo teledu 
ina sudden ga interview arrange chesaru soo dont worry na job location chennai loney try chestunna 😂 

Nijaniki nitho matladali ani chala time anukunna but a chance naku raaledu
kanisam ila ina na maatalu niku reach avuthai ani anukuntunna...... 

Infact nuvvu deggara vuntey happyness thappa inkemi teledu kaani nuvvu dhuram ithey aa badha thappa inkemi migalaledu naaku 😔
Eee time idi chepochoo ledho naku teledu kaani cheptunna ninnu istapaddam nerchukunna but marchipovatam matram eppatiki nerchukoolenu... 

kaalam marochu alaney situatons change avvochu  kaani ni midam istam matram eppatiki maaradu... 
Sare inka ninnu ekkuva badhapettanu naku antha time kuda ledu anukooo😂 

Inka manchiga wishes chedham anukunna but nuvvu reply ivvaledu ga andukey one nyt batting chesa ihope niku idi nachindi anukuntunna ... 
Incase interview clear ithey call chestha appudu ina answer chesthavu ani koorukuntunna...🙏

You bring happiness, warmth, and joy into my life.

I pray for your happiness, success, health, and endless smiles.

Stay happy always 😊
Stay blessed ✨

Happy Raksha Bandhan once again 💖`;

  /* --------------------------------
     TYPEWRITER EFFECT
  -------------------------------- */
  useEffect(() => {
    if (!showText) return;

    let index = 0;
    setCurrentText("");
    setIsTypingComplete(false);

    const timer = setInterval(() => {
      if (index < letterText.length) {
        setCurrentText(letterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [showText, letterText]);

  /* --------------------------------
     OPEN LETTER
  -------------------------------- */
  const handleOpen = () => {
    setIsOpen(true);

    setTimeout(() => {
      setShowText(true);
    }, 600);
  };

  /* --------------------------------
     GO TO FINAL CAPSULE
  -------------------------------- */
  const handleNext = () => {
    if (typeof onNext === "function") {
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-red-950 via-black to-orange-950">
      <div className="max-w-4xl w-full">

        {/* --------------------------------
            TITLE
        -------------------------------- */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-300/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            A little something from my heart
          </p>

          <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            A Letter From My Heart 💖
          </h1>
        </motion.div>

        <AnimatePresence mode="wait">

          {/* --------------------------------
              CLOSED LETTER
          -------------------------------- */}
          {!isOpen ? (
            <motion.div
              key="closed-letter"
              className="flex justify-center cursor-pointer"
              onClick={handleOpen}
              initial={{ scale: 0, rotateY: 20 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="relative w-72 md:w-96 h-48 md:h-56 rounded-2xl bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 shadow-[0_0_60px_rgba(251,191,36,0.25)] border border-yellow-300/60 flex items-center justify-center flex-col overflow-hidden"
              >
                {/* Envelope Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 text-6xl md:text-8xl"
                >
                  💌
                </motion.div>

                <p className="relative z-10 mt-4 text-orange-800 font-semibold">
                  Tap to Open
                </p>

                <p className="relative z-10 mt-1 text-xs text-orange-700/60">
                  A message just for you ❤️
                </p>
              </motion.div>
            </motion.div>
          ) : (

            /* --------------------------------
                OPEN LETTER
            -------------------------------- */
            <motion.div
              key="open-letter"
              className="rounded-3xl shadow-2xl border-4 border-yellow-300 p-6 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)",
              }}
              initial={{
                opacity: 0,
                rotateX: -30,
                y: 30,
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              {/* Letter Header */}
              <div className="text-center mb-5">
                <div className="text-3xl">💖</div>

                <p className="text-xs uppercase tracking-[0.25em] text-orange-600/60 mt-2">
                  For Jaanu
                </p>
              </div>

              {/* Letter Content */}
              <div className="h-[500px] overflow-y-auto whitespace-pre-wrap text-gray-800 text-sm md:text-lg leading-relaxed pr-2">
                {currentText}

                {!isTypingComplete && (
                  <span className="animate-pulse text-orange-500">
                    |
                  </span>
                )}
              </div>

              {/* --------------------------------
                  NEXT BUTTON
              -------------------------------- */}
              <AnimatePresence>
                {isTypingComplete && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="flex justify-center mt-8"
                  >
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{
                        scale: 1.06,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="px-7 py-3 md:px-9 md:py-4 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold text-sm md:text-base shadow-[0_0_35px_rgba(249,115,22,0.35)] border border-yellow-300/40"
                    >
                      One More Surprise 🎁
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}