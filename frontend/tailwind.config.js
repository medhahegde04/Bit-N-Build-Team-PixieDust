/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-white": "#FFFFFF",
        "brand-light": "#A1DCF7",
        "brand-sky": "#6AAEDC",
        "brand-medium": "#386FA4",
        "brand-navy": "#1D3461",
      },
    },
  },
  plugins: [],
};
