'use client'

import { motion } from 'framer-motion'

interface NeuralNetworkProps {
  side: 'left' | 'right'
}

export default function NeuralNetwork({ side }: NeuralNetworkProps) {
  const inputNodes = 8
  const hidden1Nodes = 10
  const hidden2Nodes = 12
  const hidden3Nodes = 10
  const outputNodes = 8

  const inputLayerX = side === 'left' ? 30 : 470
  const hidden1LayerX = side === 'left' ? 120 : 380
  const hidden2LayerX = side === 'left' ? 210 : 290
  const hidden3LayerX = side === 'left' ? 300 : 200
  const outputLayerX = side === 'left' ? 390 : 110

  const nodeSpacing = 35
  const startY = 60

  // Multicolor palette
  const colors = {
    red: { fill: 'rgba(239, 68, 68, 0.6)', stroke: 'rgba(239, 68, 68, 1)', glow: 'rgba(239, 68, 68, 0.3)', pulse: 'rgba(239, 68, 68, 1)' },
    yellow: { fill: 'rgba(234, 179, 8, 0.6)', stroke: 'rgba(234, 179, 8, 1)', glow: 'rgba(234, 179, 8, 0.3)', pulse: 'rgba(234, 179, 8, 1)' },
    white: { fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(255, 255, 255, 1)', glow: 'rgba(255, 255, 255, 0.3)', pulse: 'rgba(255, 255, 255, 1)' },
    blue: { fill: 'rgba(59, 130, 246, 0.6)', stroke: 'rgba(59, 130, 246, 1)', glow: 'rgba(59, 130, 246, 0.3)', pulse: 'rgba(59, 130, 246, 1)' },
    green: { fill: 'rgba(34, 197, 94, 0.6)', stroke: 'rgba(34, 197, 94, 1)', glow: 'rgba(34, 197, 94, 0.3)', pulse: 'rgba(34, 197, 94, 1)' },
    orange: { fill: 'rgba(249, 115, 22, 0.6)', stroke: 'rgba(249, 115, 22, 1)', glow: 'rgba(249, 115, 22, 0.3)', pulse: 'rgba(249, 115, 22, 1)' },
    pink: { fill: 'rgba(236, 72, 153, 0.6)', stroke: 'rgba(236, 72, 153, 1)', glow: 'rgba(236, 72, 153, 0.3)', pulse: 'rgba(236, 72, 153, 1)' },
    cyan: { fill: 'rgba(6, 182, 212, 0.6)', stroke: 'rgba(6, 182, 212, 1)', glow: 'rgba(6, 182, 212, 0.3)', pulse: 'rgba(6, 182, 212, 1)' },
  }

  const inputColors = [colors.blue, colors.cyan, colors.green, colors.yellow, colors.orange, colors.red, colors.pink, colors.white]
  const hidden1Colors = [colors.red, colors.orange, colors.yellow, colors.green, colors.cyan, colors.blue, colors.pink, colors.white, colors.red, colors.orange]
  const hidden2Colors = [colors.yellow, colors.green, colors.cyan, colors.blue, colors.pink, colors.red, colors.orange, colors.white, colors.yellow, colors.green, colors.cyan, colors.blue]
  const hidden3Colors = [colors.pink, colors.red, colors.orange, colors.yellow, colors.green, colors.cyan, colors.blue, colors.white, colors.pink, colors.red]
  const outputColors = [colors.white, colors.cyan, colors.green, colors.yellow, colors.orange, colors.red, colors.pink, colors.blue]

  return (
    <div className={`absolute ${side === 'left' ? 'left-4' : 'right-4'} -top-8 bottom-8 w-[calc(50%-2rem)] pointer-events-none opacity-60 z-10`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 300"
        className="absolute inset-0"
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Input Layer */}
        <g>
          {[...Array(inputNodes)].map((_, i) => {
            const y = startY + i * nodeSpacing
            return (
              <g key={`input-${i}`}>
                {/* Connections to Hidden Layer 1 */}
                {[...Array(hidden1Nodes)].map((_, j) => {
                  const hiddenY = startY + (j * (inputNodes * nodeSpacing) / hidden1Nodes)
                  const inputColor = inputColors[i % inputColors.length]
                  const hidden1Color = hidden1Colors[j % hidden1Colors.length]
                  const connectionColor = `rgba(${Math.floor((parseInt(inputColor.fill.match(/\d+/g)?.[0] || '59') + parseInt(hidden1Color.fill.match(/\d+/g)?.[0] || '130')) / 2)}, ${Math.floor((parseInt(inputColor.fill.match(/\d+/g)?.[1] || '130') + parseInt(hidden1Color.fill.match(/\d+/g)?.[1] || '179')) / 2)}, ${Math.floor((parseInt(inputColor.fill.match(/\d+/g)?.[2] || '246') + parseInt(hidden1Color.fill.match(/\d+/g)?.[2] || '8')) / 2)}, 0.4)`
                  return (
                    <motion.line
                      key={`input-hidden1-${i}-${j}`}
                      x1={inputLayerX}
                      y1={y}
                      x2={hidden1LayerX}
                      y2={hiddenY}
                      stroke={connectionColor}
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.1 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0.1, 0.5, 0.3, 0.5] 
                      }}
                      transition={{ 
                        duration: 3,
                        delay: (i + j) * 0.03,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  )
                })}
                
                {/* Input Node */}
                <motion.rect
                  x={inputLayerX - 12}
                  y={y - 12}
                  width={24}
                  height={24}
                  rx="4"
                  fill={inputColors[i % inputColors.length].fill}
                  stroke={inputColors[i % inputColors.length].stroke}
                  strokeWidth="2.5"
                  initial={{ scale: 0.9, opacity: 0.6 }}
                  animate={{ 
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 15px rgba(59, 130, 246, 0.8)', '0 0 0px rgba(59, 130, 246, 0)']
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                {/* Glow effect for input nodes */}
                <motion.rect
                  x={inputLayerX - 12}
                  y={y - 12}
                  width={24}
                  height={24}
                  rx="4"
                  fill={inputColors[i % inputColors.length].glow}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </g>
            )
          })}
        </g>

        {/* Hidden Layer 1 */}
        <g>
          {[...Array(hidden1Nodes)].map((_, i) => {
            const y = startY + (i * (inputNodes * nodeSpacing) / hidden1Nodes)
            return (
              <g key={`hidden1-${i}`}>
                {/* Connections to Hidden Layer 2 */}
                {[...Array(hidden2Nodes)].map((_, j) => {
                  const hidden2Y = startY + (j * (inputNodes * nodeSpacing) / hidden2Nodes)
                  const hidden1Color = hidden1Colors[i % hidden1Colors.length]
                  const hidden2Color = hidden2Colors[j % hidden2Colors.length]
                  const connectionColor = `rgba(${Math.floor((parseInt(hidden1Color.fill.match(/\d+/g)?.[0] || '99') + parseInt(hidden2Color.fill.match(/\d+/g)?.[0] || '234')) / 2)}, ${Math.floor((parseInt(hidden1Color.fill.match(/\d+/g)?.[1] || '102') + parseInt(hidden2Color.fill.match(/\d+/g)?.[1] || '179')) / 2)}, ${Math.floor((parseInt(hidden1Color.fill.match(/\d+/g)?.[2] || '241') + parseInt(hidden2Color.fill.match(/\d+/g)?.[2] || '8')) / 2)}, 0.4)`
                  return (
                    <motion.line
                      key={`hidden1-hidden2-${i}-${j}`}
                      x1={hidden1LayerX}
                      y1={y}
                      x2={hidden2LayerX}
                      y2={hidden2Y}
                      stroke={connectionColor}
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.1 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0.1, 0.5, 0.3, 0.5] 
                      }}
                      transition={{ 
                        duration: 3.2,
                        delay: (i + j) * 0.03 + 0.3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  )
                })}
                
                {/* Hidden Layer 1 Node */}
                <motion.circle
                  cx={hidden1LayerX}
                  cy={y}
                  r={10}
                  fill={hidden1Colors[i % hidden1Colors.length].fill}
                  stroke={hidden1Colors[i % hidden1Colors.length].stroke}
                  strokeWidth="2.5"
                  initial={{ scale: 0.9, opacity: 0.6 }}
                  animate={{ 
                    scale: [0.9, 1.3, 0.9],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.circle
                  cx={hidden1LayerX}
                  cy={y}
                  r={10}
                  fill={hidden1Colors[i % hidden1Colors.length].glow}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </g>
            )
          })}
        </g>

        {/* Hidden Layer 2 */}
        <g>
          {[...Array(hidden2Nodes)].map((_, i) => {
            const y = startY + (i * (inputNodes * nodeSpacing) / hidden2Nodes)
            return (
              <g key={`hidden2-${i}`}>
                {/* Connections to Hidden Layer 3 */}
                {[...Array(hidden3Nodes)].map((_, j) => {
                  const hidden3Y = startY + (j * (inputNodes * nodeSpacing) / hidden3Nodes)
                  const hidden2Color = hidden2Colors[i % hidden2Colors.length]
                  const hidden3Color = hidden3Colors[j % hidden3Colors.length]
                  const connectionColor = `rgba(${Math.floor((parseInt(hidden2Color.fill.match(/\d+/g)?.[0] || '234') + parseInt(hidden3Color.fill.match(/\d+/g)?.[0] || '236')) / 2)}, ${Math.floor((parseInt(hidden2Color.fill.match(/\d+/g)?.[1] || '179') + parseInt(hidden3Color.fill.match(/\d+/g)?.[1] || '72')) / 2)}, ${Math.floor((parseInt(hidden2Color.fill.match(/\d+/g)?.[2] || '8') + parseInt(hidden3Color.fill.match(/\d+/g)?.[2] || '153')) / 2)}, 0.4)`
                  return (
                    <motion.line
                      key={`hidden2-hidden3-${i}-${j}`}
                      x1={hidden2LayerX}
                      y1={y}
                      x2={hidden3LayerX}
                      y2={hidden3Y}
                      stroke={connectionColor}
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.1 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0.1, 0.5, 0.3, 0.5] 
                      }}
                      transition={{ 
                        duration: 3.3,
                        delay: (i + j) * 0.03 + 0.6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  )
                })}
                
                {/* Hidden Layer 2 Node */}
                <motion.circle
                  cx={hidden2LayerX}
                  cy={y}
                  r={10}
                  fill={hidden2Colors[i % hidden2Colors.length].fill}
                  stroke={hidden2Colors[i % hidden2Colors.length].stroke}
                  strokeWidth="2.5"
                  initial={{ scale: 0.9, opacity: 0.6 }}
                  animate={{ 
                    scale: [0.9, 1.3, 0.9],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1 + 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.circle
                  cx={hidden2LayerX}
                  cy={y}
                  r={10}
                  fill={hidden2Colors[i % hidden2Colors.length].glow}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1 + 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </g>
            )
          })}
        </g>

        {/* Hidden Layer 3 */}
        <g>
          {[...Array(hidden3Nodes)].map((_, i) => {
            const y = startY + (i * (inputNodes * nodeSpacing) / hidden3Nodes)
            return (
              <g key={`hidden3-${i}`}>
                {/* Connections to Output Layer */}
                {[...Array(outputNodes)].map((_, j) => {
                  const outputY = startY + j * nodeSpacing
                  const hidden3Color = hidden3Colors[i % hidden3Colors.length]
                  const outputColor = outputColors[j % outputColors.length]
                  const connectionColor = `rgba(${Math.floor((parseInt(hidden3Color.fill.match(/\d+/g)?.[0] || '236') + parseInt(outputColor.fill.match(/\d+/g)?.[0] || '255')) / 2)}, ${Math.floor((parseInt(hidden3Color.fill.match(/\d+/g)?.[1] || '72') + parseInt(outputColor.fill.match(/\d+/g)?.[1] || '255')) / 2)}, ${Math.floor((parseInt(hidden3Color.fill.match(/\d+/g)?.[2] || '153') + parseInt(outputColor.fill.match(/\d+/g)?.[2] || '255')) / 2)}, 0.4)`
                  return (
                    <motion.line
                      key={`hidden3-output-${i}-${j}`}
                      x1={hidden3LayerX}
                      y1={y}
                      x2={outputLayerX}
                      y2={outputY}
                      stroke={connectionColor}
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.1 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0.1, 0.5, 0.3, 0.5] 
                      }}
                      transition={{ 
                        duration: 3.5,
                        delay: (i + j) * 0.03 + 0.9,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  )
                })}
                
                {/* Hidden Layer 3 Node */}
                <motion.circle
                  cx={hidden3LayerX}
                  cy={y}
                  r={10}
                  fill={hidden3Colors[i % hidden3Colors.length].fill}
                  stroke={hidden3Colors[i % hidden3Colors.length].stroke}
                  strokeWidth="2.5"
                  initial={{ scale: 0.9, opacity: 0.6 }}
                  animate={{ 
                    scale: [0.9, 1.3, 0.9],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1 + 0.4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.circle
                  cx={hidden3LayerX}
                  cy={y}
                  r={10}
                  fill={hidden3Colors[i % hidden3Colors.length].glow}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1 + 0.4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </g>
            )
          })}
        </g>

        {/* Output Layer */}
        <g>
          {[...Array(outputNodes)].map((_, i) => {
            const y = startY + i * nodeSpacing
            return (
              <motion.circle
                key={`output-${i}`}
                cx={outputLayerX}
                cy={y}
                r={10}
                fill={outputColors[i % outputColors.length].fill}
                stroke={outputColors[i % outputColors.length].stroke}
                strokeWidth="2.5"
                initial={{ scale: 0.9, opacity: 0.6 }}
                animate={{ 
                  scale: [0.9, 1.2, 0.9],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  delay: i * 0.15 + 1.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            )
          })}
        </g>

        {/* Enhanced Data Flow Animation - Signals propagating through network */}
        {[...Array(4)].map((_, pulseIndex) => (
          <g key={`pulse-${pulseIndex}`}>
            {[...Array(6)].map((_, i) => {
              const inputNode = (i + pulseIndex) % inputNodes
              const hidden1Node = Math.floor((i + pulseIndex * 2) / inputNodes) % hidden1Nodes
              const hidden2Node = Math.floor((i + pulseIndex * 2) / hidden1Nodes) % hidden2Nodes
              const hidden3Node = Math.floor((i + pulseIndex * 2) / hidden2Nodes) % hidden3Nodes
              const outputNode = (i + pulseIndex) % outputNodes
              
              const inputY = startY + inputNode * nodeSpacing
              const hidden1Y = startY + (hidden1Node * (inputNodes * nodeSpacing) / hidden1Nodes)
              const hidden2Y = startY + (hidden2Node * (inputNodes * nodeSpacing) / hidden2Nodes)
              const hidden3Y = startY + (hidden3Node * (inputNodes * nodeSpacing) / hidden3Nodes)
              const outputY = startY + outputNode * nodeSpacing

              const totalDelay = pulseIndex * 0.8 + i * 0.3

              return (
                <g key={`flow-${pulseIndex}-${i}`}>
                  {/* Signal pulse from Input to Hidden 1 */}
                  <motion.circle
                    r={3}
                    fill={inputColors[inputNode % inputColors.length].pulse}
                    initial={{ 
                      cx: inputLayerX, 
                      cy: inputY,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{
                      cx: [inputLayerX, hidden1LayerX],
                      cy: [inputY, hidden1Y],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: totalDelay,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Signal pulse from Hidden 1 to Hidden 2 */}
                  <motion.circle
                    r={3}
                    fill={hidden1Colors[hidden1Node % hidden1Colors.length].pulse}
                    initial={{ 
                      cx: hidden1LayerX, 
                      cy: hidden1Y,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{
                      cx: [hidden1LayerX, hidden2LayerX],
                      cy: [hidden1Y, hidden2Y],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: totalDelay + 0.4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Signal pulse from Hidden 2 to Hidden 3 */}
                  <motion.circle
                    r={3}
                    fill={hidden2Colors[hidden2Node % hidden2Colors.length].pulse}
                    initial={{ 
                      cx: hidden2LayerX, 
                      cy: hidden2Y,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{
                      cx: [hidden2LayerX, hidden3LayerX],
                      cy: [hidden2Y, hidden3Y],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: totalDelay + 0.8,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Signal pulse from Hidden 3 to Output */}
                  <motion.circle
                    r={3}
                    fill={hidden3Colors[hidden3Node % hidden3Colors.length].pulse}
                    initial={{ 
                      cx: hidden3LayerX, 
                      cy: hidden3Y,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{
                      cx: [hidden3LayerX, outputLayerX],
                      cy: [hidden3Y, outputY],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: totalDelay + 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Activation waves on hidden nodes */}
                  <motion.circle
                    cx={hidden2LayerX}
                    cy={hidden2Y}
                    r={10}
                    fill="none"
                    stroke={hidden2Colors[hidden2Node % hidden2Colors.length].stroke.replace('1)', '0.8)')}
                    strokeWidth="2.5"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: totalDelay + 0.8,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </g>
              )
            })}
          </g>
        ))}

        {/* Connection activation highlights */}
        {[...Array(3)].map((_, waveIndex) => (
          <g key={`wave-${waveIndex}`}>
            {[...Array(5)].map((_, i) => {
              const inputNode = (i + waveIndex * 2) % inputNodes
              const hidden1Node = Math.floor((i + waveIndex * 2) / inputNodes) % hidden1Nodes
              
              const inputY = startY + inputNode * nodeSpacing
              const hidden1Y = startY + (hidden1Node * (inputNodes * nodeSpacing) / hidden1Nodes)

              return (
                <motion.line
                  key={`highlight-${waveIndex}-${i}`}
                  x1={inputLayerX}
                  y1={inputY}
                  x2={hidden1LayerX}
                  y2={hidden1Y}
                  stroke={inputColors[inputNode % inputColors.length].stroke.replace('1)', '0.8)')}
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: waveIndex * 1.2 + i * 0.2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}
