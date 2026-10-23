import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * High-Performance GPU Shader for the Neural Manifold
 * Runs 100% on GPU - Zero CPU vertex loops, zero memory transfers, zero lag!
 */
const vertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying float vElevation;

  void main() {
    vec3 pos = position;

    // Multi-harmonic GPU wave calculation
    float wave1 = sin(pos.x * 0.65 + uTime * 1.1) * cos(pos.y * 0.55 + uTime * 0.8) * 0.7;
    float wave2 = sin((pos.x + pos.y) * 0.4 - uTime * 0.7) * 0.35;
    
    // Smooth pointer disturbance
    float dist = distance(pos.xy, uPointer * vec2(6.0, 3.5));
    float ripple = exp(-dist * 0.25) * sin(dist * 2.0 - uTime * 3.0) * 0.4;

    pos.z += wave1 + wave2 + ripple;
    vElevation = pos.z;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = (3.5 / -mvPosition.z);
  }
`;

const fragmentShader = `
  varying float vElevation;

  void main() {
    // Dynamic color gradient: Electric Orange at peaks, Warm White at crests
    vec3 colorOrange = vec3(1.0, 0.333, 0.0); // #ff5500
    vec3 colorWhite = vec3(0.96, 0.96, 0.97);

    float mixRatio = clamp((vElevation + 0.5) * 0.8, 0.0, 1.0);
    vec3 finalColor = mix(colorWhite, colorOrange, mixRatio);

    gl_FragColor = vec4(finalColor, 0.55);
  }
`;

const fragmentShaderWireframe = `
  varying float vElevation;

  void main() {
    vec3 colorOrange = vec3(1.0, 0.333, 0.0);
    gl_FragColor = vec4(colorOrange, 0.18);
  }
`;

const NeuralTensorFieldGPU: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const shaderMatRef = useRef<THREE.ShaderMaterial>(null);
  const wireMatRef = useRef<THREE.ShaderMaterial>(null);

  // Optimized grid dimensions (Lightweight, super smooth on all devices)
  const geo = useMemo(() => new THREE.PlaneGeometry(15, 9, 36, 24), []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    // Update uniforms directly to GPU
    if (shaderMatRef.current) {
      shaderMatRef.current.uniforms.uTime.value = t;
      shaderMatRef.current.uniforms.uPointer.value.set(x, y);
    }
    if (wireMatRef.current) {
      wireMatRef.current.uniforms.uTime.value = t;
      wireMatRef.current.uniforms.uPointer.value.set(x, y);
    }

    // Smooth group parallax
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -0.55 - y * 0.12,
        3.0,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        x * 0.15,
        3.0,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, -1.2]}>
      {/* 1. GPU Wireframe Mesh */}
      <mesh geometry={geo}>
        <shaderMaterial
          ref={wireMatRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShaderWireframe}
          uniforms={uniforms}
          wireframe
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* 2. GPU Points Cloud at Nodes */}
      <points geometry={geo}>
        <shaderMaterial
          ref={shaderMatRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export const HeroBackdrop3D: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Occlusion Culling: Pause 3D canvas when user scrolls past Hero
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
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-75 overflow-hidden"
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 50 }}
          dpr={1} // Cap to 1 for zero GPU strain & cold temps
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: 'low-power',
            stencil: false,
            depth: false,
          }}
        >
          <NeuralTensorFieldGPU />
        </Canvas>
      )}
    </div>
  );
};
