/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ corrected
  content: ['./src/*.html'],
  theme: {
    extend: {
      spacing: {
        big: "48rem",
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    }
  },
  plugins: [],
}
