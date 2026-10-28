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
          950: '#f5efe1', // Canvas Background (User Palette Band 3: Light Ivory Cream)
          900: '#ffffff', // Card Surfaces (Pure Crisp White)
          850: '#fbf8f2', // Card Inner Surfaces (Soft Tinted Ivory)
          800: '#e5d3af', // Warm Sand Tan (User Palette Band 2)
          700: '#aec4d4', // Soft Slate Fog (User Palette Band 4)
          600: '#790d16', // Deep Burgundy Wine (User Palette Band 1)
        },
        warm: {
          white: '#000000', // Pure Solid Black for Headings, Titles, Hero Text (Crisp & High Contrast)
          cream: '#1a1a1a', // Deep Near-Black for Subtitles & Emphasized Text
          muted: '#2d2d30', // Solid Dark Charcoal for Paragraphs & Descriptions (NOT Pale!)
          dark: '#4a4a50',  // Dark Slate Charcoal for Meta, Footnotes & Tickers
        },
        electric: {
          orange: '#790d16', // Primary Accent (User Palette Band 1: Deep Burgundy Wine)
          glow: 'rgba(121, 13, 22, 0.25)',
          light: '#9b1520',  // Rich Crimson Wine
          deep: '#5c0910',   // Deep Oxblood
          burgundy: '#790d16',
          sand: '#e5d3af',   // Warm Sand Tan (User Palette Band 2)
          cream: '#f5efe1',  // Ivory Cream (User Palette Band 3)
          slate: '#aec4d4',  // Soft Slate Blue (User Palette Band 4)
          accent: '#790d16',
        }
      },
      fontFamily: {
        syne: ['"Plus Jakarta Sans"', '"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
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
