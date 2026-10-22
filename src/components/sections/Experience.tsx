import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { PedigreeSphere3D } from '../3d/PedigreeSphere3D';
import { FileDown, GraduationCap, Award, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-6 sm:py-8 lg:py-10 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-electric-glow rounded-full blur-[200px] pointer-events-none opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Header with Solid Orange Banner Element */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
                [ 05 / 05 ]
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                // PEDIGREE & VERIFIED CREDENTIALS
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-syne text-2xl sm:text-4xl font-black uppercase tracking-tight">
              <span className="text-warm-white">ACADEMIC FOUNDATION.</span>
              <span className="bg-electric-orange text-charcoal-950 px-3 py-0.5 rounded-sm inline-block shadow-lg">
                VERIFIED RIGOR.
              </span>
            </div>
          </div>

          <div className="font-mono text-xs text-warm-muted">
            <span className="text-emerald-400 font-bold">●</span> ACTIVE ACADEMIC STANDING · B.TECH CSE (AI)
          </div>
        </div>

        {/* 3-Column Spatial HUD: Left University | Center 3D Gimbal | Right Resume Console (Zero bullet points!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto py-3">
          {/* Left Column (5 Cols): Academic Rigor Console */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-orange/15 border border-electric-orange/30 flex items-center justify-center text-electric-orange">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-warm-white leading-tight">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p className="font-mono text-[11px] text-warm-muted">{EDUCATION_DATA.location}</p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-electric-orange px-2.5 py-0.5 rounded-full bg-electric-orange/10 border border-electric-orange/25 font-bold">
                  {EDUCATION_DATA.period}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] text-warm-muted uppercase tracking-wider block mb-1">
                  DEGREE & CONCENTRATION:
                </span>
                <p className="font-syne text-lg font-bold text-warm-cream leading-snug">
                  {EDUCATION_DATA.degree}
                </p>
              </div>

              {/* CGPA Badge with Glowing Emerald Accent */}
              <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-emerald-500/30 flex items-center justify-between mb-4 shadow-inner">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs text-warm-muted uppercase">ACADEMIC STANDING:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-emerald-400 font-bold">CUMULATIVE CGPA:</span>
                  <span className="font-mono text-base font-black text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">
                    {EDUCATION_DATA.cgpa}
                  </span>
                </div>
              </div>

              {/* Core Disciplines Narrative (Zero bullet points!) */}
              <div className="p-3.5 rounded-xl bg-charcoal-950/60 border border-white/[0.06] mb-4">
                <span className="font-mono text-[10px] text-electric-orange uppercase tracking-wider block mb-1 font-bold">
                  RIGOROUS CONCENTRATIONS:
                </span>
                <p className="font-sans text-xs text-warm-muted leading-relaxed">
                  Deep foundations in Data Structures & Algorithms, Operating Systems, Machine Learning Architectures, Compiler Automata, and Distributed Database Systems.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
              <span>B.TECH CSE (AI) · 2023–2027</span>
              <span className="text-emerald-400 font-semibold">HONORS STANDING</span>
            </div>
          </div>

          {/* Center Column (3 Cols): Bespoke 3D Academic Gimbal */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center relative">
            <div className="relative w-full aspect-square max-w-[270px] sm:max-w-[310px] mx-auto flex items-center justify-center">
              <PedigreeSphere3D />
            </div>

            {/* Floating Spatial Telemetry Pill */}
            <div className="mt-1 px-3 py-1 rounded-full bg-charcoal-900/90 border border-amber-400/30 backdrop-blur-xl shadow-xl flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span className="font-mono text-[10px] text-warm-white font-bold tracking-wider uppercase">
                ACADEMIC RIGOR // 8.21 CGPA
              </span>
            </div>
          </div>

          {/* Right Column (4 Cols): Official Verified Resume Download Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-charcoal-900/80 border border-electric-orange/30 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-electric-orange/15 border border-electric-orange/40 flex items-center justify-center text-electric-orange mb-1 shadow-[0_0_20px_rgba(255,85,0,0.2)]">
                <FileDown className="w-6 h-6" />
              </div>

              <h4 className="font-syne text-2xl font-black text-warm-white tracking-tight">
                Official Resume
              </h4>

              <p className="font-sans text-xs text-warm-muted leading-relaxed">
                Direct PDF download containing verified technical architectures, production internship deliverables, repositories, and academic transcripts.
              </p>

              {/* Document Metadata Box */}
              <div className="p-3 rounded-xl bg-charcoal-950/80 border border-white/[0.08] font-mono text-xs text-warm-cream space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-warm-dark">DOCUMENT:</span>
                  <span className="text-electric-orange font-bold">PDF (OFFICIAL)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-dark">LAST VERIFIED:</span>
                  <span className="text-emerald-400 font-bold">OCTOBER 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-dark">STATUS:</span>
                  <span className="text-cyan-400 font-bold">PRODUCTION READY</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-2 border-t border-white/[0.08]">
              <Magnetic strength={0.3}>
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Mohan_Sri_Raghuram_resume.pdf"
                  onClick={() => sound.click()}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-electric-orange text-white font-mono text-xs font-black tracking-wider hover:bg-electric-light transition-all shadow-xl shadow-electric-orange/25 cursor-pointer"
                  data-cursor-text="DOWNLOAD"
                >
                  <FileDown className="w-4 h-4" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-electric-orange">●</span>
            <span className="text-warm-muted">INSTITUTION CODE: PU-CSE-AI · VERIFIED ENROLLMENT</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">HASH ID: #MSR-ACAD-2027</span>
        </div>
      </div>
    </section>
  );
};
