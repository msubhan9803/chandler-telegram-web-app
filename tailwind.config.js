/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': '#d5df9b',
        'primary-light': '#687aff',
        'primary-dark': '#0027a5',
        'secondary-main': '#ee977f',
        'secondary-light': '#abdaff',
        'secondary-dark': '#3e7ac7',
      }
    },
  },
  plugins: [],
}
