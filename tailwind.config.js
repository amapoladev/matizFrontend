/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueLight': '#EDF0FF',
        'blue': '#0025CE',
        'green': '#00BF63',
      },
      spacing:{
        'custom': '-12'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
}

