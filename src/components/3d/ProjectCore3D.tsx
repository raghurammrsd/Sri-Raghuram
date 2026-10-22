import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProjectCoreProps {
  colorHex: string;
}

const HolographicCrystal: React.FC<{ colorHex: string }> = ({ colorHex }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate constellation nodes around core
  const particlesCount = 280;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 1.3 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

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
      meshRef.current.rotation.x = t * 0.35;
      meshRef.current.rotation.y = t * 0.45;
      const s = 1 + Math.sin(t * 2) * 0.05;
      meshRef.current.scale.set(s, s, s);
    }

    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.25;
      wireRef.current.rotation.y = -t * 0.35;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.2;
      ring1Ref.current.rotation.z = t * 0.5;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 4 + Math.cos(t * 0.5) * 0.2;
      ring2Ref.current.rotation.x = -t * 0.4;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Floating Starfield Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color={colorHex}
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.78, 0]} />
        <meshStandardMaterial
          color={colorHex}
          roughness={0.15}
          metalness={0.85}
          wireframe={false}
          emissive={colorHex}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Wireframe Facet Cage */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial
          color={colorHex}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.35, 0.012, 16, 100]} />
        <meshBasicMaterial color={colorHex} transparent opacity={0.7} />
      </mesh>

      {/* Orbit Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.52, 0.008, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

export const ProjectCore3D: React.FC<ProjectCoreProps> = ({ colorHex }) => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[340px] relative pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={3} color={colorHex} />
        <pointLight position={[-3, -3, 2]} intensity={1.5} color="#ffffff" />
        <HolographicCrystal colorHex={colorHex} />
      </Canvas>
    </div>
  );
};
