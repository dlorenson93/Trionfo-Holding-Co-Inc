import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', '-apple-system', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          900: '#0f172a',
        },
        trionfo: {
          primary: '#0F172A',      // Authority / Trust
          secondary: '#334155',    // Support / Typography
          accent: '#B89B5E',       // Muted Gold (discipline / status)
          bg: '#F8FAFC',           // Background
          card: '#FFFFFF',         // Card background
          border: '#E2E8F0',       // Neutral border
        },
      },
    },
  },
  plugins: [],
};
export default config;
