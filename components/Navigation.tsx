'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar } from 'react-icons/fi'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 1 }}
      className="fixed top-0 left-0 right-0 z-50 pt-2 pb-2"
    >
      <div className="pl-1 pr-2 md:pl-2 md:pr-4">
        <div className="flex items-center justify-between">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://drive.google.com/file/d/1U-rq-xzygKpEt1tUrLETozy1xKsXyVhK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center w-36 h-16"
          >
            <span
              className={`pointer-events-none absolute w-12 h-12 rounded-full border-4 border-slate-800 bg-slate-900 shadow-[0_4px_15px_rgba(0,0,0,0.6)] ${
                isScrolled ? 'opacity-100' : 'opacity-90'
              }`}
            />
            <span className="pointer-events-none absolute w-11 h-11 rounded-full border-4 border-blue-400 bg-blue-600" />
            <span className="pointer-events-none absolute top-3 flex gap-2 text-white text-[8px] tracking-[0.3em]">
              ★ ★ ★ ★
            </span>
            <span className="relative px-1 py-1 bg-yellow-400 rounded-full text-slate-900 font-semibold text-[12px] tracking-wide shadow-[0_4px_10px_rgba(0,0,0,0.20)] scale-[0.90]">
              View Resume
            </span>

          </motion.a>
          <motion.a
            href="https://calendly.com/mritunjaypandey0429/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 transition-all duration-500 ${
              isScrolled
                ? 'bg-gradient-to-r from-cyan-500/90 to-blue-500/90 border border-cyan-400/50 shadow-[0_4px_20px_rgba(6,182,212,0.4)] backdrop-blur-xl hover:from-cyan-400 hover:to-blue-400'
                : 'bg-white/10 border border-transparent hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCalendar className={`flex-shrink-0 ${isScrolled ? 'text-white' : 'text-white/90'}`} size={14} />
            <span className={`text-[12px] font-medium whitespace-nowrap ${isScrolled ? 'text-white font-semibold' : 'text-white/90'}`}>
              Schedule a Meeting
            </span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
