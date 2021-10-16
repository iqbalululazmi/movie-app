// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: {
        50: '#f3f8f9',
        100: '#daf1fa',
        200: '#afe0f5',
        300: '#7cc2e7',
        400: '#479ed3',
        500: '#357dc0',
        600: '#2d62a9',
        700: '#254a87',
        800: '#1b3260',
        900: '#101f3f',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
