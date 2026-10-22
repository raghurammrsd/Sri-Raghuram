import React, { useEffect, useRef } from 'react';

export const CinematicBackground: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      // Smooth lerp easing
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 400}px, ${currentY - 400}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-charcoal-950">
      {/* 1. Subtle Cybernetic Perspective Grid with Vignette Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)] opacity-80" />

      {/* 2. Interactive Cursor Spotlight Aurora (Hardware-Accelerated transform3d) */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.07)_0%,rgba(0,240,255,0.04)_45%,transparent_70%)] blur-[90px] will-change-transform"
      />

      {/* 3. Static Dual-Chromatic Ambient Energy Nebulae */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-electric-orange/[0.045] rounded-full blur-[170px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[650px] h-[650px] bg-cyan-500/[0.045] rounded-full blur-[170px]" />

      {/* 4. Fine Film Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.022] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};
