import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PipelineReactorProps {
  accentColor: string;
}

const TorusDataStream: React.FC<{ accentColor: string }> = ({ accentColor }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate 800 particles circulating along a Torus Knot parametric curve (representing 600+ data sources)
  const positions = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    const p = 2;
    const q = 3;
    const R = 1.05;
    const r = 0.3;

    for (let i = 0; i < count; i++) {
      const u = (i / count) * Math.PI * 2;
      const cu = Math.cos(q * u);
      const su = Math.sin(q * u);
      const quOverP = (q / p) * u;

      // Parametric Torus Knot coordinates
      const radius = R + r * Math.cos(quOverP);
      const jitterX = (Math.random() - 0.5) * 0.05;
      const jitterY = (Math.random() - 0.5) * 0.05;
      const jitterZ = (Math.random() - 0.5) * 0.05;

      pos[i * 3] = radius * Math.cos(u) + jitterX;
      pos[i * 3 + 1] = radius * Math.sin(u) + jitterY;
      pos[i * 3 + 2] = r * Math.sin(quOverP) + jitterZ;
    }

    return pos;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -y * 0.22,
        3,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.22,
        3,
        delta
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * 0.35;
      pointsRef.current.rotation.x = t * 0.18;
    }

    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.35;
      meshRef.current.rotation.x = t * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ghost Torus Knot Wireframe Pathway */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.05, 0.28, 96, 16, 2, 3]} />
        <meshBasicMaterial
          color={accentColor}
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Circulating 600+ Data Ingestion Stream Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.038}
          color={accentColor}
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Central High-Throughput Processing Core */}
      <mesh>
        <sphereGeometry args={[0.34, 24, 24]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={0.85}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

export const PipelineReactor3D: React.FC<PipelineReactorProps> = ({ accentColor }) => {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[320px] relative pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 44 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={2.5} color={accentColor} />
        <pointLight position={[-3, -3, 2]} intensity={1.5} color="#00f0ff" />
        <TorusDataStream accentColor={accentColor} />
      </Canvas>
    </div>
  );
};
