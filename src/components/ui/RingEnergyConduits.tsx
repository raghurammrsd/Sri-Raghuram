import React from 'react';

export const RingEnergyConduits: React.FC = () => {
  /**
   * Neural Nerve Network (Synaptic Action Potential Conduits)
   * Connects the central 3D core directly to the 4 capability modules.
   *
   * ViewBox: 1200 x 700
   * Central Core: (600, 350)
   *
   * Emitters on Ring:
   * - Top-Left:     (485, 235)
   * - Bottom-Left:  (485, 465)
   * - Top-Right:    (715, 235)
   * - Bottom-Right: (715, 465)
   *
   * Receptors on Boxes:
   * - Box 1 (Top-Left):     (320, 185)
   * - Box 2 (Bottom-Left):  (320, 515)
   * - Box 3 (Top-Right):    (880, 185)
   * - Box 4 (Bottom-Right): (880, 515)
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
        {/* Synaptic Nerve Gradients */}
        <linearGradient id="nerveGradTL" x1="485" y1="235" x2="320" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#8da8be" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c9af84" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="nerveGradBL" x1="485" y1="465" x2="320" y2="515" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#8da8be" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c9af84" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="nerveGradTR" x1="715" y1="235" x2="880" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#8da8be" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c9af84" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="nerveGradBR" x1="715" y1="465" x2="880" y2="515" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#790d16" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#8da8be" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c9af84" stopOpacity="0.95" />
        </linearGradient>

        {/* Soft Synaptic Glow Filter */}
        <filter id="synapseGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ============================================================ */}
      {/* NERVE 1: Top-Left (Core -> AI Intelligence Module)           */}
      {/* ============================================================ */}
      {/* 1. Underlying Axon Guide Sheath */}
      <path
        d="M 485 235 C 430 205, 380 180, 320 185"
        stroke="rgba(141, 168, 190, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {/* 2. Secondary Synaptic Tendril */}
      <path
        d="M 450 220 C 400 240, 360 210, 320 205"
        stroke="rgba(121, 13, 22, 0.22)"
        strokeWidth="1.2"
      />
      {/* 3. Primary Flowing Neural Nerve with Laser Pulse */}
      <path
        d="M 485 235 C 430 205, 380 180, 320 185"
        stroke="url(#nerveGradTL)"
        strokeWidth="2.2"
        strokeDasharray="6 14"
        filter="url(#synapseGlow)"
        className="animate-[dash_1.5s_linear_infinite]"
      />
      {/* 4. Synaptic Action Potential Packet (Traveling Photon Spark) */}
      <circle r="3.2" fill="#790d16" filter="url(#synapseGlow)">
        <animateMotion
          path="M 485 235 C 430 205, 380 180, 320 185"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Secondary Pulse */}
      <circle r="2.2" fill="#8da8be">
        <animateMotion
          path="M 450 220 C 400 240, 360 210, 320 205"
          dur="2.1s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Core Emitter Nexus Node */}
      <circle cx="485" cy="235" r="4" fill="#790d16" />
      <circle cx="485" cy="235" r="1.8" fill="#ffffff" />
      {/* Module Synaptic Receptor Port */}
      <circle cx="320" cy="185" r="5" fill="#ffffff" stroke="#790d16" strokeWidth="2" filter="url(#synapseGlow)" />
      <circle cx="320" cy="185" r="2.2" fill="#790d16" />

      {/* ============================================================ */}
      {/* NERVE 2: Bottom-Left (Core -> Systems Architecture Module)   */}
      {/* ============================================================ */}
      {/* 1. Underlying Axon Guide Sheath */}
      <path
        d="M 485 465 C 430 495, 380 520, 320 515"
        stroke="rgba(141, 168, 190, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {/* 2. Secondary Synaptic Tendril */}
      <path
        d="M 450 480 C 400 460, 360 490, 320 495"
        stroke="rgba(121, 13, 22, 0.22)"
        strokeWidth="1.2"
      />
      {/* 3. Primary Flowing Neural Nerve with Laser Pulse */}
      <path
        d="M 485 465 C 430 495, 380 520, 320 515"
        stroke="url(#nerveGradBL)"
        strokeWidth="2.2"
        strokeDasharray="6 14"
        filter="url(#synapseGlow)"
        className="animate-[dash_1.8s_linear_infinite]"
      />
      {/* 4. Synaptic Action Potential Packet */}
      <circle r="3.2" fill="#790d16" filter="url(#synapseGlow)">
        <animateMotion
          path="M 485 465 C 430 495, 380 520, 320 515"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      <circle r="2.2" fill="#8da8be">
        <animateMotion
          path="M 450 480 C 400 460, 360 490, 320 495"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Core Emitter Nexus Node */}
      <circle cx="485" cy="465" r="4" fill="#790d16" />
      <circle cx="485" cy="465" r="1.8" fill="#ffffff" />
      {/* Module Synaptic Receptor Port */}
      <circle cx="320" cy="515" r="5" fill="#ffffff" stroke="#790d16" strokeWidth="2" filter="url(#synapseGlow)" />
      <circle cx="320" cy="515" r="2.2" fill="#790d16" />

      {/* ============================================================ */}
      {/* NERVE 3: Top-Right (Core -> Creative Technology Module)      */}
      {/* ============================================================ */}
      {/* 1. Underlying Axon Guide Sheath */}
      <path
        d="M 715 235 C 770 205, 820 180, 880 185"
        stroke="rgba(141, 168, 190, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {/* 2. Secondary Synaptic Tendril */}
      <path
        d="M 750 220 C 800 240, 840 210, 880 205"
        stroke="rgba(121, 13, 22, 0.22)"
        strokeWidth="1.2"
      />
      {/* 3. Primary Flowing Neural Nerve with Laser Pulse */}
      <path
        d="M 715 235 C 770 205, 820 180, 880 185"
        stroke="url(#nerveGradTR)"
        strokeWidth="2.2"
        strokeDasharray="6 14"
        filter="url(#synapseGlow)"
        className="animate-[dash_1.6s_linear_infinite]"
      />
      {/* 4. Synaptic Action Potential Packet */}
      <circle r="3.2" fill="#790d16" filter="url(#synapseGlow)">
        <animateMotion
          path="M 715 235 C 770 205, 820 180, 880 185"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle r="2.2" fill="#8da8be">
        <animateMotion
          path="M 750 220 C 800 240, 840 210, 880 205"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Core Emitter Nexus Node */}
      <circle cx="715" cy="235" r="4" fill="#790d16" />
      <circle cx="715" cy="235" r="1.8" fill="#ffffff" />
      {/* Module Synaptic Receptor Port */}
      <circle cx="880" cy="185" r="5" fill="#ffffff" stroke="#790d16" strokeWidth="2" filter="url(#synapseGlow)" />
      <circle cx="880" cy="185" r="2.2" fill="#790d16" />

      {/* ============================================================ */}
      {/* NERVE 4: Bottom-Right (Core -> Product Strategy Module)       */}
      {/* ============================================================ */}
      {/* 1. Underlying Axon Guide Sheath */}
      <path
        d="M 715 465 C 770 495, 820 520, 880 515"
        stroke="rgba(141, 168, 190, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {/* 2. Secondary Synaptic Tendril */}
      <path
        d="M 750 480 C 800 460, 840 490, 880 495"
        stroke="rgba(121, 13, 22, 0.22)"
        strokeWidth="1.2"
      />
      {/* 3. Primary Flowing Neural Nerve with Laser Pulse */}
      <path
        d="M 715 465 C 770 495, 820 520, 880 515"
        stroke="url(#nerveGradBR)"
        strokeWidth="2.2"
        strokeDasharray="6 14"
        filter="url(#synapseGlow)"
        className="animate-[dash_1.9s_linear_infinite]"
      />
      {/* 4. Synaptic Action Potential Packet */}
      <circle r="3.2" fill="#790d16" filter="url(#synapseGlow)">
        <animateMotion
          path="M 715 465 C 770 495, 820 520, 880 515"
          dur="1.9s"
          repeatCount="indefinite"
        />
      </circle>
      <circle r="2.2" fill="#8da8be">
        <animateMotion
          path="M 750 480 C 800 460, 840 490, 880 495"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Core Emitter Nexus Node */}
      <circle cx="715" cy="465" r="4" fill="#790d16" />
      <circle cx="715" cy="465" r="1.8" fill="#ffffff" />
      {/* Module Synaptic Receptor Port */}
      <circle cx="880" cy="515" r="5" fill="#ffffff" stroke="#790d16" strokeWidth="2" filter="url(#synapseGlow)" />
      <circle cx="880" cy="515" r="2.2" fill="#790d16" />
    </svg>
  );
};
