import React, { useState } from 'react';
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
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

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

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    sound.click();
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry — AI Engineering Collaboration'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-b border-white/[0.06] relative overflow-hidden bg-charcoal-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-glow rounded-full blur-[180px] pointer-events-none opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Marker */}
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded mb-8">
          <span>[ 05 / 05 ]</span>
          <span>// TRANSMISSION</span>
        </div>

        {/* Memorable Headline */}
        <h2 className="font-syne text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-warm-white uppercase leading-[0.93] mb-8">
          BUILD SOMETHING
          <br />
          <span className="text-electric-orange">INTELLIGENT.</span>
        </h2>

        <p className="max-w-xl mx-auto font-mono text-xs sm:text-sm text-warm-muted mb-12 uppercase tracking-widest">
          Available for AI engineering, intelligent developer tools, and scalable system architectures.
        </p>

        {/* Primary Action Button */}
        <div className="flex justify-center mb-16">
          <Magnetic strength={0.35}>
            <button
              onClick={handleHeroAction}
              className="px-10 sm:px-16 py-5 sm:py-7 rounded-full bg-electric-orange text-white font-mono text-xl sm:text-3xl font-black tracking-tight hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-electric-orange/40 cursor-pointer flex items-center gap-4"
              data-cursor-text="FIRE"
            >
              <span>DISPATCH EMAIL</span>
              <span className="text-lg sm:text-2xl">→</span>
            </button>
          </Magnetic>
        </div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-4xl mx-auto mb-16">
          {/* Direct Email */}
          <div className="p-6 rounded-2xl bg-charcoal-850/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
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
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}</span>
            </button>
          </div>

          {/* LinkedIn */}
          <div className="p-6 rounded-2xl bg-charcoal-850/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
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
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>CONNECT</span>
            </a>
          </div>

          {/* GitHub */}
          <div className="p-6 rounded-2xl bg-charcoal-850/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
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
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>EXPLORE CODE</span>
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-charcoal-850/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
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
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-electric-orange hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>CALL DIRECT</span>
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-charcoal-850/90 border border-white/[0.08] text-left">
          <div className="flex items-center gap-2 pb-4 border-b border-white/[0.06] mb-6">
            <Sparkles className="w-4 h-4 text-electric-orange" />
            <h3 className="font-mono text-xs font-bold text-warm-white uppercase tracking-wider">
              QUICK DISPATCH TRANSMISSION
            </h3>
          </div>

          <form onSubmit={handleSendMail} className="space-y-4">
            <div>
              <label className="block font-mono text-[11px] text-warm-muted uppercase mb-1.5">
                Topic / Project Brief
              </label>
              <input
                type="text"
                placeholder="e.g. AI Engineering Collaboration / MCP System"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-warm-white text-sm font-sans focus:outline-none focus:border-electric-orange"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-warm-muted uppercase mb-1.5">
                Message / Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Outline the problem, system requirements, or mission..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-warm-white text-sm font-sans focus:outline-none focus:border-electric-orange"
                required
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  sound.click();
                  onCopyEmail();
                }}
                className="font-mono text-xs text-warm-muted hover:text-warm-white flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy email instead</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-electric-orange text-white font-mono text-xs font-bold tracking-wider hover:opacity-95 transition-opacity flex items-center gap-2 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND MESSAGE</span>
              </button>
            </div>

            {sentSuccess && (
              <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs text-center">
                Opened your email client with message prepared!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
