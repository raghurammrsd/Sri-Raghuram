import React from 'react';

export const FallbackGraphic: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-electric-orange/30 animate-[spin_25s_linear_infinite]" />
        {/* Middle Ring */}
        <div className="absolute inset-8 rounded-full border border-warm-white/20 border-dashed animate-[spin_18s_linear_infinite_reverse]" />
        {/* Inner Ring */}
        <div className="absolute inset-16 rounded-full border border-electric-orange/50 animate-[spin_12s_linear_infinite]" />
        {/* Core Node */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-electric-orange to-amber-500 shadow-2xl shadow-electric-orange/50 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-charcoal-950" />
        </div>
        {/* Orbital Node */}
        <div className="absolute top-2 left-1/2 w-3 h-3 rounded-full bg-electric-orange animate-ping" />
      </div>
    </div>
  );
};
