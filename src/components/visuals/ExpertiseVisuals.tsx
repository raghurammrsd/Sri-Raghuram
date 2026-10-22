import React from 'react';

export const ASTGraphVisual: React.FC = () => {
  return (
    <div className="w-full py-2 px-3 rounded-xl bg-charcoal-950/90 border border-cyan-500/25 relative overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between text-warm-muted mb-1.5 pb-1 border-b border-white/[0.06]">
        <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>AST SYMBOL RESOLVER</span>
        </span>
        <span className="text-emerald-400 font-semibold">0.8ms</span>
      </div>

      {/* Mini Visual Code Topology Graph */}
      <div className="flex items-center justify-between gap-1 text-[9px] text-warm-cream">
        <div className="px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold">
          RepoRoot
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 via-cyan-400 to-blue-500/50 relative">
          <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-[ping_1.5s_infinite]" />
        </div>
        <div className="px-2 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-300 font-bold">
          ASTGraph
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-emerald-500/50" />
        <div className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
          MCP
        </div>
      </div>
    </div>
  );
};

export const SchemaFlowVisual: React.FC = () => {
  return (
    <div className="w-full py-2 px-3 rounded-xl bg-charcoal-950/90 border border-blue-500/25 relative overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between text-warm-muted mb-1.5 pb-1 border-b border-white/[0.06]">
        <span className="flex items-center gap-1.5 text-blue-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>PYDANTIC CONTRACT</span>
        </span>
        <span className="text-blue-300 font-semibold">100% STRICT</span>
      </div>

      {/* Contract Verification Progress Bar with Pulse Animation */}
      <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-warm-dark">
          <span>PAYLOAD VALIDATION</span>
          <span className="text-cyan-400 font-bold">ZERO DRIFT</span>
        </div>
        <div className="w-full bg-charcoal-900 h-1.5 rounded-full overflow-hidden p-0.5 border border-white/5">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-full rounded-full w-[96%] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const StreamPacketVisual: React.FC = () => {
  return (
    <div className="w-full py-2 px-3 rounded-xl bg-charcoal-950/90 border border-red-500/25 relative overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between text-warm-muted mb-1.5 pb-1 border-b border-white/[0.06]">
        <span className="flex items-center gap-1.5 text-red-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          <span>600+ LIVE INGESTION</span>
        </span>
        <span className="text-amber-400 font-semibold">64 WORKERS</span>
      </div>

      {/* Live Concurrent Worker Signals */}
      <div className="flex items-center justify-between gap-1 pt-0.5">
        {[40, 75, 95, 60, 85, 100, 70, 90, 65, 80].map((height, i) => (
          <div key={i} className="flex-1 bg-charcoal-900 h-4 rounded-sm flex items-end overflow-hidden">
            <div
              className="w-full bg-gradient-to-t from-red-600 to-amber-400 rounded-sm transition-all duration-300"
              style={{
                height: `${height}%`,
                animation: `pulse ${0.8 + (i % 5) * 0.2}s infinite alternate`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const AudioWaveVisual: React.FC = () => {
  return (
    <div className="w-full py-2 px-3 rounded-xl bg-charcoal-950/90 border border-electric-orange/25 relative overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between text-warm-muted mb-1 pb-1 border-b border-white/[0.06]">
        <span className="flex items-center gap-1.5 text-electric-orange font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
          <span>VOICE AI · SPATIAL SYNC</span>
        </span>
        <span className="text-electric-orange font-semibold">DUNDOO CORE</span>
      </div>

      {/* Animated Audio Waveform Spectrum */}
      <div className="flex items-center justify-center gap-1 h-5 pt-1">
        {[4, 12, 18, 8, 16, 20, 14, 18, 10, 16, 12, 6].map((h, i) => (
          <span
            key={i}
            className="w-1 bg-gradient-to-t from-electric-orange to-amber-300 rounded-full inline-block"
            style={{
              height: `${h}px`,
              animation: `pulse ${0.7 + (i % 6) * 0.15}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
