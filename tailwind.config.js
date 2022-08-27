/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./underconstruction.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["valentine"]
  }
}
