import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface PedigreeSphereProps {
  scrollProgress?: MotionValue<number>;
}

/**
 * Authentic 3D Celestial Astrolabe & Academic Gyroscope.
 * 100% hardware-accelerated CSS 3D compositor (preserve-3d).
 * ZERO WebGL overhead, ZERO CPU render loops, ZERO battery drain, ZERO lag!
 * Features concentric celestial gimbal rings, astrolabe compass star, and live scroll-driven 3D physics.
 */
export const PedigreeSphere3D: React.FC<PedigreeSphereProps> = ({ scrollProgress }) => {
  const defaultProgress = useTransform(() => 0.5);
  const activeProgress = scrollProgress || defaultProgress;

  const scrollRotateX = useTransform(activeProgress, [0, 1], [18, -18]);
  const scrollRotateY = useTransform(activeProgress, [0, 1], [-30, 30]);
  const scrollScale = useTransform(activeProgress, [0, 0.5, 1], [0.92, 1.05, 0.92]);

  return (
    <div className="relative w-full h-full min-h-[160px] sm:min-h-[180px] flex items-center justify-center overflow-hidden select-none">
      <style>{`
        @keyframes astrolabeRotateOuter {
          0% {
            transform: rotateX(65deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(65deg) rotateZ(360deg);
          }
        }

        @keyframes astrolabeRotateMid {
          0% {
            transform: rotateY(0deg) rotateX(30deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(30deg);
          }
        }

        @keyframes astrolabeRotateInner {
          0% {
            transform: rotateZ(0deg) rotateY(60deg);
          }
          100% {
            transform: rotateZ(-360deg) rotateY(60deg);
          }
        }

        @keyframes astrolabeCoreFloat {
          0% {
            transform: rotateZ(0deg) scale(1);
          }
          50% {
            transform: rotateZ(180deg) scale(1.05);
          }
          100% {
            transform: rotateZ(360deg) scale(1);
          }
        }

        .preserve-3d-astrolabe {
          transform-style: preserve-3d;
          perspective: 800px;
        }

        .astro-outer {
          animation: astrolabeRotateOuter 26s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .astro-mid {
          animation: astrolabeRotateMid 18s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .astro-inner {
          animation: astrolabeRotateInner 13s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .astro-core {
          animation: astrolabeCoreFloat 16s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      {/* 3D Astrolabe Isometric Container with Live Scroll Parallax Tilt */}
      <motion.div
        style={{
          rotateX: scrollRotateX,
          rotateY: scrollRotateY,
          scale: scrollScale,
        }}
        className="relative w-40 h-40 sm:w-44 sm:h-44 preserve-3d-astrolabe flex items-center justify-center"
      >
        {/* Background Radar Mesh */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-36 h-36 rounded-full border border-dashed border-[#e5d3af]" />
          <div className="absolute w-24 h-24 rounded-full border border-[#c4a47c]/40" />
        </div>

        {/* Outer Celestial Orbit (Deep Burgundy) */}
        <div className="absolute w-36 h-36 rounded-full border-2 border-[#790d16]/75 astro-outer flex items-center justify-center shadow-[0_0_15px_rgba(121,13,22,0.15)]">
          {/* Cardinal Sensor Beads */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#790d16] border border-white shadow-xs flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#790d16] border border-white shadow-xs flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c4a47c] border border-white" />
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c4a47c] border border-white" />
        </div>

        {/* Middle Meridian Orbit (Soft Slate Blue) */}
        <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#8da8be] astro-mid flex items-center justify-center">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8da8be]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8da8be]" />
        </div>

        {/* Inner Gyroscopic Astrolabe Ring (Warm Sand Tan) */}
        <div className="absolute w-20 h-20 rounded-full border-2 border-[#c4a47c] astro-inner flex items-center justify-center">
          <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#790d16]" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full bg-[#790d16]" />
        </div>

        {/* Center Academic Octahedral Star & Seal Core */}
        <div className="relative w-12 h-12 astro-core flex items-center justify-center">
          {/* Compass Star Diamond Facets */}
          <div
            className="absolute w-10 h-10 border-2 border-[#790d16] bg-[#790d16]/15 backdrop-blur-xs shadow-xs"
            style={{ transform: 'rotate(45deg)' }}
          />
          <div
            className="absolute w-8 h-8 border border-[#c4a47c] bg-[#c4a47c]/10"
            style={{ transform: 'rotate(0deg)' }}
          />

          {/* Central Academic Insignia Pearl */}
          <div className="absolute w-4 h-4 rounded-full bg-[#790d16] border-2 border-white shadow-[0_0_12px_#790d16] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
