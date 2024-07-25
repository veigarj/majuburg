/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      background:{
        "home": "url('/assets/banner.mp4')"
      }
    },
  },
  plugins: [],
}

