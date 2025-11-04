import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const petals = new Array(12).fill(0).map((_, i) => ({
  id: i,
  delay: Math.random() * 4,
  duration: 8 + Math.random() * 6,
  x: (Math.random() * 100) - 50,
  scale: 0.6 + Math.random() * 0.9,
  rotate: (Math.random() * 60) - 30,
}));

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
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
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              delay: p.delay,
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute text-2xl md:text-3xl select-none"
            style={{ left: '50%' }}
          >
            🌸
          </motion.span>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-sm/0"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 ring-1 ring-white/20">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
              Tokyo Night • Futuristic Portfolio
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Akash Bhuker
              <span className="block bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                React Developer • JavaScript • Node.js
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              Building scalable frontend experiences that connect users and technology.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-white/60 transition hover:bg-white"
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

      {/* subtle top to bottom vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b14]/40 via-transparent to-[#0b0b14]/70" />
    </section>
  );
}
