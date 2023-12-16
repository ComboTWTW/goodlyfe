/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPink: "#E43071",
        lightPink: "#FFC1D8",
      }
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    }
  },
  plugins: [],
}