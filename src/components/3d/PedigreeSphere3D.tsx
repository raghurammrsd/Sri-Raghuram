import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AcademicGimbal: React.FC = () => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

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

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.2;
    }

    if (midRingRef.current) {
      midRingRef.current.rotation.x = t * 0.35;
      midRingRef.current.rotation.y = t * 0.15;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.45;
      innerRingRef.current.rotation.z = t * 0.25;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.5;
      coreRef.current.rotation.y = t * 0.5;
      const s = 1 + Math.sin(t * 3) * 0.06;
      coreRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Amber/Gold Gimbal Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[1.45, 0.016, 16, 100]} />
        <meshBasicMaterial color="#ffaa00" transparent opacity={0.75} />
      </mesh>

      {/* Mid Cyan Gimbal Ring */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[1.2, 0.014, 16, 90]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.8} />
      </mesh>

      {/* Inner Emerald Ring */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[0.95, 0.012, 16, 80]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.85} />
      </mesh>

      {/* Central Academic Rigor Octahedron Core */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[0.48, 0]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ff7700"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export const PedigreeSphere3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] relative pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 44 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={2.5} color="#ffaa00" />
        <pointLight position={[-3, -3, 2]} intensity={2.0} color="#00f0ff" />
        <AcademicGimbal />
      </Canvas>
    </div>
  );
};
