/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0B0B0B', // Dark background
        secondaryText: '#666666', // Secondary text color
        light : "#D7D7D7"
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
    backgroundImage: {
      'custom-radial': 'linear-gradient(0deg, #FFFFFF, #FFFFFF),radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%)',
    },
    
  },
  plugins: [],
}

