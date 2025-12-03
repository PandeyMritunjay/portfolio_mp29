'use client'

export default function GradientShapes() {
  return (
    <>
      {/* Large Blue Glow - Center to Lower Right */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.2) 30%, transparent 70%)',
        }}
      />
      
      {/* Purple/Indigo Glow - Upper Left */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 20% 20%, rgba(99, 102, 241, 0.3) 0%, rgba(79, 70, 229, 0.15) 40%, transparent 70%)',
        }}
      />
    </>
  )
}

