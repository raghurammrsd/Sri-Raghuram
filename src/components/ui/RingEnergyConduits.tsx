import React from 'react';

export const RingEnergyConduits: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Glowing Orange Laser Gradient */}
        <linearGradient id="laserGradLeftTop" x1="500" y1="300" x2="310" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#ff7728" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="laserGradLeftBottom" x1="500" y1="400" x2="310" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#ff7728" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="laserGradRightTop" x1="700" y1="300" x2="890" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#ff7728" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="laserGradRightBottom" x1="700" y1="400" x2="890" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#ff7728" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0.9" />
        </linearGradient>

        {/* Pulse Filter */}
        <filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Conduit 1: Ring (Left-Top) -> Card 1 (Top-Left) */}
      <path
        d="M 480 300 C 410 260, 360 210, 310 180"
        stroke="rgba(255, 85, 0, 0.15)"
        strokeWidth="1.5"
      />
      <path
        d="M 480 300 C 410 260, 360 210, 310 180"
        stroke="url(#laserGradLeftTop)"
        strokeWidth="2"
        strokeDasharray="10 18"
        filter="url(#glowOrange)"
        className="animate-[dash_1.8s_linear_infinite]"
      />
      {/* Emitter Node on Ring */}
      <circle cx="480" cy="300" r="3.5" fill="#ff5500" filter="url(#glowOrange)" />
      {/* Receiver Port on Card */}
      <circle cx="310" cy="180" r="4.5" fill="#ff7728" stroke="#fff" strokeWidth="1" filter="url(#glowOrange)" />

      {/* Conduit 2: Ring (Left-Bottom) -> Card 2 (Bottom-Left) */}
      <path
        d="M 480 400 C 410 440, 360 490, 310 520"
        stroke="rgba(255, 85, 0, 0.15)"
        strokeWidth="1.5"
      />
      <path
        d="M 480 400 C 410 440, 360 490, 310 520"
        stroke="url(#laserGradLeftBottom)"
        strokeWidth="2"
        strokeDasharray="10 18"
        filter="url(#glowOrange)"
        className="animate-[dash_2.1s_linear_infinite]"
      />
      <circle cx="480" cy="400" r="3.5" fill="#ff5500" filter="url(#glowOrange)" />
      <circle cx="310" cy="520" r="4.5" fill="#ff7728" stroke="#fff" strokeWidth="1" filter="url(#glowOrange)" />

      {/* Conduit 3: Ring (Right-Top) -> Card 3 (Top-Right) */}
      <path
        d="M 720 300 C 790 260, 840 210, 890 180"
        stroke="rgba(255, 85, 0, 0.15)"
        strokeWidth="1.5"
      />
      <path
        d="M 720 300 C 790 260, 840 210, 890 180"
        stroke="url(#laserGradRightTop)"
        strokeWidth="2"
        strokeDasharray="10 18"
        filter="url(#glowOrange)"
        className="animate-[dash_1.9s_linear_infinite]"
      />
      <circle cx="720" cy="300" r="3.5" fill="#ff5500" filter="url(#glowOrange)" />
      <circle cx="890" cy="180" r="4.5" fill="#ff7728" stroke="#fff" strokeWidth="1" filter="url(#glowOrange)" />

      {/* Conduit 4: Ring (Right-Bottom) -> Card 4 (Bottom-Right) */}
      <path
        d="M 720 400 C 790 440, 840 490, 890 520"
        stroke="rgba(255, 85, 0, 0.15)"
        strokeWidth="1.5"
      />
      <path
        d="M 720 400 C 790 440, 840 490, 890 520"
        stroke="url(#laserGradRightBottom)"
        strokeWidth="2"
        strokeDasharray="10 18"
        filter="url(#glowOrange)"
        className="animate-[dash_2.2s_linear_infinite]"
      />
      <circle cx="720" cy="400" r="3.5" fill="#ff5500" filter="url(#glowOrange)" />
      <circle cx="890" cy="520" r="4.5" fill="#ff7728" stroke="#fff" strokeWidth="1" filter="url(#glowOrange)" />
    </svg>
  );
};
