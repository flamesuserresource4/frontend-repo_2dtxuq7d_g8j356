import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

export default function ContactStrip() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#0c0c1a] to-black py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/90 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Let’s build something exceptional</h3>
              <p className="mt-2 text-white/70">
                Open for React / Fullstack roles, collaborations, and interesting product ideas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:akashbhuker2003@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-white/60 transition hover:bg-white"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com/AkashAkash311"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
              >
                <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhukerakash/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
              >
                <Download className="h-4 w-4" /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
