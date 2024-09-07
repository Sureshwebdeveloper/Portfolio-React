/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'gradient-circle': 'gradient-circle 10s ease infinite',
          'fade-in': 'fade-in 1s ease-in-out',
        },
        keyframes: {
          'gradient-circle': {
            '0%, 100%': { 'background-position': '50% 0%' },
            '50%': { 'background-position': '50% 100%' },
          },
          'fade-in': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  }
  
