'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const certifications = [
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    link: 'https://coursera.org/verify/specialization/NT7WWU2TTCWD',
  },
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera',
    link: 'https://coursera.org/verify/specialization/NT7WWU2TTCWD',
  },
  {
    title: 'Mathematics for Machine Learning and Data Science',
    provider: 'Coursera',
    link: '#',
  },
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    provider: 'IBM',
    link: 'https://www.coursera.org/account/accomplishments/certificate/6PANPBE6A799',
  },
  {
    title: 'SQL for Data Analysis',
    provider: 'LinkedIn',
    link: 'https://www.linkedin.com/learning/certificates/9327f6f17d939589b56d2640012be7b7730dbcc2352f450fabcb60195642de85',
  },
  {
    title: 'Hacktoberfest 2022 | Open Source Contributor',
    provider: 'Holopin',
    link: 'https://www.holopin.io/@pandeymritunjay',
  },
  {
    title: 'Google Cloud Facilitators Programme',
    provider: 'Google Cloud',
    link: 'https://www.cloudskillsboost.google/public_profiles/7c73939c-b400-488e-ae3e-c3971437139e',
  },
  {
    title: 'Mastering Data Structures and Algorithms using C/C++',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-cc4b736c-b973-44eb-9d0b-59168b32a68e/',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative scroll-mt-32 pt-14 pb-6  w-full">
      <div className="w-full pl-4 sm:pl-8 lg:pl-12 xl:pl-20 pr-4 sm:pr-8 lg:pr-12 xl:pr-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl"
        >
          {/* Two Column Layout - Skills Left, Education Right */}
          <div className="grid lg:grid-cols-[0.6fr_0.4fr] gap-10 items-start">
            {/* Left: Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3 text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Skills
              </h2>
              
              <div className="space-y-3 text-slate-200 text-sm leading-relaxed text-left">
                <div className="space-y-1">
                  <div className="font-bold text-cyan-400 mb-1 text-left">ML Core:</div>
                  <div className="text-slate-200 text-left max-w-4xl" style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}>
                    Supervised & Unsupervised Learning, Deep Learning, CNN, Transformers, NLP, Transfer Learning, Diffusion Models, Recommendation Systems, Hyperparameter Tuning
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="font-bold text-cyan-400 mb-1 text-left">LLM & GenAI:</div>
                  <div className="text-slate-200 text-left max-w-4xl" style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}>
                    GPT, BERT, Fine-Tuning (LoRA, PEFT), RAG, Prompt Engineering, LangChain
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="font-bold text-cyan-400 mb-1 text-left">Tools:</div>
                  <div className="text-slate-200 text-left max-w-4xl" style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}>
                    PyTorch, Hugging Face, Scikit-Learn, MLflow, Azure ML Studio, Docker, FastAPI
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="font-bold text-cyan-400 mb-1 text-left">Data Stack:</div>
                  <div className="text-slate-200 text-left max-w-4xl" style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}>
                    ETL Pipelines, Feature Engineering, SQL, PySpark, Pandas, Matplotlib, Vector Databases (Pinecone)
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="font-bold text-cyan-400 mb-1 text-left">Fundamentals:</div>
                  <div className="text-slate-200 text-left max-w-4xl" style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}>
                    Python, C++, Data Structures & Algorithms, Git / GitHub, Linear Algebra, Calculus, Probability
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Education
              </h2>
              
              <div className="space-y-2 text-slate-200 text-sm leading-relaxed">
                <div className="font-semibold text-white">
                  Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar
                </div>
                <div className="text-slate-300">
                  2021 - 2025
                </div>
                <div className="text-slate-300">
                  Bachelors of Technology - CGPA - 7.84
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="text-xl font-semibold text-white">Certifications</div>
                <ul className="space-y-1">
                  {certifications.map((cert) => (
                    <li key={cert.title} className="flex flex-wrap gap-1 text-xs text-slate-200">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-300 font-semibold hover:text-cyan-200 transition-colors"
                      >
                        {cert.title}
                      </a>
                      <span className="text-slate-500">|</span>
                      <span className="text-slate-300">{cert.provider}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
