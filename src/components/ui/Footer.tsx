import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    sound.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-charcoal-950 border-t border-white/[0.06] text-warm-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-black text-warm-white">{PERSONAL_INFO.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
            </div>
            <p className="font-mono text-xs text-warm-dark">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-warm-white font-medium">IST {time || '20:10'}</span>
              <span className="text-warm-dark">· INDIA</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-warm-white transition-all flex items-center gap-1.5 hover:bg-white/5"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">TOP</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-warm-dark">
          <div>
            <span>©{PERSONAL_INFO.copyrightYear} MOHAN SRI RAGHURAM. ALL RIGHTS RESERVED.</span>
          </div>
          <div>
            <span>PARUL UNIVERSITY CSE (AI) · PRACTICAL AI SYSTEMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
