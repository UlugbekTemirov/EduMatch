/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Clash",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      padding: {
        navbar: "55px",
      },
    },
  },
  plugins: [],
};
