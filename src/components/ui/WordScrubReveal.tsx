import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WordScrubRevealProps {
  text: string;
  className?: string;
}

export const WordScrubReveal: React.FC<WordScrubRevealProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"],
  });

  return (
    <p ref={containerRef} className={`flex flex-wrap gap-x-2.5 gap-y-1.5 leading-relaxed ${className}`}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={index} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ['#5c5852', '#f5f2eb']);

  return (
    <motion.span
      style={{ opacity, color }}
      className="transition-colors duration-150 inline-block font-sans font-medium"
    >
      {children}
    </motion.span>
  );
};
