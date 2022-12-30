/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        primary: "#28283D",
        secondary: "#87879D",
        darkAqua: "#4D96A9",
        darkPurple: "#855FB1",
        lightAqua: "#8FE3F9",
        lightPurple: "#D9B8FF",
        shadeWhite: "#FAFAFA",
        hoverAqua: "#71C0D4",
        hoverPurple: "#B18BDD",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
