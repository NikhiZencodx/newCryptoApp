/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: 'var(--lavender)',
        'cool-grey': 'var(--cool-grey)',
        mint: 'var(--mint)',
        'light-red': 'var(--light-red)',
        dark: 'var(--dark)',
        'raisin-black': 'var(--raisin-black)',
      },
      backgroundImage: {
        'veronica-gradient': 'linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-space-mono)'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}