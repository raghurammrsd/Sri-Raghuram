import React from 'react';
import { Sparkles } from 'lucide-react';

interface ToastProps {
  message: string;
  submessage?: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, submessage, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-charcoal-850/95 border border-electric-orange/40 text-warm-white px-5 py-4 rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-xl animate-in slide-in-from-bottom-2 transition-all">
      <div className="w-9 h-9 rounded-xl bg-electric-orange/15 border border-electric-orange/30 flex items-center justify-center text-electric-orange shrink-0">
        <Sparkles className="w-4 h-4" />
      </div>
      <div>
        <p className="font-mono text-xs font-semibold text-warm-white tracking-wide">{message}</p>
        {submessage && (
          <p className="font-mono text-[10px] text-warm-muted mt-0.5">{submessage}</p>
        )}
      </div>
    </div>
  );
};
