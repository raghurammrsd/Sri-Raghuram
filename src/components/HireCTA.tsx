import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Copy, Check, Send, Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HireCTAProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const HireCTA: React.FC<HireCTAProps> = ({ onCopyEmail, copied }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleHereClick = () => {
    // Fire festive confetti like Honey!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4820', '#f4f1ee', '#f59e0b', '#ffffff'],
    });
    onCopyEmail();
    setShowDrawer(true);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Collaboration Inquiry — Raghuram Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="hire" className="py-24 sm:py-36 border-b border-white/[0.08] relative overflow-hidden bg-[#070709]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Monospace Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-3 py-1 rounded mb-8">
          <span>[ 10 / 10 ]</span>
          <span>// DISPATCH & CONTACT</span>
        </div>

        {/* Honey's Signature "WHERE DO I SIGN?" */}
        <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-honey-bone uppercase leading-[0.95] mb-6">
          WHERE DO WE
          <br />
          START?
        </h2>

        <p className="max-w-xl mx-auto font-mono text-xs sm:text-sm text-honey-muted mb-12 uppercase tracking-widest">
          No bureaucracy. No 3-week approval loops. Direct access to a founding engineer.
        </p>

        {/* Honey's Massive "HERE" Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleHereClick}
            className="group relative inline-flex items-center justify-center px-12 sm:px-20 py-6 sm:py-8 rounded-full bg-honey-accent text-white font-mono text-3xl sm:text-5xl font-black tracking-tight hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-honey-accent/30 hover:shadow-honey-accent/50 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-4">
              <span>HERE</span>
              <span className="text-xl sm:text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-honey-accent to-[#ff6640] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Direct Contact Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {/* Email */}
          <div className="p-5 rounded-2xl bg-[#111114] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-honey-muted uppercase">DIRECT EMAIL</span>
                <Mail className="w-3.5 h-3.5 text-honey-accent" />
              </div>
              <p className="font-mono text-xs text-honey-bone truncate font-semibold">
                {PERSONAL_INFO.email}
              </p>
            </div>
            <button
              onClick={onCopyEmail}
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-honey-accent hover:underline flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}</span>
            </button>
          </div>

          {/* Phone / WhatsApp */}
          <div className="p-5 rounded-2xl bg-[#111114] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-honey-muted uppercase">PHONE / WA</span>
                <Phone className="w-3.5 h-3.5 text-honey-accent" />
              </div>
              <p className="font-mono text-xs text-honey-bone truncate font-semibold">
                {PERSONAL_INFO.phone}
              </p>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-honey-accent hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>DIRECT CALL</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-5 rounded-2xl bg-[#111114] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-honey-muted uppercase">PROFESSIONAL</span>
                <LinkedinIcon className="w-3.5 h-3.5 text-honey-accent" />
              </div>
              <p className="font-mono text-xs text-honey-bone truncate font-semibold">
                in/msriraghuram
              </p>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-honey-accent hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>VIEW PROFILE</span>
            </a>
          </div>

          {/* GitHub */}
          <div className="p-5 rounded-2xl bg-[#111114] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-honey-muted uppercase">CODE VAULT</span>
                <GithubIcon className="w-3.5 h-3.5 text-honey-accent" />
              </div>
              <p className="font-mono text-xs text-honey-bone truncate font-semibold">
                raghurammrsd
              </p>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-honey-accent hover:underline flex items-center gap-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              <span>INSPECT CODE</span>
            </a>
          </div>
        </div>

        {/* Quick Message Drawer / Form Modal */}
        {showDrawer && (
          <div className="mt-12 max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#111114] border border-honey-accent/30 text-left animate-in slide-in-from-bottom-2 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-honey-accent" />
                <h3 className="font-mono text-sm font-bold text-honey-bone uppercase tracking-wider">
                  DIRECT TRANSMISSION TO RAGHURAM
                </h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="font-mono text-xs text-honey-muted hover:text-white"
              >
                [CLOSE ×]
              </button>
            </div>

            <form onSubmit={handleSendMail} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-honey-muted uppercase mb-1.5">
                  Subject / Mission
                </label>
                <input
                  type="text"
                  placeholder="e.g. Founding AI Engineer Role / CodeGraph MCP Integration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/10 text-honey-bone text-sm font-sans focus:outline-none focus:border-honey-accent"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-honey-muted uppercase mb-1.5">
                  Brief Overview / Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about the system, constraints, or bottleneck you want to solve..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/10 text-honey-bone text-sm font-sans focus:outline-none focus:border-honey-accent"
                  required
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="font-mono text-xs text-honey-muted hover:text-honey-bone flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy email instead</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-honey-accent text-white font-mono text-xs font-bold tracking-wider hover:opacity-95 transition-opacity flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH EMAIL</span>
                </button>
              </div>

              {sentSuccess && (
                <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs text-center">
                  Email client opened with pre-filled message!
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
