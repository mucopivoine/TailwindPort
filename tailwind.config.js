/** @type {import('tailwindcss').Config} */




const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "sm":"480px",
      colors:{
        primary:{
          50:'#191718'
        }
      }
    },
    spacing:{
      "big":"48rem"
    }
  },
  screens:{
    sm:"480px",
    md:"768px",
    lg:"1024px",
    xl:"1280px",
  },
  plugins: [],
}
