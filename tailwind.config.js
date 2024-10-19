/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    screens:{
     'sm': '320px',
     'md':'640px',
     'lg': '1024px',
     'xlg': '1280px',
    }
  },
  plugins: [],
}

