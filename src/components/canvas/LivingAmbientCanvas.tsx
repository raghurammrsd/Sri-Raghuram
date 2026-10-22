import React, { useEffect, useRef } from 'react';

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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle interactive displacement
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating ambient dust motes
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.45 + 0.15,
      color: Math.random() > 0.65 ? '255, 85, 0' : '0, 240, 255',
    }));

    // Large floating volumetric ambient orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, r: 380, color: '0, 240, 255', vx: 0.15, vy: 0.1 },
      { x: width * 0.8, y: height * 0.4, r: 440, color: '255, 85, 0', vx: -0.12, vy: 0.14 },
      { x: width * 0.5, y: height * 0.75, r: 350, color: '16, 185, 129', vx: 0.1, vy: -0.15 },
    ];

    let time = 0;

    const render = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render floating volumetric atmospheric orbs with smooth motion
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );
        grad.addColorStop(0, `rgba(${orb.color}, 0.055)`);
        grad.addColorStop(0.5, `rgba(${orb.color}, 0.02)`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render cursor spotlight glow
      const cursorGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        320
      );
      cursorGrad.addColorStop(0, 'rgba(255, 85, 0, 0.06)');
      cursorGrad.addColorStop(0.6, 'rgba(0, 240, 255, 0.02)');
      cursorGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGrad;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 320, 0, Math.PI * 2);
      ctx.fill();

      // Render drifting dust motes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-charcoal-950">
      {/* 1. Hardware Accelerated Living Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. Delicate Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_60%,transparent_100%)] opacity-70" />

      {/* 3. Subtle Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
    </div>
  );
};
