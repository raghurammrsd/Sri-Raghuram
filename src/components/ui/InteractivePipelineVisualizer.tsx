import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, Zap, CheckCircle2, Activity, GitCommit } from 'lucide-react';
import { sound } from '../../utils/sound';

interface PipelineVisualizerProps {
  systemId: string;
  metrics?: { label: string; value: string; color?: string }[];
}

export const InteractivePipelineVisualizer: React.FC<PipelineVisualizerProps> = ({ systemId, metrics = [] }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [packetCount, setPacketCount] = useState(14526);
  const [liveLatency, setLiveLatency] = useState(395);

  const isLLM = systemId === 'llm-entity-extraction';
  const isAtlas = systemId === 'frontier-atlas-platform' || systemId === 'frontier-atlas';

  // Live telemetry pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 8) + 3);
      setLiveLatency(380 + Math.floor(Math.random() * 45));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const nodes = isLLM
    ? [
        {
          id: 0,
          label: 'RAW CORPUS STREAM',
          sub: '600+ Unstructured Web Feeds',
          icon: Network,
          spec: 'JSON & HTML Payloads',
          status: 'ACTIVE',
        },
        {
          id: 1,
          label: 'SUB-SECOND GROQ ROUTER',
          sub: 'Llama-3 70B Entity Extraction',
          icon: Zap,
          spec: '< 450ms Classification',
          status: 'ROUTING',
        },
        {
          id: 2,
          label: 'GEMINI DEEP SYNTHESIS',
          sub: 'Pydantic v2 Schema Guardrail',
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
    : isAtlas
    ? [
        {
          id: 0,
          label: 'DEVELOPER REGISTRY BUS',
          sub: 'FastAPI High-Throughput Ingestion',
          icon: Network,
          spec: 'Pydantic v2 Schema Gate',
          status: 'ACTIVE',
        },
        {
          id: 1,
          label: 'ASYNC WORKER DISPATCHER',
          sub: 'Background Event Task Queue',
          icon: Zap,
          spec: 'Exponential Retry Coroutines',
          status: 'DISPATCHING',
        },
        {
          id: 2,
          label: 'CONTRACT AUDITOR',
          sub: 'Zero Schema Drift Validator',
          icon: Cpu,
          spec: '100% Strict Type Verification',
          status: 'ENFORCING',
        },
        {
          id: 3,
          label: 'PRODUCTION REPOSITORY',
          sub: 'PostgreSQL Multi-Tenant Storage',
          icon: Database,
          spec: 'Zero Runtime Downtime',
          status: 'PERSISTED',
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
    <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] transition-colors duration-300 shadow-[0_10px_30px_rgba(121,13,22,0.05)] relative overflow-hidden flex flex-col justify-between h-full">
      {/* Top Header Ticker */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e5d3af]/70">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#790d16] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#790d16]"></span>
          </span>
          <span className="font-mono text-[9.5px] sm:text-[10px] text-black font-black tracking-widest uppercase">
            LIVE ARCHITECTURE BUS · {isLLM ? 'MULTI-MODEL ROUTING' : isAtlas ? 'PLATFORM CONTRACT' : 'ASYNC CONCURRENCY'}
          </span>
        </div>
        <div className="font-mono text-[9.5px] sm:text-[10px] text-[#790d16] font-bold flex items-center gap-1">
          <Activity className="w-3 h-3 text-[#790d16] animate-pulse" />
          <span>{liveLatency}ms LATENCY</span>
        </div>
      </div>

      {/* 4-Stage Interactive Pipeline Flow */}
      <div className="space-y-1 relative z-10">
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
                whileHover={{ scale: 1.008, x: 2 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                className={`p-2 rounded-xl border-2 transition-all duration-150 cursor-pointer flex items-center justify-between relative overflow-hidden ${
                  isHovered
                    ? 'bg-[#fcf9f2] border-[#790d16] shadow-xs'
                    : 'bg-white border-[#e5d3af] hover:border-[#aec4d4]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isHovered && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#790d16]" />
                )}

                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 ${
                      isHovered
                        ? 'bg-[#790d16] border-[#790d16] text-white'
                        : 'bg-[#e5d3af]/25 border-[#e5d3af] text-[#790d16]'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[8.5px] text-[#790d16] font-black">
                        0{index + 1}
                      </span>
                      <h4 className="font-syne text-[10.5px] sm:text-[11px] font-extrabold text-black tracking-tight">
                        {node.label}
                      </h4>
                    </div>
                    <p className="font-mono text-[8.5px] text-[#555555] font-medium leading-none mt-0.5">{node.sub}</p>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-2">
                  <span className="font-mono text-[8.5px] sm:text-[9.5px] text-black font-extrabold block">
                    {node.spec}
                  </span>
                  <span className="font-mono text-[8.5px] text-[#790d16] font-bold tracking-wider">
                    ● {node.status}
                  </span>
                </div>
              </motion.div>

              {/* Animated Pipeline Rail between Nodes */}
              {index < nodes.length - 1 && (
                <div className="flex items-center justify-center h-1.5 relative">
                  <svg className="w-full h-1.5 overflow-visible" fill="none">
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="6"
                      stroke="rgba(121, 13, 22, 0.25)"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="6"
                      stroke="#790d16"
                      strokeWidth="2"
                      strokeDasharray="2 3"
                      className="animate-[dash_0.6s_linear_infinite]"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Live Telemetry Bus Counter */}
      <div className="pt-1.5 mt-1 border-t border-[#e5d3af]/70 flex items-center justify-between font-mono text-[8.5px] sm:text-[9px]">
        <div className="flex items-center gap-1.5 text-[#333333] font-medium">
          <GitCommit className="w-3 h-3 text-[#790d16]" />
          <span>PROCESSED:</span>
          <span className="text-black font-black">{packetCount.toLocaleString()}</span>
        </div>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 0 RUNTIME DRIFT
        </span>
      </div>

      {/* Integrated 3-Column Production Telemetry Strip */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-1.5 pt-1.5 mt-1 border-t border-[#e5d3af]/70">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="px-2 py-1.5 rounded-lg bg-[#fcf9f2] border border-[#e5d3af] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 mb-0.5">
                <span className="w-1 h-1 rounded-full bg-[#790d16]" />
                <span className="text-[8px] text-[#555555] uppercase font-bold tracking-wider truncate">
                  {m.label}
                </span>
              </div>
              <span className="text-[10px] font-black text-black truncate leading-tight">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
