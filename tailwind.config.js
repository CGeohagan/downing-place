/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: '#b84a55',
        lightgreen: '#c0dbba',
        darkgreen: '#63775e',
        current: 'currentColor',
      },
      width: {
        '40vw': '40vw',
        '75vw': '75vw',
      },
      inset: {
        neg40vw: '-40vw',
        neg75vw: '-75vw',
      },
      translate: {
        neg100: '-100%',
      },
    },
  },
  plugins: [],
};
