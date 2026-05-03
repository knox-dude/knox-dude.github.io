/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          light: '#818cf8',   // indigo-400
          dark: '#4f46e5',    // indigo-600
        },
        secondary: {
          DEFAULT: '#f59e0b', // amber-500
          light: '#fbbf24',   // amber-400
          dark: '#d97706',    // amber-600
        },
        accent: {
          DEFAULT: '#14b8a6', // teal-500
          light: '#2dd4bf',   // teal-400
          dark: '#0d9488',    // teal-600
        },
        light: {
          DEFAULT: '#fafafa',
          light: '#ffffff',
          dark: '#f0f0f5',
        },
        dark: {
          DEFAULT: '#0a0f1e',
          light: '#111827',
          dark: '#050a14',
        },
        ui: {
          DEFAULT: '#e5e7eb',
          light: '#f3f4f6',
          dark: '#374151',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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