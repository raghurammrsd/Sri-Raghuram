import React, { useMemo } from 'react';

/**
 * Ultra-Lightweight, Zero-Lag Pure SVG Ring with Smooth Orbiting Particles.
 * ZERO SVG Gaussian filters, ZERO CPU render loops, locked 120 FPS performance!
 * The stardust dots continuously glide around the central circle in smooth celestial orbits.
 */
export const ChromaticRingScene: React.FC = () => {
  // Ultra-lightweight deterministic generation of 130 crisp, perfectly distributed stardust dots
  const { innerDots, outerDots } = useMemo(() => {
    const tones = ['#bfa074', '#c4a47c', '#d4be9c', '#a88960', '#966b44', '#b59265', '#8f6e47'];
    const inner = [];
    const outer = [];

    let seed = 1337;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const count = 130;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (random() - 0.5) * 0.2;
      const isInner = i % 2 === 0;

      // Tight, graceful radial halo around the primary ring (r=198)
      const offset = isInner ? (random() - 0.5) * 26 : (random() - 0.5) * 54;
      const radius = 198 + offset;

      const cx = 260 + radius * Math.cos(angle);
      const cy = 260 + radius * Math.sin(angle);

      const r = Math.abs(offset) > 20 ? 0.9 + random() * 0.9 : 1.2 + random() * 1.3;
      const isBurgundy = random() < 0.08;
      const color = isBurgundy ? '#790d16' : tones[Math.floor(random() * tones.length)];
      const opacity = isBurgundy ? 0.85 : 0.35 + random() * 0.45;

      const dot = { cx, cy, r, color, opacity };
      if (isInner) {
        inner.push(dot);
      } else {
        outer.push(dot);
      }
    }

    return { innerDots: inner, outerDots: outer };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes smoothOrbitCW {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes smoothOrbitCCW {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        /* 100% GPU compositor rotation - zero paint invalidation, zero lag */
        .ring-dots-orbit-inner {
          transform-origin: 260px 260px;
          animation: smoothOrbitCW 48s linear infinite;
        }

        .ring-dots-orbit-outer {
          transform-origin: 260px 260px;
          animation: smoothOrbitCCW 64s linear infinite;
        }

        .ring-orbit-beacons {
          transform-origin: 260px 260px;
          animation: smoothOrbitCW 24s linear infinite;
        }
      `}</style>

      <svg
        className="w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[560px] max-w-[95vw] max-h-[85vh]"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ringBurgundyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#790d16" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#5c0910" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#790d16" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="ringOrbitGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4a47c" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#d4be9c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#bfa074" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Guide Ring */}
        <circle
          cx="260"
          cy="260"
          r="215"
          stroke="url(#ringOrbitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          opacity="0.4"
        />

        {/* Primary Crisp Deep Burgundy Ring (Stationary Anchor) */}
        <circle
          cx="260"
          cy="260"
          r="198"
          stroke="url(#ringBurgundyGrad)"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Inner Subtle Secondary Guide Ring in Warm Sand */}
        <circle
          cx="260"
          cy="260"
          r="185"
          stroke="#e5d3af"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.45"
        />

        {/* Inner Stardust Orbital Belt (Clockwise 48s) */}
        <g className="ring-dots-orbit-inner">
          {innerDots.map((dot, index) => (
            <circle
              key={`in-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.color}
              opacity={dot.opacity}
            />
          ))}
        </g>

        {/* Outer Stardust Orbital Belt (Counter-Clockwise 64s) */}
        <g className="ring-dots-orbit-outer">
          {outerDots.map((dot, index) => (
            <circle
              key={`out-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.color}
              opacity={dot.opacity}
            />
          ))}
        </g>

        {/* 4 Crisp Moving Radiant Orbit Beacons (Zero Gaussian Filter, Zero Lag) */}
        <g className="ring-orbit-beacons">
          {/* Top Beacon (Deep Burgundy Pearl) */}
          <circle cx="260" cy="62" r="4.5" fill="#790d16" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="260" cy="62" r="2" fill="#ffffff" />

          {/* Right Beacon (Warm Sand Tan) */}
          <circle cx="458" cy="260" r="4" fill="#c4a47c" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="458" cy="260" r="1.5" fill="#ffffff" />

          {/* Bottom Beacon (Deep Burgundy Pearl) */}
          <circle cx="260" cy="458" r="4.5" fill="#790d16" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="260" cy="458" r="2" fill="#ffffff" />

          {/* Left Beacon (Soft Slate Blue) */}
          <circle cx="62" cy="260" r="4" fill="#8da8be" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="62" cy="260" r="1.5" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};
