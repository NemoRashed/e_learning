/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c2410c',
        secondary: '#000000',
        dimOrange: '#ffedd5',
        dimWhite: 'rgba(255, 255, 255, 0.7)',

      },
    },
  },
  screens: {

  },

  plugins: [],
}
