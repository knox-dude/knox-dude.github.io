/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          '1': '#244855',
          '2': '#E64833',
          '3': '#874F41',
          '4': '#90AEAD',
          '5': '#FBE9D0',
        },
      }
    },
  },
  plugins: [],
};