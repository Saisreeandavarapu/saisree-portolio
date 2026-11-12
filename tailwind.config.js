/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        canvas: '#0B0B0C',
        surface: '#121214',
        'surface-elevated': '#18181B',
        ink: '#F3F0E8',
        'ink-muted': '#A19D94',
        'ink-subtle': '#6B6860',
        accent: '#D4A373',
        'accent-muted': '#B58456',
      },
      borderColor: {
        hairline: 'rgba(243, 240, 232, 0.11)',
        'hairline-strong': 'rgba(243, 240, 232, 0.22)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

