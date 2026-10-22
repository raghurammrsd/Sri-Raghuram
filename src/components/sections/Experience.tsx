import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { FileDown, GraduationCap, Award, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-36 border-b border-white/[0.08] relative bg-charcoal-900/50 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-electric-glow rounded-full blur-[180px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 05 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // PEDIGREE & VERIFIED CREDENTIALS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            Academic Foundation.
            <br />
            <span className="bg-gradient-to-r from-electric-orange via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Verified Rigor.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Academic Pedigree Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-charcoal-850/90 border border-white/[0.1] relative overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-electric-orange/10 border border-electric-orange/30 flex items-center justify-center text-electric-orange shadow-[0_0_15px_rgba(255,85,0,0.2)]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne text-2xl sm:text-3xl font-black text-warm-white">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p className="font-mono text-xs text-warm-muted">{EDUCATION_DATA.location}</p>
                  </div>
                </div>

                <span className="font-mono text-xs text-electric-orange px-3 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/30 font-bold">
                  {EDUCATION_DATA.period}
                </span>
              </div>

              <div className="mb-6">
                <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block mb-1">
                  DEGREE & CONCENTRATION:
                </span>
                <p className="font-syne text-xl sm:text-2xl font-extrabold text-warm-cream">
                  {EDUCATION_DATA.degree}
                </p>
              </div>

              {/* CGPA Badge with Glowing Emerald Accent */}
              <div className="p-4 rounded-2xl bg-charcoal-950/80 border border-emerald-500/30 flex items-center justify-between mb-8 shadow-inner">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs text-warm-muted uppercase">ACADEMIC STANDING:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-emerald-400 font-bold">CUMULATIVE CGPA:</span>
                  <span className="font-mono text-lg font-black text-emerald-300 bg-emerald-500/15 px-3 py-0.5 rounded-lg border border-emerald-500/30">
                    {EDUCATION_DATA.cgpa}
                  </span>
                </div>
              </div>

              {/* Core Coursework */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block font-bold">
                  RIGOROUS TECHNICAL CONCENTRATIONS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.coursework.map((course) => (
                    <span
                      key={course}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-warm-cream"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-warm-dark">
              <span>B.TECH CSE (AI) 2023–2027</span>
              <span className="text-emerald-400 font-semibold">HONORS STANDING</span>
            </div>
          </motion.div>

          {/* Right Column: Download Resume Action Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-electric-orange/40 text-center flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-electric-glow rounded-full blur-[90px] pointer-events-none opacity-30" />

            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-electric-orange/15 border border-electric-orange/40 flex items-center justify-center text-electric-orange mx-auto shadow-[0_0_20px_rgba(255,85,0,0.3)] animate-bounce">
                <FileDown className="w-8 h-8" />
              </div>

              <h4 className="font-syne text-2xl sm:text-3xl font-black text-warm-white">
                Official Resume
              </h4>

              <p className="font-sans text-sm text-warm-muted leading-relaxed max-w-xs mx-auto">
                Comprehensive technical track record, verified internship deliverables, publications, and repository links.
              </p>

              <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/[0.08] text-left font-mono text-xs text-warm-cream space-y-1">
                <div className="flex justify-between">
                  <span className="text-warm-dark">FORMAT:</span>
                  <span className="text-electric-orange font-bold">PDF (OFFICIAL)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-dark">STATUS:</span>
                  <span className="text-emerald-400 font-bold">UPDATED OCT 2026</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08]">
              <Magnetic strength={0.3}>
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Mohan_Sri_Raghuram_resume.pdf"
                  onClick={() => sound.click()}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-electric-orange text-white font-mono text-xs sm:text-sm font-black tracking-wider hover:bg-electric-light transition-all shadow-xl shadow-electric-orange/30 cursor-pointer"
                  data-cursor-text="DOWNLOAD"
                >
                  <FileDown className="w-4 h-4" />
                  <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
