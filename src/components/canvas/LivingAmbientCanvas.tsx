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

    // Smooth mouse coordinates with lerp
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating constellation stars
    const particleCount = 85;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      baseOpacity: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      isOrange: Math.random() > 0.45,
    }));

    // Large floating volumetric ambient nebulae
    const nebulae = [
      { x: width * 0.25, y: height * 0.35, r: 480, color: '255, 85, 0', vx: 0.18, vy: 0.12, baseR: 480 },
      { x: width * 0.82, y: height * 0.45, r: 520, color: '255, 119, 40', vx: -0.15, vy: 0.16, baseR: 520 },
      { x: width * 0.5, y: height * 0.8, r: 420, color: '255, 85, 0', vx: 0.12, vy: -0.14, baseR: 420 },
    ];

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // 1. Render soft, ethereal volumetric nebulae
      nebulae.forEach((neb, idx) => {
        neb.x += neb.vx;
        neb.y += neb.vy;

        if (neb.x < -150 || neb.x > width + 150) neb.vx *= -1;
        if (neb.y < -150 || neb.y > height + 150) neb.vy *= -1;

        const currentR = neb.baseR + Math.sin(time + idx * 2) * 40;

        const grad = ctx.createRadialGradient(
          neb.x,
          neb.y,
          0,
          neb.x,
          neb.y,
          currentR
        );
        grad.addColorStop(0, `rgba(${neb.color}, 0.07)`);
        grad.addColorStop(0.45, `rgba(${neb.color}, 0.025)`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(neb.x, neb.y, currentR, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Interactive Cursor Flare Spotlight
      const cursorGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        380
      );
      cursorGlow.addColorStop(0, 'rgba(255, 85, 0, 0.09)');
      cursorGlow.addColorStop(0.5, 'rgba(255, 120, 40, 0.03)');
      cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 380, 0, Math.PI * 2);
      ctx.fill();

      // 3. Connect nearby particles with delicate energy constellation lines
      const maxConnectDistance = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const alpha = (1 - dist / maxConnectDistance) * 0.16;
            ctx.strokeStyle = `rgba(255, 100, 20, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update and render drifting constellation particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Subtle gravitational attraction to cursor if nearby
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          p.x += (dx / dist) * 0.4;
          p.y += (dy / dist) * 0.4;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.opacity = p.baseOpacity + Math.sin(time * 2 + p.x) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isOrange
          ? `rgba(255, 85, 0, ${Math.max(0.1, p.opacity)})`
          : `rgba(255, 255, 255, ${Math.max(0.15, p.opacity * 0.9)})`;
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
      {/* 1. Hardware Accelerated Living Canvas with Constellations & Nebulae */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. Delicate Architectural Spatial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_45%,#000_65%,transparent_100%)] opacity-85" />

      {/* 3. Subtle Film Grain Atmosphere */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-screen bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
    </div>
  );
};
