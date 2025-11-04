import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Rocket } from 'lucide-react';

const techs = [
  { name: 'React', icon: <Code className="h-5 w-5" /> },
  { name: 'Redux-Saga', icon: <Rocket className="h-5 w-5" /> },
  { name: 'TypeScript', icon: <Code className="h-5 w-5" /> },
  { name: 'Node.js', icon: <Server className="h-5 w-5" /> },
  { name: 'MongoDB', icon: <Database className="h-5 w-5" /> },
  { name: 'AWS', icon: <Cloud className="h-5 w-5" /> },
  { name: 'Docker', icon: <Cloud className="h-5 w-5" /> },
  { name: 'Nginx', icon: <Server className="h-5 w-5" /> },
];

export default function TechStack() {
  const row = [...techs, ...techs];
  return (
    <section className="relative bg-gradient-to-b from-[#0b0b14] to-[#0c0c1a] py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium uppercase tracking-wider text-white/70">
            Core Stack
          </h2>
          <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {row.map((t, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                <span className="text-white/80">{t.icon}</span>
                {t.name}
              </div>
            ))}
          </motion.div>
          {/* gentle edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c0c1a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0c0c1a] to-transparent" />
        </div>
      </div>
    </section>
  );
}
