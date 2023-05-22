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
        shadowColor:"#ebebeb",
        borderColor:"#E6E6E6",
        grayTextColor:"#333333",
        hoverButton:"#ff8b39",
      }, 
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  plugins: [],
}

