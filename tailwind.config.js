/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
        damn : ['Montserrat','sans-serif'] 
      }
    },
  },
  plugins: [],
}

