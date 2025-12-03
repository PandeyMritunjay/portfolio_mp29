'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import NeuralNetwork from './NeuralNetwork'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'education', href: '#education' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
]

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16"
    >

      {/* Animated Neural Networks */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <NeuralNetwork side="left" />
        <NeuralNetwork side="right" />
      </div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="visible"
        animate="visible"
        className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6"
      >

        <motion.h1
          variants={itemVariants}
          className="text-[clamp(2.2rem,6vw,4.2rem)] font-semibold leading-tight tracking-tight text-white max-w-3xl"
        >
          Building Intelligent Systems
        </motion.h1>
      </motion.div>

      {/* Independent Navigation - Absolutely Positioned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0., 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-[calc(65%+7rem)] z-10 w-full flex justify-center"
      >
        <nav className="flex items-center gap-6 text-sm tracking-[0.01em] text-white/70 bg-blue/10 rounded-full px-6 py-2 backdrop-blur-sm border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-300 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </section>
  )
}
