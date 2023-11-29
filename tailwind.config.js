/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      backgroundColor: {
        'black-b1': 'rgba(0,0,0,0.7)'
      },
      colors: {
        'latte-gray': 'rgba(220, 213, 213, 0.649)'
      }
    },
  },
  plugins: [],
}

