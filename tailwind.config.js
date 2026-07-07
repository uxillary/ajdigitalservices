/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16303b',
        sea: '#0f766e',
        cream: '#fff8ed',
        skysoft: '#e6f4f1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(22, 48, 59, 0.12)',
      },
    },
  },
  plugins: [],
}
