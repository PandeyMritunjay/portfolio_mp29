'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative scroll-mt-32 pt-8 pb-24 w-full bg-white overflow-hidden">
      {/* Curvy Pink Shapes - Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Curvy Shape */}
        <svg
          className="absolute -top-20 -left-20 w-96 h-96 opacity-30"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 Q50,50 150,100 T300,80 T400,150 L400,0 L0,0 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Top Right Curvy Shape */}
        <svg
          className="absolute -top-32 right-0 w-80 h-80 opacity-25"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,200 Q350,50 250,100 T100,80 T0,150 L0,0 L400,0 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Bottom Left Large Curvy Shape */}
        <svg
          className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-20"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 Q100,300 200,350 T400,300 T600,350 L600,400 L0,400 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Bottom Right Medium Curvy Shape */}
        <svg
          className="absolute bottom-10 right-10 w-64 h-64 opacity-30"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300,300 Q250,200 200,250 T100,200 T0,250 L0,300 L300,300 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Center Right Small Curvy Shape */}
        <svg
          className="absolute top-1/2 right-20 w-48 h-48 opacity-25"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,100 Q150,50 100,75 T50,50 T0,75 L0,0 L200,0 Z"
            fill="#EC4899"
          />
        </svg>
      </div>

      {/* Smooth Transition Gradient from Dark to White */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-black/5 to-white pointer-events-none" />
      
      {/* Smooth Transition Gradient from White to Dark */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-black/5 to-white pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Two Column Layout - Image Left, Text Right */}
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 items-center">
            {/* Left: Image with Abstract Shapes */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Profile Image */}
              <div className="relative z-10">
                <Image
                  src="/Mritunjay.jpg"
                  alt="Mritunjay Pandey"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                  style={{ maxHeight: '500px', borderRadius: '1.5rem' }}
                  priority
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Heading */}
              <div>
                <h2 className="text-7xl md:text-3xl font-bold mb-6">
                  <span className="text-gray-900">Hello, I&apos;m </span>
                  <span className="text-pink-500">Mritunjay Pandey</span>
                </h2>
                <h3 className="text-3xl md:text-3xl font-bold text-pink-500 mb-6">
                  AI/ML Engineer
                </h3>
              </div>

              {/* About Me Paragraph */}
              <div className="space-y-4">
                <p className="text-gray-700 text-base leading-relaxed">
                  I am an AI/ML Engineer with a B.Tech from <span className="font-bold text-blue-600" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.275rem', letterSpacing: '0.5px' }}>NIT Jalandhar</span>. Currently working as an Analyst at <span className="font-bold text-blue-600" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.275rem', letterSpacing: '0.5px' }}>Aditya Birla Group</span>. Previously, I worked at <span className="font-bold text-blue-600" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.275rem', letterSpacing: '0.5px' }}>Namekart</span> as an AI Engineer, at Invisible Technologies (<span className="font-bold text-blue-600" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.275rem', letterSpacing: '0.5px' }}>Google DeepMind</span> project) as an AI RLHF Agent (Contract), and at <span className="font-bold text-blue-600" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.275rem', letterSpacing: '0.5px' }}>SEIL</span> as a Machine Learning Engineer Intern, with a combined experience of around <span className="font-bold text-blue-600" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.275rem', letterSpacing: '0.5px' }}>1.2 years</span> in applied AI and real-world problem solving.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="mt-3 pt-3 border-t border-gray-300">
                <h4 className="text-lg font-bold text-pink-500 mb-3">Key Strengths</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Machine learning, Deep Learning, Transformers & NLP, LLMs (GPT, BERT), Fine-tuning, RAG, PyTorch, Azure.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
