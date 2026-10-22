import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { NeuralCore } from './NeuralCore';
import { FallbackGraphic } from './FallbackGraphic';

export const HeroScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    // Safe WebGL check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === false || prefersReducedMotion) {
    return <FallbackGraphic />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.8]} // Capped for optimal performance on 8GB machines
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#f5f2eb" />
        <pointLight position={[-8, -8, -4]} intensity={1.8} color="#ff5500" />
        <pointLight position={[0, 0, 2]} intensity={1.0} color="#ff6a1a" />

        <Suspense fallback={null}>
          <NeuralCore />
        </Suspense>
      </Canvas>
    </div>
  );
};
