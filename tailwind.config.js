/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00DAC0',
        mistake1: '#FAEBEB',
        mistake2: '#E64646',
        'green-right': '#4BB34B',
      },
      spacing: {
        0.25: 1,
        15: 60,
        68: 272,
        18: 72,
        100: 400,
        104: 416,
        110: 440,
      },
    },
  },
  plugins: [],
};
