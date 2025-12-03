'use client'

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ContactIcons from '../components/ContactIcons'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import ParticleBackground from '../components/ParticleBackground'
import GradientShapes from '../components/GradientShapes'
import SideDecorations from '../components/SideDecorations'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientShapes />
      <ParticleBackground />
      <SideDecorations />

      {/* Soft spotlight overlay behind all content */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_50%)] opacity-60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.25),transparent_50%)] opacity-40 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ContactIcons />
        <About />
        <Skills />
        <Projects />
        <main className="px-4 sm:px-8 lg:px-12 xl:px-20 space-y-24 pb-8">
          <Experience />
        </main>
        
        {/* Footer Ribbon */}
        <footer className="relative z-10 w-full py-4 text-center bg-black/40 border-t border-white/10 backdrop-blur-sm">
          <p className="text-gray-300 text-sm">
            Made with <span className="text-red-500">❤️</span> by Mritunjay Pandey
          </p>
        </footer>
      </div>
    </div>
  )
}
