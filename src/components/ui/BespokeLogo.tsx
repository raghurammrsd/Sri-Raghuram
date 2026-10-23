import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '../../utils/sound';

export const BespokeLogo: React.FC = () => {
  return (
    <a
      href="#"
      onClick={() => sound.click()}
      className="group flex items-center gap-3 relative select-none"
    >
      {/* 1. Kinetic Motion Graphic Geometric Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
        {/* Ambient Neon Back-Glow */}
        <div className="absolute inset-0 bg-electric-orange/20 rounded-xl blur-md group-hover:bg-electric-orange/40 transition-all duration-500 scale-90 group-hover:scale-110" />

        {/* Outer Rotating Kinetic Hex-Ring Frame */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Track */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="10"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.5"
          />

          {/* Traveling Laser Circuit Tracer */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="10"
            stroke="#ff5500"
            strokeWidth="1.8"
            strokeDasharray="24 100"
            className="animate-[dash_4s_linear_infinite]"
          />
        </svg>

        {/* Central Geometric Monogram 'R' Glyph */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-charcoal-900 border border-white/20 group-hover:border-electric-orange/80 transition-all flex items-center justify-center shadow-inner overflow-hidden"
        >
          {/* Dynamic Laser Sheen Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-orange/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />

          {/* High-Precision Architectural SVG Monogram */}
          <svg
            className="w-4 h-4 sm:w-4.5 sm:h-4.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Vertical Spine */}
            <path
              d="M 6 4 L 6 20"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Top Loop */}
            <path
              d="M 6 4 H 14 C 17.5 4, 17.5 12, 14 12 H 6"
              stroke="#ff5500"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Diagonal Kinetic Leg */}
            <path
              d="M 12.5 11.5 L 18 20"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* 2. Brand Identity Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-syne text-base sm:text-lg font-black tracking-tight text-warm-white group-hover:text-electric-orange transition-colors leading-none">
            RAGHURAM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange shadow-[0_0_8px_#ff5500] animate-pulse" />
        </div>
        <span className="font-mono text-[9px] text-warm-muted tracking-widest uppercase mt-0.5">
          AI SYSTEMS ARCHITECT
        </span>
      </div>
    </a>
  );
};
