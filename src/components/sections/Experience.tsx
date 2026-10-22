import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { FileDown, GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 04 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // EXPERIENCE & PEDIGREE
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-warm-white uppercase leading-[0.98]">
            Practical Track Record.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block font-bold mb-4">
              // PROFESSIONAL ROLES & INTERNSHIPS
            </span>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-charcoal-850/70 border border-white/[0.08] relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-2xl font-bold text-warm-white">{exp.role}</h3>
                    <p className="font-mono text-sm text-electric-orange font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-warm-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-warm-dark" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-warm-dark" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-warm-muted leading-relaxed">
                      <span className="text-electric-orange mt-1">✦</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-warm-cream"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education & Resume Card */}
          <div className="lg:col-span-4 space-y-8">
            {/* Education Card */}
            <div>
              <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block font-bold mb-4">
                // ACADEMIC FOUNDATION
              </span>
              <div className="p-8 rounded-3xl bg-charcoal-850/70 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="w-6 h-6 text-electric-orange" />
                  <span className="font-mono text-xs text-warm-muted">{EDUCATION_DATA.period}</span>
                </div>
                <h4 className="text-xl font-bold text-warm-white mb-1">
                  {EDUCATION_DATA.institution}
                </h4>
                <p className="font-mono text-xs text-warm-muted mb-4">{EDUCATION_DATA.location}</p>

                <p className="text-sm font-semibold text-warm-cream mb-4">
                  {EDUCATION_DATA.degree}
                </p>

                <div className="p-3 rounded-xl bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between font-mono text-xs mb-6">
                  <span className="text-warm-muted">CUMULATIVE CGPA:</span>
                  <span className="text-electric-orange font-bold">{EDUCATION_DATA.cgpa}</span>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] text-warm-dark uppercase tracking-wider block">
                    KEY RIGOR:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {EDUCATION_DATA.coursework.map((course) => (
                      <span
                        key={course}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-warm-muted"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Card */}
            <div>
              <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block font-bold mb-4">
                // VERIFIED CREDENTIALS
              </span>
              <div className="p-8 rounded-3xl bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-electric-orange/30 text-center space-y-4 shadow-xl">
                <FileDown className="w-10 h-10 text-electric-orange mx-auto animate-pulse" />
                <h4 className="text-xl font-bold text-warm-white">Official Resume</h4>
                <p className="font-mono text-xs text-warm-muted">
                  Detailed technical track record, verified experiences, and repository links.
                </p>
                <div className="pt-2">
                  <Magnetic strength={0.3}>
                    <a
                      href={PERSONAL_INFO.resumePdf}
                      download="Mohan_Sri_Raghuram_resume.pdf"
                      onClick={() => sound.click()}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-orange text-white font-mono text-xs font-bold tracking-wider hover:opacity-95 transition-opacity shadow-lg"
                      data-cursor-text="PDF"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>DOWNLOAD RESUME (PDF)</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
