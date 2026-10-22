import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 bg-[#060608] border-t border-white/[0.08] text-honey-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand & Subtitle */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-black text-honey-bone">{PERSONAL_INFO.brand}</span>
              <span className="font-mono text-xs text-honey-darkMuted">©{PERSONAL_INFO.copyrightYear}</span>
            </div>
            <p className="font-mono text-xs text-honey-muted max-w-md">
              Founding AI Engineer · Deterministic Codebase AST · PyPI published author
            </p>
          </div>

          {/* Time & Location */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-honey-bone font-medium">IST {time || '19:50'}</span>
              <span className="text-honey-darkMuted">· BHARAT</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-honey-bone transition-all flex items-center gap-1.5 hover:bg-white/5"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Design Tribute */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-honey-darkMuted">
          <div>
            <span>MOHAN SRI RAGHURAM · ALL CODE & ARCHITECTURE VERIFIED</span>
          </div>
          <div className="flex items-center gap-3">
            <span>DESIGN LANGUAGE INSPIRED BY</span>
            <a
              href="https://www.withhoney.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honey-bone hover:text-honey-accent transition-colors underline underline-offset-4"
            >
              HONEY©
            </a>
            <span>· KILLERPORTFOLIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
