/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        hind: ["Hind Madurai", "sans-serif"],
        rowdies: ["Rowdies", "cursive"],
        lobster: ["Lobster Two", "cursive"],
        crois: ["Croissant One", "cursive"],
      },
    },
  },
  plugins: [],
};
