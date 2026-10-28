import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = '',
  glowColor = '#790d16',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Smooth springs for 3D rotation
  const rotateX = useSpring(0, { stiffness: 260, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    rotateX.set(rotX);
    rotateY.set(rotY);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Specular 3D Glare */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300 opacity-40 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25), transparent 70%)`,
          }}
        />
      )}

      {/* Dynamic Ambient Back-Glow */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}25, transparent 75%)`,
        }}
      />

      {/* Card Content with 3D Pop Effect */}
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
};
