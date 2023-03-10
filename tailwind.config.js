/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#141618"
    },
    screens: {
      'xs': '370px',
      'map-screen': '540px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        heroContent: 'heroContent 2s linear forwards 4s',
        carouselAutoSlide: 'carouselAutoSlide 60s linear infinite',
        scaleY: 'scaleY 1s linear forwards',
        fadeIn: 'fadeIn 1s linear forwards',
      },
      keyframes:{
        heroContent: {
          '0%': { opacity:0 },
          '100%': { opacity:1 }
        },
        carouselAutoSlide: {
          '0%': { left:"0%" },
          '100%': { left: "-250%" }
        },
        scaleY: {
          '0%': { transform: 'scaleY(0)', opacity:0 },
          '100%': { transform: 'scaleY(1)', opacity:1 },
        },
        scaleYRotateToRight: {
          '0%': { transform: 'scaleY(0) rotate(-90deg)', opacity:0 },
          '100%': { transform: 'scaleY(1) rotate(0deg)', opacity:1 },
        },
        fadeIn: {
          '0%': { opacity:0 },
          '100%': { opacity:1 },
        },
      },
    },
  },
  plugins: [],
}