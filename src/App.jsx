import React from 'react';
import Hero3D from './components/Hero3D';
import TechStack from './components/TechStack';
import AboutPreview from './components/AboutPreview';
import ContactStrip from './components/ContactStrip';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          {subtitle && <p className="mt-1 text-white/60">{subtitle}</p>}
        </div>
        <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}

function ProjectCard({ title, stack, description, github, live, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white/80 backdrop-blur transition ' +
        (featured ? 'ring-1 ring-fuchsia-400/20 shadow-[0_0_60px_-20px] shadow-fuchsia-500/30' : '')
      }
    >
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-2 text-sm text-white/60">{stack}</div>
        <p className="mt-3 text-white/80">{description}</p>
        <div className="mt-4 flex items-center gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15"
            >
              Live <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b14] text-white antialiased">
      {/* Hero with immersive Spline scene and blossoms */}
      <Hero3D />

      {/* Tech marquee */}
      <TechStack />

      {/* About preview with skills snapshot */}
      <AboutPreview />

      {/* Projects */}
      <section id="projects" className="bg-[#0b0b14] py-16">
        <SectionHeader
          title="Projects"
          subtitle="Selected work that blends performance, DX, and elegant UX."
        />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <ProjectCard
            featured
            title="Mentor-Mentee Platform"
            stack="React • Redux-Saga • TypeScript • Node.js • MongoDB Atlas • Vector Search"
            description="Fullstack platform for mentor-mentee matching with search, sessions, and analytics. Frontend in React + Saga, backend in Node + TS with semantic/vector search."
            github="https://github.com/AkashAkash311"
            live="#"
          />
          <ProjectCard
            title="React Hooks Playground"
            stack="React • TypeScript"
            description="Interactive explorations of advanced hooks patterns, concurrency, and performance techniques."
            github="https://github.com/AkashAkash311"
            live="#"
          />
          <ProjectCard
            title="Nginx + AWS Deployment Setup"
            stack="AWS • Nginx"
            description="Production-ready reverse proxy and CI/CD setup for scalable React/Node apps."
            github="https://github.com/AkashAkash311"
            live="#"
          />
          <ProjectCard
            title="Kafka Integration in Node.js"
            stack="Node.js • Kafka"
            description="Event-driven microservice patterns with producers/consumers and observability."
            github="https://github.com/AkashAkash311"
            live="#"
          />
          <ProjectCard
            title="Semantic Search Demo"
            stack="Node.js • Embeddings • MongoDB"
            description="Prototype for semantic document retrieval using embeddings and MongoDB Atlas."
            github="https://github.com/AkashAkash311"
            live="#"
          />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#0c0c1a] py-16">
        <SectionHeader
          title="Experience"
          subtitle="Professional journey and responsibilities."
        />
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white/80 backdrop-blur"
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">Satin Creditcare</h3>
                <p className="text-white/60">React Developer • July 2024 – Present</p>
              </div>
              <div className="text-sm text-white/60">Gurugram, India</div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              <li>Developed frontend modules with React and Redux-Saga.</li>
              <li>Integrated APIs and collaborated closely with backend teams.</li>
              <li>Implemented reusable components and performance optimizations.</li>
            </ul>
          </motion.div>
          <div className="mt-6 text-sm text-white/50">Future-ready section reserved for upcoming roles.</div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactStrip />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-white/50">
        © {new Date().getFullYear()} Akash Bhuker • Built with craft and motion.
      </footer>
    </div>
  );
}
