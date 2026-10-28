import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

interface ContactProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, copied }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // 120fps Hardware-Accelerated Scroll Motion Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const handleHeroAction = () => {
    sound.success();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#790d16', '#c4a47c', '#8da8be', '#f5efe1'],
    });
    onCopyEmail();
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="scroll-mt-16 min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#966b44]/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col justify-between my-auto space-y-4 sm:space-y-6">
        {/* Top Marker */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[10.5px] font-bold tracking-widest text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/30 px-3 py-1 rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
            <span>06 · GET IN TOUCH</span>
            <span>·</span>
            <span>LET'S CONNECT</span>
          </div>
        </div>

        {/* Center Headline with Kinetic Entrance & Scroll Parallax */}
        <motion.div
          style={{ y: headlineY }}
          className="my-auto py-2"
        >
          <h2 className="font-syne text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] mb-3">
            <span className="text-black">Build Something </span>
            <span className="text-[#790d16]">Intelligent.</span>
          </h2>

          <p className="max-w-xl mx-auto font-sans text-xs sm:text-sm text-[#222222] font-semibold leading-relaxed mb-6">
            Available for AI engineering, intelligent developer tools, and scalable system architectures.
          </p>

          {/* Primary Action Button (Deep Burgundy Pill with Glow) */}
          <div className="flex justify-center mb-4">
            <Magnetic strength={0.35}>
              <button
                onClick={handleHeroAction}
                className="px-8 sm:px-14 py-3.5 sm:py-4 rounded-full bg-[#790d16] text-[#ffffff] hover:bg-[#5c0910] font-mono text-base sm:text-xl font-black tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_10px_35px_rgba(121,13,22,0.35)] border border-[#790d16]/30 cursor-pointer flex items-center gap-3.5"
                data-cursor-text="FIRE"
              >
                <span>DISPATCH EMAIL</span>
                <span className="text-base sm:text-xl font-black">→</span>
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Direct Channels 4-Box Grid (Glassomorphic & Transparent with Scroll Parallax) */}
        <motion.div
          style={{ y: cardsY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left max-w-4xl mx-auto w-full mb-2"
        >
          {/* Email */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-4 sm:p-4.5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_25px_rgba(121,13,22,0.04)] transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#790d16] to-[#e5d3af]" />
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9.5px] text-[#555555] uppercase font-bold tracking-wider">EMAIL</span>
                <Mail className="w-3.5 h-3.5 text-[#790d16]" />
              </div>
              <p className="font-mono text-xs text-black font-black truncate">
                {PERSONAL_INFO.email}
              </p>
            </div>
            <button
              onClick={() => {
                sound.click();
                onCopyEmail();
              }}
              className="mt-3 pt-2 border-t border-[#e5d3af]/70 font-mono text-[11px] text-[#790d16] font-extrabold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-[#790d16]" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}</span>
            </button>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-4 sm:p-4.5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_25px_rgba(121,13,22,0.04)] transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#790d16] to-[#aec4d4]" />
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9.5px] text-[#555555] uppercase font-bold tracking-wider">LINKEDIN</span>
                <LinkedinIcon className="w-3.5 h-3.5 text-[#790d16]" />
              </div>
              <p className="font-mono text-xs text-black font-black truncate">
                in/msriraghuram
              </p>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click()}
              className="mt-3 pt-2 border-t border-[#e5d3af]/70 font-mono text-[11px] text-[#790d16] font-extrabold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              <span>CONNECT</span>
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-4 sm:p-4.5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_25px_rgba(121,13,22,0.04)] transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#790d16] to-[#e5d3af]" />
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9.5px] text-[#555555] uppercase font-bold tracking-wider">GITHUB</span>
                <GithubIcon className="w-3.5 h-3.5 text-[#790d16]" />
              </div>
              <p className="font-mono text-xs text-black font-black truncate">
                raghurammrsd
              </p>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click()}
              className="mt-3 pt-2 border-t border-[#e5d3af]/70 font-mono text-[11px] text-[#790d16] font-extrabold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              <span>EXPLORE CODE</span>
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-4 sm:p-4.5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_25px_rgba(121,13,22,0.04)] transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#790d16] to-[#aec4d4]" />
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9.5px] text-[#555555] uppercase font-bold tracking-wider">PHONE</span>
                <Phone className="w-3.5 h-3.5 text-[#790d16]" />
              </div>
              <p className="font-mono text-xs text-black font-black truncate">
                {PERSONAL_INFO.phone}
              </p>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              onClick={() => sound.click()}
              className="mt-3 pt-2 border-t border-[#e5d3af]/70 font-mono text-[11px] text-[#790d16] font-extrabold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              <span>CALL DIRECT</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Ticker */}
        <div className="pt-2 border-t-2 border-[#e5d3af] flex items-center justify-between font-mono text-[10.5px] sm:text-[11px] text-black font-bold">
          <div>
            <span>MOHAN SRI RAGHURAM · BASED IN INDIA · GLOBAL MISSIONS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#790d16] font-bold">●</span>
            <span>ACTIVE 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
