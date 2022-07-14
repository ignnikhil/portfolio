const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', ...defaultConfig.theme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
