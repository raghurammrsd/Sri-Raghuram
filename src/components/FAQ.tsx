import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 09 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // FAQ
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            You’ve got questions.
            <br />
            We’ve got answers.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-honey-muted group-hover:text-honey-accent transition-colors pt-1">
                      {item.number}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-honey-bone group-hover:text-white transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.04] text-honey-bone shrink-0 group-hover:bg-white/[0.08] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 text-honey-accent" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pl-8 sm:pl-12 pr-6 sm:pr-16 animate-in slide-in-from-top-1">
                    <p className="text-sm sm:text-base text-honey-muted leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
