/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('./src/app/constants/colors')

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
        ...colors.default,
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
