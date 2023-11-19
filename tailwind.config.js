/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "320px",
      },

      boxShadow: {
        pinkShadow: "0 2px 50px -15px rgba(255, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
