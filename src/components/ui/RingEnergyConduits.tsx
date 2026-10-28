import React from 'react';

export const RingEnergyConduits: React.FC = () => {
  /**
   * Coordinate space: 1200 x 700
   * 3D Ring is centered at (600, 350) with approximate radius R ~ 250px.
   * Central text container occupies approx: x: 420 to 780, y: 220 to 480.
   *
   * To ensure lines NEVER pass behind or intersect the central text:
   * - Top conduits emerge from the ring's UPPER quadrant (y = 155-165, well above y=220)
   * - Bottom conduits emerge from the ring's LOWER quadrant (y = 535-545, well below y=480)
   *
   * Card Dock Ports:
   * - Card 1 (Top-Left):     (310, 180)
   * - Card 2 (Bottom-Left):  (310, 520)
   * - Card 3 (Top-Right):    (890, 180)
   * - Card 4 (Bottom-Right): (890, 520)
   */

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Laser Conduit Gradients (User Palette) */}
        <linearGradient id="conduitGradTL" x1="420" y1="160" x2="310" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#aec4d4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e5d3af" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="conduitGradBL" x1="420" y1="540" x2="310" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#aec4d4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e5d3af" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="conduitGradTR" x1="780" y1="160" x2="890" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#aec4d4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e5d3af" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="conduitGradBR" x1="780" y1="540" x2="890" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#aec4d4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e5d3af" stopOpacity="0.95" />
        </linearGradient>

        {/* High-Glow Filter */}
        <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="2" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ============================================================ */}
      {/* CONDUIT 1: Upper-Left Ring Perimeter -> Box 1 (Top-Left)     */}
      {/* Emerges at (420, 160) - completely above the central text   */}
      {/* ============================================================ */}
      <path
        id="pathTL"
        d="M 420 160 C 370 135, 345 155, 310 180"
        stroke="rgba(121, 13, 22, 0.15)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 420 160 C 370 135, 345 155, 310 180"
        stroke="url(#conduitGradTL)"
        strokeWidth="2.2"
        strokeDasharray="8 14"
        filter="url(#laserGlow)"
        className="animate-[dash_1.6s_linear_infinite]"
        fill="none"
      />
      {/* Traveling Energy Photon */}
      <circle r="3" fill="#ffffff" filter="url(#intenseGlow)">
        <animateMotion
          path="M 420 160 C 370 135, 345 155, 310 180"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Ring Perimeter Emitter Socket */}
      <circle cx="420" cy="160" r="4.5" fill="#790d16" filter="url(#intenseGlow)" />
      <circle cx="420" cy="160" r="2" fill="#ffffff" />
      {/* Card Docking Receiver Port */}
      <circle cx="310" cy="180" r="5" fill="#aec4d4" stroke="#790d16" strokeWidth="1.5" filter="url(#laserGlow)" />

      {/* ============================================================ */}
      {/* CONDUIT 2: Lower-Left Ring Perimeter -> Box 2 (Bottom-Left)  */}
      {/* Emerges at (420, 540) - completely below the central text   */}
      {/* ============================================================ */}
      <path
        id="pathBL"
        d="M 420 540 C 370 565, 345 545, 310 520"
        stroke="rgba(121, 13, 22, 0.15)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 420 540 C 370 565, 345 545, 310 520"
        stroke="url(#conduitGradBL)"
        strokeWidth="2.2"
        strokeDasharray="8 14"
        filter="url(#laserGlow)"
        className="animate-[dash_2.0s_linear_infinite]"
        fill="none"
      />
      {/* Traveling Energy Photon */}
      <circle r="3" fill="#ffffff" filter="url(#intenseGlow)">
        <animateMotion
          path="M 420 540 C 370 565, 345 545, 310 520"
          dur="2.0s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Ring Perimeter Emitter Socket */}
      <circle cx="420" cy="540" r="4.5" fill="#790d16" filter="url(#intenseGlow)" />
      <circle cx="420" cy="540" r="2" fill="#ffffff" />
      {/* Card Docking Receiver Port */}
      <circle cx="310" cy="520" r="5" fill="#aec4d4" stroke="#790d16" strokeWidth="1.5" filter="url(#laserGlow)" />

      {/* ============================================================ */}
      {/* CONDUIT 3: Upper-Right Ring Perimeter -> Box 3 (Top-Right)    */}
      {/* Emerges at (780, 160) - completely above the central text   */}
      {/* ============================================================ */}
      <path
        id="pathTR"
        d="M 780 160 C 830 135, 855 155, 890 180"
        stroke="rgba(121, 13, 22, 0.15)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 780 160 C 830 135, 855 155, 890 180"
        stroke="url(#conduitGradTR)"
        strokeWidth="2.2"
        strokeDasharray="8 14"
        filter="url(#laserGlow)"
        className="animate-[dash_1.7s_linear_infinite]"
        fill="none"
      />
      {/* Traveling Energy Photon */}
      <circle r="3" fill="#ffffff" filter="url(#intenseGlow)">
        <animateMotion
          path="M 780 160 C 830 135, 855 155, 890 180"
          dur="1.9s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Ring Perimeter Emitter Socket */}
      <circle cx="780" cy="160" r="4.5" fill="#790d16" filter="url(#intenseGlow)" />
      <circle cx="780" cy="160" r="2" fill="#ffffff" />
      {/* Card Docking Receiver Port */}
      <circle cx="890" cy="180" r="5" fill="#aec4d4" stroke="#790d16" strokeWidth="1.5" filter="url(#laserGlow)" />

      {/* ============================================================ */}
      {/* CONDUIT 4: Lower-Right Ring Perimeter -> Box 4 (Bottom-Right) */}
      {/* Emerges at (780, 540) - completely below the central text   */}
      {/* ============================================================ */}
      <path
        id="pathBR"
        d="M 780 540 C 830 565, 855 545, 890 520"
        stroke="rgba(121, 13, 22, 0.15)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 780 540 C 830 565, 855 545, 890 520"
        stroke="url(#conduitGradBR)"
        strokeWidth="2.2"
        strokeDasharray="8 14"
        filter="url(#laserGlow)"
        className="animate-[dash_2.1s_linear_infinite]"
        fill="none"
      />
      {/* Traveling Energy Photon */}
      <circle r="3" fill="#ffffff" filter="url(#intenseGlow)">
        <animateMotion
          path="M 780 540 C 830 565, 855 545, 890 520"
          dur="2.1s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Ring Perimeter Emitter Socket */}
      <circle cx="780" cy="540" r="4.5" fill="#790d16" filter="url(#intenseGlow)" />
      <circle cx="780" cy="540" r="2" fill="#ffffff" />
      {/* Card Docking Receiver Port */}
      <circle cx="890" cy="520" r="5" fill="#aec4d4" stroke="#790d16" strokeWidth="1.5" filter="url(#laserGlow)" />
    </svg>
  );
};
