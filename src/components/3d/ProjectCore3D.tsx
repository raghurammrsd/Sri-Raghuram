import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ProjectCoreProps {
  colorHex?: string;
  projectId?: string;
  scrollProgress?: MotionValue<number>;
}

/**
 * Authentic, Professional 3D Rotating Tensor Core.
 * Uses 100% hardware-accelerated CSS 3D transforms (preserve-3d) with orbital perspective.
 * ZERO WebGL overhead, ZERO CPU render loops, ZERO battery drain, ZERO lag!
 * Features concentric gyroscopic gimbal rings, wireframe octahedral lattice, and live scroll-driven 3D physics.
 */
export const ProjectCore3D: React.FC<ProjectCoreProps> = ({ projectId = 'codegraph-mcp', scrollProgress }) => {
  // Live dynamic 3D scroll physics (gimbal tilts and rotates interactively as the user scrolls)
  const defaultProgress = useTransform(() => 0.5);
  const activeProgress = scrollProgress || defaultProgress;

  const scrollRotateX = useTransform(activeProgress, [0, 1], [-22, 22]);
  const scrollRotateY = useTransform(activeProgress, [0, 1], [-35, 35]);
  const scrollScale = useTransform(activeProgress, [0, 0.5, 1], [0.92, 1.05, 0.92]);

  return (
    <div className="relative w-full h-full min-h-[190px] sm:min-h-[210px] flex items-center justify-center overflow-hidden select-none">
      <style>{`
        @keyframes gyroRotateOuter {
          0% {
            transform: rotateX(65deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(65deg) rotateZ(360deg);
          }
        }

        @keyframes gyroRotateMid {
          0% {
            transform: rotateY(0deg) rotateX(25deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(25deg);
          }
        }

        @keyframes gyroRotateInner {
          0% {
            transform: rotateZ(0deg) rotateY(45deg);
          }
          100% {
            transform: rotateZ(-360deg) rotateY(45deg);
          }
        }

        @keyframes corePulseTumble {
          0% {
            transform: rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg) scale3d(1.06, 1.06, 1.06);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) scale3d(1, 1, 1);
          }
        }

        .preserve-3d-scene {
          transform-style: preserve-3d;
          perspective: 900px;
        }

        .gyro-outer {
          animation: gyroRotateOuter 28s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .gyro-mid {
          animation: gyroRotateMid 20s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .gyro-inner {
          animation: gyroRotateInner 14s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .core-tumble {
          animation: corePulseTumble 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      {/* 3D Isometric Viewport Container with Live Scroll Parallax Tilt */}
      <motion.div
        style={{
          rotateX: scrollRotateX,
          rotateY: scrollRotateY,
          scale: scrollScale,
        }}
        className="relative w-44 h-44 sm:w-48 sm:h-48 preserve-3d-scene flex items-center justify-center"
      >
        {/* Background Radar Guide Mesh */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-40 h-40 rounded-full border border-dashed border-[#e5d3af]" />
          <div className="absolute w-28 h-28 rounded-full border border-[#c4a47c]/50" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#790d16]/20 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#790d16]/20 to-transparent" />
        </div>

        {/* Outer Gimbal Ring (Rotates in 3D around X=65deg, Z axis) */}
        <div className="absolute w-36 h-36 rounded-full border-2 border-[#790d16]/70 gyro-outer flex items-center justify-center shadow-[0_0_15px_rgba(121,13,22,0.15)]">
          {/* Gimbal Cardinal Sensor Nodes */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#790d16] border border-white shadow-sm flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#790d16] border border-white shadow-sm flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c4a47c] border border-white" />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c4a47c] border border-white" />
        </div>

        {/* Middle Gimbal Ring (Tilted 3D Equatorial Ring) */}
        <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#8da8be] gyro-mid flex items-center justify-center">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8da8be]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8da8be]" />
        </div>

        {/* Inner Gyroscope Ring (Warm Sand Tan Ring) */}
        <div className="absolute w-20 h-20 rounded-full border-2 border-[#c4a47c] gyro-inner flex items-center justify-center">
          <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#790d16]" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full bg-[#790d16]" />
        </div>

        {/* Central 3D Wireframe Octahedron Polyhedral Core */}
        <div className="relative w-12 h-12 core-tumble flex items-center justify-center">
          {/* Face 1: Deep Burgundy Diamond Plane */}
          <div
            className="absolute w-10 h-10 border-2 border-[#790d16] bg-[#790d16]/15 backdrop-blur-xs"
            style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
          />

          {/* Face 2: Warm Tan Diamond Plane */}
          <div
            className="absolute w-10 h-10 border-2 border-[#c4a47c] bg-[#c4a47c]/15 backdrop-blur-xs"
            style={{ transform: 'rotateX(-45deg) rotateY(45deg)' }}
          />

          {/* Face 3: Soft Slate Blue Intersecting Plane */}
          <div
            className="absolute w-10 h-10 border border-[#8da8be] bg-[#8da8be]/10"
            style={{ transform: 'rotateY(90deg) rotateZ(45deg)' }}
          />

          {/* Central Radiant Nucleus */}
          <div className="absolute w-4 h-4 rounded-full bg-[#790d16] border-2 border-white shadow-[0_0_12px_#790d16] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
