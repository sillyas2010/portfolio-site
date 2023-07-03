/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dotted-pattern': 'url("/background-pattern.svg")',
        'header-background': 'linear-gradient(180deg, rgba(217, 254, 84, 0.3) 0%, rgba(217, 254, 84, 0) 50%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
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
      },
      fontFamily: {
				sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-poppins)"],
			},
      height: {
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
}
