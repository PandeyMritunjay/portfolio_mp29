'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SideDecorations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fixed binary patterns to avoid hydration mismatch
  const leftBinary = [
    '1 0 1 1', '0 1 0 0', '1 1 0 1', '0 0 1 1',
    '1 0 0 1', '0 1 1 0', '1 1 1 0', '0 0 0 1',
    '1 0 1 0', '0 1 0 1', '1 1 0 0', '0 0 1 0',
    '1 0 0 0', '0 1 1 1', '1 1 1 1'
  ]

  const rightCode = [
    '{x}', '{y}', '{x}', '{y}',
    '{x}', '{y}', '{x}', '{y}',
    '{x}', '{y}', '{x}', '{y}'
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Left Side Decorations */}
      <div className="fixed left-0 top-0 bottom-0 w-64 pointer-events-none z-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 256 1000"
          className="absolute inset-0"
          preserveAspectRatio="xMidYMin slice"
        >
          {/* Neural Network Nodes */}
          <g fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1">
            {[...Array(8)].map((_, i) => (
              <g key={`left-node-${i}`}>
                <circle
                  cx={40 + (i % 3) * 60}
                  cy={100 + Math.floor(i / 3) * 200}
                  r={3}
                  fill="rgba(59, 130, 246, 0.4)"
                />
                {i < 6 && (
                  <line
                    x1={40 + (i % 3) * 60}
                    y1={100 + Math.floor(i / 3) * 200}
                    x2={40 + ((i + 1) % 3) * 60}
                    y2={100 + Math.floor((i + 1) / 3) * 200}
                  />
                )}
              </g>
            ))}
          </g>

          {/* Code Brackets */}
          <g fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5">
            <motion.path
              d="M 20 200 L 10 200 L 10 250 L 20 250"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 20 300 L 10 300 L 10 350 L 20 350"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </g>

          {/* Binary Code - Fixed Pattern */}
          <g fill="rgba(59, 130, 246, 0.2)" fontSize="10" fontFamily="monospace">
            {leftBinary.map((binary, i) => (
              <text
                key={`left-binary-${i}`}
                x={30}
                y={400 + i * 30}
                opacity={0.3}
              >
                {binary}
              </text>
            ))}
          </g>

          {/* AI Brain Pattern */}
          <g fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1">
            <circle cx={80} cy={600} r={25} />
            <circle cx={60} cy={620} r={15} />
            <circle cx={100} cy={620} r={15} />
            <circle cx={80} cy={640} r={10} />
          </g>

          {/* Encryption Lock */}
          <g fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2">
            <rect x={30} y={700} width={30} height={25} rx="2" />
            <path d="M 35 700 Q 45 690, 55 700" />
          </g>
        </svg>
      </div>

      {/* Right Side Decorations */}
      <div className="fixed right-0 top-0 bottom-0 w-64 pointer-events-none z-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 256 1000"
          className="absolute inset-0"
          preserveAspectRatio="xMidYMin slice"
        >
          {/* Data Flow Lines */}
          <g fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={`right-flow-${i}`}
                d={`M ${200 - i * 20} ${100 + i * 150} Q ${220 - i * 20} ${150 + i * 150}, ${200 - i * 20} ${200 + i * 150}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
          </g>

          {/* Code Syntax */}
          <g fill="rgba(255, 255, 255, 0.15)" fontSize="9" fontFamily="monospace">
            <text x={180} y={350} opacity={0.4}>def</text>
            <text x={180} y={370} opacity={0.3}>  model</text>
            <text x={180} y={390} opacity={0.4}>  return</text>
            <text x={180} y={410} opacity={0.3}>}</text>
          </g>

          {/* Matrix-style Code - Fixed Pattern */}
          <g fill="rgba(59, 130, 246, 0.2)" fontSize="8" fontFamily="monospace">
            {rightCode.map((code, i) => (
              <text
                key={`right-code-${i}`}
                x={200}
                y={500 + i * 35}
                opacity={0.2 + (i % 3) * 0.1}
              >
                {code}
              </text>
            ))}
          </g>

          {/* Circuit Pattern */}
          <g fill="none" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1">
            <rect x={180} y={650} width={40} height={30} rx="2" />
            <line x1={200} y1={650} x2={200} y2={620} />
            <line x1={200} y1={680} x2={200} y2={710} />
            <circle cx={200} cy={620} r={3} fill="rgba(99, 102, 241, 0.3)" />
            <circle cx={200} cy={710} r={3} fill="rgba(99, 102, 241, 0.3)" />
          </g>

          {/* AI Neural Network */}
          <g fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1">
            {[...Array(6)].map((_, i) => (
              <g key={`right-node-${i}`}>
                <circle
                  cx={200 + (i % 2) * 30}
                  cy={800 + Math.floor(i / 2) * 50}
                  r={4}
                  fill="rgba(59, 130, 246, 0.3)"
                />
                {i < 4 && (
                  <line
                    x1={200 + (i % 2) * 30}
                    y1={800 + Math.floor(i / 2) * 50}
                    x2={200 + ((i + 1) % 2) * 30}
                    y2={800 + Math.floor((i + 1) / 2) * 50}
                  />
                )}
              </g>
            ))}
          </g>

          {/* Encryption Key */}
          <g fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2">
            <circle cx={220} cy={950} r={8} />
            <rect x={220} y={950} width={15} height={3} />
            <rect x={235} y={945} width={3} height={13} />
          </g>
        </svg>
      </div>
    </>
  )
}
