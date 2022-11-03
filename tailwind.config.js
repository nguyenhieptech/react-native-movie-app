/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00DAC0',
        mistake1: '#FAEBEB',
        mistake2: '#E64646',
        right: '#4BB34B',
      },
      spacing: {
        15: 60,
      },
    },
  },
  plugins: [],
};
