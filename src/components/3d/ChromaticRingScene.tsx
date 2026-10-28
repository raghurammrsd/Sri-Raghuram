import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FullChromaticRing: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const ringPrimaryRef = useRef<THREE.Mesh>(null);
  const ringGlowRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const RING_RADIUS = 1.38;

  // Reduced particle count: clean, delicate, luxury floating embers (zero muddy speckle)
  const { positions, colors } = useMemo(() => {
    const count = 320;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Only 2 elegant, harmonious colors: Soft Champagne Sand & Soft Slate Fog
    const cSand = new THREE.Color('#c9af84');
    const cSlate = new THREE.Color('#8da8be');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = RING_RADIUS + (Math.random() - 0.5) * 0.16;
      const z = (Math.random() - 0.5) * 0.12;

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = Math.sin(angle) * r;
      pos[i * 3 + 2] = z;

      const normAngle = (Math.atan2(Math.sin(angle), Math.cos(angle)) + Math.PI) / (Math.PI * 2);
      const color = new THREE.Color().lerpColors(cSand, cSlate, Math.sin(normAngle * Math.PI));

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
        -y * 0.08,
        3.0,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.08,
        3.0,
        delta
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * 0.18;
    }

    if (ringGlowRef.current) {
      ringGlowRef.current.rotation.z = -t * 0.12;
    }

    if (ringPrimaryRef.current) {
      ringPrimaryRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Delicate, Minimalist Floating Halo Points */}
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
          size={0.032}
          vertexColors
          transparent
          opacity={0.65}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Razor-Thin Elegant Burgundy Torus Ring */}
      <mesh ref={ringPrimaryRef}>
        <torusGeometry args={[RING_RADIUS, 0.008, 16, 96]} />
        <meshBasicMaterial color="#790d16" transparent opacity={0.85} />
      </mesh>

      {/* Subtle Slate Outer Orbit Wire */}
      <mesh ref={ringGlowRef} rotation={[0.2, 0.1, 0]}>
        <torusGeometry args={[RING_RADIUS + 0.035, 0.005, 16, 96]} />
        <meshBasicMaterial color="#8da8be" transparent opacity={0.65} />
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
          camera={{ position: [0, 0, 5.0], fov: 44 }}
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
