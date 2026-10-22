import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { PedigreeSphere3D } from '../3d/PedigreeSphere3D';
import { FileDown, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-8 sm:py-12 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
                05 · ACADEMIC PEDIGREE
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                FOUNDATIONAL RIGOR & CREDENTIALS
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight text-warm-white leading-tight">
              Academic Foundation. <span className="text-electric-orange">Verified rigor.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-warm-muted">
            <span className="text-electric-orange font-bold">●</span> ACTIVE ENROLLMENT · B.TECH CSE (AI)
          </div>
        </motion.div>

        {/* 12-Column Case Study: Left Academic Rigor | Right 3D Gyroscope & Resume Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Left Column (7 Cols): University & Concentration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 p-8 rounded-2xl bg-charcoal-900/60 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-6"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-warm-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne text-2xl font-bold text-warm-white leading-tight">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p className="font-mono text-xs text-warm-muted">{EDUCATION_DATA.location}</p>
                  </div>
                </div>

                <span className="font-mono text-xs text-warm-white px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-bold">
                  {EDUCATION_DATA.period}
                </span>
              </div>

              <div className="mb-6">
                <span className="font-mono text-[10px] text-warm-muted uppercase tracking-wider block mb-1">
                  DEGREE & CONCENTRATION:
                </span>
                <p className="font-syne text-xl font-bold text-warm-cream leading-snug">
                  {EDUCATION_DATA.degree}
                </p>
              </div>

              {/* CGPA Badge with Pure Orange and White */}
              <div className="p-4 rounded-xl bg-charcoal-950/80 border border-electric-orange/30 flex items-center justify-between mb-6 shadow-inner">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-electric-orange" />
                  <span className="font-mono text-xs text-warm-muted uppercase">ACADEMIC STANDING:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-warm-muted font-bold">CUMULATIVE CGPA:</span>
                  <span className="font-mono text-lg font-black text-warm-white bg-electric-orange/15 px-3 py-0.5 rounded-lg border border-electric-orange/40 shadow-[0_0_15px_rgba(255,85,0,0.2)]">
                    {EDUCATION_DATA.cgpa} / 10.0
                  </span>
                </div>
              </div>

              {/* Coursework Foundations */}
              <div>
                <span className="font-mono text-[10px] text-warm-muted uppercase tracking-wider block mb-2 font-bold">
                  RIGOROUS TECHNICAL DISCIPLINES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.coursework.map((course) => (
                    <span
                      key={course}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-warm-cream"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-warm-dark">
              <span>B.TECH CSE (AI) · 2023–2027</span>
              <span className="text-electric-orange font-bold">HONORS STANDING</span>
            </div>
          </motion.div>

          {/* Right Column (5 Cols): 3D Gyroscope & Official Resume Download */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* 3D Gyroscope */}
            <div className="relative w-full aspect-video max-h-[200px] rounded-2xl bg-charcoal-900/50 border border-white/[0.08] flex items-center justify-center overflow-hidden">
              <PedigreeSphere3D />
            </div>

            {/* Official Resume Download Card */}
            <div className="p-6 rounded-2xl bg-charcoal-900/60 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-syne text-xl font-bold text-warm-white">
                    Official Resume
                  </h4>
                  <span className="font-mono text-[10px] text-warm-white font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20">
                    UPDATED OCT 2026
                  </span>
                </div>
                <p className="font-sans text-xs text-warm-muted leading-relaxed">
                  Comprehensive technical track record, verified internship deliverables, repositories, and academic transcripts.
                </p>
              </div>

              <Magnetic strength={0.3}>
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Mohan_Sri_Raghuram_resume.pdf"
                  onClick={() => sound.click()}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-electric-orange text-white font-mono text-xs font-black tracking-wider hover:bg-electric-light transition-all shadow-xl shadow-electric-orange/20 cursor-pointer"
                  data-cursor-text="DOWNLOAD"
                >
                  <FileDown className="w-4 h-4" />
                  <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
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
