import React, { useRef, useState, useEffect } from 'react';
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
        -y * 0.18,
        3.0,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.18,
        3.0,
        delta
      );
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.2;
    }

    if (midRingRef.current) {
      midRingRef.current.rotation.x = t * 0.3;
      midRingRef.current.rotation.y = t * 0.15;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.4;
      innerRingRef.current.rotation.z = t * 0.2;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4;
      coreRef.current.rotation.y = t * 0.4;
      const s = 1 + Math.sin(t * 2.5) * 0.04;
      coreRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Electric Orange Gimbal Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[1.45, 0.016, 12, 64]} />
        <meshBasicMaterial color="#ff5500" transparent opacity={0.85} />
      </mesh>

      {/* Mid Warm White Gimbal Ring */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[1.2, 0.014, 12, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>

      {/* Inner Electric Orange Ring */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[0.95, 0.012, 12, 64]} />
        <meshBasicMaterial color="#ff6611" transparent opacity={0.8} />
      </mesh>

      {/* Central Academic Core */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[0.48, 0]} />
        <meshStandardMaterial
          color="#ff5500"
          emissive="#ff5500"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export const PedigreeSphere3D: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className="w-full h-full min-h-[180px] relative pointer-events-none flex items-center justify-center">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 4.0], fov: 44 }}
          dpr={1}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: 'low-power',
            depth: false,
            stencil: false,
          }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 3, 3]} intensity={2.5} color="#ff5500" />
          <AcademicGimbal />
        </Canvas>
      )}
    </div>
  );
};
