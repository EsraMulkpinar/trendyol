/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#F27A1A",
        grayColor:"#f3f3f3",
        backgroundBlack:"#1b1b1b",
        grayBgColor:"#2D2D2D",
      }
    },
  },
  plugins: [],
}

