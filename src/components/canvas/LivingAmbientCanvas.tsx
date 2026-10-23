import React, { useEffect, useRef } from 'react';

/**
 * High-Performance Ambient Fluid Canvas
 * Engineered for 60/120 FPS with minimal CPU & GPU footprint:
 * - DPR locked to 1.0 (saves 75% memory fill-rate on Retina displays)
 * - Zero expensive ctx.shadowBlur calls
 * - Optimized 3-ribbon fluid harmonics
 * - Pauses automatically when tab is hidden or inactive
 */
export const LivingAmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Lock to 1x DPR for ambient background - eliminates GPU thermal throttling
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Smooth mouse lerping
    let mouseX = width * 0.5;
    let mouseY = height * 0.4;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3 Sleek, High-Performance Wave Ribbons
    const waves = [
      {
        baseY: 0.35,
        amplitude: 55,
        freq: 0.0016,
        color: '255, 85, 0',
        alpha: 0.22,
        lineWidth: 1.5,
        octave: 1.0,
      },
      {
        baseY: 0.55,
        amplitude: 65,
        freq: 0.0012,
        color: '255, 120, 30',
        alpha: 0.16,
        lineWidth: 1.2,
        octave: 0.8,
      },
      {
        baseY: 0.75,
        amplitude: 50,
        freq: 0.002,
        color: '245, 245, 247',
        alpha: 0.12,
        lineWidth: 1.0,
        octave: 1.2,
      },
    ];

    // Minimal floating quantum particles
    const particleCount = 20;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.3 + 0.1,
    }));

    let time = 0;
    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        animId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animId);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) return;

      time += 0.01;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Soft Ambient Volumetric Center Glow
      const gradCenter = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        width * 0.55
      );
      gradCenter.addColorStop(0, 'rgba(255, 85, 0, 0.03)');
      gradCenter.addColorStop(0.5, 'rgba(255, 120, 40, 0.01)');
      gradCenter.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradCenter;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Fast-Path Smooth Wave Ribbons (32px step - fast & crisp)
      const step = 32;

      waves.forEach((wave, wIdx) => {
        ctx.beginPath();
        const currentBaseY = height * wave.baseY + Math.sin(time * 0.4 + wIdx) * 15;
        let started = false;

        for (let x = 0; x <= width + step; x += step) {
          const w = Math.sin(x * wave.freq + time * wave.octave);
          const w2 = Math.cos(x * wave.freq * 1.5 - time * 0.5);
          let y = currentBaseY + (w * 0.7 + w2 * 0.3) * wave.amplitude;

          // Lightweight mouse warp
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < 40000) { // 200px radius
            const factor = Math.exp(-distSq / 16000);
            y += Math.sin(time * 3) * 16 * factor;
          }

          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Draw crisp stroke without expensive shadowBlur
        ctx.strokeStyle = `rgba(${wave.color}, ${wave.alpha})`;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();
      });

      // 3. Update minimal particles
      ctx.fillStyle = 'rgba(255, 85, 0, 0.15)';
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-charcoal-950">
      {/* 1. Hardware Accelerated Lightweight Ambient Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. Precision Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_60%,transparent_100%)] opacity-70" />
    </div>
  );
};
