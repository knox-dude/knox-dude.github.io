/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { // CR == contrast ratio
        primary: { // brand primary, min 4:1 CR with white
          DEFAULT: '#8b541b',
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
          DEFAULT: '#f2f2f2', 
          light: '#fdfdf2',   
          dark: '#cfd6dd', 
        },
        dark: { // very dark gray, backgrounds in dark mode/text in light mode
          DEFAULT:'#1e293b', 
          light: '#334155',
          dark: '#0f172a'
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
        '1/6': '16.66666%',
      },
      aspectRatio: {
        '3/2': '3 / 2'
      },
      backgroundImage: {
        'waves-svg-dark': "url('/about-page-bg-dark.svg')",
        'waves-svg-light': "url('/about-page-bg-light.svg')",
      },
      keyframes: {
        bounceIn: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.7,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
      animation: {
        bounceIn: 'bounceIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};