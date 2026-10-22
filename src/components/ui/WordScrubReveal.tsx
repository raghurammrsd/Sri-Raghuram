import React from 'react';
import { motion } from 'framer-motion';

interface WordScrubRevealProps {
  text: string;
  className?: string;
}

export const WordScrubReveal: React.FC<WordScrubRevealProps> = ({ text, className = "" }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`font-sans leading-relaxed text-warm-white ${className}`}
    >
      {text}
    </motion.p>
  );
};
