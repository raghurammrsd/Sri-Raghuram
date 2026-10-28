import React from 'react';

/**
 * Ultra-Lightweight Zero-Lag Background for the entire website.
 * Features 2 simple light brown nerve lines with COMPLETELY DIFFERENT motion and frequencies.
 * 100% hardware-accelerated CSS compositor — ZERO WebGL, ZERO CPU overhead, ZERO battery drain!
 */
export const LivingAmbientCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#f5efe1]">
      <style>{`
        /* Nerve Line 1: Long, sweeping slow forward wave with subtle vertical breathing */
        @keyframes freqMotionOne {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-480px, 14px, 0);
          }
          100% {
            transform: translate3d(-960px, 0, 0);
          }
        }

        /* Nerve Line 2: Shorter-wavelength, counter-flowing slow reverse wave with antiphase sway */
        @keyframes freqMotionTwo {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-320px, -18px, 0);
          }
          100% {
            transform: translate3d(-640px, 0, 0);
          }
        }

        .freq-nerve-one {
          animation: freqMotionOne 46s linear infinite;
          will-change: transform;
        }

        .freq-nerve-two {
          animation: freqMotionTwo 68s linear infinite reverse;
          will-change: transform;
        }
      `}</style>

      {/* Subtle Precision Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,164,124,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,164,124,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-70" />

      {/* Nerve Line 1: Upper Neural Frequency Wave (Wide 960px wavelength, 46s forward drift) */}
      <div className="absolute top-0 left-0 w-[3840px] h-full pointer-events-none freq-nerve-one">
        <svg
          className="w-full h-full"
          viewBox="0 0 3840 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="nerveBrownGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bfa074" stopOpacity="0.5" />
              <stop offset="25%" stopColor="#c4a47c" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#d4be9c" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#c4a47c" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#bfa074" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* 4 consecutive 960px wide harmonic neural cycles */}
          <path
            d="
              M 0 240
              C 160 140, 320 140, 480 240
              C 640 340, 800 340, 960 240
              C 1120 140, 1280 140, 1440 240
              C 1600 340, 1760 340, 1920 240
              C 2080 140, 2240 140, 2400 240
              C 2560 340, 2720 340, 2880 240
              C 3040 140, 3200 140, 3360 240
              C 3520 340, 3680 340, 3840 240
            "
            stroke="url(#nerveBrownGrad1)"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      </div>

      {/* Nerve Line 2: Lower Neural Frequency Wave (Tighter 640px wavelength, 68s counter-drift) */}
      <div className="absolute top-0 left-0 w-[3840px] h-full pointer-events-none freq-nerve-two">
        <svg
          className="w-full h-full"
          viewBox="0 0 3840 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="nerveBrownGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a88960" stopOpacity="0.45" />
              <stop offset="25%" stopColor="#c4a47c" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#bfa074" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#c4a47c" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a88960" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* 6 consecutive 640px wide harmonic neural cycles with distinct frequency & phase */}
          <path
            d="
              M 0 660
              C 110 740, 210 740, 320 660
              C 430 580, 530 580, 640 660
              C 750 740, 850 740, 960 660
              C 1070 580, 1170 580, 1280 660
              C 1390 740, 1490 740, 1600 660
              C 1710 580, 1810 580, 1920 660
              C 2030 740, 2130 740, 2240 660
              C 2350 580, 2450 580, 2560 660
              C 2670 740, 2770 740, 2880 660
              C 2990 580, 3090 580, 3200 660
              C 3310 740, 3410 740, 3520 660
              C 3630 580, 3730 580, 3840 660
            "
            stroke="url(#nerveBrownGrad2)"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
