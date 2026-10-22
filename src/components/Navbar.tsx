import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Copy, Check, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail, copied }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "CAPABILITIES", href: "#capabilities", index: "02" },
    { label: "HOW I WORK", href: "#how-i-work", index: "03" },
    { label: "ARSENAL", href: "#arsenal", index: "04" },
    { label: "BEFORE/AFTER", href: "#contrast", index: "05" },
    { label: "SPRINT", href: "#sprint", index: "06" },
    { label: "RULES", href: "#rules", index: "07" },
    { label: "FAQ", href: "#faq", index: "09" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand & Year */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-1.5 text-lg sm:text-xl font-bold tracking-tight text-honey-bone hover:text-white transition-colors"
          >
            <span>raghuram</span>
            <span className="text-honey-accent group-hover:translate-x-0.5 transition-transform">—</span>
          </a>
          <span className="hidden sm:inline-block font-mono text-[11px] text-honey-muted border-l border-white/10 pl-4">
            ©{PERSONAL_INFO.copyrightYear}
          </span>
          <div className="hidden lg:flex items-center gap-2 pl-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] tracking-wider text-emerald-400/90 font-medium uppercase">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] tracking-wider text-honey-muted hover:text-honey-bone transition-colors py-1 flex items-center gap-1 group"
            >
              <span className="text-honey-darkMuted group-hover:text-honey-accent transition-colors">[{link.index}]</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Copy Email Button */}
          <button
            onClick={onCopyEmail}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-honey-bone text-xs font-mono tracking-wide transition-all"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-honey-muted" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>

          {/* Hire Me CTA Button */}
          <a
            href="#hire"
            className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-honey-bone text-[#09090b] font-mono text-xs sm:text-[13px] font-bold tracking-wider hover:bg-honey-accent hover:text-white transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-honey-muted hover:text-honey-bone hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-[#09090b]/98 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-emerald-400">
                {PERSONAL_INFO.status}
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wider text-honey-bone hover:text-honey-accent py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-honey-muted">[{link.index}]</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  onCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-xs font-mono text-honey-bone"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy {PERSONAL_INFO.email}</span>
              </button>
              <a
                href="#hire"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 rounded-lg bg-honey-accent text-white font-mono text-xs font-bold tracking-wider"
              >
                CONNECT DIRECTLY →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
