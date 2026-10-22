import React, { useState } from 'react';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { HowIWork } from './components/HowIWork';
import { Arsenal } from './components/Arsenal';
import { BeforeAfter } from './components/BeforeAfter';
import { SprintEngine } from './components/SprintEngine';
import { PoolRules } from './components/PoolRules';
import { SecretWeapon } from './components/SecretWeapon';
import { FAQ } from './components/FAQ';
import { HireCTA } from './components/HireCTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastSub, setToastSub] = useState<string>('');
  const [toastVisible, setToastVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [pipCopied, setPipCopied] = useState(false);

  const triggerToast = (msg: string, sub?: string) => {
    setToastMessage(msg);
    setToastSub(sub || '');
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    triggerToast(
      "COPIED TO CLIPBOARD",
      `${PERSONAL_INFO.email} is ready to paste into your mail app.`
    );
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const handleCopyPip = () => {
    navigator.clipboard.writeText("pip install codegraph-mcp");
    setPipCopied(true);
    triggerToast(
      "TERMINAL COMMAND COPIED",
      "Run 'pip install codegraph-mcp' in your environment."
    );
    setTimeout(() => setPipCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-honey-bg text-honey-bone font-sans selection:bg-honey-accent selection:text-honey-bg relative">
      {/* Sticky Navigation */}
      <Navbar onCopyEmail={handleCopyEmail} copied={emailCopied} />

      {/* Main Content Sections (01 to 10) */}
      <main>
        <div id="hero">
          <Hero onCopyPip={handleCopyPip} pipCopied={pipCopied} />
        </div>

        <Capabilities />
        <HowIWork />
        <Arsenal />
        <BeforeAfter />
        <SprintEngine />
        <PoolRules />
        <div id="secret">
          <SecretWeapon />
        </div>
        <FAQ />
        <HireCTA onCopyEmail={handleCopyEmail} copied={emailCopied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Section Index Indicator [ 01 / 09 ] */}
      <ScrollProgress />

      {/* Feedback Toast */}
      <Toast message={toastMessage} submessage={toastSub} visible={toastVisible} />
    </div>
  );
}

export default App;
