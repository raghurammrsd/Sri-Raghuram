import React, { useState } from 'react';
import { PERSONAL_INFO } from './data/portfolioData';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { LivingAmbientCanvas } from './components/canvas/LivingAmbientCanvas';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { AreasOfExpertise } from './components/sections/AreasOfExpertise';
import { Story } from './components/sections/Story';
import { InternshipHighlights } from './components/sections/InternshipHighlights';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/ui/Footer';
import { Toast } from './components/Toast';

export function App() {
  useSmoothScroll();

  const [toastMessage, setToastMessage] = useState('');
  const [toastSub, setToastSub] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [pipCopied, setPipCopied] = useState(false);

  const showToast = (msg: string, sub?: string) => {
    setToastMessage(msg);
    setToastSub(sub || '');
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    showToast(
      "COPIED TO CLIPBOARD",
      `${PERSONAL_INFO.email} is ready to paste into your mail app.`
    );
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const handleCopyPip = () => {
    navigator.clipboard.writeText("pip install codegraph-mcp");
    setPipCopied(true);
    showToast(
      "TERMINAL COMMAND COPIED",
      "Run 'pip install codegraph-mcp' in your environment."
    );
    setTimeout(() => setPipCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-warm-white font-sans selection:bg-electric-orange selection:text-charcoal-950 relative">
      {/* Zero-Lag Hardware-Accelerated Custom Cursor */}
      <CustomCursor />

      {/* Living Volumetric Ambient Canvas & Particle Depth */}
      <LivingAmbientCanvas />

      {/* Luxury Minimalist Header */}
      <Navbar />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Hero Experience (Image 2 style) */}
        <Hero onCopyPip={handleCopyPip} pipCopied={pipCopied} />

        {/* 2. 3D Chromatic Plasma Ring & Areas of Expertise (Image 1 & Image 3 style) */}
        <AreasOfExpertise />

        {/* 3. Story & Philosophy Manifesto */}
        <Story />

        {/* 4. Production Internship Systems (Graph-One 600+ sources, LLM extraction) */}
        <InternshipHighlights />

        {/* 5. Flagship Verified Projects (CodeGraph MCP, AI App Compiler, DUNDOO, RealMockAI) */}
        <Projects />

        {/* 6. Technical Skills Matrix */}
        <Skills />

        {/* 7. Academic Pedigree (Parul University CGPA 8.21 & Official Resume Download) */}
        <Experience />

        {/* 8. Contact & Transmission Experience */}
        <Contact onCopyEmail={handleCopyEmail} copied={emailCopied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Action Toast Feedback */}
      <Toast message={toastMessage} submessage={toastSub} visible={toastVisible} />
    </div>
  );
}

export default App;
