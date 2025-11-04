import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const petals = new Array(16).fill(0).map((_, i) => ({
  id: i,
  delay: Math.random() * 6,
  duration: 10 + Math.random() * 6,
  x: (Math.random() * 100) - 50,
  scale: 0.6 + Math.random() * 0.9,
  rotate: (Math.random() * 60) - 30,
}));

const lanterns = new Array(6).fill(0).map((_, i) => ({
  id: i,
  left: `${10 + i * 14 + (i % 2 === 0 ? 4 : -3)}%`,
  delay: i * 1.3,
  duration: 16 + (i % 3) * 4,
}));

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden bg-[#0a0a0b]">
      {/* Background gradient evocative of dusk over Kyoto */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(255,176,176,0.12),transparent_60%),radial-gradient(80%_50%_at_20%_100%,rgba(255,95,109,0.18),transparent_60%),radial-gradient(70%_50%_at_80%_100%,rgba(255,211,105,0.18),transparent_60%)]" />

      {/* Floating paper lanterns */}
      <div className="pointer-events-none absolute inset-0">
        {lanterns.map((l) => (
          <motion.div
            key={l.id}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: ['110%', '0%', '-10%'], opacity: [0, 1, 0.6] }}
            transition={{ delay: l.delay, duration: l.duration, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute"
            style={{ left: l.left }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-amber-300/10 blur-xl" />
              <span className="relative text-4xl drop-shadow-[0_0_12px_rgba(255,186,73,0.8)]">🏮</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cherry blossom petals */}
      <div className="pointer-events-none absolute inset-0">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: -100, x: p.x, rotate: 0, opacity: 0 }}
            animate={{
              y: '110%',
              x: [p.x, p.x + 40, p.x - 20, p.x + 10],
              rotate: [0, p.rotate, -p.rotate],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              delay: p.delay,
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute select-none text-2xl md:text-3xl"
            style={{ left: '50%' }}
          >
            🌸
          </motion.span>
        ))}
      </div>

      {/* Torii gate silhouette */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 w-[720px] -translate-x-1/2 opacity-[0.10] md:opacity-[0.14]">
        <svg viewBox="0 0 512 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M16 48h480v24H16z" fill="currentColor" />
          <path d="M64 72h384v18H64z" fill="currentColor" />
          <path d="M96 90h32v134H96zM384 90h32v134h-32z" fill="currentColor" />
          <path d="M224 108h64v116h-64z" fill="currentColor" />
        </svg>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-200/10 px-4 py-2 text-xs text-amber-100/90 ring-1 ring-amber-200/20">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-300" />
              Old Japan • Lofi • Calm focus
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Akash Bhuker
              <span className="block bg-gradient-to-r from-amber-200 via-rose-200 to-rose-300 bg-clip-text text-transparent">
                React Developer • Crafting serene experiences
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
              A handcrafted portfolio inspired by Edo-era aesthetics—soft lantern glow, falling sakura,
              and gentle motion.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-300/90 px-5 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-amber-100/60 transition hover:bg-amber-300"
              >
                Contact Me
              </a>
              <a
                href="mailto:akashbhuker2003@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com/AkashAkash311"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bhukerakash/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b14]/40 via-transparent to-[#0b0b14]/70" />
    </section>
  );
}
