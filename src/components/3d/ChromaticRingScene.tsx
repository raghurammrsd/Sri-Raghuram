import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FullChromaticRing: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const ringPrimaryRef = useRef<THREE.Mesh>(null);
  const ringGlowRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const RING_RADIUS = 1.62;

  // Optimized particle count for performance (1200 points is lush and lightweight)
  const { positions, colors } = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cBurgundy = new THREE.Color('#790d16');
    const cSlate = new THREE.Color('#aec4d4');
    const cSand = new THREE.Color('#e5d3af');
    const cCream = new THREE.Color('#f5efe1');
    const cWhite = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = RING_RADIUS + (Math.random() - 0.5) * 0.22;
      const z = (Math.random() - 0.5) * 0.18;

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = Math.sin(angle) * r;
      pos[i * 3 + 2] = z;

      const normAngle = (Math.atan2(Math.sin(angle), Math.cos(angle)) + Math.PI) / (Math.PI * 2);

      const color = new THREE.Color();
      if (normAngle < 0.25) {
        color.lerpColors(cBurgundy, cSand, normAngle * 4);
      } else if (normAngle < 0.5) {
        color.lerpColors(cSand, cCream, (normAngle - 0.25) * 4);
      } else if (normAngle < 0.75) {
        color.lerpColors(cCream, cSlate, (normAngle - 0.5) * 4);
      } else {
        color.lerpColors(cSlate, cBurgundy, (normAngle - 0.75) * 4);
      }

      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -y * 0.1,
        3.0,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.1,
        3.0,
        delta
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * 0.25;
    }

    if (ringGlowRef.current) {
      ringGlowRef.current.rotation.z = -t * 0.15;
    }

    if (ringPrimaryRef.current) {
      ringPrimaryRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Chromatic Swirling Particle Halo */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Razor-Sharp Continuous Dual-Tone Torus Ring */}
      <mesh ref={ringPrimaryRef}>
        <torusGeometry args={[RING_RADIUS, 0.012, 16, 96]} />
        <meshBasicMaterial color="#790d16" transparent opacity={0.88} />
      </mesh>

      {/* Slate Accent Outer Orbit Ring */}
      <mesh ref={ringGlowRef}>
        <torusGeometry args={[RING_RADIUS + 0.04, 0.007, 16, 96]} />
        <meshBasicMaterial color="#aec4d4" transparent opacity={0.85} />
      </mesh>
    </group>
  );
};

export const ChromaticRingScene: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause Three.js render loop when out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5.0], fov: 45 }}
          dpr={1}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: 'low-power',
            depth: false,
            stencil: false,
          }}
        >
          <FullChromaticRing />
        </Canvas>
      )}
    </div>
  );
};
