const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-2": "#2a2a2a",
        primaryDark: "#2a2a2a", // Dark background
        brand: "#E6C9A8",
        secondaryText: "#666666", // Secondary text color
        light: "#D7D7D7",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    backgroundImage: {
      "custom-radial":
        "linear-gradient(0deg, #FFFFFF, #FFFFFF),radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%)",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
