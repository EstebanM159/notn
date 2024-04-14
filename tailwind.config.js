/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundImage:{
        "notFound":"url('/file-off.png')"
      },
    extend: {},
  },
  plugins: [],
}

