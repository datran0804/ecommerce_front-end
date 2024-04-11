/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      black: '#1E2832',
      regalblue: '#FF5733',
      primayBG: '#1e28320d'
      },
      fontFamily: {
        'primary': ['Roboto','sans-serif'],
      },
    },
  },
  plugins: [],
}

