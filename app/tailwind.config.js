/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        garamond: ['Garamond'],
      },
      width: {
        '30%': '30%',
      },
      colors: {
        'nasty-black': '#141619',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities({
        '.margin-left-right': {
          'margin-left': '3rem', // Equivalent to `ml-12`
          'margin-right': '3rem', // Equivalent to `mr-12`
        },
        '@screen lg': {
          '.margin-left-right': {
            'margin-left': '24rem', // Equivalent to `ml-96`
            'margin-right': '24rem', // Equivalent to `mr-96`
          },
        },
      })
    }),
  ],
  darkMode: 'class',
}
