module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          "400": "#0a0a0a",
          "300": "#0f0f0f",
          "200": "#1c1c1c",
          "100": "#1c1c1c",
          "red": "#38100d",
          "blue": "#0d1e38",
          "yellow": "#40371a"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}