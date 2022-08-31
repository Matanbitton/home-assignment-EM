/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./dist/*.html"],

  theme: {
    extend: {
      screens: {
        mobile: { min: "0px", max: "720px" },

        tablet: { min: "720px", max: "1074px" },

        desktop: { min: "1074px", max: "100vw" },
      },
      backgroundImage: {
        "tv-icon": "url('./tv.jpg')",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        MyFont: ['"My Font"', "serif"],
      },
    },
  },
  plugins: [],
};
