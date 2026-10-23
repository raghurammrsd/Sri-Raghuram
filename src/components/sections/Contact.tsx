import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, ExternalLink, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

interface ContactProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, copied }) => {
  const handleHeroAction = () => {
    sound.success();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff5500', '#f5f2eb', '#ff7728', '#ffffff'],
    });
    onCopyEmail();
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 min-h-screen flex flex-col justify-between py-10 sm:py-14 border-b border-white/[0.08] relative bg-transparent"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-electric-glow rounded-full blur-[200px] pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col justify-between space-y-6">
        {/* Top Marker */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-3 py-1 rounded">
            <span>[ TRANSMISSION ]</span>
            <span>LET'S CONNECT</span>
          </div>
        </div>

        {/* Center Headline with Kinetic Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="my-auto py-4"
        >
          <div className="flex flex-col items-center justify-center gap-2 font-syne text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] mb-4">
            <span className="text-warm-white">BUILD SOMETHING</span>
            <span
              style={{ backgroundColor: '#ff5500', color: '#000000' }}
              className="px-6 sm:px-10 py-1 sm:py-2 rounded-sm inline-block font-black shadow-2xl"
            >
              INTELLIGENT.
            </span>
          </div>

          <p className="max-w-xl mx-auto font-mono text-xs sm:text-sm text-warm-muted uppercase tracking-widest mb-8">
            Available for AI engineering, intelligent developer tools, and scalable system architectures.
          </p>

          {/* Primary Action Button (Glassomorphic) */}
          <div className="flex justify-center mb-8">
            <Magnetic strength={0.35}>
              <button
                onClick={handleHeroAction}
                className="px-8 sm:px-14 py-4 sm:py-5 rounded-full bg-gradient-to-r from-electric-orange via-electric-orange to-electric-light text-charcoal-950 font-mono text-lg sm:text-2xl font-black tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_35px_rgba(255,85,0,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-xl border border-white/30 cursor-pointer flex items-center gap-3.5"
                data-cursor-text="FIRE"
              >
                <span>DISPATCH EMAIL</span>
                <span className="text-base sm:text-xl font-black">→</span>
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Direct Channels 4-Box Grid (Zero bullet points!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left max-w-4xl mx-auto w-full mb-4">
          {/* Email */}
          <div className="p-4 sm:p-5 rounded-xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-warm-muted uppercase">EMAIL</span>
                <Mail className="w-3.5 h-3.5 text-electric-orange" />
              </div>
              <p className="font-mono text-xs text-warm-white truncate font-semibold">
                {PERSONAL_INFO.email}
              </p>
            </div>
            <button
              onClick={() => {
                sound.click();
                onCopyEmail();
              }}
              className="mt-3 pt-2.5 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}</span>
            </button>
          </div>

          {/* LinkedIn */}
          <div className="p-4 sm:p-5 rounded-xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-warm-muted uppercase">LINKEDIN</span>
                <LinkedinIcon className="w-3.5 h-3.5 text-electric-orange" />
              </div>
              <p className="font-mono text-xs text-warm-white truncate font-semibold">
                in/msriraghuram
              </p>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click()}
              className="mt-3 pt-2.5 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>CONNECT</span>
            </a>
          </div>

          {/* GitHub */}
          <div className="p-4 sm:p-5 rounded-xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-warm-muted uppercase">GITHUB</span>
                <GithubIcon className="w-3.5 h-3.5 text-electric-orange" />
              </div>
              <p className="font-mono text-xs text-warm-white truncate font-semibold">
                raghurammrsd
              </p>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click()}
              className="mt-3 pt-2.5 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>EXPLORE CODE</span>
            </a>
          </div>

          {/* Phone */}
          <div className="p-4 sm:p-5 rounded-xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-warm-muted uppercase">PHONE</span>
                <Phone className="w-3.5 h-3.5 text-electric-orange" />
              </div>
              <p className="font-mono text-xs text-warm-white truncate font-semibold">
                {PERSONAL_INFO.phone}
              </p>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              onClick={() => sound.click()}
              className="mt-3 pt-2.5 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>CALL DIRECT</span>
            </a>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div>
            <span>MOHAN SRI RAGHURAM · BASED IN INDIA · GLOBAL MISSIONS</span>
          </div>
          <div>
            <span className="text-electric-orange font-bold">●</span> ACTIVE 2026
          </div>
        </div>
      </div>
    </section>
  );
};
