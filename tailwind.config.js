/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorOne: '#F1EFEC',
        colorTwo: '#D4C9BE',
        colorThree: '#123458',
        colorFour: '#030303',
      },
    },
  },
  plugins: [],
}