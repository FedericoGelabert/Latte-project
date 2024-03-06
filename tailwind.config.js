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
    screens: {
      '3xl': '1850px',
      '2xl': '1536px',
      '1.5xl': '1440px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '525px',
      'xs': '425px'
    }
  },
  plugins: [],
}

