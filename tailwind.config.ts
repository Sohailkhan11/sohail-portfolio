import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#14110f', cream: '#fbf7ef', coral: '#ff5a36', blue: '#2f5bff', lemon: '#ffd23f', mint: '#43e0b4', sky: '#bfe3ff', lilac: '#c9b6ff' },
    fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], display: ['var(--font-space)', 'system-ui', 'sans-serif'], serif: ['var(--font-serif)', 'Georgia', 'serif'] },
  } },
  plugins: [],
};
export default config;
