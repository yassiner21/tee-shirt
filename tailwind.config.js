/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moroccan: {
          red: '#DC2626',
          green: '#059669',
          gold: '#D97706',
          blue: '#2563EB'
        }
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}