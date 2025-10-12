import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#a17713',
          50: '#fdfbf7',
          100: '#f9f3e5',
          200: '#f0e2bc',
          300: '#e5cc8d',
          400: '#d4b05e',
          500: '#a17713',
          600: '#8a6310',
          700: '#6e4e0d',
          800: '#523a0a',
          900: '#362607',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

export default config;
