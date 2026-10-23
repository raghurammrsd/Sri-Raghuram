import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HolographicLattice: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -y * 0.25,
        3,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.25,
        3,
        delta
      );
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.4;
      innerRef.current.rotation.y = -t * 0.3;
      const s = 1 + Math.sin(t * 2) * 0.05;
      innerRef.current.scale.set(s, s, s);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.25;
      ringRef.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#ff5500"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Inner Glowing Polyhedral Nucleus */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#ff5500"
          emissive="#ff5500"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Subtle Orbital Halo Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.9, 0.008, 16, 90]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

export const HeroBackdrop3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={2.5} color="#ff5500" />
        <pointLight position={[-3, -3, 2]} intensity={1.5} color="#ffffff" />
        <HolographicLattice />
      </Canvas>
    </div>
  );
};
