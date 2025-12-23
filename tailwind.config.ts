import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C2D57',
        secondary: '#2D5BFF',
        neutral: {
          900: '#0F172A',
          800: '#1E293B',
          600: '#475569',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F8FAFC'
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444'
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-poppins)', ...fontFamily.sans]
      },
      boxShadow: {
        card: '0 10px 40px rgba(12, 45, 87, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(12,45,87,0.9), rgba(45,91,255,0.7))'
      }
    }
  },
  plugins: []
};

export default config;
