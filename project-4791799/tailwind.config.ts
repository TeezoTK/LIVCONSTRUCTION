import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e293b', // slate-800 - Main dark color
          light: '#334155',   // slate-700
          dark: '#0f172a',    // slate-900
        },
        accent: {
          DEFAULT: '#f8fafc', // slate-50 - Light accent
          dark: '#e2e8f0',    // slate-200
        },
        neutral: {
          DEFAULT: '#64748b', // slate-500 - Text/borders
          light: '#94a3b8',   // slate-400
          dark: '#475569',    // slate-600
        }
      }
    },
  },
  plugins: [],
} satisfies Config
