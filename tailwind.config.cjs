const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimaryOrange: "hsl(25, 97%, 53%)",
        bgNeutralWhite: "hsl(0, 0%, 100%)",
        bgNeutralLightGrey: "hsl(217, 12%, 63%)",
        bgNeutralMediumGrey: "hsl(216, 12%, 54%)",
        bgNeutralDarkBlue: "hsl(213, 19%, 18%)",
        bgNeutralVeryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        Overpass: ['"Overpass"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "icon-star": "url('../img/icon-star.svg')",
        "illu-thankyou": "url('../img/illustration-thank-you.svg')",
      },
    },
  },
  plugins: [],
};
