/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
     colors: {
      'blue': '#D6E2F0',
      'white': '#fff',
      'dark-blue': '#536afd',
      'dark-gray': '#303234',
      'light-gray': '#999',
    },
    fontSize: {
      'p-size': '15px',
      'p-sm':'12px',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    screens: {
      'sm': '375px',
      'md': '1440px',
    },
    fontFamily: {
      'default': 'https://fonts.google.com/specimen/Outfit',
    },
    extend: {},
   
  },
  plugins: [
     require('tailwindcss'),
    require('autoprefixer'),
  ],
}

