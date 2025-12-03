'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mritunjaypandey0429@gmail.com',
    href: 'mailto:mritunjaypandey0429@gmail.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'pandeym29',
    href: 'https://www.linkedin.com/in/pandeym29/',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'PandeyMritunjay',
    href: 'https://github.com/PandeyMritunjay',
    color: 'from-gray-600 to-gray-700',
  },
  {
    icon: FiTwitter,
    label: 'Twitter',
    value: '@Pandey_M29',
    href: 'https://twitter.com/Pandey_M29',
    color: 'from-sky-500 to-blue-500',
  },
]

export default function ContactIcons() {
  return (
    <div className="relative pt-7 pb-20 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-start gap-4 flex-wrap"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white text-lg shadow-lg hover:shadow-xl transition-all`}
              title={method.value}
            >
              <method.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] md:text-[16px] text-red-60 font-medium text-right"
          style={{
            fontFamily: '"Times new roman", "Segoe Script", cursive',
            fontWeight: 30,
            letterSpacing: '0.01em',
          }}
        >
          Noise into products through
          <br></br>advanced ML, deepNET, and LLM modeling.
        </motion.div>
      </div>
    </div>
  )
}

