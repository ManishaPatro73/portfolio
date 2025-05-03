/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#F1EFEC',
        secondaryColor: '#D4C9BE',
        tertiaryColor: '#123458',
        quaternaryColor: '#030303',
      },
    },
  },
  plugins: [],
}