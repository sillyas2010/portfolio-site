/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        react: '#00d8ff',
        canary: {
          50: '#fcffe5',
          100: '#f5ffc7',
          200: '#ebff95',
          300: '#d9fe54',
          400: '#c6f526',
          500: '#a6db07',
          600: '#81b000',
          700: '#618506',
          800: '#4e690b',
          900: '#41580f',
          950: '#213102',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        bgLight: 'white',
        bgDark: '#020617',
      },
      content: {
        empty: '',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-poppins)'],
      },
      boxShadow: {
        avatar: 'inset 0 0 0 9px rgb(0, 0, 0)',
        navToggle: 'inset 0 0 0 1em, 0 -6px, 0 6px',
        navToggleActive: 'inset 0 0 0 1em',
      },
      height: {
        '50vh': '50vh',
      },
      maxWidth: {
        container: '80rem',
      },
      width: {
        container: '80rem',
      },
      animation: {
        avatar: 'avatar 6s ease-in-out infinite',
        typing:
          'typewriter 3.5s ease infinite, blinkTextCursor .5s ease infinite',
        scrollDown: 'scrollDown 1.5s ease-in-out infinite',
      },
      keyframes: {
        avatar: {
          '0%, 100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { 'border-radius': '45% 75% 85% 55%/65% 75% 45% 75%' },
        },
        typewriter: {
          '50%': { left: 0 },
          to: { left: '100%' },
        },
        blinkTextCursor: {
          from: {
            'border-left': '1px solid rgba(255,255,255,.75)',
          },
          to: { 'border-left-color': 'transparent' },
        },
        scrollDown: {
          '0%': {
            top: '44%',
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            top: '79.5%',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
      })
    }),
  ],
}
