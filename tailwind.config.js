/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#070709',
          900: '#0a0a0d',
          850: '#0e0e13',
          800: '#14141a',
          700: '#1c1c24',
          600: '#282834',
        },
        warm: {
          white: '#f5f2eb',
          cream: '#e8e4dc',
          muted: '#8e8a82',
          dark: '#524e47',
        },
        electric: {
          orange: '#ff5500',
          glow: 'rgba(255, 85, 0, 0.28)',
          light: '#ff7728',
          deep: '#e04800',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', '"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        widest: '0.15em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
