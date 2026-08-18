// "use client";

// import { useState, useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { Volume2, VolumeX } from "lucide-react";

// import Loader from "./components/Loader";
// import Countdown from "./components/Countdown";
// import Celebration from "./components/Celebration";
// import HappyRakshaBandhan from "./components/HappyRakshaBandhan";
// import PhotoGallery from "./components/PhotoGallery";
// import BondAnimation from "./components/BondAnimation";
// import Letter from "./components/Letter";
// // import FestiveCursor from "./components/FestiveCursor";
// import SparkParticles from "./components/SparkParticles";

// export default function RakshaBandhanApp() {
//   const [currentScreen, setCurrentScreen] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMuted, setIsMuted] = useState(false);

//   const audioRef = useRef(null);

//   const getNextRakshaBandhan = () => {
//     const now = new Date();
//     const currentYear = now.getFullYear();

//     // Set your Rakhi date here
//     // let rakhiDate = new Date(`${currentYear}-08-28T00:00:00`)
//     let rakhiDate = new Date(`${currentYear}-06-16T00:00:00`);
//     if (now.getTime() > rakhiDate.getTime()) {
//       //  rakhiDate = new Date(`${currentYear}-08-28T00:00:00`)
//       rakhiDate = new Date(`${currentYear}-06-16T00:00:00`);
//       // rakhiDate = new Date(`${currentYear + 1}-06-16T00:00:00`)
//     }
//     return rakhiDate;
//   };

//   const rakhiDate = getNextRakshaBandhan();

//   const [isFestivalStarted, setIsFestivalStarted] = useState(
//     new Date().getTime() >= rakhiDate.getTime(),
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   const playMusic = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     audio.volume = 0;

//     audio.play().catch((err) => {
//       console.log("Audio blocked:", err);
//     });

//     let vol = 0;
//     const interval = setInterval(() => {
//       if (vol < 1) {
//         vol += 0.1;
//         audio.volume = vol;
//       } else {
//         clearInterval(interval);
//       }
//     }, 200);
//   };

//   const toggleMusic = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     audio.muted = !audio.muted;
//     setIsMuted(audio.muted);
//   };

//   const renderScreen = () => {
//     if (isLoading) return <Loader key="loader" />;

//     if (currentScreen === 0) {
//       if (!isFestivalStarted) {
//         return (
//           <Countdown
//             key="countdown"
//             birthdayDate={rakhiDate}
//             onComplete={() => setIsFestivalStarted(true)}
//           />
//         );
//       }

//       return (
//         <Celebration
//           key="celebration"
//           onNext={() => {
//             playMusic();
//             setCurrentScreen(1);
//           }}
//         />
//       );
//     }

//     if (currentScreen === 1) {
//       return (
//         <HappyRakshaBandhan key="happy" onNext={() => setCurrentScreen(2)} />
//       );
//     }

//     if (currentScreen === 2) {
//       return <PhotoGallery key="gallery" onNext={() => setCurrentScreen(3)} />;
//     }

//     if (currentScreen === 3) {
//       return <BondAnimation key="bond" onNext={() => setCurrentScreen(4)} />;
//     }

//     return <Letter key="letter" />;
//   };

//   return (
//     <div className="min-h-screen festive-bg overflow-hidden relative">
//       <audio ref={audioRef} loop>
//         {/* <source src="/audio/jaanu.mp3" type="audio/mpeg" /> */}
//       </audio>

//       {/* Diyas */}
//       <div className="absolute top-8 left-6 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
//         🪔
//       </div>
//       <div className="absolute top-8 right-20 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
//         🪔
//       </div>
//       <div className="absolute bottom-8 left-10 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
//         🪔
//       </div>
//       <div className="absolute bottom-8 right-6 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
//         🪔
//       </div>

//       {/* <button
//         onClick={toggleMusic}
//         className="fixed top-5 right-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 text-white"
//       >
//         {isMuted ? <VolumeX /> : <Volume2 />}
//       </button> */}
//       <button
//         onClick={toggleMusic}
//         className="fixed top-5 right-5 z-50 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-300/40 rounded-full p-4 text-yellow-200 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:scale-110 transition-all duration-300"
//       >
//         {isMuted ? <VolumeX /> : <Volume2 />}
//       </button>
//       <SparkParticles />
//       {/* <FestiveCursor /> */}
//       <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>

//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="fixed bottom-4 right-4 text-white/40 text-sm"
//       >
//         {/* @Raksha Bandhan 💖 */}
//         Made with ❤️ for my Sister
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

import Loader from "./components/Loader";
import Countdown from "./components/Countdown";
import Celebration from "./components/Celebration";
import HappyRakshaBandhan from "./components/HappyRakshaBandhan";
import RakhiCeremony from "./components/RakhiCeremony";
import PhotoGallery from "./components/PhotoGallery";
import BondAnimation from "./components/BondAnimation";
import Letter from "./components/Letter";
import FinalCapsule from "./components/FinalCapsule";
// import FestiveCursor from "./components/FestiveCursor";
import SparkParticles from "./components/SparkParticles";

