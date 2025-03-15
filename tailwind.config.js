/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: '#b982ff',
        'cool-grey': '#babcd0',
        mint: '#0dbb7c',
        'light-red': '#ff8282',
        dark: '#1b1b1b',
        'raisin-black': '#1a1b23',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      }
    }
  },
  plugins: [],
}