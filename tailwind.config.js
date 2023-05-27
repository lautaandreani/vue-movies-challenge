/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soft_gray: '#222',
        card_gray: '#1f2021',
        brand: {
          green: '#41b883',
          gray: '#35495e'
        }
      },
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'custom_grid': 'repeat(7, minmax(200px, 500px))'
        }
    },
  },
  plugins: [],
}