/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
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
        '29%': '29%',
        '31%': '31%',
        '49%': '49%',
      },
      colors: {
        'nasty-black': '#141619',
      },
    },
    screens: {
      xsm: '360px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities({
        '.margin-left-right': {
          'margin-left': '4rem', // Equivalent to `ml-12`
          'margin-right': '4rem', // Equivalent to `mr-12`
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
