/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { // CR == contrast ratio
        primary: { // brand primary, min 4:1 CR with white
          DEFAULT: '#93591A',
          light: '#BE7322', 
          dark: '#753E00', 
        },
        secondary: { // compliments primary, min 4:1 CR with white
          DEFAULT: '#1A5493',
          light: '#226DBE',
          dark: '#123B6A',
        },
        accent: { // contrasts primary & secondary, no text on top, most colors work
          DEFAULT: '#874EE4',
          light: '#B67FFF',
          dark: '#5D36A2', 
        },
        light: { // very light gray, backgrounds in light mode/text in dark mode
          DEFAULT: '#767676', 
          light: '#949494',   
          dark: '#585858', 
        },
        dark: { // very dark gray, backgrounds in dark mode/text in light mode
          DEFAULT: '#1A1A1A', 
          light: '#333333',   
          dark: '#000000', 
        },
        ui: { // small contrast with background, used for borders, dividers, etc
          DEFAULT: '#D3CCC8', 
          light: '#E8E4E2',  
          dark: '#B8B2B0', 
        },
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
  plugins: [],
};