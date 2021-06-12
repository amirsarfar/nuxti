const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        sky: colors.lightBlue,
        lime: colors.lime,
        teal: colors.teal,
        orange: colors.orange,
        pink: colors.pink,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
