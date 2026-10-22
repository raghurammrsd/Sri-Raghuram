import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PlasmaRingVortex: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const ringInnerRef = useRef<THREE.Mesh>(null);
  const ringOuterRef = useRef<THREE.Mesh>(null);
  const ringHaloRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate 2600 swirling chromatic particles
  const { positions, colors } = useMemo(() => {
    const count = 2600;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cRed = new THREE.Color('#ff1122');
    const cOrange = new THREE.Color('#ff5500');
    const cYellow = new THREE.Color('#ffcc00');
    const cCyan = new THREE.Color('#00f0ff');
    const cBlue = new THREE.Color('#0055ff');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
      const radius = 2.4 + (Math.random() - 0.5) * 0.45;
      const z = (Math.random() - 0.5) * 0.4;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = z;

      // Split dual chromatic color mapping matching the reference image:
      // Red/Yellow-Orange on top & right, Cyan/Blue on bottom & left
      const normAngle = (Math.atan2(Math.sin(angle), Math.cos(angle)) + Math.PI) / (Math.PI * 2);

      const color = new THREE.Color();
      if (normAngle < 0.5) {
        // Red to Yellow-Orange plasma
        if (normAngle < 0.25) {
          color.lerpColors(cRed, cOrange, normAngle * 4);
        } else {
          color.lerpColors(cOrange, cYellow, (normAngle - 0.25) * 4);
        }
      } else {
        // Cyan to Electric Blue plasma
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

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -y * 0.2,
        3.5,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.2,
        3.5,
        delta
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * 0.3;
    }

    if (ringInnerRef.current) {
      ringInnerRef.current.rotation.z = -t * 0.2;
      const s = 1 + Math.sin(t * 3) * 0.01;
      ringInnerRef.current.scale.set(s, s, 1);
    }

    if (ringOuterRef.current) {
      ringOuterRef.current.rotation.z = t * 0.15;
    }

    if (ringHaloRef.current) {
      ringHaloRef.current.rotation.z = -t * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Swirling Particle Vortex */}
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
          size={0.038}
          vertexColors
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Fiery Hot Glowing Inner Ring */}
      <mesh ref={ringInnerRef}>
        <torusGeometry args={[2.35, 0.02, 16, 120]} />
        <meshBasicMaterial color="#ff3b00" transparent opacity={0.75} />
      </mesh>

      {/* Electric Cyan Accent Ring */}
      <mesh ref={ringOuterRef}>
        <torusGeometry args={[2.46, 0.012, 16, 120]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} />
      </mesh>

      {/* Cybernetic Dark Aperture Halo */}
      <mesh ref={ringHaloRef}>
        <torusGeometry args={[2.55, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#16161e"
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export const ChromaticRingScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 46 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 3]} intensity={2.5} color="#ff4400" />
        <pointLight position={[-2, -2, 3]} intensity={2.5} color="#00f0ff" />
        <PlasmaRingVortex />
      </Canvas>
    </div>
  );
};
