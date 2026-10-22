import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor], button, a, input, textarea');

      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor-text');
        if (text) {
          setCursorText(text);
          setCursorVariant("text");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-honey-accent pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: cursorVariant === "hover" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50 }}
      />

      {/* Trailing Fluid Halo / Label */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-honey-accent/60 pointer-events-none z-[9998] flex items-center justify-center font-mono text-[9px] font-bold tracking-wider text-honey-bone"
        animate={{
          x: cursorVariant === "text" ? mousePosition.x - 36 : mousePosition.x - 18,
          y: cursorVariant === "text" ? mousePosition.y - 36 : mousePosition.y - 18,
          width: cursorVariant === "text" ? 72 : cursorVariant === "hover" ? 48 : 36,
          height: cursorVariant === "text" ? 72 : cursorVariant === "hover" ? 48 : 36,
          backgroundColor: cursorVariant === "hover" ? "rgba(255, 72, 32, 0.15)" : cursorVariant === "text" ? "rgba(255, 72, 32, 0.85)" : "rgba(255, 255, 255, 0.03)",
          borderColor: cursorVariant === "hover" ? "rgba(255, 72, 32, 0.8)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-black uppercase text-center px-1 font-mono font-black">{cursorText}</span>
        )}
      </motion.div>
    </>
  );
};
