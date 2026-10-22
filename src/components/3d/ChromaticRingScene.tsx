import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FullChromaticRing: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const ringPrimaryRef = useRef<THREE.Mesh>(null);
  const ringGlowRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Radius for a tight, perfectly proportioned full circle that fits the desktop screen
  const RING_RADIUS = 1.62;

  // Generate 2200 swirling particles tightly bound to a full 360 circle
  const { positions, colors } = useMemo(() => {
    const count = 2200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cRed = new THREE.Color('#ff1800');
    const cOrange = new THREE.Color('#ff6600');
    const cYellow = new THREE.Color('#ffbb00');
    const cCyan = new THREE.Color('#00f0ff');
    const cBlue = new THREE.Color('#0055ff');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      // Tight radial distribution around the ring radius
      const r = RING_RADIUS + (Math.random() - 0.5) * 0.22;
      const z = (Math.random() - 0.5) * 0.18;

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = Math.sin(angle) * r;
      pos[i * 3 + 2] = z;

      // Dual chromatic color gradient (Red/Yellow on top-right, Cyan/Blue on bottom-left)
      const normAngle = (Math.atan2(Math.sin(angle), Math.cos(angle)) + Math.PI) / (Math.PI * 2);

      const color = new THREE.Color();
      if (normAngle < 0.5) {
        if (normAngle < 0.25) {
          color.lerpColors(cRed, cOrange, normAngle * 4);
        } else {
          color.lerpColors(cOrange, cYellow, (normAngle - 0.25) * 4);
        }
      } else {
        if (normAngle < 0.75) {
          color.lerpColors(cCyan, cBlue, (normAngle - 0.5) * 4);
        } else {
          color.lerpColors(cBlue, cRed, (normAngle - 0.75) * 4);
        }
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

    // Subtle, high-end 3D tilt without warping the circle
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -y * 0.12,
        3.5,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.12,
        3.5,
        delta
      );
    }

    // Smooth continuous particle orbital swirl
    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * 0.28;
    }

    // Subtle breathing pulse on the inner glow ring
    if (ringGlowRef.current) {
      ringGlowRef.current.rotation.z = -t * 0.18;
      const s = 1 + Math.sin(t * 2.5) * 0.008;
      ringGlowRef.current.scale.set(s, s, 1);
    }

    if (ringPrimaryRef.current) {
      ringPrimaryRef.current.rotation.z = t * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 360 Full Circular Orbiting Particle Vortex */}
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
          size={0.034}
          vertexColors
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Razor-Sharp Continuous Dual-Tone Torus Ring */}
      <mesh ref={ringPrimaryRef}>
        <torusGeometry args={[RING_RADIUS, 0.012, 24, 160]} />
        <meshBasicMaterial color="#ff3b00" transparent opacity={0.85} />
      </mesh>

      {/* Cyan Accent Outer Orbit Ring */}
      <mesh ref={ringGlowRef}>
        <torusGeometry args={[RING_RADIUS + 0.04, 0.007, 24, 160]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.75} />
      </mesh>

      {/* Subtle Mechanical Aperture Halo */}
      <mesh>
        <torusGeometry args={[RING_RADIUS + 0.12, 0.02, 16, 120]} />
        <meshStandardMaterial color="#121218" roughness={0.3} metalness={0.9} />
      </mesh>
    </group>
  );
};

export const ChromaticRingScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 46 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 2]} intensity={2.5} color="#ff3b00" />
        <pointLight position={[-2, -2, 2]} intensity={2.5} color="#00f0ff" />
        <FullChromaticRing />
      </Canvas>
    </div>
  );
};
