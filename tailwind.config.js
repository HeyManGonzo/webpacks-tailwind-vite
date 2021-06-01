module.exports = {
  purge: ["./index.html",
          "./src/**/*.js",
          "./src/**/*.html",
          "./public/**/*.js",
          "./public/**/*.html"
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Comfortaa': ['Comfortaa', 'cursiv']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
