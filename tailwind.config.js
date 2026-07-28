/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral ramp. One flat page colour, a raised surface, two border steps.
        ink: {
          950: '#0B0B0D',
          900: '#121216',
          850: '#17171C',
          800: '#1E1E24',
          700: '#2B2B33',
          600: '#3C3C46',
        },
        // Off-white for inverted surfaces; pure white is reserved for text.
        bone: '#EDEAE4',
        // One flat colour per pack, matched in value so they read as a set.
        pack: {
          classique: '#2F4FE0',
          defis: '#0E8A5F',
          hot: '#C3286B',
          hardcore: '#D2401E',
          perso: '#6B4FD8',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        label: '0.18em',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 180ms ease-out',
      },
    },
  },
  plugins: [],
}
