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
        bg: {
          DEFAULT: 'var(--bg)',
          2: 'var(--bg-2)',
          3: 'var(--bg-3)',
          4: 'var(--bg-4)',
          5: 'var(--bg-5)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          2: 'var(--gold-2)',
          3: 'var(--gold-3)',
          dim: 'var(--gold-dim)',
          border: 'var(--gold-border)',
        },
        teal: {
          DEFAULT: 'var(--teal)',
          2: 'var(--teal-2)',
          dim: 'var(--teal-dim)',
        },
        text: {
          DEFAULT: 'var(--text)',
          2: 'var(--text-2)',
          3: 'var(--text-3)',
          4: 'var(--text-4)',
        },
        purple: {
          DEFAULT: 'var(--purple)',
          2: 'var(--purple-2)',
          dim: 'var(--purple-dim)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        body: ['var(--font-body)', 'Outfit', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Amiri', 'serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      fontSize: {
        '4.5xl': ['2.625rem', { lineHeight: '1.15' }],
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [],
};
export default config;
