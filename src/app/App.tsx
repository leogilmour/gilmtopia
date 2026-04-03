import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./components/festival/SectionHeading";
import { FestivalText } from "./components/festival/FestivalText";
import { ScheduleDay } from "./components/festival/ScheduleDay";
import { InfoCard } from "./components/festival/InfoCard";
import { RSVPForm } from "./components/festival/RSVPForm";

export default function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted");
  };

  const scrollToInfo = () => {
    document
      .getElementById("info-section")
      ?.scrollIntoView({ behavior: "smooth" });
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="400"
              viewBox="0 0 1580 746"
              fill="none"
              className="drop-shadow-2xl relative z-10"
            >
              <defs>
                <linearGradient
                  id="gGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#a855f7", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#06b6d4", stopOpacity: 1 }}
                  />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* G shape */}
              <path
                d="M359.5 310.5V740.5H565M359.5 310.5H324.5L310 279H359.5M359.5 310.5L560.5 307M359.5 279L533 163M359.5 279H533M533 163V15.5H605V141H645.5V15.5H714V141H756.5V15.5H826.5V141H861.5V15.5H922.5V163M533 163H922.5M922.5 163L1079.5 279M1079.5 279H1131L1118 310.5H1096M1079.5 279H911.5M1096 310.5V740.5H887.5M1096 310.5H887.5M756.5 563.5V705.5H697.5V563.5M756.5 563.5H697.5M756.5 563.5H782C728.8 509.1 689.833 540.833 677 563.5H697.5M533 279L725 163L911.5 279M533 279H911.5M565 740.5L560.5 307M565 740.5H887.5M560.5 307L887.5 310.5M887.5 310.5V740.5M705 521.5V422.5H746.5V521.5H705ZM800.5 521.5V422.5H842V521.5H800.5ZM609.5 521.5V422.5H651V521.5H609.5ZM521.25 523.75V424.75H562.75V523.75H521.25ZM887.5 525.5V426.5H929V525.5H887.5ZM987.5 521.5V422.5H1029V521.5H987.5ZM705 677V578H746.5V677H705ZM800.5 677V578H842V677H800.5ZM894 677V578H935.5V677H894ZM987.5 677V578H1029V677H987.5ZM609.5 677V578H651V677H609.5ZM521.813 677V578H563.313V677H521.813ZM424.5 677V578H466V677H424.5ZM424.5 322.5H459.5V368H424.5V322.5ZM521.25 322.5H556.25V368H521.25V322.5ZM616 322.5H651V368H616V322.5ZM711.5 322.5H746.5V368H711.5V322.5ZM800.5 322.5H835.5V368H800.5V322.5ZM894 322.5H929V368H894V322.5ZM987.5 322.5H1022.5V368H987.5V322.5ZM424.5 523.75V424.75H466V523.75H424.5ZM72.1305 74.4825C111.592 130.476 206.576 296.053 291.366 107.275C716.915 28.8845 -159.78 -67.1041 401.691 87.2809C471.55 119.277 529.996 175.91 204.915 146.474C-120.166 117.037 41.7341 81.9482 72.1305 74.4825ZM142.584 74.4825L168.119 41.683L195.316 74.4825L168.119 107.275L142.584 74.4825ZM1507.1 402.698C1467.64 346.705 1372.66 181.128 1287.87 369.906C862.32 448.296 1739.02 544.285 1177.54 389.9C1107.69 357.904 1049.24 301.27 1374.32 330.707C1699.4 360.143 1537.5 395.232 1507.1 402.698ZM1436.65 402.698L1411.12 435.498L1383.92 402.698L1411.12 369.906L1436.65 402.698Z"
                stroke="url(#gGradient)"
                strokeWidth="10"
                strokeLinejoin="round"
                filter="url(#glow)"
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
                shape: "circle",
                size: 45,
                color: "#ff5555",
                wireLength: 120,
                rotate3D: true,
                direction: "alternating", // Slows down and reverses
              },
              {
                angle: 120,
                distance: 110,
                duration: 18,
                shape: "triangle",
                size: 50,
                color: "#ffd700",
                wireLength: 90,
                rotate3D: false,
                direction: "counterclockwise", // Goes anti-clockwise
              },
              {
                angle: 240,
                distance: 130,
                duration: 20,
                shape: "oval",
                size: 40,
                color: "#22d3ee",
                wireLength: 100,
                rotate3D: true,
                direction: "clockwise", // Normal clockwise
              },
              {
                angle: 60,
                distance: 95,
                duration: 12,
                shape: "square",
                size: 38,
                color: "#ec4899",
                wireLength: 75,
                rotate3D: false,
                direction: "alternating", // Slows down and reverses
              },
              {
                angle: 180,
                distance: 160,
                duration: 22,
                shape: "circle",
                size: 35,
                color: "#c084fc",
                wireLength: 140,
                rotate3D: true,
                direction: "counterclockwise", // Goes anti-clockwise
              },
            ].map((element, i) => {
              const radians = (element.angle * Math.PI) / 180;
              const x = Math.cos(radians) * element.distance;
              const y = Math.sin(radians) * element.distance;

              // Define rotation animation based on direction
              let rotateAnimation;
              if (element.direction === "counterclockwise") {
                rotateAnimation = [element.angle, element.angle - 360];
              } else if (element.direction === "alternating") {
                // Rotates, slows down, reverses back, slows down, repeat
                rotateAnimation = [
                  element.angle,
                  element.angle + 180,
                  element.angle + 180,
                  element.angle,
                  element.angle,
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
                    duration:
                      element.direction === "alternating"
                        ? element.duration * 1.5
                        : element.duration,
                    repeat: Infinity,
                    ease:
                      element.direction === "alternating"
                        ? "easeInOut"
                        : "linear",
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
                      opacity: 0,
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
                      transformStyle: "preserve-3d",
                    }}
                    animate={
                      element.rotate3D
                        ? {
                            rotateZ:
                              element.direction === "counterclockwise"
                                ? [0, 360]
                                : [0, -360],
                            rotateY: [0, 360],
                            y: [-10, 10, -10],
                          }
                        : {
                            rotateZ:
                              element.direction === "counterclockwise"
                                ? [0, 360]
                                : [0, -360],
                            y: [-10, 10, -10],
                          }
                    }
                    transition={{
                      rotateZ: {
                        duration: element.duration * 0.5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      rotateY: element.rotate3D
                        ? {
                            duration: element.duration * 0.7,
                            repeat: Infinity,
                            ease: "linear",
                          }
                        : {},
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      },
                    }}
                  >
                    {element.shape === "circle" && (
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          background: `radial-gradient(circle at 35% 35%, ${element.color}, ${element.color}ee)`,
                          boxShadow: `0 0 40px ${element.color}, 0 0 60px ${element.color}aa`,
                        }}
                      />
                    )}
                    {element.shape === "triangle" && (
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
                    {element.shape === "square" && (
                      <div
                        className="w-full h-full"
                        style={{
                          background: element.color,
                          boxShadow: `0 0 40px ${element.color}, 0 0 60px ${element.color}aa`,
                        }}
                      />
                    )}
                    {element.shape === "oval" && (
                      <div
                        className="w-full h-full"
                        style={{
                          background: `radial-gradient(ellipse at 35% 35%, ${element.color}, ${element.color}ee)`,
                          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
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
            <h1
              className="relative text-8xl font-bold"
              style={{ fontFamily: "Monoton, cursive" }}
            >
              {["G", "I", "L", "M", "T", "O", "P", "I", "A"].map(
                (letter, i) => (
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
                      textShadow: "0 0 60px rgba(168, 85, 247, 0.9)",
                      filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.7))",
                    }}
                  >
                    {letter}
                  </motion.span>
                ),
              )}
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
                textShadow:
                  "0 0 30px rgba(103, 232, 249, 0.8), 0 0 60px rgba(236, 72, 153, 0.6)",
                filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.7))",
              }}
            >
              26th - 28th June 2026
            </p>
          </motion.div>

          {/* Email form */}
          <RSVPForm onSubmit={handleSubmit} animate />

          {/* More info button */}
          <motion.button
            onClick={scrollToInfo}
            className="px-10 py-4 rounded-full bg-transparent border-2 border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/20 hover:scale-105 transition-all shadow-lg shadow-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{
              textShadow: "0 0 10px rgba(103, 232, 249, 0.8)",
            }}
          >
            more info
          </motion.button>
        </div>
      </section>

      {/* SECTION 2: Info Section */}
      <section
        id="info-section"
        className="relative w-full min-h-screen overflow-hidden bg-black"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 space-y-16">
          {/* Intro */}
          <div className="space-y-4">
            <SectionHeading color="cyan">
              The Nano Festival Returns
            </SectionHeading>
            <FestivalText size="lg">
              Our teeny tiny communal festival where everyone contributes in
              some way: art, music, workshops, games, food prep, cocktail making
              — the more inventive the better. It's the perfect place to
              experiment!
            </FestivalText>
            <FestivalText size="lg" delay={0.1}>
              26th–28th June 2026 · Winslow, Buckinghamshire
            </FestivalText>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <SectionHeading color="pink" size="lg">
              Schedule
            </SectionHeading>
            {/* byline: specifics to be confirmed once people sign up to do things! */}
            <div className="grid md:grid-cols-3 gap-4">
              <ScheduleDay
                day="Friday"
                emoji="🍷"
                color="pink"
                delay={0}
                events={[
                  {
                    description:
                      "Arrive, pitch up, and settle in before joining us for wines, cheeses, a fire, and an intimate night of live music",
                  },
                ]}
              />
              <ScheduleDay
                day="Saturday"
                emoji="☀️"
                color="yellow"
                delay={0.1}
                events={[
                  { description: "Breakfast, Activities," },
                  { description: "Giant picnic, Workshops," },
                  { description: "Fish and chips, Music," },
                  { description: "and Squiffy's Bar" },
                ]}
              />
              <ScheduleDay
                day="Sunday"
                emoji="🥓"
                color="cyan"
                delay={0.2}
                events={[
                  {
                    description:
                      "Bacon butties and bloody Marys at the Betsey Wynne (30 min walk or 5 min drive)",
                  },
                  {
                    description:
                      "A perfect place for a hungover gossip of the weekend",
                  },
                ]}
              />
            </div>
          </div>
          {/* Activities */}
          <div className="space-y-4">
            <SectionHeading color="purple" size="lg">
              Activities, Workshops, and Performances, Oh My!
            </SectionHeading>
            <FestivalText>
              The vibrancy of the weekend is absolutely down to YOU. From escape
              rooms to face painting to karaoke — if you're willing to
              coordinate it, we'd love to have it.
            </FestivalText>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <InfoCard title="Perform" emoji="🎤" delay={0} color="pink">
                <p>
                  We're especially thrilled if you want to sing, strum, or DJ —
                  especially if it'll get people dancing. But we'd love
                  performances of any variety. Maybe you want to get people into
                  a drawing room play or laughing with your stand up.
                </p>
              </InfoCard>
              <InfoCard title="Jam" emoji="🎸" delay={0.1} color="purple">
                <p>
                  Feeling shy but love to play? Bring your gear anyway. We'll
                  schedule a free-for-all jam session — whatever the musically
                  gifted feel like.
                </p>
              </InfoCard>
              <InfoCard title="Activities" emoji="🎤" delay={0} color="yellow">
                <p>
                  Host an activity! We've had everything from Dungeons & Dragons
                  to Life Drawing to Spike Ball — the more inventive the better.
                  We want to fill the weekend with things to do, and it's all
                  down to you.
                </p>
              </InfoCard>
              <InfoCard title="Extras" emoji="📸" delay={0} color="green">
                <p>
                  Do you have any skills or hobbies relating to events? Want to
                  bring a drone, make a music video, or run a photobooth? Go for
                  it!
                </p>
              </InfoCard>
              <InfoCard title="Food" emoji="🍳" delay={0.2} color="purple">
                <p>
                  Not feeling the limelight? Then join the food team. Spaces: 30
                  chefs and preppers
                </p>
              </InfoCard>
              <InfoCard
                title="Squiffy's Bar"
                emoji="🍹"
                delay={0.2}
                color="cyan"
              >
                <p>
                  Got the gift of the gab? Join the bar team. Spaces: 30
                  bartenders
                </p>
              </InfoCard>
              <InfoCard
                title="Art Attack"
                emoji="🎨"
                delay={0.2}
                color="orange"
              >
                <p>
                  If you have time ahead of the weekend, join the art team
                  instead and you'll help produce decorations and signs. Spaces:
                  10
                </p>
              </InfoCard>
              <InfoCard title="Supplies" emoji="🪑" delay={0.2} color="yellow">
                <p>
                  Do you have folding chairs and tables? Disco balls? Marquees?
                  Please let us know, it would be the greatest help. We WILL
                  have proper rain provisions this time.
                </p>
              </InfoCard>
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-4">
            <SectionHeading color="yellow" size="lg">
              The Budget
            </SectionHeading>
            <FestivalText>
              We like to organise everything so there's no stress during the
              weekend. We ask everyone who can make it to contribute — one flat
              fee covers the lot.
            </FestivalText>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <InfoCard
                title="What's Covered"
                emoji="✅"
                delay={0}
                color="green"
              >
                <p>All drinks — whoop!</p>
                <p>Friday cheeses</p>
                <p>Saturday breakfast, lunch, and dinner</p>
                <p>The portaloos</p>
                <p>The sound system</p>
                <p className="text-white/40 text-sm mt-2">
                  Any extras covered by the GGs as usual
                </p>
              </InfoCard>
              <InfoCard
                title="Cost Per Person"
                emoji="💸"
                delay={0.1}
                color="yellow"
              >
                <div className="space-y-2 mt-1">
                  {[
                    { label: "Food", amount: "£20" },
                    { label: "Drink", amount: "£20" },
                    { label: "Portaloos", amount: "£10" },
                    { label: "Sound system", amount: "£10" },
                  ].map(({ label, amount }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center border-b border-white/10 pb-1"
                    >
                      <span>{label}</span>
                      <span className="text-white/90 font-medium">
                        {amount}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-1 text-yellow-300 font-bold text-lg">
                    <span>Total</span>
                    <span>£60</span>
                  </div>
                  <div>Optional extra: a space in a yurt</div>
                </div>
              </InfoCard>
            </div>
          </div>

          {/* Photos */}
          <div className="space-y-4">
            <SectionHeading color="pink" size="lg">
              Previously...
            </SectionHeading>
            <FestivalText>It was MARVELLOUS</FestivalText>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-8 px-8 scrollbar-none">
              {[
                {
                  caption: "Friday night fire",
                  src: "/images/IMG_8331.jpeg",
                  bg: "from-pink-500/30 to-pink-500/5",
                  border: "border-pink-500/40",
                },
                {
                  caption: "The great picnic",
                  bg: "from-yellow-500/30 to-yellow-500/5",
                  border: "border-yellow-500/40",
                },
                {
                  caption: "Squiffy's Bar",
                  bg: "from-cyan-500/30 to-cyan-500/5",
                  border: "border-cyan-500/40",
                },
                {
                  caption: "Live music",
                  bg: "from-purple-500/30 to-purple-500/5",
                  border: "border-purple-500/40",
                },
                {
                  caption: "Art installations",
                  bg: "from-orange-500/30 to-orange-500/5",
                  border: "border-orange-500/40",
                },
                {
                  caption: "Fish & chips queue",
                  bg: "from-green-500/30 to-green-500/5",
                  border: "border-green-500/40",
                },
                {
                  caption: "Sunday walk",
                  bg: "from-cyan-500/30 to-cyan-500/5",
                  border: "border-cyan-500/40",
                },
                {
                  caption: "Betsey Wynne",
                  bg: "from-pink-500/30 to-pink-500/5",
                  border: "border-pink-500/40",
                },
                {
                  caption: "Jam session",
                  bg: "from-purple-500/30 to-purple-500/5",
                  border: "border-purple-500/40",
                },
                {
                  caption: "Sunday gossip",
                  bg: "from-yellow-500/30 to-yellow-500/5",
                  border: "border-yellow-500/40",
                },
              ].map(({ caption, src, bg, border }, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="shrink-0 w-48 flex flex-col gap-2"
                >
                  <div
                    className={`w-48 h-48 rounded-xl bg-gradient-to-b ${bg} border ${border} overflow-hidden flex items-center justify-center text-4xl`}
                  >
                    {src ? (
                      <img src={src} alt={caption} className="w-full h-full object-cover" />
                    ) : (
                      "📷"
                    )}
                  </div>
                  <figcaption className="text-white/50 text-sm text-center">
                    {caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          {/* Practical info */}
          <div className="space-y-4">
            <SectionHeading color="green" size="lg">
              Practical Info
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoCard title="What to Pack" emoji="🎒" delay={0} color="cyan">
                <p>Tent, sleeping bag, toothbrush</p>
                <p>Picnic rug, towel, or beanbag</p>
                <p>Umbrella (sun or rain, this is England)</p>
                <p>Swimsuit if you're keen on a hose down?</p>
                <p>
                  No need to bring extra food or booze, everything is provided!
                </p>
              </InfoCard>
              <InfoCard
                title="Getting There"
                emoji="🚂"
                delay={0.1}
                color="purple"
              >
                <p className="font-medium text-white/50 text-sm uppercase tracking-wider mb-1">
                  By train
                </p>
                <p>Bletchley from Euston</p>
                <p>Aylesbury from Marylebone</p>
                <p>Bicester from Oxford</p>
                <p className="font-medium text-white/50 text-sm uppercase tracking-wider mt-3 mb-1">
                  By car
                </p>
                <p>Parking in the field opposite the hall</p>
                <p className="text-white/50 text-sm">
                  Sheep Street, Winslow, Buckinghamshire MK18 3HL
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="relative w-full overflow-hidden bg-black border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-indigo-900/20 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 flex flex-col items-center gap-8 text-center">
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Righteous, cursive" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See you there
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            26th–28th June 2026 · Winslow, Buckinghamshire
          </motion.p>
          <RSVPForm onSubmit={handleSubmit} animate={false} />
        </div>
      </section>
    </div>
  );
}
