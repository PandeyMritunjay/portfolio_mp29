'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    type: 'work',
    title: 'Business Analyst',
    company: 'Aditya Birla Group - Grasim',
    location: 'Mumbai, India',
    period: 'Aug 2025    -----    - Present',
    description: [
      'Converted SAP sales data into Excel and Power BI dashboards for MIS insights.',
      'Daily production analysis through Birla Assure to detect deviations across 3200 TPD plants.',
      'Supported Business Development by analyzing home textiles market and assisting 200 kg Modal hub development.',
    ],
    technologies: ['SAP', 'Excel', 'Power BI', 'Data Analysis'],
  },
  {
    type: 'work',
    title: 'AI Engineer',
    company: 'Namekart Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Jan 2025 ------ Aug 2025',
    description: [
  'Trained Transformer + MLP on 767K+ domains for price prediction (L1 $270, L2 $500).',
  'Built DistilBERT + MLP with SE-block fusion and Huber Loss.',
  'Automated lead discovery and classification using LangChain and LinkedIn scraping.',
  'Deployed on Azure ML with confidence-based price range outputs.',
],

    technologies: ['PyTorch', 'Hugging Face', 'Azure', 'Transformer', 'MLP'],
  },
  {
    type: 'work',
    title: 'AI Supervised Fine tuning Agent',
    company: 'Invisible Technologies',
    location: 'Remote, USA',
    period: 'Sep 2024 ------ Jan 2025',
    description: [
  'Created 700+ gold-standard triads for Python and STEM SFT and RLHF training.',
  'Achieved 98% QC accuracy; promoted to Reviewer for LLM dataset validation.',
  'Evaluated 2,000+ prompts using SOPs and Human-in-the-Loop review to reduce hallucinations.',
],

    technologies: ['Python', 'Chain-of-Thought', 'RLHF', 'Prompt Engineering'],
  },
  {
    type: 'work',
    title: 'Machine Learning Engineer',
    company: 'Statcon Electronics India Limited (SEIL)',
    location: 'Delhi, India',
    period: 'May 2024 ------ Aug 2024',
    description: [
  'Built CNN-LSTM SoH model with 96% accuracy and RMSE 0.02.',
  'Processed 10K+ cycles and predicted failures 50 steps ahead.',
  'Deployed Streamlit demo with sub-150 ms inference.',
],

    technologies: ['Seq2Seq Modelling', 'Streamlit', 'Time Series Analysis'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative scroll-mt-32 pt-20 pb-24 w-full">
      <div className="w-full px-2 sm:px-2 lg:px-1 xl:px-19">
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full"
    >

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaBriefcase className="text-3xl text-cyan-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Experience
              </h2>
            </div>
          </motion.div>

          {/* Horizontal Timeline Container */}
          <div className="relative w-full">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50" />

            {/* Experience Cards - Horizontal Layout */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="relative flex-1"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-black shadow-[0_0_20px_rgba(6,182,212,0.6)] z-10" />

                  {/* Experience Card */}
                  <div className="pt-8 space-y-4">
                    {/* Period Badge */}
                    <div className="text-center">
                      <span className="inline-block px-4 py-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                        {exp.period}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-300 font-semibold text-sm mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {exp.location}
                        </p>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 text-[14px] leading-snug flex items-start gap-1">
                            <span className="text-cyan-400 mt-0.5 text-[10px]">▹</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>


                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 justify-center pt-1">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-1 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
