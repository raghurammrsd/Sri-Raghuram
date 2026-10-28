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
    <footer className="py-8 bg-transparent border-t-2 border-[#e5d3af]/70 text-[#333333] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#e5d3af]/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-black text-black">{PERSONAL_INFO.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#790d16]" />
            </div>
            <p className="font-mono text-xs text-[#555555] font-semibold">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#e5d3af] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-black font-extrabold">IST {time || '22:30'}</span>
              <span className="text-[#666666]">· INDIA</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#790d16] text-white hover:bg-[#5c0910] shadow-sm transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="font-mono text-[11px] font-black">TOP</span>
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10.5px] text-[#555555]">
          <div>
            <span className="font-semibold text-black">©{PERSONAL_INFO.copyrightYear} MOHAN SRI RAGHURAM. ALL RIGHTS RESERVED.</span>
          </div>
          <div>
            <span className="font-semibold text-black">PARUL UNIVERSITY CSE (AI) · PRACTICAL AI SYSTEMS ARCHITECT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
