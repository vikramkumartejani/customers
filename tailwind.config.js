/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibmplexsans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      boxShadow:{
        custom: '0px 4px 20px 0px #12121214'
      }
    },
  },
  plugins: [],
}