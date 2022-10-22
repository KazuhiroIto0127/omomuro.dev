/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontFamily:{
      mPlusRounded: ['\'M PLUS Rounded 1c\'', 'sans-serif']
    },
  },
  plugins: [],
}
