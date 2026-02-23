import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // shu qatorda dark mode class bilan ishlaydi
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        greenDeep: '#1F3D2B',
        beigeLight: '#F5F2EB',
        goldAccent: '#C6A969'
      },
      fontFamily: {
        sans: ['Avenir Next', 'Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      boxShadow: {
        soft: '0 14px 44px rgba(31, 61, 43, 0.2)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;