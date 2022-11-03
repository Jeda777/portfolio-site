/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#d3d3d3",
        primary: "#2f2f2f",
        secondary: "#a833b9",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
