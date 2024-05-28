/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,tsx}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      primary: '#e2e8f0',
      secondary: '#4a5568',
      tertiary: '#2d3748',
      quaternary: '#1a202c',
    },
  },
};
export const mode = 'jit';
export const plugins = [];