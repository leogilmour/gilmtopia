import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted');
  };

  const scrollToInfo = () => {
    document.getElementById('info-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      {/* SECTION 1: Starry Space Background */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Animated starfield background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-black">
          {/* Stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Psychedelic gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-8">
          {/* Funky G Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[400px] h-[400px] flex items-center justify-center"
          >
            {/* Center G */}
            <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl relative z-10">
              <defs>
                {/* Psychedelic gradient */}
                <linearGradient id="gGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                </linearGradient>
                {/* Glow filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Outer G shape with funky curves */}
              <motion.path
                d="M 150 100 C 150 66 125 40 100 40 C 75 40 50 66 50 100 C 50 134 75 160 100 160 C 115 160 128 153 137 142 L 137 110 L 100 110 L 100 90 L 157 90 L 157 150 C 140 170 120 180 100 180 C 65 180 30 145 30 100 C 30 55 65 20 100 20 C 135 20 170 55 170 100 L 150 100 Z"
                fill="url(#gGradient)"
                stroke="none"
                filter="url(#glow)"
                strokeWidth="0"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Inner accent stars */}
              {[
                { cx: 85, cy: 70, delay: 0 },
                { cx: 120, cy: 100, delay: 0.5 },
                { cx: 90, cy: 130, delay: 1 },
              ].map((star, i) => (
                <motion.circle
                  key={i}
                  cx={star.cx}
                  cy={star.cy}
                  r="3"
                  fill="#ffffff"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.5, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: star.delay,
                  }}
                />
              ))}
            </svg>

            {/* Calder-style mobile elements */}
            {/* Wire connectors and shapes */}
            {[
              { 
                angle: 0, 
                distance: 140, 
                duration: 15, 
                shape: 'circle',
                size: 45, 
                color: '#ff5555',
                wireLength: 120,
                rotate3D: true,
                direction: 'alternating' // Slows down and reverses
              },
              { 
                angle: 120, 
                distance: 110, 
                duration: 18, 
                shape: 'triangle',
                size: 50, 
                color: '#ffd700',
                wireLength: 90,
                rotate3D: false,
                direction: 'counterclockwise' // Goes anti-clockwise
              },
              { 
                angle: 240, 
                distance: 130, 
                duration: 20, 
                shape: 'oval',
                size: 40, 
                color: '#22d3ee',
                wireLength: 100,
                rotate3D: true,
                direction: 'clockwise' // Normal clockwise
              },
              { 
                angle: 60, 
                distance: 95, 
                duration: 12, 
                shape: 'square',
                size: 38, 
                color: '#ec4899',
                wireLength: 75,
                rotate3D: false,
                direction: 'alternating' // Slows down and reverses
              },
              { 
                angle: 180, 
                distance: 160, 
                duration: 22, 
                shape: 'circle',
                size: 35, 
                color: '#c084fc',
                wireLength: 140,
                rotate3D: true,
                direction: 'counterclockwise' // Goes anti-clockwise
              },
            ].map((element, i) => {
              const radians = (element.angle * Math.PI) / 180;
              const x = Math.cos(radians) * element.distance;
              const y = Math.sin(radians) * element.distance;
              
              // Define rotation animation based on direction
              let rotateAnimation;
              if (element.direction === 'counterclockwise') {
                rotateAnimation = [element.angle, element.angle - 360];
              } else if (element.direction === 'alternating') {
                // Rotates, slows down, reverses back, slows down, repeat
                rotateAnimation = [
                  element.angle,
                  element.angle + 180,
                  element.angle + 180,
                  element.angle,
                  element.angle
                ];
              } else {
                rotateAnimation = [element.angle, element.angle + 360];
              }
              
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 0,
                    height: 0,
                  }}
                  animate={{
                    rotate: rotateAnimation,
                  }}
                  transition={{
                    duration: element.direction === 'alternating' ? element.duration * 1.5 : element.duration,
                    repeat: Infinity,
                    ease: element.direction === 'alternating' ? "easeInOut" : "linear",
                  }}
                >
                  {/* Wire/connector line */}
                  <div
                    className="absolute origin-left"
                    style={{
                      width: element.wireLength,
                      height: 3,
                      background: `linear-gradient(to right, ${element.color}66, ${element.color}cc)`,
                      left: 0,
                      top: 0,
                    }}
                  />
                  
                  {/* Balancing shape at end of wire */}
                  <motion.div
                    className="absolute"
                    style={{
                      left: element.wireLength,
                      top: -element.size / 2,
                      width: element.size,
                      height: element.size,
                      transformStyle: 'preserve-3d',
                    }}
                    animate={element.rotate3D ? {
                      rotateZ: element.direction === 'counterclockwise' ? [0, 360] : [0, -360],
                      rotateY: [0, 360],
                      y: [-10, 10, -10],
                    } : {
                      rotateZ: element.direction === 'counterclockwise' ? [0, 360] : [0, -360],
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      rotateZ: {
                        duration: element.duration * 0.5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      rotateY: element.rotate3D ? {
                        duration: element.duration * 0.7,
                        repeat: Infinity,
                        ease: "linear",
                      } : {},
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }
                    }}
                  >
                    {element.shape === 'circle' && (
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          background: `radial-gradient(circle at 35% 35%, ${element.color}, ${element.color}ee)`,
                          boxShadow: `0 0 40px ${element.color}, 0 0 60px ${element.color}aa`,
                        }}
                      />
                    )}
                    {element.shape === 'triangle' && (
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: `${element.size / 2}px solid transparent`,
                          borderRight: `${element.size / 2}px solid transparent`,
                          borderBottom: `${element.size}px solid ${element.color}`,
                          filter: `drop-shadow(0 0 30px ${element.color}) drop-shadow(0 0 50px ${element.color}aa)`,
                        }}
                      />
                    )}
                    {element.shape === 'square' && (
                      <div
                        className="w-full h-full"
                        style={{
                          background: element.color,
                          boxShadow: `0 0 40px ${element.color}, 0 0 60px ${element.color}aa`,
                        }}
                      />
                    )}
                    {element.shape === 'oval' && (
                      <div
                        className="w-full h-full"
                        style={{
                          background: `radial-gradient(ellipse at 35% 35%, ${element.color}, ${element.color}ee)`,
                          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                          boxShadow: `0 0 40px ${element.color}, 0 0 60px ${element.color}aa`,
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Title */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Rainbow glow layers */}
            <motion.h1
              className="absolute inset-0 text-8xl font-bold text-pink-500 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              GILMTOPIA
            </motion.h1>
            <motion.h1
              className="absolute inset-0 text-8xl font-bold text-cyan-500 blur-lg"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              GILMTOPIA
            </motion.h1>
            {/* Main text with wavy animation */}
            <h1 className="relative text-8xl font-bold" style={{ fontFamily: 'Monoton, cursive' }}>
              {['G', 'I', 'L', 'M', 'T', 'O', 'P', 'I', 'A'].map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                  style={{
                    textShadow: '0 0 60px rgba(168, 85, 247, 0.9)',
                    filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.7))',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Byline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Pulsing background */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 blur-2xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p
              className="relative text-3xl font-semibold bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(103, 232, 249, 0.8), 0 0 60px rgba(236, 72, 153, 0.6)',
                filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.7))',
              }}
            >
              10-12th June 2026
            </p>
          </motion.div>

          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-96"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-purple-400/50 text-white placeholder-purple-300/60 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
              >
                Submit
              </button>
            </div>
          </motion.form>

          {/* More info button */}
          <motion.button
            onClick={scrollToInfo}
            className="px-10 py-4 rounded-full bg-transparent border-2 border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/20 hover:scale-105 transition-all shadow-lg shadow-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{
              textShadow: '0 0 10px rgba(103, 232, 249, 0.8)',
            }}
          >
            More Info
          </motion.button>
        </div>
      </section>

      {/* SECTION 2: Info Section with Globe Background */}
      <section 
        id="info-section"
        className="relative w-full min-h-screen overflow-hidden bg-black"
      >
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text mb-8 drop-shadow-lg">
              Welcome to the Festival
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              GILMTOPIA is a three-day journey into festival utopias and psychedelic space. 
              Immerse yourself in a world where music, art, and consciousness converge to create 
              an unforgettable experience transcending the boundaries of reality.
            </p>

            <h3 className="text-4xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
              What to Expect
            </h3>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Journey through interdimensional soundscapes curated by visionary artists from across 
              the cosmos. Experience live visual projections that respond to your energy, explore 
              interactive art installations that blur the line between observer and participant, 
              and connect with a community of fellow travelers seeking transformation.
            </p>

            <h3 className="text-4xl font-bold text-green-400 mb-6 drop-shadow-lg">
              Join the Experience
            </h3>
            
            <p className="text-xl text-white/90 leading-relaxed">
              This isn't just a festival—it's a portal to new dimensions of collective consciousness. 
              Whether you're dancing under the stars, meditating in our sacred spaces, or simply 
              absorbing the vibrations, GILMTOPIA promises to expand your perception of what's possible 
              when we come together in celebration of art, music, and the infinite potential of the 
              human spirit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}