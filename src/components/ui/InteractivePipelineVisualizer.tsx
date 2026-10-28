import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, Zap, CheckCircle2, Activity, GitCommit } from 'lucide-react';
import { sound } from '../../utils/sound';

interface PipelineVisualizerProps {
  systemId: string;
}

export const InteractivePipelineVisualizer: React.FC<PipelineVisualizerProps> = ({ systemId }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [packetCount, setPacketCount] = useState(14280);
  const [liveLatency, setLiveLatency] = useState(412);

  const isLLM = systemId === 'llm-entity-extraction';

  // Live telemetry pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 8) + 3);
      setLiveLatency(380 + Math.floor(Math.random() * 65));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const nodes = isLLM
    ? [
        {
          id: 0,
          label: 'RAW CORPUS STREAM',
          sub: '600+ Unstructured Feeds',
          icon: Network,
          spec: 'JSON & HTML Payloads',
          status: 'ACTIVE',
        },
        {
          id: 1,
          label: 'SUB-SECOND GROQ ROUTER',
          sub: 'Llama-3 70B Entity Extractor',
          icon: Zap,
          spec: '< 450ms Classification',
          status: 'INSPECTING',
        },
        {
          id: 2,
          label: 'GEMINI DEEP SYNTHESIS',
          sub: 'Pydantic v2 Schema Guard',
          icon: Cpu,
          spec: '99.4% Validated JSON',
          status: 'VERIFIED',
        },
        {
          id: 3,
          label: 'KNOWLEDGE GRAPH DB',
          sub: 'PostgreSQL Relational Ledger',
          icon: Database,
          spec: 'ACID Relational Edges',
          status: 'SYNCED',
        },
      ]
    : [
        {
          id: 0,
          label: '600+ SOURCE FEED MATRIX',
          sub: 'AsyncIO Distributed Ingestion',
          icon: Network,
          spec: 'Crawl4AI & Playwright Pool',
          status: 'STREAMING',
        },
        {
          id: 1,
          label: '64-WORKER CONCURRENCY',
          sub: 'Exponential Backoff Coroutines',
          icon: Zap,
          spec: 'Dead-Letter Queue Buffering',
          status: 'PROCESSING',
        },
        {
          id: 2,
          label: 'SCHEMA CONFORMANCE ENGINE',
          sub: 'Real-Time Payload Verification',
          icon: Cpu,
          spec: 'Corrupted Data Auto-Purge',
          status: 'FILTERING',
        },
        {
          id: 3,
          label: 'POSTGRESQL BATCH WRITER',
          sub: 'Connection Pool Upsert Ledger',
          icon: Database,
          spec: '< 850ms Bulk Transactions',
          status: 'COMMITTED',
        },
      ];

  return (
    <div className="p-6 rounded-2xl bg-white/95 border border-[#e5d3af] shadow-[0_12px_40px_rgba(121,13,22,0.06)] relative overflow-hidden flex flex-col justify-between">
      {/* Dynamic Background Grid and Ambient Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#790d16]/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Ticker */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#e5d3af]/50">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
          </span>
          <span className="font-mono text-[10px] text-warm-white font-black tracking-widest uppercase">
            LIVE ARCHITECTURE BUS · {isLLM ? 'MULTI-MODEL ROUTING' : 'ASYNC CONCURRENCY'}
          </span>
        </div>
        <div className="font-mono text-[10px] text-electric-orange font-bold flex items-center gap-1.5">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>{liveLatency}ms LATENCY</span>
        </div>
      </div>

      {/* 4-Stage Interactive Pipeline Flow with Animated Laser Rails */}
      <div className="space-y-3 relative z-10">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isHovered = activeNode === index;

          return (
            <React.Fragment key={node.id}>
              <motion.div
                onMouseEnter={() => {
                  sound.hover();
                  setActiveNode(index);
                }}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between relative overflow-hidden ${
                  isHovered
                    ? 'bg-[#f5efe1] border-electric-orange shadow-[0_4px_20px_rgba(121,13,22,0.12)]'
                    : 'bg-[#fbf8f2] border-[#e5d3af] hover:border-[#aec4d4]'
                }`}
              >
                {/* Active Emitter Glow Bar */}
                {isHovered && (
                  <motion.div
                    layoutId="activePipelineBar"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-electric-orange shadow-[0_0_12px_rgba(121,13,22,0.4)]"
                  />
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                      isHovered
                        ? 'bg-[#790d16]/15 border-electric-orange text-electric-orange'
                        : 'bg-[#e5d3af]/30 border-[#e5d3af] text-warm-dark'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-electric-orange" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-warm-dark font-bold">
                        0{index + 1}
                      </span>
                      <h4 className="font-syne text-xs font-bold text-warm-white tracking-wide">
                        {node.label}
                      </h4>
                    </div>
                    <p className="font-mono text-[10px] text-warm-dark">{node.sub}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-[10px] text-warm-white font-bold block">
                    {node.spec}
                  </span>
                  <span className="font-mono text-[9px] text-electric-orange font-bold tracking-wider">
                    ● {node.status}
                  </span>
                </div>
              </motion.div>

              {/* Animated Laser Conduit Rail between Nodes */}
              {index < nodes.length - 1 && (
                <div className="flex items-center justify-center h-4 relative">
                  <svg className="w-full h-4 overflow-visible" fill="none">
                    {/* Background faint guide track */}
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="16"
                      stroke="rgba(121, 13, 22, 0.2)"
                      strokeWidth="1.5"
                    />
                    {/* Glowing pulsed beam */}
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="16"
                      stroke="#790d16"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      className="animate-[dash_0.8s_linear_infinite]"
                    />
                    {/* Traveling Photons */}
                    <circle cx="50%" cy="8" r="2.5" fill="#790d16">
                      <animate
                        attributeName="cy"
                        values="0; 16"
                        dur="0.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Live Hardware Telemetry Footer */}
      <div className="pt-4 mt-4 border-t border-[#e5d3af]/50 flex items-center justify-between font-mono text-[10px]">
        <div className="flex items-center gap-2 text-warm-dark font-medium">
          <GitCommit className="w-3.5 h-3.5 text-electric-orange" />
          <span>PAYLOADS PROCESSED:</span>
          <span className="text-warm-white font-bold">{packetCount.toLocaleString()}</span>
        </div>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 0 RUNTIME DRIFT
        </span>
      </div>
    </div>
  );
};
