/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c8a96e',
        dark: '#0a0a0a',
        'dark-2': '#111111',
        'dark-3': '#1a1a1a',
      },
      fontFamily: {
        heading: ['var(--font-bebas)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
