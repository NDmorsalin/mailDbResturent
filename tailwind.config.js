/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      cursive: ['Oleo Script', 'cursive'],
      quicksand: ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}