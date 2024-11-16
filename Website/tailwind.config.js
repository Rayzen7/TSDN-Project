/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        green: '#A3DA8D',
        orange: '#FFDE4D',
        greenHover: '#8BBC78',
      }
    },
  },
  plugins: [],
}