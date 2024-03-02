/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens : {
      mobile : '284px',
      tablet : '384px',
      laptop : '484px'
    },
    extend: {},
  },
  plugins: [],
}