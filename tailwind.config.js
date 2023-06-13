/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': '#d5df9b',
        'primary-light': '#E3E8C2',
        'primary-dark': '#C4D17B',
        'secondary-main': '#ee977f',
        'secondary-light': '#F5B9A8',
        'secondary-dark': '#E3795B',
        'custom-blue': '#0a4074',
        'custom-second-blue': '#1e69a0',
        'background-dark': '#1c1c1c'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
  ],
}
