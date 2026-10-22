import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string;
  submessage?: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, submessage, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#161619] border border-[#ff4820]/40 text-honey-bone px-5 py-4 rounded-xl shadow-2xl shadow-black/80 backdrop-blur-md animate-bounce-in transition-all">
      <div className="w-9 h-9 rounded-lg bg-[#ff4820]/10 border border-[#ff4820]/30 flex items-center justify-center text-[#ff4820] shrink-0">
        <Sparkles className="w-4 h-4" />
      </div>
      <div>
        <p className="font-mono text-xs font-semibold text-honey-bone tracking-wide">{message}</p>
        {submessage && (
          <p className="font-mono text-[10px] text-honey-muted mt-0.5">{submessage}</p>
        )}
      </div>
    </div>
  );
};
