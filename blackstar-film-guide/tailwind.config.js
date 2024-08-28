/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myCustomFont: ["CustomFont", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
