'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { FaBrain, FaRobot, FaEye, FaChartLine, FaComment, FaMagic } from 'react-icons/fa'

const projects = [
  {
    title: 'Agent Portfolio and Valuation Advisor (APVA)',
    description: 'LangChain-powered agentic framework running a multi-LLM pipeline (Llama-3.3-70B, Nemotron-49B) with streaming inference, retry logic, and 5+ API integrations using rate limits and graceful fallbacks for 99.9% uptime. Developed an LLM-driven multi-tier pricing engine generating six strategic price points with structured JSON parsing, rationales, buyer personas, and hold-time optimization.',
    technologies: ['LangChain', 'Llama', 'FastAPI'],
    github: 'https://github.com/PandeyMritunjay/apva-assignment',
    demo: 'https://apva-assignement.vercel.app/',
    icon: FaRobot,
    gradient: 'from-purple-500 via-pink-400 to-purple-600',
    image: '/projects-apva.png',
  },
  {
    title: 'Multi-Agent LinkedIn Optimization System',
    description: 'Developed single-agent AI system for profile analysis (0-100 scoring), job fit assessment, content optimization (ATS-friendly), and career guidance using structured prompt engineering. Implemented a conversational AI coach with session memory, JSON-based data export, and a LinkedIn-style real-time feedback UI in Streamlit.',
    technologies: ['LangChain', 'Conversational AI'],
    github: 'https://github.com/PandeyMritunjay/linkedin-test',
    demo: 'https://github.com/PandeyMritunjay/linkedin-test',
    icon: FaComment,
    gradient: 'from-blue-500 via-cyan-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
  },
  {
    title: 'Medicine Recommendation System',
    description:
      'Emergency-ready ML assistant that personalizes drug recommendations from symptoms, vitals, and EHRs while keeping data private. Backed by Kaggle clinical datasets for trustworthy suggestions in critical care.',
    technologies: ['Jupyter', 'scikit-learn', 'Pandas'],
    github: 'https://github.com/PandeyMritunjay/Medicine-Recommendation-Systems',
    demo: 'https://www.loom.com/share/3ccb67df647548328340e6fb152d4ce5?sid=1c8478fa-889b-478a-9b08-420f22054ecd',
    icon: FaEye,
    gradient: 'from-emerald-500 via-teal-400 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop',
  },
  {
    title: 'Virtual Painting Studio',
    description:
      'Gesture-driven drawing surface powered by OpenCV + MediaPipe that follows index-finger paths, toggles colors/eraser with multi-finger poses, and adjusts brush thickness through thumb-index distance.',
    technologies: ['OpenCV', 'MediaPipe', 'Flask'],
    github: 'https://github.com/PandeyMritunjay/Intelligent-Image-Processing-System-Based-on-Virtual-Painting',
    demo: 'https://virtual-painting.el.r.appspot.com/',
    icon: FaMagic,
    gradient: 'from-rose-500 via-fuchsia-400 to-rose-600',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 360 // Approximate card width including gap (card + gap = 360px + 16px)
      const scrollAmount = cardWidth + 16 // Card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="projects" 
      className="relative scroll-mt-32 pt-8 pb-16 w-full bg-white overflow-hidden"
    >
      {/* 
        MANUAL WIDTH CONTROL INSTRUCTIONS:
        ====================================
        To manually set the width of the white background, modify the className above:
        
        Option 1: Percentage width (e.g., 95% of viewport)
          className="relative scroll-mt-32 pt-8 pb-24 w-[95%] mx-auto bg-white overflow-hidden"
        
        Option 2: Fixed max-width (e.g., 1400px max, centered)
          className="relative scroll-mt-32 pt-8 pb-24 w-full max-w-[1400px] mx-auto bg-white overflow-hidden"
        
        Option 3: Custom width with inline style
          className="relative scroll-mt-32 pt-8 pb-24 bg-white overflow-hidden"
          style={{ width: '95%', maxWidth: '1400px', margin: '0 auto' }}
        
        Option 4: Use Tailwind container classes
          className="relative scroll-mt-32 pt-8 pb-24 w-full max-w-7xl mx-auto bg-white overflow-hidden"
        
        Current: w-full = 100% width (edge-to-edge)
      */}
      {/* Curvy Pink Shapes - Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Curvy Shape */}
        <svg
          className="absolute -top-20 -left-140 w-96 h-96 opacity-30"
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
          className="absolute -top-32 -right-20 w-96 h-96 opacity-25"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,200 Q350,50 250,100 T100,80 T0,150 L0,0 L400,0 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Left Side Curvy Shape */}
        <svg
          className="absolute top-1/3 -left-32 w-80 h-80 opacity-25"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 Q50,50 150,100 T300,80 T400,150 L400,0 L0,0 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Right Side Curvy Shape */}
        <svg
          className="absolute top-1/3 -right-32 w-80 h-80 opacity-25"
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
          className="absolute bottom-0 -left-40 w-[700px] h-[400px] opacity-20"
          viewBox="0 0 700 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 Q100,300 200,350 T400,300 T700,350 L700,400 L0,400 Z"
            fill="#EC4899"
          />
        </svg>
        
        {/* Bottom Right Medium Curvy Shape */}
        <svg
          className="absolute bottom-10 -right-20 w-80 h-80 opacity-30"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,400 Q300,300 200,350 T0,300 L0,400 L400,400 Z"
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

      {/* Inner Content with Padding */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Projects
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative AI/ML solutions and real-world applications
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-Width Carousel Container */}
      <div className="relative w-full -mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-20">
            {/* Left Arrow - Fixed Boundary */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-12 sm:left-16 lg:left-20 xl:left-28 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black backdrop-blur-sm border-2 border-yellow-500 shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <FiArrowLeft className="text-white text-xl" />
            </button>

            {/* Right Arrow - Fixed Boundary */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-12 sm:right-16 lg:right-20 xl:right-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black backdrop-blur-sm border-2 border-yellow-500 shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <FiArrowRight className="text-white text-xl" />
            </button>

        {/* Scrollable Cards Container - Between Arrow Boundaries */}
        <div
          ref={scrollContainerRef}
          className="flex gap-12 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pl-[calc(3rem+3rem)] sm:pl-[calc(4rem+3rem)] lg:pl-[calc(5rem+3rem)] xl:pl-[calc(7rem+3rem)] pr-[calc(3rem+3rem)] sm:pr-[calc(4rem+3rem)] lg:pr-[calc(5rem+3rem)] xl:pr-[calc(2rem+3rem)]"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="group relative flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[340px] xl:w-[360px] h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {/* Project Image/Background */}
                  <div className="absolute inset-0">
                    {/* Background Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay for better text readability */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                    {/* Icon as subtle overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <project.icon className="text-5xl text-white/10" />
                    </div>
                  </div>

                  {/* Permanent Overlay - Dark Gradient at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end p-5 mt-auto">
                    <div className="space-y-2">
                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-200 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-white/20 text-white rounded-full font-medium backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex items-center gap-2 pt-1">
                        <FiArrowRight className="text-white text-sm" />
                        <span className="text-xs text-white font-medium">View Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Clickable Link Overlay */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`View ${project.title}`}
                  />
                </motion.div>
              ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
