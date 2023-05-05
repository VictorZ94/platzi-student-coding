/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        }
      },
      // custom platzi course
      "backgroundImage": {
        'sanFrancisco': 'url("./public/img/sanFrancisco.jpg")',
        'sanFranciscoDesktop': 'url("../img/sanFranciscoDesktop.jpg")',
        'yosemite': 'url("../img/yosemite.jpg")',
        'LA': 'url("../img/LA.jpg")',
        'seattle': 'url("../img/seattle.jpg")',
        'new_york': 'url("../img/new_york.jpg")',
        'norway': 'url("../img/norway.jpg")',
        'sydney': 'url("../img/sydney.jpg")',
        'miami': 'url("../img/miami.jpg")',
        'switzerland': 'url("../img/switzerland.jpg")',
        'bali': 'url("../img/bali.jpg")',
        'chicago': 'url("../img/chicago.jpg")',
        'europe': 'url("../img/europe.jpg")',
        'iceland': 'url("../img/iceland.jpg")',
      },
      'backgroundColor': theme => ({
        ...theme("colors"),
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "terciary": "#61AEC9",
      }),
      "textColor": {
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "terciary": "#61AEC9",
      },
      ringColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
}