export default function RakshaBandhanApp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  /* --------------------------------
     RAKSHA BANDHAN DATE
  -------------------------------- */
  const getNextRakshaBandhan = () => {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Set your Rakhi date here
    let rakhiDate = new Date(`${currentYear}-06-16T00:00:00`);

    if (now.getTime() > rakhiDate.getTime()) {
      rakhiDate = new Date(`${currentYear}-06-16T00:00:00`);
    }

    return rakhiDate;
  };

  const rakhiDate = getNextRakshaBandhan();

  const [isFestivalStarted, setIsFestivalStarted] = useState(
    new Date().getTime() >= rakhiDate.getTime(),
  );

  /* --------------------------------
     LOADER
  -------------------------------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /* --------------------------------
     PLAY MUSIC
  -------------------------------- */
  const playMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0;

    audio.play().catch((err) => {
      console.log("Audio blocked:", err);
    });

    let vol = 0;

    const interval = setInterval(() => {
      if (vol < 1) {
        vol += 0.1;
        audio.volume = vol;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  /* --------------------------------
     TOGGLE MUSIC
  -------------------------------- */
  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  /* --------------------------------
     SCREEN FLOW
  -------------------------------- */
  const renderScreen = () => {
    /* --------------------------------
       SCREEN 0
       LOADER / COUNTDOWN / CELEBRATION
    -------------------------------- */
    if (isLoading) {
      return <Loader key="loader" />;
    }

    if (currentScreen === 0) {
      if (!isFestivalStarted) {
        return (
          <Countdown
            key="countdown"
            birthdayDate={rakhiDate}
            onComplete={() => setIsFestivalStarted(true)}
          />
        );
      }

      return (
        <Celebration
          key="celebration"
          onNext={() => {
            playMusic();
            setCurrentScreen(1);
          }}
        />
      );
    }

    /* --------------------------------
       SCREEN 1
       HAPPY RAKSHA BANDHAN
    -------------------------------- */
    if (currentScreen === 1) {
      return (
        <HappyRakshaBandhan
          key="happy"
          onNext={() => setCurrentScreen(2)}
        />
      );
    }

    /* --------------------------------
       SCREEN 2
       RAKHI CEREMONY 🎀
    -------------------------------- */
    if (currentScreen === 2) {
      return (
        <RakhiCeremony
          key="rakhi-ceremony"
          onNext={() => setCurrentScreen(3)}
        />
      );
    }

    /* --------------------------------
       SCREEN 3
       PHOTO GALLERY 📸
    -------------------------------- */
    if (currentScreen === 3) {
      return (
        <PhotoGallery
          key="gallery"
          onNext={() => setCurrentScreen(4)}
        />
      );
    }

    /* --------------------------------
       SCREEN 4
       BOND ANIMATION ❤️
    -------------------------------- */
    if (currentScreen === 4) {
      return (
        <BondAnimation
          key="bond"
          onNext={() => setCurrentScreen(5)}
        />
      );
    }

    /* --------------------------------
       SCREEN 5
       LETTER 💌
    -------------------------------- */
    if (currentScreen === 5) {
      return (
        <Letter
          key="letter"
          onNext={() => setCurrentScreen(6)}
        />
      );
    }

    /* --------------------------------
       SCREEN 6
       FINAL CAPSULE 🎁
    -------------------------------- */
    if (currentScreen === 6) {
      return <FinalCapsule key="final-capsule" />;
    }

    return null;
  };

  return (
    <div className="min-h-screen festive-bg overflow-hidden relative">
      {/* --------------------------------
          BACKGROUND MUSIC
      -------------------------------- */}
      <audio ref={audioRef} loop>
        {/* Add your music here */}
        {/* <source src="/audio/jaanu.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* --------------------------------
          DECORATIVE DIYAS 🪔
      -------------------------------- */}
      <div className="absolute top-8 left-6 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
        🪔
      </div>

      <div className="absolute top-8 right-20 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
        🪔
      </div>

      <div className="absolute bottom-8 left-10 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
        🪔
      </div>

      <div className="absolute bottom-8 right-6 text-4xl md:text-6xl opacity-70 animate-pulse z-10">
        🪔
      </div>

      {/* --------------------------------
          MUSIC BUTTON 🎵
      -------------------------------- */}
      <button
        onClick={toggleMusic}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        className="fixed top-5 right-5 z-50 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-300/40 rounded-full p-4 text-yellow-200 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:scale-110 transition-all duration-300"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>

      {/* --------------------------------
          BACKGROUND PARTICLES ✨
      -------------------------------- */}
      <SparkParticles />

      {/* <FestiveCursor /> */}

      {/* --------------------------------
          PAGE TRANSITIONS
      -------------------------------- */}
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>

      {/* --------------------------------
          FOOTER
      -------------------------------- */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed bottom-4 right-4 text-white/40 text-sm z-40"
      >
        Made with ❤️ for my Sister
      </motion.div>
    </div>
  );
}