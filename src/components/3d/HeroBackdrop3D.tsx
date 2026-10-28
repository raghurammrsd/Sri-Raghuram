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
    // Exact requested palette: Lite Brown & Sky Blue
    vec3 colorLiteBrown = vec3(0.72, 0.54, 0.38); // Warm refined lite brown
    vec3 colorSkyBlue = vec3(0.46, 0.70, 0.88);   // Luminous soft sky blue

    float mixRatio = clamp((vElevation + 0.5) * 0.85, 0.0, 1.0);
    vec3 finalColor = mix(colorSkyBlue, colorLiteBrown, mixRatio);

    gl_FragColor = vec4(finalColor, 0.70);
  }
`;

const fragmentShaderWireframe = `
  varying float vElevation;

  void main() {
    // Dynamic lite brown wireframe with subtle sky blue crests
    vec3 colorLiteBrown = vec3(0.72, 0.54, 0.38);
    vec3 colorSkyBlue = vec3(0.46, 0.70, 0.88);

    float mixRatio = clamp((vElevation + 0.5) * 0.8, 0.0, 1.0);
    vec3 finalColor = mix(colorLiteBrown, colorSkyBlue, mixRatio);

    gl_FragColor = vec4(finalColor, 0.20);
  }
`;

const NeuralTensorFieldGPU: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const shaderMatRef = useRef<THREE.ShaderMaterial>(null);
  const wireMatRef = useRef<THREE.ShaderMaterial>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const targetRef = useRef(new THREE.Vector2(0, 0));

  // Global window mouse tracking so 3D reacts even through overlay text
  useEffect(() => {
    const onPointerMove = (e: MouseEvent) => {
      targetRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

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

    // Smooth damp mouse position
    mouseRef.current.x = THREE.MathUtils.damp(mouseRef.current.x, targetRef.current.x, 3.5, delta);
    mouseRef.current.y = THREE.MathUtils.damp(mouseRef.current.y, targetRef.current.y, 3.5, delta);

    // Update uniforms directly to GPU
    if (shaderMatRef.current) {
      shaderMatRef.current.uniforms.uTime.value = t;
      shaderMatRef.current.uniforms.uPointer.value.copy(mouseRef.current);
    }
    if (wireMatRef.current) {
      wireMatRef.current.uniforms.uTime.value = t;
      wireMatRef.current.uniforms.uPointer.value.copy(mouseRef.current);
    }

    // Smooth group parallax reacting to cursor
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -0.55 - mouseRef.current.y * 0.18,
        3.0,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        mouseRef.current.x * 0.22,
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
