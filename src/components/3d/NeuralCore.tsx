import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const NeuralCore: React.FC = () => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const latticeRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Smooth mouse-following lerp
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.45 + t * 0.12,
        3.5,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -y * 0.35 + Math.sin(t * 0.3) * 0.08,
        3.5,
        delta
      );
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.1;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.25;
      outerRingRef.current.rotation.z = t * 0.18;
    }

    if (midRingRef.current) {
      midRingRef.current.rotation.y = -t * 0.35;
      midRingRef.current.rotation.z = t * 0.15;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x = t * 0.4;
      innerCoreRef.current.rotation.y = t * 0.6;
      const s = 1 + Math.sin(t * 2) * 0.04;
      innerCoreRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Technological Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.2, 0.022, 16, 100]} />
        <meshStandardMaterial
          color="#ff5500"
          emissive="#ff5500"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Middle Gyroscopic Ring */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[1.7, 0.035, 16, 80]} />
        <meshStandardMaterial
          color="#f5f2eb"
          emissive="#331100"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Core Icosahedron Wireframe */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial
          color="#ff5500"
          wireframe={true}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Glowing Center */}
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial
          color="#ff6a1a"
          emissive="#ff4400"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>

      {/* Floating Micro Nodes */}
      {[-1.4, 1.4].map((x, i) => (
        <mesh key={i} position={[x, i % 2 === 0 ? 0.8 : -0.8, (i - 1) * 0.5]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#ff5500" />
        </mesh>
      ))}
    </group>
  );
};
