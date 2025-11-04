import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section id="about" className="relative bg-[#0c0c1a] py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-white">About Me</h3>
            <p className="mt-4 text-white/80">
              I’m a React Developer currently working at Satin Creditcare. I specialize in building
              scalable frontend architectures using React, Redux-Saga, and TypeScript, integrated with robust
              Node.js and MongoDB backends. Passionate about system design and AI-powered web development.
            </p>
            <p className="mt-3 text-white/60">Currently learning: AWS, Docker, and Solution Architecture.</p>
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-white/60 transition hover:bg-white"
              >
                Explore Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 text-white/80 shadow-xl shadow-fuchsia-500/5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Skills Snapshot</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-white/60">Frontend</div>
                  <div className="mt-1 text-white/90">React, Redux-Saga, TypeScript</div>
                </div>
                <div>
                  <div className="text-white/60">Backend</div>
                  <div className="mt-1 text-white/90">Node.js, Express</div>
                </div>
                <div>
                  <div className="text-white/60">Database</div>
                  <div className="mt-1 text-white/90">MongoDB</div>
                </div>
                <div>
                  <div className="text-white/60">DevOps</div>
                  <div className="mt-1 text-white/90">AWS, Docker, Nginx</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
