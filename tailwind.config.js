/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#ff0000',
      },
      minWidth: {
        "150px": "150px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

